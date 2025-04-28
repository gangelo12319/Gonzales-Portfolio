import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Laravel, React, and TailwindCSS.",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "An online store solution using Laravel and Vue.js with Stripe integration.",
      link: "#"
    },
    {
      title: "Blog CMS",
      description: "A content management system built in Laravel for easy blogging.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head title="Projects | Angelo Gonzales" />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-lg shadow bg-white">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
