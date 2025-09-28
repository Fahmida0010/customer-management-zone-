import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">Customer Management Zone</h2>
          <p className="text-gray-400 text-sm">
            Your trusted customer support platform. Helping you manage tickets,
            resolve issues, and keep you happy.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-green-400">About us</a></li>
            <li><a href="#" className="hover:text-green-400">Help center</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
            <li><a href="#" className="hover:text-green-400">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Customer Management Zone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
