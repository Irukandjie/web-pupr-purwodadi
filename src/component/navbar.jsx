import React, { useState, useEffect } from 'react';

const NavbarPUPR = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [activeMenu, setActiveMenu] = useState('landing'); 

  const menuItems = [
    { name: 'Beranda', pageId: 'landing' },
    { name: 'Informasi', pageId: 'berita' },
    // --- UPDATE: Ubah pageId jadi 'prosedur' ---
    { name: 'Prosedur', pageId: 'prosedur' }, 
    { name: 'Informasi Geografis', pageId: 'geografis' },
  ];

  const utilityLinks = [
    { name: 'Setelan Info', pageId: 'sekilas-info' },
    { name: 'Tentang', pageId: 'selayang-pandang' },
  ];

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(currentScrollY);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const handleMenuClick = (e, pageId) => {
    e.preventDefault();
    setActiveMenu(pageId); 
    if(onNavigate) onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <header className={`w-full fixed top-0 z-[100] transition-transform duration-500 ease-in-out transform ${!isMounted ? '-translate-y-full' : isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* TOP BAR */}
      <div className="hidden lg:block bg-red-700 text-red-50 py-2 border-b border-red-800 shadow-sm">
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center text-[12px] font-semibold tracking-wide">
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-default">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (0292) 544256
            </span>
            <span className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-default">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              dpupr@grobogan.go.id
            </span>
          </div>

          <div className="flex items-center gap-6">
            {utilityLinks.map((item, index) => (
              <a key={index} href="#" onClick={(e) => handleMenuClick(e, item.pageId)} className="text-red-50 hover:text-amber-300 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#" onClick={(e) => handleMenuClick(e, 'login')} className="bg-white text-red-700 hover:bg-amber-400 hover:text-white px-5 py-1.5 rounded flex items-center gap-2 font-bold transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
              Login Admin
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="w-full bg-white shadow-md py-4 relative z-10 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center">
          
          <a href="/" onClick={(e) => handleMenuClick(e, 'landing')} className="flex items-center gap-4 no-underline text-black group">
            <img src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" alt="Logo" className="object-contain h-[55px] md:h-[65px]" />
            <div className="flex flex-col justify-center">
              <span className="font-black leading-none uppercase text-slate-800 text-[22px] tracking-wide group-hover:text-red-600 transition-colors">
                SINTARAMA
              </span>
              <span className="font-semibold leading-tight uppercase text-gray-500 text-[10px] mt-0.5">
                SISTEM INFORMASI TATA RUANG MASYARAKAT
              </span>
              <span className="font-bold leading-none uppercase text-amber-500 text-[11px] tracking-wide mt-1">
                KABUPATEN GROBOGAN
              </span>
            </div>
          </a>

          <button 
            className="lg:hidden text-gray-800 focus:outline-none hover:bg-amber-50 hover:text-red-600 p-2 rounded-xl transition-all duration-300 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-[#1e293b]">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                onClick={(e) => handleMenuClick(e, item.pageId)} 
                className={`relative hover:text-red-600 transition-colors duration-300 group py-2 ${activeMenu === item.pageId ? 'text-red-600' : ''}`}
              >
                {item.name}
                <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-red-600 transition-transform duration-300 origin-center rounded-full ${activeMenu === item.pageId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>

        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 ${isOpen ? 'max-h-[500px] opacity-100 mt-3 py-2' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 flex flex-col gap-1">
            <div className="pb-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3 mt-2">Menu Utama</p>
              {menuItems.map((item, index) => (
                <a 
                  key={`main-${index}`} 
                  href="#"
                  onClick={(e) => handleMenuClick(e, item.pageId)}
                  className={`block px-4 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 hover:pl-6 hover:shadow-sm transition-all duration-300 ${activeMenu === item.pageId ? 'bg-red-50 text-red-600 pl-6 shadow-sm' : 'text-[#1e293b]'}`}
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
                  href="#"
                  onClick={(e) => handleMenuClick(e, item.pageId)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#"
                onClick={(e) => handleMenuClick(e, 'login')}
                className="mt-2 mx-4 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
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