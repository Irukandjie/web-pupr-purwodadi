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
      
      {/* =========================================
          1. TOP BAR (MERAH)
          ========================================= */}
      <div className="hidden lg:block bg-red-700 text-red-50 py-2 border-b border-red-800 shadow-sm relative z-20">
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center text-[12px] font-semibold tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-default">(0292) 544256</span>
            <span className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-default">dpupr@grobogan.go.id</span>
          </div>

          <div className="flex items-center gap-6">
            {utilityLinks.map((item, index) => (
              <a key={index} href="#" onClick={(e) => handleMenuClick(e, item.pageId)} className="text-red-50 hover:text-amber-300 transition-colors">{item.name}</a>
            ))}
            
            {/* Button Login Admin Desktop */}
            <a href="#" onClick={(e) => handleMenuClick(e, 'login')} className="relative overflow-hidden group bg-white text-red-700 hover:bg-red-600 hover:text-white px-5 py-1.5 rounded flex items-center gap-2 font-bold transition-all duration-500 shadow-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]">
              <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/20 backdrop-blur-md transition-all duration-500 z-0"></span>
              <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                Login Admin
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          2. MAIN NAVBAR (PUTIH)
          ========================================= */}
      <nav className="w-full bg-white shadow-sm py-4 relative z-20 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center">
          <a href="/" onClick={(e) => handleMenuClick(e, 'landing')} className="flex items-center gap-4 no-underline text-black group">
            <img src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" alt="Logo" className="object-contain h-[55px] md:h-[65px]" />
            <div className="flex flex-col justify-center">
              <span className="font-black leading-none uppercase text-slate-800 text-[22px] tracking-wide group-hover:text-red-600 transition-colors">SINTARAMA</span>
              <span className="font-semibold leading-tight uppercase text-gray-500 text-[10px] mt-0.5">SISTEM INFORMASI TATA RUANG MASYARAKAT</span>
            </div>
          </a>

          <button className="lg:hidden text-gray-800 focus:outline-none hover:bg-amber-50 hover:text-red-600 p-2 rounded-xl transition-all duration-300 active:scale-95" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>

          {/* DESKTOP MENU - Liquid Glass & Rounded Tipis (Ala iPhone) */}
          <div className="hidden lg:flex items-center gap-2 text-[14px] font-bold text-[#1e293b]">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                onClick={(e) => handleMenuClick(e, item.pageId)} 
                className={`relative overflow-hidden px-4 py-2 rounded-xl transition-all duration-300 group ${activeMenu === item.pageId ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}
              >
                {/* Background Glass (Active & Hover) */}
                <span className={`absolute inset-0 w-full h-full transition-all duration-300 z-0 ${activeMenu === item.pageId ? 'bg-red-50 shadow-sm' : 'bg-transparent group-hover:bg-slate-50 backdrop-blur-sm'}`}></span>
                
                {/* Efek Liquid Glass / Shine (Animasi kilat putih) */}
                <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out z-0"></span>
                
                {/* Teks Menu */}
                <span className="relative z-10 flex items-center justify-center">{item.name}</span>
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
                  className={`relative overflow-hidden block px-4 py-3 rounded-xl font-bold transition-all duration-300 group ${activeMenu === item.pageId ? 'bg-red-50 text-red-600 pl-6 shadow-sm' : 'text-[#1e293b] hover:bg-slate-50 hover:text-red-600 hover:pl-6'}`}
                >
                  {/* Efek Kilat juga buat Mobile biar keren */}
                  <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out z-0"></span>
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-2 pb-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Informasi & Akses</p>
              {utilityLinks.map((item, index) => (
                <a key={`util-${index}`} href="#" onClick={(e) => handleMenuClick(e, item.pageId)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:pl-6 transition-all duration-300">{item.name}</a>
              ))}
              
              <a href="#" onClick={(e) => handleMenuClick(e, 'login')} className="relative overflow-hidden group mt-2 mx-4 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-sm">
                <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/20 backdrop-blur-md transition-all duration-500 z-0"></span>
                <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                  Login Admin
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================================
          3. RUNNING TEXT TICKER (Tanpa Border)
          ========================================= */}
      <div 
        className="w-full backdrop-blur-md text-slate-900 py-2 relative z-10"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)' 
        }}
      >
        <div className="container mx-auto px-6 max-w-[1400px] flex items-center">
          
          {/* Ikon Pengumuman */}
          <div className="flex items-center gap-2 shrink-0 mr-4 font-black text-[11px] uppercase tracking-wider bg-slate-900/90 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full shadow-sm">
            <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
            INFO SINTARAMA
          </div>
          
          {/* Container Animasi Marquee */}
          <div className="flex-1 overflow-hidden whitespace-nowrap relative cursor-default">
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(100%); }
                  100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                  display: inline-block;
                  animation: marquee 35s linear infinite;
                  will-change: transform;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
            
            {/* Teks Berjalan */}
            <div className="animate-marquee text-xs md:text-sm font-bold tracking-wide drop-shadow-sm">
              ✦ Selamat Datang di SINTARAMA (Sistem Informasi Tata Ruang Masyarakat) Kabupaten Grobogan. 
              ✦ Pusat Layanan Informasi dan Pengaduan Infrastruktur Pekerjaan Umum dan Penataan Ruang Wilayah Purwodadi, Grobogan. 
              ✦ Mari Bersama Mewujudkan Penataan Ruang yang Aman, Nyaman, Produktif, dan Berkelanjutan. 
              ✦ Sampaikan pengaduan infrastruktur Anda melalui kanal "Lapor Solusi AWP" untuk respon cepat dari Dinas PUPR.
            </div>
          </div>

        </div>
      </div>

    </header>
  );
};

export default NavbarPUPR;
