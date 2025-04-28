import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import StarField from '../Components/StarField';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative">
      <Head title="Home | Angelo Gonzales" />
      <Navbar /> {/* Navbar should appear above */}
      <StarField /> {/* StarField with dark background */}
      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-maroon-600">Hi, I'm Angelo Y. Gonzales</h1>
        <p className="text-xl text-gray-300 mb-6">
          A passionate Bachelor of Science in Information Technology student at the University of Mindanao. I love building modern web applications and bringing ideas to life through technology.
        </p>
        <a href="/projects" className="px-8 py-4 bg-maroon-600 text-white rounded-lg text-lg font-semibold hover:bg-maroon-700 transition">
          View My Projects
        </a>
      </main>
    </div>
  );
}
