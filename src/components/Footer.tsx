'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 João Pedro Ventania. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/ventania" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="mailto:ventania91@gmail.com" className="hover:text-gray-300">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
