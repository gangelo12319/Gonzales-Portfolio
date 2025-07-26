import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md shadow-md z-20">
      <div className="text-2xl font-bold text-white tracking-wide">
        <span className="text-maroon-400">Angelo</span>G.Dev
      </div>

      <div className="hidden md:flex space-x-6 text-white font-medium">
        <Link href="/" className="hover:text-maroon-400 transition">Home</Link>
        <Link href="/about" className="hover:text-maroon-400 transition">About</Link>
        <Link href="/projects" className="hover:text-maroon-400 transition">Projects</Link>
        <Link href="/skills" className="hover:text-maroon-400 transition">Skills</Link>
        <Link href="/contact" className="hover:text-maroon-400 transition">Contact</Link>
      </div>

      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col items-center space-y-4 py-6 z-10 md:hidden">
          <Link href="/" className="hover:text-maroon-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-maroon-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-maroon-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/skills" className="hover:text-maroon-400 transition" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/contact" className="hover:text-maroon-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
