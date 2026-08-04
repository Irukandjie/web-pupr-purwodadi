import React from 'react';

const LoginAdmin = ({ onNavigate }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('admin-dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 relative z-10 mx-4">
        <div className="flex flex-col items-center mb-8">
          <img src="https://i.ibb.co.com/MyjRST6N/IMG-20260730-WA0012-1785396069965.jpg" alt="Logo SINTARAMA" className="h-20 object-contain mb-4 drop-shadow-sm" />
          <h2 className="text-2xl font-black text-slate-800 tracking-tight text-center">SINTARAMA</h2>
          <p className="text-xs font-bold text-gray-400 mt-1 tracking-widest uppercase">Admin Panel Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Username / Email</label>
            <div className="relative">
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <input type="text" placeholder="Masukkan username admin" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all" required />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-slate-700">Password</label>
              <a href="#" className="text-xs font-bold text-red-600 hover:text-amber-500 transition-colors">Lupa Password?</a>
            </div>
            <div className="relative">
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <input type="password" placeholder="Masukkan password" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-red-500/50 focus:border-red-500 outline-none transition-all" required />
            </div>
          </div>
          <div className="pt-2">
            
            <button type="submit" className="relative overflow-hidden group w-full py-3.5 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:-translate-y-0.5 transition-all duration-500 flex items-center justify-center gap-2">
              {/* Efek Liquid Glass */}
              <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/20 backdrop-blur-md transition-all duration-500 z-0"></span>
              <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out z-0"></span>

              <span className="relative z-10 flex items-center gap-2">
                Masuk ke Dashboard
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </button>

          </div>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500 font-medium">
            Bukan admin? <button onClick={() => onNavigate && onNavigate('landing')} className="text-red-600 font-bold hover:text-amber-500 transition-colors outline-none">Kembali ke Beranda</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
