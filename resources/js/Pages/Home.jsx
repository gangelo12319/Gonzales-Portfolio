import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import StarField from '../Components/StarField';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative text-white">
      <Head title="Home | Angelo Gonzales" />
      <Navbar />
      <StarField />

      <main className="flex-grow flex flex-col items-center justify-center text-center z-10 relative px-4 py-12">
        <img
          src="/img/img.png"
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-maroon-600 shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
          Hi, I'm <span className="text-maroon-400">Angelo Y. Gonzales</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          A passionate Bachelor of Science in Information Technology gradute at the University of Mindanao. I love building modern web applications and bringing ideas to life through technology.
        </p>
        <a
          href="/projects"
          className="px-8 py-4 bg-maroon-600 hover:bg-maroon-700 text-white font-medium rounded-full transition duration-300 shadow-lg"
        >
          View My Projects
        </a>
      </main>
    </div>
  );
}
