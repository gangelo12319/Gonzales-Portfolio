import { Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-maroon-900 text-white">
      <Head title="Contact | Angelo Gonzales" />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-maroon-400">Contact Information</h2>

        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600">Name:</h3>
            <p className="text-lg text-gray-700">Angelo Y. Gonzales</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600">Address:</h3>
            <p className="text-lg text-gray-700">Buhangin, Davao City 8000</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600">Contact #:</h3>
            <p className="text-lg text-gray-700">09123456788</p>
          </div>
        </div>
      </main>
    </div>
  );
}
