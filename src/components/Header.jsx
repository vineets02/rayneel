// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link to="/">RayNeel</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 relative">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* About Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="focus:outline-none">About</button>
              {isAboutOpen && (
                <ul className="absolute left-0 top-full w-48 bg-white shadow-lg rounded py-2 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/our-story">Our Story</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/need-for-change">The Need for Change</Link>
                  </li>
                  {/* <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/challenges">Challenges</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/supporting-data">Supporting Data</Link>
                  </li> */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/our-promise">Our Promise</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/our-team">Our Team</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/about/vision-mission">Vision & Mission</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            {/* <li>
              <Link to="/sustainability">Sustainability</Link>
            </li> */}
            {/* <li>
              <Link to="/careers">Careers</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="px-4 py-2 space-y-2 bg-white shadow">
            <li>
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="w-full text-left focus:outline-none"
              >
                About
              </button>
              {isMobileAboutOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/our-story" onClick={() => setIsMobileMenuOpen(false)}>
                      Our Story
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/need-for-change" onClick={() => setIsMobileMenuOpen(false)}>
                      The Need for Change
                    </Link>
                  </li>
                  {/* <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/challenges" onClick={() => setIsMobileMenuOpen(false)}>
                      Challenges
                    </Link>
                  </li> */}
                  {/* <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/supporting-data" onClick={() => setIsMobileMenuOpen(false)}>
                      Supporting Data
                    </Link>
                  </li> */}
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/our-promise" onClick={() => setIsMobileMenuOpen(false)}>
                      Our Promise
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/our-team" onClick={() => setIsMobileMenuOpen(false)}>
                      Our Team
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded">
                    <Link to="/about/vision-mission" onClick={() => setIsMobileMenuOpen(false)}>
                      Vision & Mission
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/brands" onClick={() => setIsMobileMenuOpen(false)}>
                Brands
              </Link>
            </li>
            {/* <li>
              <Link to="/sustainability" onClick={() => setIsMobileMenuOpen(false)}>
                Sustainability
              </Link>
            </li> */}
            {/* <li>
              <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                Careers
              </Link>
            </li> */}
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
