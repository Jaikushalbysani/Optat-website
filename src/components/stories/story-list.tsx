"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface Story {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  created_at: string;
  comments?: Comment[];
}

interface Comment {
  id: number;
  story_id: number;
  content: string;
  author: string;
  created_at: string;
}

export function StoryList() {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newStory, setNewStory] = useState({ title: '', content: '', author: '' });
  const [showForm, setShowForm] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/stories')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch stories');
        return res.json();
      })
      .then((data) => {
        setStories(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddStory = async () => {
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStory),
      });
      if (!res.ok) throw new Error('Failed to add story');
      const data = await res.json();
      setStories([data, ...stories]);
      setNewStory({ title: '', content: '', author: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding story:', error);
    }
  };

  const handleLike = async (id: number) => {
    try {
      const res = await fetch(`/api/stories/${id}/like`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to like story');
      setStories((prev) =>
        prev.map((s) => (s.id === id ? { ...s, likes: s.likes + 1 } : s))
      );
    } catch (error) {
      console.error('Error liking story:', error);
    }
  };

  const handleComment = async (storyId: number) => {
    try {
      const commentRes = await fetch(`/api/stories/${storyId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment, author: 'Anonymous' }),
      });
      if (!commentRes.ok) throw new Error('Failed to add comment');

      const getRes = await fetch(`/api/stories/${storyId}/comment`);
      if (!getRes.ok) throw new Error('Failed to fetch comments');
      const updatedComments = await getRes.json();

      setStories((prev) =>
        prev.map((s) => (s.id === storyId ? { ...s, comments: updatedComments } : s))
      );
      setNewComment('');
    } catch (error) {
      console.error('Error handling comment:', error);
    }
  };

  const toggleComments = async (story: Story) => {
    if (expandedStory === story.id) {
      setExpandedStory(null);
    } else {
      const res = await fetch(`/api/stories/${story.id}/comment`);
      const comments = await res.json();
      setStories((prev) =>
        prev.map((s) => (s.id === story.id ? { ...s, comments } : s))
      );
      setExpandedStory(story.id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button size="sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Story'}
        </Button>
      </div>

      {showForm && (
        <div className="bg-muted p-6 rounded-lg space-y-4 shadow">
          <input
            placeholder="Title"
            value={newStory.title}
            onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Content"
            value={newStory.content}
            onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
            className="w-full border p-2 rounded"
            rows={4}
          />
          <input
            placeholder="Author"
            value={newStory.author}
            onChange={(e) => setNewStory({ ...newStory, author: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <Button onClick={handleAddStory}>Submit</Button>
        </div>
      )}

      {stories.map((story) => (
        <div key={story.id} className="bg-card p-6 rounded-lg shadow-md space-y-3">
          <h2 className="text-xl font-bold">{story.title}</h2>
          <p className="text-sm text-muted-foreground">
            By {story.author} • {new Date(story.created_at).toLocaleDateString()}
          </p>
          <p>{story.content}</p>
          <div className="flex gap-4 mt-2">
            <Button size="sm" variant="ghost" onClick={() => handleLike(story.id)}>
              ❤️ {story.likes}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => toggleComments(story)}>
              {expandedStory === story.id ? 'Hide Comments' : 'View Comments'}
            </Button>
          </div>

          {expandedStory === story.id && (
            <div className="space-y-2 mt-3">
              {story.comments?.map((comment) => (
                <div key={comment.id} className="bg-muted p-2 rounded">
                  <p className="text-sm font-medium">{comment.author}</p>
                  <p className="text-sm">{comment.content}</p>
                </div>
              ))}
              <div className="flex gap-2">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 border p-2 rounded"
                  placeholder="Write a comment..."
                />
                <Button size="sm" onClick={() => handleComment(story.id)}>
                  Post
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
