"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="drop-shadow-lg" style={{ backgroundColor: "var(--header)", color: "var(--foreground)" }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Jason Yust</h1>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="/" className="hover:drop-shadow-lg">Home</a>
              <a href="/resume" className="hover:drop-shadow-lg">Resume</a>
              <a href="/projects" className="hover:drop-shadow-lg">Projects</a>
              <a href="/certifications" className="hover:drop-shadow-lg">Certifications</a>
              <a href="/contact" className="hover:drop-shadow-lg">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
