import { Link } from '@inertiajs/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md shadow-md z-20">
      <div className="text-2xl font-bold text-white tracking-wide">
        <span className="text-maroon-400">Angelo</span>G.Dev
      </div>
      <div className="space-x-6 text-white font-medium">
        <Link href="/" className="hover:text-maroon-400 transition">Home</Link>
        <Link href="/about" className="hover:text-maroon-400 transition">About</Link>
        <Link href="/projects" className="hover:text-maroon-400 transition">Projects</Link>
        <Link href="/skills" className="hover:text-maroon-400 transition">Skills</Link>
        <Link href="/contact" className="hover:text-maroon-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
