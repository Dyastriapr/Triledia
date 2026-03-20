'use client';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Code, 
  Share2, 
  CheckCircle2,
  Users,
  Award,
  Zap,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';

/**
 * --- NavbarLP ---
 * Navbar dengan latar belakang hitam pekat dan dropdown pada menu Layanan.
 */
const NavbarLP = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#' },
    { 
      name: 'Layanan', 
      href: '#',
      dropdown: [
        { name: 'Web Development', href: '#' },
        { name: 'Sosial Media Management', href: '/sosial-media-management' },
        { name: 'UI/UX Design', href: '#' },
      ]
    },
    { name: 'Portfolio', href: '#' },
    { name: 'Afiliasi', href: '#' },
    
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-[#0F0F10] ${
      scrolled 
        ? 'py-4 border-b border-white/5 shadow-2xl' 
        : 'py-8 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-black tracking-tighter text-white group">
          TRILEDIA<span className="text-[#E1DEE7] group-hover:text-white transition-colors">.ID</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/nav-item">
              <a 
                href={link.href} 
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all py-2"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown size={12} className="group-hover/nav-item:rotate-180 transition-transform duration-300" />
                )}
              </a>

              {/* Dropdown Desktop */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-300">
                  <div className="bg-[#161618] border border-white/10 rounded-2xl p-2 min-w-[260px] shadow-2xl overflow-hidden backdrop-blur-xl">
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="flex items-center justify-between px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-all group/sub"
                      >
                        {sub.name}
                        <ExternalLink size={10} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button className="bg-white text-black px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#E1DEE7] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
            Kontak
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0F0F10] z-[-1] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-6 w-full px-8">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full text-center">
              <a 
                href={link.href} 
                className="text-3xl font-black text-white block mb-2"
                onClick={link.dropdown ? undefined : () => setIsOpen(false)}
              >
                {link.name}
              </a>
              {link.dropdown && (
                <div className="flex flex-col gap-3 py-4 mt-2 border-y border-white/5 bg-white/5 rounded-2xl">
                  {link.dropdown.map(sub => (
                    <a 
                      key={sub.name} 
                      href={sub.href} 
                      className="text-[10px] font-bold uppercase tracking-widest text-white/40 active:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-6 bg-white text-black w-full py-5 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl">
            Mulai Konsultasi
          </button>
        </div>
      </div>
    </nav>
  );
};

/**
 * --- Hero ---
 * Bagian utama dengan visual abstrak dan tagline.
 */
const Hero = () => (
  <section className="relative min-h-screen bg-[#a81414] pt-48 pb-24 overflow-hidden flex items-center">
    {/* Efek Pendaran Latar Belakang */}
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[140px] animate-pulse" />
    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#E1DEE7]/10 rounded-full blur-[120px]" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <div className="space-y-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          <Sparkles size={14} className="text-[#E1DEE7]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E1DEE7]">Digital Creative Agency</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] text-white">
          Solusi Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1DEE7] via-white to-[#8E8A9A]">
             Terpercaya 
          </span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed font-light">
          Ubah ide rumit menjadi <span className="text-white italic underline decoration-white/20">solusi digital elegan</span>. Kami membangun produk yang dicintai pengguna dan mempercepat pertumbuhan bisnis Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#E1DEE7] transition-all transform hover:scale-105 flex items-center justify-center gap-2 group shadow-xl">
            Konsultasi Gratis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-transparent text-white border border-white/20 font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-all flex items-center justify-center">
            Lihat Portfolio
          </button>
        </div>
      </div>

      {/* Visual Samping */}
      <div className="relative hidden lg:flex justify-center items-center">
        <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-sm overflow-hidden rotate-3 relative group transition-transform duration-700 hover:rotate-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
            <Users size={200} className="text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-transparent to-transparent" />
        </div>

        {/* Floating Cards */}
        <div className="absolute -left-12 top-1/4 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl animate-bounce-slow">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black mb-3">
            <Code size={24} />
          </div>
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Tech Stack</p>
          <p className="text-sm font-black text-white">Expert Engineering</p>
        </div>

        <div className="absolute -right-8 bottom-1/4 bg-white p-6 rounded-3xl shadow-2xl animate-pulse">
          <div className="w-12 h-12 bg-[#0F0F10] rounded-2xl flex items-center justify-center text-white mb-3">
            <Share2 size={24} />
          </div>
          <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Strategy</p>
          <p className="text-sm font-black text-black">Growth Master</p>
        </div>
      </div>
    </div>
  </section>
);

/**
 * --- Vision ---
 * Filosofi dan fitur utama agensi.
 */
const Vision = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
        <div className="bg-[#F8F8F8] p-10 rounded-[3rem] space-y-4 border border-black/5 hover:border-black/20 transition-all shadow-sm">
          <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shadow-lg">
            <Award size={32} />
          </div>
          <h3 className="font-black text-2xl text-black pt-4">Top Quality</h3>
          <p className="text-sm text-zinc-500 leading-relaxed font-medium">Standar industri global dengan teknologi termutakhir untuk hasil maksimal.</p>
        </div>
        <div className="bg-[#E1DEE7] p-10 rounded-[3rem] space-y-4 lg:translate-y-12 shadow-2xl shadow-[#E1DEE7]/50 border border-white/50">
          <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center shadow-md">
            <Zap size={32} />
          </div>
          <h3 className="font-black text-2xl text-black pt-4">Fast Delivery</h3>
          <p className="text-sm text-black/60 leading-relaxed font-medium">Kecepatan eksekusi tanpa kompromi pada detail dan presisi produk.</p>
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-8">
        <div className="space-y-4">
          <span className="text-black/30 font-bold uppercase tracking-[0.4em] text-xs">Visi & Filosofi</span>
          <h2 className="text-4xl md:text-7xl font-black leading-[0.95] text-black tracking-tighter">
            Revolusi <br />
            Digital Lokal.
          </h2>
        </div>
        
        <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-light">
          Kami percaya setiap bisnis lokal layak mendapatkan panggung digital dunia. Kami hadir untuk menjembatani ide Anda dengan eksekusi visual yang tak terlupakan.
        </p>

        <div className="space-y-4 pt-4">
          {[
            'Pendekatan Berbasis Data & Riset Mendalam',
            'User Experience (UX) Sebagai Prioritas Utama',
            'Dukungan Teknis & Maintenance 24/7'
          ].map(item => (
            <div key={item} className="flex items-center gap-4 group cursor-default">
              <div className="bg-black/5 p-1.5 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                <CheckCircle2 size={18} />
              </div>
              <span className="font-bold text-zinc-800 tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/**
 * --- PartnerScroll ---
 * Animasi running text untuk branding.
 */
const PartnerScroll = () => (
  <section className="bg-[#0F0F10] py-20 border-y border-white/5 overflow-hidden">
    <div className="flex gap-20 whitespace-nowrap animate-scroll opacity-40">
      {Array(10).fill(0).map((_, i) => (
        <span key={i} className="text-4xl font-black text-white tracking-tighter uppercase italic flex items-center gap-10">
          TRILEDIA.ID <div className="w-4 h-4 bg-[#E1DEE7] rounded-full" />
        </span>
      ))}
    </div>
  </section>
);

/**
 * --- MAIN APP ---
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F10] selection:bg-[#E1DEE7] selection:text-black">
      {/* Navbar di atas semua section */}
      <NavbarLP />
      
      <main>
        <Hero />
        <PartnerScroll />
        <Vision />
      </main>

      {/* Footer Sederhana */}
      <footer className="bg-[#0F0F10] py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <p className="text-3xl font-black text-white tracking-tighter italic">TRILEDIA.ID</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">© 2024 - Membangun Masa Depan Digital Anda</p>
        </div>
      </footer>

      {/* Gaya Global & Animasi */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          padding: 0;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0F0F10;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #E1DEE7;
        }
      `}</style>
    </div>
  );
}