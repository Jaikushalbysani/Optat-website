import { Navbar } from "@/components/ui/navbar";
import { StoryList } from "@/components/stories/story-list";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Share Your Story</h1>
        <div className="grid gap-8">
          <div className="bg-card rounded-lg p-6 shadow-lg"></div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Stories</h2>
            <StoryList />
          </div>
        </div>
      </main>
    </div>
  );
} 