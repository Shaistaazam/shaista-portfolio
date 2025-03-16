import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white py-16">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-6 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Shaista Azam
            </h2>
            <p className="text-lg text-gray-300">Turning ideas into digital reality.</p>
            <div className="flex space-x-4 mt-4">
              {[
                { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
                { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
                { href: "https://www.linkedin.com/in/shaista-azam-a07873258", icon: <FaLinkedinIn />, label: "LinkedIn" },
                { href: "https://github.com", icon: <FaGithub />, label: "GitHub" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Quick Links</h3>
            <nav className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-indigo-400 transition-colors duration-300 transform hover:translate-x-2"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-indigo-400" />
                <a href="mailto:contact@shaistaazam08@gmail.com" className="hover:text-indigo-400 transition-colors duration-300">
                 shaistaazam08@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <FaPhone className="mr-3 text-indigo-400" />
                <a href="tel:+1234567890" className="hover:text-indigo-400 transition-colors duration-300">
                
                03301579943
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-indigo-400" />
                <span>Karachi, Pakistan</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with my latest projects and news.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shaista Azam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;