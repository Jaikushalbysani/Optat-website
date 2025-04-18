import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl">
            OPTAT
          </Link>
          <Link href="/stories" className="text-sm font-medium transition-colors hover:text-primary">
            Stories
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
} 