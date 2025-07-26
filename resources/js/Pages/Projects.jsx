import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';
import StarField from '../Components/StarField';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      <Head title="Projects | Angelo Gonzales" />
      <Navbar />
      <StarField />

      <main className="flex-grow container mx-auto px-4 py-20 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-maroon-400 mb-12">Projects</h2>

        <div className="max-w-4xl mx-auto mb-12 text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            One of my most significant projects is the <span className="font-semibold text-white">CHED RO XI So Verifier</span> —
            an information management system built to help CHED Region XI store and manage essential graduate verification records.
          </p>
          <p>
            A full-stack Laravel system with a Vue.js frontend, designed to securely upload, import, and manage large Excel datasets and PDF documents through a responsive and user-friendly interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            { src: '/img/login-screenshot.png', title: 'Login Page', desc: 'Secure authentication for users to access the system.' },
            { src: '/img/1.png', title: 'Dashboard', desc: 'Overview of system activity, uploaded files, and user stats.' },
            { src: '/img/graduate-verifier.png', title: 'Graduate Verifier Page', desc: 'Search and verify graduate records with precision filtering.' },
            { src: '/img/2.png', title: 'Upload File Page', desc: 'Upload Excel and PDF documents with drag-and-drop ease.' },
            { src: '/img/3.png', title: 'Import Excel Page', desc: 'Map and import large Excel datasets directly into the system.' },
            { src: '/img/profile-page.png', title: 'Profile Page', desc: 'View and update personal information' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.src}
                alt={item.title}
                onClick={() => setSelectedImage(item.src)}
                className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2 text-maroon-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed Screenshot"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
    </div>
  );
}
