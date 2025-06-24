import { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Skills() {
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

  const skills = [
    { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TailwindCSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "API Development", icon: "https://www.svgrepo.com/show/261808/api.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ];

  const certificates = [
    {
      name: "Network Security (Certiport)",
      image: "/img/network-security.png",
    },
    {
      name: "ReactJs (Workshop)",
      image: "/img/reactjs-workshop.png",
    },
    {
      name: "JavaScript (Workshop)",
      image: "/img/js-workshop.png",
    },
    {
      name: "Computer Systems Servicing NC II",
      image: "/img/nc2-cert.png",
    },
     {
      name: "Computer Systems Servicing NC II",
      image: "/img/nc2-cert.png",
    },
         {
      name: "CHEDROXI Certificate",
      image: "/img/CHED-CERTIFICATE.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Head title="Skills | Angelo Gonzales" />
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-maroon-400 mb-16">Skills & Certifications</h2>

          <section>
            <h3 className="text-2xl font-semibold text-gray-300 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-700 my-10" />
          <section>
  <h3 className="text-2xl font-semibold text-gray-300 mb-8">Certifications</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start">
    {certificates.map((cert, index) => (
      <div
        key={index}
        className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <img
          src={cert.image}
          alt={cert.name}
          className="w-full h-auto object-contain rounded-lg mb-4"
        />
        <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
      </div>
    ))}
  </div>
</section>
        </main>
      </div>
    </div>
  );
}
