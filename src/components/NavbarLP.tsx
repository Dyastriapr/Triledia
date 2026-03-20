'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavbarLP() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false); // State khusus mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownLinks = [
    { name: 'Web Development', href: '/layanan/web-dev' },
    { name: 'Sosial Media Management', href: '/layanan/socmed' },
    { name: 'UI/UX Design', href: '/layanan/ui-ux' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm py-3 shadow-sm border-b border-zinc-100' 
        : 'bg-white/50 backdrop-blur-[2px] py-5 border-b border-transparent' 
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-black z-[60]">
          Triledia<span className="font-thin">.id</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[13px] font-bold uppercase tracking-[0.2em] text-black hover:opacity-60 transition">
            Beranda
          </Link>
          <Link href="/tentang" className="text-[13px] font-bold uppercase tracking-[0.2em] text-black hover:opacity-60 transition">
            Tentang
          </Link>

          {/* Desktop Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.2em] text-black group-hover:opacity-60 transition">
              Layanan <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-white border border-zinc-100 shadow-xl rounded-sm py-3 px-4 flex flex-col gap-3">
                {dropdownLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-[12px] font-medium text-zinc-600 hover:text-black hover:translate-x-1 transition-all">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="text-[13px] font-bold uppercase tracking-[0.2em] text-black hover:opacity-60 transition">
            Portfolio
          </Link>
          <Link href="/kontak" className="text-[13px] font-bold uppercase tracking-[0.2em] text-black hover:opacity-60 transition">
            Kontak
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[60] text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[50] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center w-full max-w-xs gap-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[13px] font-bold uppercase tracking-[0.2em] text-black">
              Beranda
            </Link>
            <Link href="/tentang" onClick={() => setIsOpen(false)} className="text-[13px] font-bold uppercase tracking-[0.2em] text-black">
              Tentang
            </Link>

            {/* Mobile Dropdown (Accordion Style) */}
            <div className="w-full flex flex-col items-center">
              <button 
                onClick={() => setIsLayananOpen(!isLayananOpen)}
                className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.2em] text-black"
              >
                Layanan <ChevronDown size={16} className={`transition-transform duration-300 ${isLayananOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-4 ${
                isLayananOpen ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {dropdownLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-[12px] font-medium text-zinc-500 uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-[13px] font-bold uppercase tracking-[0.2em] text-black">
              Portfolio
            </Link>
            <Link href="/kontak" onClick={() => setIsOpen(false)} className="text-[13px] font-bold uppercase tracking-[0.2em] text-black">
              Kontak
            </Link>
            
            <div className="mt-10 pt-10 border-t border-zinc-100 w-full flex justify-center gap-6 text-zinc-400">
               <span className="text-[10px] uppercase tracking-[0.3em]">Instagram</span>
               <span className="text-[10px] uppercase tracking-[0.3em]">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}