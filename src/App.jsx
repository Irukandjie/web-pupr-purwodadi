import React, { useState, useEffect } from 'react';

// IMPORT SEMUA KOMPONEN
import NavbarPUPR from './component/navbar'; 
import LandingPage from './component/Landingpage'; 
import InformasiGeografis from './component/InformasiGeografis';
import BeritaSection from './component/berita';
import LoadingScreen from './component/LoadingScreen';
import SambutanSection from './component/sambutan';
import ProsedurPage from './component/Prosedur'; 

// IMPORT KOMPONEN ADMIN
import LoginAdmin from './component/LoginAdmin';
import AdminDashboard from './component/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Initial load saat pertama kali website dibuka
  useEffect(() => {
    const timer1 = setTimeout(() => setIsFadingOut(true), 2000); 
    const timer2 = setTimeout(() => setIsLoading(false), 2300); 
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  // Fungsi navigasi dengan efek loading cepat (ngebut biar keren) saat pindah halaman/tab
  const handleNavigation = (pageId) => {
    // Jangan trigger loading kalau klik halaman yang sama
    if (currentPage === pageId) return;

    setIsLoading(true);
    setIsFadingOut(false);

    // Simulasi loading cepat (total cuma ~700ms)
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 400); // 400ms loading nampil

    const timer2 = setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, 700); // 300ms buat fade-out, total pas 700ms

    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white min-h-screen">
      
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
      
      <NavbarPUPR onNavigate={handleNavigation} />

      {/* --- Padding Top disesuaikan karena Navbar ada tambahan Running Text --- */}
      <main className="pt-[110px] md:pt-[140px]">
        
        {currentPage === 'landing' && <LandingPage onNavigate={handleNavigation} />}

        {currentPage === 'selayang-pandang' && (
          <div className="min-h-screen flex items-center justify-center pt-10 pb-10 bg-slate-50">
            <SambutanSection />
          </div>
        )}

        {currentPage === 'geografis' && <InformasiGeografis />}
        {currentPage === 'berita' && <BeritaSection />}
        {currentPage === 'prosedur' && <ProsedurPage />}

        {['sekilas-info'].includes(currentPage) && (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
            <span className="px-5 py-2 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-6 shadow-sm border border-red-200">
              Dalam Pengembangan
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
              Halaman Segera Hadir
            </h1>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Halaman ini sedang dalam tahap pengumpulan data dan penyusunan sistem.
            </p>
            <button onClick={() => handleNavigation('landing')} className="px-8 py-3.5 bg-red-600 text-white border-2 border-red-600 font-bold rounded-full shadow-lg hover:bg-amber-500 hover:border-amber-500 hover:-translate-y-1 transition-all duration-300">
              Kembali ke Beranda
            </button>
          </div>
        )}

        {/* =========================================
            HALAMAN OVERLAY (LOGIN / DASHBOARD ADMIN)
            ========================================= */}
        {currentPage === 'login' && (
          <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
            <LoginAdmin onNavigate={handleNavigation} />
          </div>
        )}

        {currentPage === 'admin-dashboard' && (
          <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
            <AdminDashboard onNavigate={handleNavigation} />
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
