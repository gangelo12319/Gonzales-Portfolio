import Navbar from '../Components/Navbar';
import { Head } from '@inertiajs/react';
import StarField from '../Components/StarField';

export default function Projects() {
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
            This full-stack Laravel-based system supports uploading, importing, and managing 
            large Excel datasets and PDF documents, all through a secure, responsive interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Login Page */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/login-screenshot.png"
              alt="Login Page"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Login Page</h3>
              <p className="text-gray-400 text-sm">Secure authentication for users to access the system.</p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/dashboard-screenshot.png"
              alt="Dashboard"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Dashboard</h3>
              <p className="text-gray-400 text-sm">Overview of system activity, uploaded files, and user stats.</p>
            </div>
          </div>

          {/* Graduate Verifier Page */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/graduate-verifier.png"
              alt="Graduate Verifier Page"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Graduate Verifier Page</h3>
              <p className="text-gray-400 text-sm">Search and verify graduate records with precision filtering.</p>
            </div>
          </div>

          {/* Upload File Page */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/upload-file.png"
              alt="Upload File Page"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Upload File Page</h3>
              <p className="text-gray-400 text-sm">Upload Excel and PDF documents with drag-and-drop ease.</p>
            </div>
          </div>

          {/* Import Excel Page */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/import-excel.png"
              alt="Import Excel Page"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Import Excel Page</h3>
              <p className="text-gray-400 text-sm">Map and import large Excel datasets directly into the system.</p>
            </div>
          </div>
                    {/* Import Excel Page */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/profile-page.png"
              alt="Profile Page"
              className="w-full object-cover h-60 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold mb-2 text-maroon-300">Profile Page</h3>
              <p className="text-gray-400 text-sm">View and update personal information</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
