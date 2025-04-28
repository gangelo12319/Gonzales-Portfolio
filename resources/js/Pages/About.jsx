import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <Head title="About | Angelo Gonzales" />

      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications. 
          With a background in Laravel and React.js, I love crafting efficient backends and intuitive frontends.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Beyond coding, I enjoy learning new technologies, contributing to open-source projects, and helping businesses grow through web solutions.
        </p>
        <p className="text-lg text-gray-700">
          Let's work together to build something amazing!
        </p>
      </main>
    </div>
  )
}
