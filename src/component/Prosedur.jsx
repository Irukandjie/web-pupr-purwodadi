import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal'; // Asumsi kamu masih pakai ini untuk animasi

export default function ProsedurPage() {
  const [activeTab, setActiveTab] = useState('ketataruangan');

  const menuItems = [
    { id: 'ketataruangan', label: 'Prosedur Ketataruangan', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'informasi', label: 'Permohonan Informasi', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'pengaduan', label: 'Pengaduan Tata Ruang', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' },
    { id: 'pertimbangan', label: 'Pertimbangan Teknis', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'pengendalian', label: 'Pengendalian Teknis', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  ];

  // Reusable Input Component biar rapi
  const InputGroup = ({ label, type = "text", placeholder, disabled = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all ${disabled ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-white border-gray-300'}`}
      />
    </div>
  );

  const FileGroup = ({ label }) => (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <input 
        type="file" 
        className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 border border-gray-300 rounded-lg bg-white"
      />
    </div>
  );

  const CaptchaBox = ({ code }) => (
    <div className="mb-6 mt-2">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Capcha (Jika Sama Maka Tombol Akan Aktif)</label>
      <div className="bg-gray-300 text-gray-800 font-bold tracking-widest px-4 py-2 mb-2 rounded w-full">
        {code}
      </div>
      <input type="text" placeholder="Masukkan Capcha" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
    </div>
  );

  const MapButton = () => (
    <div className="flex justify-center my-6">
      <button type="button" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md transition-colors flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        Tampilkan Peta
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Layanan & Prosedur <span className="text-red-600">SINTARAMA</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Pilih layanan atau prosedur tata ruang yang Anda butuhkan melalui menu di bawah ini.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* ================= SIDEBAR MENU ================= */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 lg:sticky lg:top-28">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-semibold transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'bg-red-50 text-red-600 border border-red-100 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-red-500'
                  }`}
                >
                  <svg className={`w-5 h-5 ${activeTab === item.id ? 'text-red-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} />
                  </svg>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ================= CONTENT AREA ================= */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="up">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                
                {/* --- 1. PROSEDUR KETATARUANGAN (VIDEO) --- */}
                {activeTab === 'ketataruangan' && (
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-4">Prosedur Ketataruangan</h2>
                    <div className="space-y-8">
                      {/* Video 1 */}
                      <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-3">1. Grobogan</h3>
                        <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                          {/* Ganti src dengan link video asli nanti */}
                          <video controls className="w-full h-full object-cover">
                            <source src="#" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      {/* Video 2 */}
                      <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-3">2. Kab Grobogan</h3>
                        <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                          <video controls className="w-full h-full object-cover">
                            <source src="#" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 2. PERMOHONAN INFORMASI --- */}
                {activeTab === 'informasi' && (
                  <form>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center uppercase tracking-wide">Form Permohonan Informasi Tata Ruang</h2>
                    <InputGroup label="Nama" placeholder="Nama" />
                    <InputGroup label="Alamat" placeholder="Alamat" />
                    <InputGroup label="No Identitas" placeholder="Identitas" />
                    <FileGroup label="KTP / SIM" />
                    <InputGroup label="Nomor HP (wa aktif)" placeholder="Nomor HP (wa aktif)" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Latitude" placeholder="Latitude" disabled />
                      <InputGroup label="Longitude" placeholder="Longitude" disabled />
                    </div>
                    
                    <MapButton />
                    
                    <InputGroup label="No Sertifikat" placeholder="No Sertifikat" />
                    <FileGroup label="File Sertifikat (PDF)" />
                    <InputGroup label="Peruntukkan Kegiatan" placeholder="Peruntukkan Kegiatan" />
                    
                    <CaptchaBox code="A7F9X2" />
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mt-4">Kirim Permohonan</button>
                  </form>
                )}

                {/* --- 3. PENGADUAN TATA RUANG --- */}
                {activeTab === 'pengaduan' && (
                  <form>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center uppercase tracking-wide">Form Pengaduan Tata Ruang</h2>
                    <InputGroup label="Nama" placeholder="Nama" />
                    <InputGroup label="Alamat" placeholder="Alamat" />
                    <InputGroup label="No Identitas" placeholder="Identitas" />
                    <FileGroup label="KTP / SIM" />
                    <InputGroup label="Nomor HP (wa aktif)" placeholder="Nomor HP (wa aktif)" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Latitude" placeholder="Latitude" disabled />
                      <InputGroup label="Longitude" placeholder="Longitude" disabled />
                    </div>
                    
                    <MapButton />
                    
                    <FileGroup label="Foto Lokasi" />
                    <InputGroup label="Pengaduan" placeholder="Pengaduan" />
                    
                    <CaptchaBox code="CS4BAL" />
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mt-4">Kirim Pengaduan</button>
                  </form>
                )}

                {/* --- 4. PERTIMBANGAN TEKNIS --- */}
                {activeTab === 'pertimbangan' && (
                  <form>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center uppercase tracking-wide">Form Permohonan Pertimbangan Teknis Tata Ruang</h2>
                    <InputGroup label="Nama" placeholder="Nama" />
                    <InputGroup label="Alamat" placeholder="Alamat" />
                    <InputGroup label="No Identitas" placeholder="Identitas" />
                    <FileGroup label="KTP / SIM" />
                    <InputGroup label="Nomor HP (wa aktif)" placeholder="Nomor HP (wa aktif)" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Latitude" placeholder="Latitude" disabled />
                      <InputGroup label="Longitude" placeholder="Longitude" disabled />
                    </div>
                    
                    <MapButton />
                    
                    <InputGroup label="No Sertifikat" placeholder="No Sertifikat" />
                    <FileGroup label="File Sertifikat (PDF)" />
                    <FileGroup label="Denah Lokasi" />
                    <InputGroup label="Kondisi Eksisting" placeholder="Kondisi Eksisting" />
                    <InputGroup label="Peruntukkan Kegiatan" placeholder="Peruntukkan Kegiatan" />
                    
                    <CaptchaBox code="BU5D6H" />
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mt-4">Kirim Permohonan</button>
                  </form>
                )}

                {/* --- 5. PENGENDALIAN TEKNIS --- */}
                {activeTab === 'pengendalian' && (
                  <form>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center uppercase tracking-wide">Form Pengaduan Pengendalian Teknis Tata Ruang</h2>
                    <InputGroup label="Nama" placeholder="Nama" />
                    <InputGroup label="Alamat" placeholder="Alamat" />
                    <InputGroup label="No Identitas" placeholder="Identitas" />
                    <FileGroup label="KTP / SIM" />
                    <InputGroup label="Nomor HP (wa aktif)" placeholder="Nomor HP (wa aktif)" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Latitude" placeholder="Latitude" disabled />
                      <InputGroup label="Longitude" placeholder="Longitude" disabled />
                    </div>
                    
                    <MapButton />
                    
                    <FileGroup label="Foto Lokasi" />
                    <InputGroup label="Pelanggaran" placeholder="Pelanggaran" />
                    
                    <CaptchaBox code="TWYHDN" />
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mt-4">Kirim Pengaduan</button>
                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}