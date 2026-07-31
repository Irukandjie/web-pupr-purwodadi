import React, { useState, useEffect } from 'react';

const NavbarPUPR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { name: 'Beranda', link: '/' },
    { name: 'Informasi', link: '/berita' },
    { name: 'Prosedur', link: '/#layanan' },
    { name: 'Informasi Geografis', link: '/#sistem-informasi' },
  ];

  const utilityLinks = [
    { name: 'Sekilas Info', link: '#' },
    { name: 'Selayang Pandang', link: '#' },
  ];

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header className={`w-full fixed top-0 z-[100] transition-transform duration-500 ease-in-out transform ${!isMounted ? '-translate-y-full' : isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* 1. TOP BAR (Seamless All-White) */}
      <div className="hidden lg:block bg-white text-gray-500 py-1.5 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-[1400px] flex justify-between items-center text-[12px] font-semibold tracking-wide">
          
          {/* Info Kontak Kiri - Interactive Hover */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-amber-50 hover:text-[#E87500] hover:scale-105 transition-all duration-300">
              <svg className="w-4 h-4 text-[#E87500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (0292) 5140139
            </a>
            <span className="w-1 h-1 bg-gray-200 rounded-full mx-1"></span>
            <a href="#" className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-amber-50 hover:text-[#E87500] hover:scale-105 transition-all duration-300">
              <svg className="w-4 h-4 text-[#E87500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              dpupr.grobogan.go.id
            </a>
          </div>

          {/* Kanan: Integrated Utility Bar */}
          <div className="flex items-center bg-gray-50/80 p-1 rounded-full border border-gray-100">
            
            {/* Utilitas Links - Interactive Hover */}
            <div className="flex items-center gap-1 px-3">
              {utilityLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={item.link}
                    className="text-gray-500 hover:text-[#E87500] hover:bg-white hover:shadow-sm px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 text-[12px] font-bold"
                  >
                    {item.name}
                  </a>
                  {index < utilityLinks.length - 1 && (
                    <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Tombol Login Admin - Glowing Scale Hover */}
            <a 
              href="#"
              className="bg-amber-50 text-[#E87500] hover:bg-[#E87500] hover:text-white px-5 py-2 rounded-full flex items-center gap-1.5 font-bold text-[12px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(232,117,0,0.25)] group"
            >
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login Admin
            </a>

          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="w-full bg-white shadow-md py-3 md:py-4 relative z-10">
        <div className="container mx-auto px-4 max-w-[1400px] flex justify-between items-center">
          
          {/* Logo Brand - Hover Scale */}
          <a href="/" className="flex items-center gap-3.5 no-underline text-black group transition-all duration-300 hover:scale-[1.02]">
            <img 
              src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg"
              alt="Logo DPUPR"
              className="object-contain drop-shadow-sm h-[55px] md:h-[62px] transition-transform duration-300 group-hover:drop-shadow-md"
              onError={(e) => { e.target.src = 'https://placehold.co/60x60/cccccc/000000?text=Logo'; }}
            />
            <div className="flex flex-col justify-center">
              <span className="font-bold tracking-widest uppercase text-gray-500 text-[9px] md:text-[10px] mb-0.5">
                Pemerintah Kabupaten Grobogan
              </span>
              <span className="font-black leading-none uppercase text-[#0F172A] text-[18px] md:text-[22px] tracking-wide mb-1">
                Dinas Pekerjaan Umum
              </span>
              <span className="font-bold leading-none uppercase text-[#E87500] text-[15px] md:text-[18px] tracking-wide">
                Dan Penataan Ruang
              </span>
            </div>
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button 
            className="lg:hidden text-gray-800 focus:outline-none hover:bg-amber-50 hover:text-[#E87500] p-2 rounded-xl transition-all duration-300 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Navigasi Utama (Desktop) - FLOATING PILL HOVER */}
          <div className="hidden lg:flex items-center gap-2 text-[15px] font-bold text-[#1E293B]">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                className="relative px-5 py-2.5 rounded-full hover:bg-amber-50 hover:text-[#E87500] transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 ${
            isOpen ? 'max-h-[500px] opacity-100 mt-3 py-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 flex flex-col gap-1">
            <div className="pb-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3 mt-2">Menu Utama</p>
              {menuItems.map((item, index) => (
                <a 
                  key={`main-${index}`} 
                  href={item.link}
                  className="block px-4 py-3 rounded-xl font-bold text-[#1E293B] hover:bg-amber-50 hover:text-[#E87500] hover:pl-6 hover:shadow-sm transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="pt-2 pb-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Informasi & Akses</p>
              {utilityLinks.map((item, index) => (
                <a 
                  key={`util-${index}`} 
                  href={item.link}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <a 
                href="#"
                className="mt-2 mx-4 flex items-center justify-center gap-2 bg-[#E87500] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#D97706] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login Admin
              </a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default NavbarPUPR;
