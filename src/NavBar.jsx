import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NDA from './assets/NDA.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md" ref={menuRef}>
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <Link to="/" className="flex items-center h-full group">
              <img 
                src={NDA} 
                alt="NDA Logo" 
                className="h-fit w-auto object-contain transition-all duration-300 ease-in-out transform group-hover:scale-132 group-hover:brightness-120 group-hover:shadow-lg"
                style={{
                  maxHeight: '100%',
                  maxWidth: '120px'
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-black hover:text-gray-600">About Us</Link>
            <Link to="/gallery" className="text-black hover:text-gray-600">Gallery</Link>
            <Link to="/team" className="text-black hover:text-gray-600">Members</Link>
            <Link to="/member" className="text-black hover:text-gray-600">
              Become a Member
            </Link>
            <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">LOGIN</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/about"
                className="block px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                Gallery
              </Link>
              <Link
                to="/team"
                className="block px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                Members
              </Link>
              <Link
                to="/member"
                className="block px-3 py-2 text-black hover:text-gray-600 hover:bg-gray-50 rounded-md"
              >
                Become a Member
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-white bg-black hover:bg-gray-600 rounded-md"
              >
                LOGIN
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;