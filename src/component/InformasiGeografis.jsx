import React from 'react';
import ScrollReveal from './ScrollReveal';

const InformasiGeografis = () => {
  const batasWilayah = [
    { arah: 'Utara', wilayah: 'Kab. Kudus, Pati & Blora', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
    { arah: 'Timur', wilayah: 'Kabupaten Blora', icon: 'M14 5l7 7m0 0l-7 7m7-7H3' },
    { arah: 'Selatan', wilayah: 'Kab. Ngawi, Sragen, Boyolali & Semarang', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
    { arah: 'Barat', wilayah: 'Kab. Semarang & Demak', icon: 'M10 19l-7-7m0 0l7-7m-7 7h18' },
  ];

  const jarakKota = [
    { kota: 'Semarang', jarak: '± 64 Km' },
    { kota: 'Demak', jarak: '± 39 Km' },
    { kota: 'Kudus', jarak: '± 45 Km' },
    { kota: 'Pati', jarak: '± 45 Km' },
    { kota: 'Blora', jarak: '± 64 Km' },
    { kota: 'Sragen', jarak: '± 64 Km' },
    { kota: 'Surakarta', jarak: '± 64 Km' },
  ];

  // Data ini sudah disesuaikan dengan gambar
  const dataKecamatan = [
    { no: 1, nama: 'Kedungjati', desa: 12, dusun: 76, luas: '130,342' },
    { no: 2, nama: 'Karangrayung', desa: 19, dusun: 100, luas: '140,595' },
    { no: 3, nama: 'Penawangan', desa: 20, dusun: 71, luas: '74,177' },
    { no: 4, nama: 'Toroh', desa: 16, dusun: 118, luas: '119,320' },
    { no: 5, nama: 'Geyer', desa: 13, dusun: 102, luas: '196,192' },
    { no: 6, nama: 'Pulokulon', desa: 13, dusun: 112, luas: '133,644' },
    { no: 7, nama: 'Kradenan', desa: 14, dusun: 79, luas: '107,748' },
    { no: 8, nama: 'Gabus', desa: 14, dusun: 87, luas: '165,365' },
    { no: 9, nama: 'Ngaringan', desa: 12, dusun: 78, luas: '116,720' },
    { no: 10, nama: 'Wirosari', desa: 14, dusun: 86, luas: '154,298' },
    { no: 11, nama: 'Tawangharjo', desa: 10, dusun: 58, luas: '83,602' },
    { no: 12, nama: 'Grobogan', desa: 12, dusun: 52, luas: '104,556' },
    { no: 13, nama: 'Purwodadi', desa: 17, dusun: 104, luas: '77,656' },
    { no: 14, nama: 'Brati', desa: 9, dusun: 51, luas: '54,891' },
    { no: 15, nama: 'Klambu', desa: 9, dusun: 44, luas: '46,562' },
    { no: 16, nama: 'Godong', desa: 28, dusun: 86, luas: '86,780' },
    { no: 17, nama: 'Gubug', desa: 21, dusun: 63, luas: '71,119' },
    { no: 18, nama: 'Tegowanu', desa: 18, dusun: 54, luas: '51,670' },
    { no: 19, nama: 'Tanggungharjo', desa: 9, dusun: 31, luas: '60,628' }
  ];

  return (
    <section id="sistem-informasi" className="py-24 bg-slate-50 relative min-h-screen">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-red-700 font-black text-[10px] tracking-widest uppercase mb-4 shadow-sm border border-red-200">
            Profil Daerah
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-6">
            Informasi Geografis & Tata Ruang
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Mengenal lebih dekat letak astronomis, batas wilayah, serta pembagian wilayah administratif Kabupaten Grobogan.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <ScrollReveal direction="up" delay="delay-100" className="lg:col-span-2 flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-full h-[350px] bg-slate-200 relative border-b border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126685.27552253018!2d110.83515091722881!3d-7.135075685375369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70b7596dc5b169%3A0x4027a76e352f200!2sPurwodadi%2C%20Grobogan%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="absolute inset-0 filter contrast-125"></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-red-100">
                <span className="flex items-center gap-2 text-sm font-bold text-red-700">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Purwodadi, Grobogan
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Pusat Pemerintahan & Topografi</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ibukota berada di Purwodadi. Secara geografis terletak di antara <strong className="text-red-600">110°15’ BT – 111°25’ BT</strong> dan <strong className="text-red-600">7° LS - 7°30’ LS</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Kotak Merah Solid untuk Luas Wilayah (Sangat Merah Putih) */}
          <ScrollReveal direction="up" delay="delay-300" className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-8 shadow-lg text-white h-full relative overflow-hidden group border border-red-600">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="mb-8">
                <p className="text-red-200 text-sm font-bold tracking-widest uppercase mb-1">Luas Wilayah (EPT 1983)</p>
                <h3 className="text-4xl font-black text-white flex items-baseline gap-2">
                  1.975,86 <span className="text-lg font-semibold text-amber-400">Km²</span>
                </h3>
                <span className="inline-block mt-3 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
                  Terluas ke-2 di Jawa Tengah
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-red-500/50 pt-6">
                <div>
                  <p className="text-red-200 text-[11px] font-bold uppercase tracking-wider mb-1">Utara - Selatan</p>
                  <p className="text-2xl font-bold text-white">± 37 Km</p>
                </div>
                <div>
                  <p className="text-red-200 text-[11px] font-bold uppercase tracking-wider mb-1">Barat - Timur</p>
                  <p className="text-2xl font-bold text-white">± 83 Km</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Tabel Administrasi */}
        <ScrollReveal direction="up" delay="delay-500">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mt-8">
            <div className="p-8 pb-6 border-b border-gray-100 flex justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Wilayah Administratif</h3>
                <p className="text-slate-500 mt-2 text-sm max-w-2xl">Terdiri dari 273 desa dan 7 kelurahan di 19 kecamatan.</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-red-50 border-b border-red-100">
                    <th className="px-6 py-4 text-[11px] font-black text-red-700 uppercase tracking-wider">No</th>
                    <th className="px-6 py-4 text-[11px] font-black text-red-700 uppercase tracking-wider">Kecamatan</th>
                    <th className="px-6 py-4 text-[11px] font-black text-red-700 uppercase tracking-wider text-center">Jml Desa/Kel</th>
                    <th className="px-6 py-4 text-[11px] font-black text-red-700 uppercase tracking-wider text-center">Jml Dusun/Lingk</th>
                    <th className="px-6 py-4 text-[11px] font-black text-red-700 uppercase tracking-wider text-right">Luas (Km²)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dataKecamatan.map((kec) => (
                    <tr key={kec.no} className="hover:bg-red-50/50 transition-colors group">
                      <td className="px-6 py-3.5 text-sm font-medium text-gray-500">{kec.no}</td>
                      <td className="px-6 py-3.5 text-sm font-bold text-slate-700 group-hover:text-red-600">{kec.nama}</td>
                      <td className="px-6 py-3.5 text-sm font-medium text-gray-600 text-center">{kec.desa}</td>
                      <td className="px-6 py-3.5 text-sm font-medium text-gray-600 text-center">{kec.dusun}</td>
                      <td className="px-6 py-3.5 text-sm font-bold text-slate-700 text-right">{kec.luas}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-red-700 text-white">
                    <td colSpan="2" className="px-6 py-4 text-sm font-black uppercase text-right">Total Keseluruhan</td>
                    <td className="px-6 py-4 text-sm font-bold text-center text-amber-400">280</td>
                    <td className="px-6 py-4 text-sm font-bold text-center text-amber-400">1.451</td>
                    <td className="px-6 py-4 text-sm font-bold text-right text-amber-400">1.975,865</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default InformasiGeografis;