import { useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 100;
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.velocity;
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Contact Information
          </h2>

          <div className="bg-gray-900 bg-opacity-90 text-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <FaUser className="text-maroon-400 text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-maroon-400">Name</h3>
                <p className="text-lg">Angelo Y. Gonzales</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-maroon-400 text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-maroon-400">Address</h3>
                <p className="text-lg">Purok1 Communal, Buhangin Davao City 8000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-maroon-400 text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-maroon-400">Contact #</h3>
                <p className="text-lg">09613382723</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-maroon-400 text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-maroon-400">Email</h3>
                <p className="text-lg">a.gonzales.510729@umindanao.edu.ph</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-maroon-400 text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-maroon-400">GitHub</h3>
                <a
                  href="https://github.com/gangelo12319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-lg"
                >
                  github.com/gangelo12319
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
