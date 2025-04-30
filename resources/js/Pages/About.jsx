import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';
import StarField from '../Components/StarField';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black relative text-white">
      <Head title="About | Angelo Gonzales" />

      <Navbar />
      <StarField />

      <main className="flex-grow container mx-auto px-4 py-20 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-maroon-400 mb-8">About Me</h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-gray-300 leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Angelo Y. Gonzales</span>, a recent graduate of 
          the University of Mindanao with a degree in Information Technology. I'm focused on growing as a 
          <span className="text-maroon-300 font-semibold"> Full Stack Developer</span> and gaining real-world experience.
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-gray-300 leading-relaxed">
          I've worked on projects using <span className="text-maroon-200">Laravel</span>, 
          <span className="text-maroon-200"> Vue.js</span>, <span className="text-maroon-200">React.js</span>, 
          <span className="text-maroon-200">MySQL</span>, <span className="text-maroon-200">Java</span>, and 
          <span className="text-maroon-200"> CSS</span>, and I enjoy learning how these tools come together to build 
          modern web applications.
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Right now, I'm focused on improving my skills and contributing to projects where I can learn from others 
          while bringing value through clean, thoughtful code and a strong work ethic.
        </p>
      </main>
    </div>
  );
}
