import React from 'react';

const LoadingScreen = ({ isFadingOut }) => {
  return (
    // z-[9999] mastiin loading screen ini posisinya selalu paling depan nutupin apapun
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCF5F5] transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* CSS custom untuk bikin efek loading bar yang jalan bolak-balik / meluncur */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-slide-bar {
            animation: slide 1.5s infinite ease-in-out;
          }
        `}
      </style>
      
      {/* Logo dengan animasi pulse tipis */}
      <div className="relative mb-10">
        <img 
          src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
          alt="Logo DPUPR Purwodadi" 
          className="h-28 md:h-36 object-contain drop-shadow-2xl animate-pulse relative z-10"
        />
        {/* Ornamen ping biar berasa ada sinyal loading di belakang logo */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
      </div>

      {/* Loading Bar Container */}
      <div className="w-64 h-1.5 bg-gray-300 rounded-full overflow-hidden mb-6 relative shadow-inner">
        {/* Bar biru yang meluncur */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 rounded-full animate-slide-bar"></div>
      </div>

      {/* Teks Pesan dari lu */}
      <p className="text-gray-600 font-extrabold text-[13px] md:text-sm tracking-widest uppercase animate-pulse">
        Sabar ya sistem lagi direfresh...
      </p>
      
    </div>
  );
};

export default LoadingScreen;