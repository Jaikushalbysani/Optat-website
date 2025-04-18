import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { content, author } = await req.json();
  const { id } = params;

  await pool.query(
    'INSERT INTO comments (story_id, content, author) VALUES ($1, $2, $3)',
    [id, content, author]
  );

  return NextResponse.json({ success: true });
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const result = await pool.query(
    'SELECT * FROM comments WHERE story_id = $1 ORDER BY created_at DESC',
    [id]
  );

  return NextResponse.json(result.rows);
}
