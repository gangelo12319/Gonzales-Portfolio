import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Skills() {
  const skills = ["Laravel", "ReactJS", "TailwindCSS", "PHP", "JavaScript", "MySQL", "Git", "API Development"];

  return (
    <div className="min-h-screen flex flex-col">
        <Head title="Skills | Angelo Gonzales" />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </main>
    </div>
  )
}
