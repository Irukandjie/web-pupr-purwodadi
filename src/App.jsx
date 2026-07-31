import React, { useState, useEffect } from 'react';

// Import semua komponen
import LoadingScreen from './component/LoadingScreen.jsx';
import NavbarPUPR from './component/navbar.jsx';
import HeroSection from './component/hero.jsx';
import SambutanSection from './component/sambutan.jsx';
import ServicesSection from './component/services.jsx';

function App() {
  // State buat ngontrol layar loading
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Setting durasi loading layarnya (di sini diset 2000ms / 2 detik)
    const timer = setTimeout(() => {
      // 1. Mulai efek menghilang perlahan (fade out)
      setIsFadingOut(true); 
      
      // 2. Tunggu efek fade out selesai (sekitar 0.7 detik), baru hapus komponennya dari memori
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
      
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Panggil Loading Screen di luar container halaman biar nutupin full layar */}
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}

      {/* Konten Utama Website */}
      <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
        <NavbarPUPR />
        <HeroSection />
        <SambutanSection />
        <ServicesSection />
      </div>
    </>
  );
}

export default App;