import React from 'react';

function Navbar({ onNavigate }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#f5d0d0] to-[#f1a0a0] text-white shadow-md z-50 flex items-center justify-between px-6 border-b-4 border-[#e76f6f]">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      {/* Decorative lines */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-[#d14d4d] opacity-20"></div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-0.5 h-8 bg-[#d14d4d] opacity-30"></div>

      {/* Navigation Buttons */}
      <div className="relative z-10 flex gap-6 mx-auto">
        {['Home', 'About', 'Projects', 'Social'].map((label) => (
          <button
            key={label}
            onClick={() => onNavigate(label)}
            className="text-[#b83232] font-semibold px-4 py-2 rounded-full border-2 border-[#b83232] hover:text-[#F5DEB3] hover:border-[#F5DEB3] transition duration-300 shadow-sm"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
