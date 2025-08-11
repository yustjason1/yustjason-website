"use client";

import { useEffect, useState } from 'react';
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Jason Yust</h1>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Home</a>
              <a href="/resume" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Resume</a>
              <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Projects</a>
              <a href="/certifications" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Certifications</a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Contact</a>
            </nav>
            {mounted && <ThemeToggle />}
          </div>
        </div>
      </div>
    </header>
  );
}
