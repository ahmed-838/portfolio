"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Ahmed Abd Elmohsen</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate Software Engineer specialized in building exceptional digital experiences that are fast, accessible, and responsive.
            </p>
            <p className="text-teal-400">
              Let's turn your ideas into reality!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-teal-400 transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-teal-400 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-teal-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ahmed-838" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition"
                aria-label="GitHub Profile"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-838-shams/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/201224900205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition"
                aria-label="WhatsApp Profile"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.105 3.896C17.932 1.723 14.931 0.5 11.762 0.5c-6.53 0-11.85 5.32-11.85 11.85 0 2.085 0.547 4.116 1.588 5.914L0.5 24l5.882-1.543c1.732 0.943 3.683 1.443 5.673 1.443h0.005c6.528 0 11.848-5.32 11.848-11.85 0-3.169-1.223-6.17-3.396-8.343zM11.762 21.726h-0.004c-1.77 0-3.502-0.476-5.013-1.373l-0.36-0.213-3.726 0.977 0.995-3.636-0.234-0.373c-0.988-1.57-1.509-3.384-1.509-5.258 0-5.431 4.42-9.85 9.855-9.85 2.634 0 5.108 1.026 6.97 2.888 1.862 1.862 2.887 4.336 2.887 6.97 0 5.432-4.418 9.85-9.85 9.85zm5.407-7.372c-0.297-0.148-1.754-0.866-2.027-0.964-0.272-0.099-0.47-0.148-0.669 0.148-0.198 0.297-0.767 0.964-0.941 1.162-0.173 0.198-0.347 0.223-0.644 0.074-0.297-0.148-1.255-0.462-2.39-1.475-0.884-0.788-1.48-1.761-1.653-2.059-0.173-0.297-0.018-0.458 0.13-0.606 0.134-0.133 0.297-0.347 0.446-0.521 0.148-0.173 0.198-0.297 0.297-0.495 0.099-0.198 0.05-0.372-0.025-0.521-0.074-0.148-0.669-1.612-0.916-2.207-0.242-0.579-0.487-0.501-0.669-0.51-0.173-0.008-0.371-0.01-0.57-0.01-0.198 0-0.52 0.074-0.792 0.372-0.272 0.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074 0.148 0.198 2.095 3.2 5.076 4.487 0.709 0.306 1.263 0.489 1.694 0.626 0.712 0.226 1.36 0.194 1.872 0.118 0.571-0.085 1.758-0.719 2.006-1.413 0.248-0.694 0.248-1.29 0.173-1.413-0.074-0.124-0.272-0.198-0.57-0.347z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ahmed Abd Elmohsen. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
