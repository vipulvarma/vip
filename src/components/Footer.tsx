import React from 'react';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Vipul's Tuition</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Personalized home tuition for academic excellence. 
              Helping students achieve their educational goals with 
              proven teaching methods and dedicated support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>English</li>
              <li>Social Studies</li>
              <li>Engineering Subjects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-yellow-400" />
                <a href="tel:+919768510129" className="hover:text-yellow-400 transition-colors">
                  +91 97685 10129
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-yellow-400" />
                <a href="mailto:vipulvarma.b@gmail.com" className="hover:text-yellow-400 transition-colors">
                  vipulvarma.b@gmail.com
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-yellow-400 mt-0.5" />
                <span>Home Tuition Services Available Citywide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vipul's Home Private Tuition. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;