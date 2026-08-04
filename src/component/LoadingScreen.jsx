import React from 'react';

const LoadingScreen = ({ isFadingOut }) => {
  return (
    // Durasi fade-out dicepetin jadi duration-300 biar pindah tabnya gesit & snapy
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCF5F5] transition-opacity duration-300 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* CSS custom untuk efek logo terisi (clip-path inset dari bawah ke atas) */}
      <style>
        {`
          @keyframes fillUp {
            0% { clip-path: inset(100% 0 0 0); filter: brightness(1.2); }
            60% { clip-path: inset(0 0 0 0); filter: brightness(1); }
            100% { clip-path: inset(0 0 0 0); filter: brightness(1); } /* Jeda sebentar pas penuh biar keliatan logo utuhnya */
          }
          .animate-fill-logo {
            animation: fillUp 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          }
        `}
      </style>
      
      {/* Container Logo - Diubah jadi tumpukan (stack) 2 gambar */}
      <div className="relative mb-6 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
        
        {/* 1. Logo Dasar (Background) - Hitam putih transparan sebagai cetakan */}
        <img 
          src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
          alt="Logo Outline" 
          className="absolute inset-0 w-full h-full object-contain grayscale opacity-20 drop-shadow-sm"
        />
        
        {/* 2. Logo Berwarna (Foreground) - Muncul mengisi dari bawah ke atas */}
        <img 
          src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
          alt="Logo DPUPR Purwodadi" 
          className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl animate-fill-logo"
        />
        
        {/* Ornamen ping biar tetap ada sinyal loading halus di belakang */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-400/20 animate-ping"></div>
      </div>

      {/* Teks Pesan */}
      <p className="text-gray-600 font-extrabold text-[13px] md:text-sm tracking-widest uppercase animate-pulse mt-4">
        Sabar Sebentar ya sistemnya lagi nyiapin data...
      </p>
      
    </div>
  );
};

export default LoadingScreen;
