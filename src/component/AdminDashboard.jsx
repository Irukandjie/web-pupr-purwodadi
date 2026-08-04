import React, { useState } from 'react';

const AdminDashboard = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  // --- STATE BARU UNTUK TOGGLE SIDEBAR DI MOBILE ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- STATE UNTUK POPUP MODAL ---
  const [isBeritaModalOpen, setIsBeritaModalOpen] = useState(false);
  const [isDokumenModalOpen, setIsDokumenModalOpen] = useState(false);

  // Dummy Data untuk preview UI
  const [berita, setBerita] = useState([
    { id: 1, judul: 'Penandatanganan Kontrak Pembangunan Jalan', kategori: 'Kegiatan', tanggal: '01 Des 2020', status: 'Published' },
    { id: 2, judul: 'Peningkatan Jalan Monggot-Bangsri', kategori: 'Infrastruktur', tanggal: '30 Nov 2020', status: 'Published' },
  ]);

  const [dasarHukum, setDasarHukum] = useState([
    { id: 1, judul: 'UU Nomor 26 Tahun 2007', file: '908235_UU_No_26.pdf', ukuran: '2.4 MB', tanggal: '26 Apr 2007' },
    { id: 2, judul: 'Permen PU No. 16/PRT/M/2009', file: '281160_PermenPU.pdf', ukuran: '1.8 MB', tanggal: '27 Jul 2009' },
  ]);

  const menuList = [
    { id: 'dashboard', name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'berita', name: 'Kelola Berita', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15' },
    { id: 'dasar-hukum', name: 'Dasar Hukum', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'album-foto', name: 'Album Foto', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'tampilan', name: 'Pengaturan Tampilan', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans relative overflow-hidden">
      
      {/* --- OVERLAY UNTUK MOBILE SAAT SIDEBAR DIBUKA --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR DIBIKIN RESPONSIVE (Absolute di mobile, Relative di Desktop) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg shrink-0">
              <img 
                src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" 
                alt="Logo SINTARAMA" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wider">SINTARAMA</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Admin Panel</p>
            </div>
          </div>
          {/* Tombol Tutup Sidebar untuk Mobile */}
          <button 
            className="md:hidden text-gray-400 hover:text-white p-1"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuList.map((menu) => (
            <button
              key={menu.id}
              onClick={() => {
                setActiveMenu(menu.id);
                setIsSidebarOpen(false); // Tutup sidebar otomatis pas menu diklik (di HP)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold ${
                activeMenu === menu.id 
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menu.icon} />
              </svg>
              {menu.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => onNavigate && onNavigate('landing')}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors text-sm font-bold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 z-10 shrink-0">
          <div className="flex items-center gap-4">
            {/* TOMBOL HAMBURGER KHUSUS MOBILE */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 capitalize truncate max-w-[150px] md:max-w-none">
              {menuList.find(m => m.id === activeMenu)?.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="relative p-2 text-gray-400 hover:text-red-600 transition-colors hidden sm:block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 sm:pl-4 sm:border-l border-gray-200">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800">Admin DPUPR</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Super Admin</p>
              </div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold overflow-hidden shadow-md">
                A
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT VIEW */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          
          {/* --- VIEW: DASHBOARD --- */}
          {activeMenu === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: 'Total Berita', count: '124', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15', color: 'blue' },
                  { label: 'Dokumen', count: '45', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'red' },
                  { label: 'Album Foto', count: '18', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'amber' },
                  { label: 'Visitor', count: '12.4k', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', color: 'emerald' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600 shrink-0`}>
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} /></svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-bold text-gray-400">{stat.label}</p>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800">{stat.count}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-8 flex items-center justify-center h-48 md:h-64">
                <p className="text-gray-400 font-bold text-sm md:text-base text-center">Area Grafik Statistik Kunjungan<br/><span className="text-xs">(Integrasi Chart.js)</span></p>
              </div>
            </div>
          )}

          {/* --- VIEW: KELOLA BERITA --- */}
          {activeMenu === 'berita' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col w-full">
              <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50">
                <div className="relative w-full md:w-auto">
                  <input type="text" placeholder="Cari berita..." className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-red-500 outline-none" />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <button 
                  onClick={() => setIsBeritaModalOpen(true)}
                  className="w-full md:w-auto bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-red-700 flex justify-center items-center gap-2 transition-colors shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  Tambah Berita
                </button>
              </div>
              {/* WRAPPER OVERFLOW-X UNTUK TABEL DI MOBILE */}
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-white border-b border-gray-100">
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Judul Berita</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Kategori</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Tanggal</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {berita.map((b) => (
                      <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-800 whitespace-normal min-w-[250px]">{b.judul}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap"><span className="bg-gray-100 px-2.5 py-1 rounded text-xs font-bold">{b.kategori}</span></td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{b.tanggal}</td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap"><span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded text-xs font-bold">{b.status}</span></td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2 whitespace-nowrap">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                          <button className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- VIEW: KELOLA DASAR HUKUM --- */}
          {activeMenu === 'dasar-hukum' && (
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col w-full">
              <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50">
                <h3 className="font-bold text-slate-800">Daftar Dokumen PDF</h3>
                <button 
                  onClick={() => setIsDokumenModalOpen(true)}
                  className="w-full sm:w-auto bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-red-700 flex justify-center items-center gap-2 transition-colors shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  Upload Dokumen
                </button>
              </div>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-white border-b border-gray-100">
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Judul Dokumen</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Nama File</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider">Ukuran</th>
                      <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-wider text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {dasarHukum.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-800 min-w-[200px]">{doc.judul}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-2 min-w-[200px]"><svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> <span className="truncate">{doc.file}</span></td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{doc.ukuran}</td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2 whitespace-nowrap">
                          <button className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- VIEW: PENGATURAN TAMPILAN --- */}
          {activeMenu === 'tampilan' && (
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-4 md:p-8">
               <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 border-b border-gray-100 pb-4">Pengaturan Visual Website</h3>
               <form className="space-y-6 max-w-3xl">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Gambar Background Hero (Beranda)</label>
                   <div className="flex flex-col sm:flex-row gap-3">
                     <input type="text" defaultValue="https://images.unsplash.com/photo-1541888049-74d320fb7240..." className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all" />
                     <button type="button" className="px-4 py-2.5 bg-slate-800 text-white font-bold text-sm rounded-lg hover:bg-slate-700 w-full sm:w-auto">Preview</button>
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Foto Kepala Dinas (Halaman Sambutan)</label>
                   <div className="flex flex-col sm:flex-row gap-3">
                     <input type="text" defaultValue="https://placehold.co/400x550/dc2626/ffffff?text=Foto+Kadin" className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all" />
                     <button type="button" className="px-4 py-2.5 bg-slate-800 text-white font-bold text-sm rounded-lg hover:bg-slate-700 w-full sm:w-auto">Preview</button>
                   </div>
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Teks Sambutan Kepala Dinas</label>
                   <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all" defaultValue="Website Dinas Pekerjaan Umum Kabupaten Purwodadi hadir sebagai sarana informasi publik..."></textarea>
                 </div>
                 <div className="pt-6 border-t border-gray-100">
                   <button type="button" className="w-full sm:w-auto px-8 py-3.5 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all">
                     Simpan Perubahan
                   </button>
                 </div>
               </form>
             </div>
          )}

          {/* --- VIEW: ALBUM FOTO --- */}
          {activeMenu === 'album-foto' && (
            <div className="bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm p-8 md:p-16 flex flex-col items-center justify-center text-center">
               <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
               <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Modul Galeri Belum Aktif</h3>
               <p className="text-gray-500 text-sm max-w-md">Klik tombol di bawah untuk mengaktifkan modul drag-and-drop galeri foto.</p>
               <button className="mt-6 px-6 py-2.5 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 w-full sm:w-auto">Aktifkan Modul</button>
            </div>
          )}

        </div>
      </main>

      {/* ==========================================================
          MODAL: TAMBAH BERITA (Responsif)
          ========================================================== */}
      {isBeritaModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] md:max-h-[85vh]">
            
            <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl shrink-0">
              <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                Tambah Berita Baru
              </h3>
              <button onClick={() => setIsBeritaModalOpen(false)} className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-lg hover:bg-red-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-5 flex-1 custom-scrollbar">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Judul Berita</label>
                <input type="text" placeholder="Masukkan judul berita..." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:bg-white bg-gray-50 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Upload Gambar</label>
                  <input type="file" accept="image/*" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600 file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-red-50 file:text-red-600 hover:file:bg-red-100 transition-all outline-none cursor-pointer" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Kategori Berita</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all cursor-pointer">
                    <option value="">-- Pilih Kategori --</option>
                    <option value="kegiatan">Kegiatan</option>
                    <option value="infrastruktur">Infrastruktur</option>
                    <option value="pengumuman">Pengumuman</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Ringkasan Berita</label>
                <textarea rows="2" placeholder="Tulis sedikit ringkasan untuk ditampilkan di halaman depan..." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:bg-white bg-gray-50 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all resize-none"></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Isi Full Berita</label>
                <textarea rows="5" placeholder="Ketik detail isi berita selengkapnya di sini..." className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:bg-white bg-gray-50 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all"></textarea>
              </div>
            </div>

            <div className="px-4 md:px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3 bg-gray-50 rounded-b-2xl shrink-0">
              <button onClick={() => setIsBeritaModalOpen(false)} className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-lg transition-colors order-2 sm:order-1">
                Batal
              </button>
              <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2 order-1 sm:order-2">
                Simpan & Publish
              </button>
            </div>
            
          </div>
        </div>
      )}

      {/* ==========================================================
          MODAL: UPLOAD DOKUMEN (Responsif)
          ========================================================== */}
      {isDokumenModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col">
            
            <div className="px-4 md:px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
              <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                Upload Dokumen Baru
              </h3>
              <button onClick={() => setIsDokumenModalOpen(false)} className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-lg hover:bg-red-50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Judul / Nama Dokumen</label>
                <input type="text" placeholder="Misal: SK Bupati Tahun 2024" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:bg-white bg-gray-50 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Upload File (.pdf)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-red-50 hover:border-red-300 transition-colors cursor-pointer relative">
                  <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p className="text-sm font-bold text-slate-700">Klik untuk mencari file PDF</p>
                  <p className="text-xs text-gray-500 mt-1">Maksimal ukuran file 5MB</p>
                  <input type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="px-4 md:px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3 bg-gray-50 rounded-b-2xl">
              <button onClick={() => setIsDokumenModalOpen(false)} className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-lg transition-colors order-2 sm:order-1">
                Batal
              </button>
              <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2 order-1 sm:order-2">
                Upload File
              </button>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
