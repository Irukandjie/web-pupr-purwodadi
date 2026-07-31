import React, { useState, useEffect } from 'react';

const NavbarPUPR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // MENU UTAMA (Udah pakai rute "/" biar bisa bolak-balik Landing Page - Berita)
  const menuItems = [
    { name: 'Beranda', link: '/' }, // <-- Balik ke Landing Page paling atas
    { name: 'Informasi', link: '/berita' }, // <-- Ke halaman Berita
    { name: 'Prosedur', link: '/#layanan' }, // <-- Balik ke Landing Page, scroll ke Layanan
    { name: 'Informasi Geografis', link: '/#sistem-informasi' }, // <-- Balik ke Landing Page, scroll ke Sistem Informasi
  ];

  const utilityLinks = [
    { name: 'Sekilas Info', link: '#' },
    { name: 'Selayang Pandang', link: '#' },
    { name: 'Login Admin', link: '#' },
  ];

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header className={`w-full sticky top-0 z-[100] transition-all duration-700 ease-out transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      
      {/* 1. TOP BAR */}
      <div className="hidden lg:block bg-gray-900 text-gray-300 py-2 border-b border-amber-500/30">
        <div className="container mx-auto px-4 flex justify-between items-center text-[12px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-default">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (0292) 5140139
            </span>
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-default">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              dpupr.grobogan.go.id
            </span>
          </div>
          <div className="flex items-center gap-5">
            {utilityLinks.map((item, index) => (
              <a key={index} href={item.link} className="hover:text-white transition-colors flex items-center gap-1.5">
                {item.name === 'Login Admin' && (
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                )}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-[#FCF5F5] shadow-md py-3 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo sekarang arahnya ke "/" biar selalu balik ke beranda utama */}
          <a href="/" className="flex items-center gap-3 no-underline text-black hover:opacity-80 transition-opacity duration-300">
            <img 
              src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
              alt="Logo DPUPR" 
              className="h-[50px] md:h-[60px] object-contain drop-shadow-sm"
              onError={(e) => { e.target.src = 'https://placehold.co/60x60/cccccc/000000?text=Logo'; }}
            />
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] font-bold tracking-wide uppercase text-gray-500">
                Pemerintah Kabupaten Grobogan
              </span>
              <span className="text-lg md:text-xl font-black leading-tight uppercase text-gray-900">
                Dinas Pekerjaan Umum
              </span>
              <span className="text-base md:text-lg font-bold leading-tight uppercase text-amber-600">
                Dan Penataan Ruang
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

          <div className="hidden lg:flex items-center gap-1 text-[14px] font-bold">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className="px-5 py-2.5 rounded-full text-gray-700 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* 3. MOBILE MENU DROPDOWN */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-inner absolute w-full ${
            isOpen ? 'max-h-[500px] opacity-100 mt-3 py-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 flex flex-col gap-1">
            <div className="pb-3 border-b border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Menu Utama</p>
              {menuItems.map((item, index) => (
                <a 
                  key={`main-${index}`} 
                  href={item.link} 
                  className="block px-3 py-2.5 rounded-lg font-bold text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="pt-2 pb-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Informasi & Akses</p>
              {utilityLinks.map((item, index) => (
                <a 
                  key={`util-${index}`} 
                  href={item.link} 
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name === 'Login Admin' && (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                  )}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default NavbarPUPR;
