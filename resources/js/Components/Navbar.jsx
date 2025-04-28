import { Link } from '@inertiajs/react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md z-10">
      <div className="text-2xl font-bold text-blue-600">
        AngeloG.Dev
      </div>
      <div className="space-x-6">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
        <Link href="/skills" className="text-gray-700 hover:text-blue-500">Skills</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
