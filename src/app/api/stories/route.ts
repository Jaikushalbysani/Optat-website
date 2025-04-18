// app/api/stories/route.ts
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Add this in .env
  ssl: { rejectUnauthorized: false },
});

export async function GET() {
  const result = await pool.query('SELECT * FROM stories ORDER BY created_at DESC');
  return NextResponse.json(result.rows);
}

export async function POST(req: Request) {
  const data = await req.json();
  const { title, content, author } = data;

  const result = await pool.query(
    'INSERT INTO stories (title, content, author, likes, created_at) VALUES ($1, $2, $3, 0, NOW()) RETURNING *',
    [title, content, author]
  );

  return NextResponse.json(result.rows[0]);
}
