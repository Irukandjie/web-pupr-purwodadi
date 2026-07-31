import React, { useState, useEffect } from 'react';

const NavbarPUPR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State buat trigger animasi awal

  const menuItems = [
    { name: 'Beranda', link: '#hero' },
    { name: 'Informasi', link: '#informasi' },
    { name: 'Prosedur', link: '#prosedur' },
    { name: 'Informasi Geografis', link: '#informasi-geografis' },
  ];

  useEffect(() => {
    // Animasi muncul pas pertama di-load
    setIsMounted(true);

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    // Tambahin class translate-y dan opacity berdasarkan isMounted
    <nav className={`bg-[#FCF5F5] shadow-md py-3 w-full sticky top-0 z-50 transition-all duration-700 ease-out transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <a href="#hero" className="flex items-center gap-3 no-underline text-black hover:opacity-80 transition-opacity duration-300">
          <img 
            src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
            alt="Logo DPUPR Purwodadi" 
            className="h-[60px] object-contain drop-shadow-sm"
            onError={(e) => {
              e.target.src = 'https://placehold.co/60x60/cccccc/000000?text=Logo';
            }}
          />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-wide uppercase text-gray-600">
              Smart Infrastructure Pekerjaan Umum
            </span>
            <span className="text-xl font-black leading-tight uppercase text-gray-900">
              Dinas Pekerjaan Umum
            </span>
            <span className="text-lg font-bold leading-tight uppercase text-blue-900">
              Kabupaten Purwodadi
            </span>
          </div>
        </a>

        <button 
          className="lg:hidden text-gray-800 focus:outline-none hover:bg-gray-200 p-2 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-2 text-[15px] font-bold">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="px-5 py-2.5 rounded-full text-gray-700 hover:bg-blue-800 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-2 shadow-inner">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="px-4 py-3 rounded-lg font-bold text-gray-700 hover:bg-blue-800 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarPUPR;