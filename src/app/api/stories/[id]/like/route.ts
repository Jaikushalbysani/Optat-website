import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await pool.query('UPDATE stories SET likes = likes + 1 WHERE id = $1', [id]);
  return NextResponse.json({ success: true });
}
