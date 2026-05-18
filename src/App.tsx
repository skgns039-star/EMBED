/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Globe, 
  Lock, 
  ChevronDown, 
  CircleDot, 
  Zap, 
  Fingerprint, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// --- Data ---
const PROTOCOLS = [
  { id: '01', title: 'Activation', subtitle: 'Discrete', icon: <CircleDot className="w-5 h-5" />, desc: 'Instant SOS activation through subtle, intentional tactile patterns.' },
  { id: '02', title: 'Connection', subtitle: 'Seamless', icon: <Zap className="w-5 h-5" />, desc: 'Encrypted tethering to the EMBED app via smartphone pairing.' },
  { id: '03', title: 'Alerts', subtitle: 'Direct', icon: <Fingerprint className="w-5 h-5" />, desc: 'Silent push notifications sent directly to your chosen emergency contacts.' },
  { id: '04', title: 'Protection', subtitle: 'Tethered', icon: <Shield className="w-5 h-5" />, desc: 'Continuous safety monitoring through our connected app ecosystem.' },
  { id: '05', title: 'Location', subtitle: 'Live', icon: <Globe className="w-5 h-5" />, desc: 'High-precision location sharing active only during a safety event.' },
];

const COLLABS = [
  { name: 'EMBED x MEJURI', type: 'Collaboration' },
  { name: 'CARTIER', type: 'Concept Partnership Target' },
  { name: 'TIFFANY & CO.', type: 'Concept Partnership Target' },
];

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Philosophy', href: '#vision' },
    { name: 'Protocol', href: '#protocol' },
    { name: 'The Lab', href: '#tech' },
    { name: 'Enterprise', href: '#enterprise' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center">
            <img
              src="https://cdn.imweb.me/thumbnail/20260518/64fe2abfe75ba.png"
              alt="EMBED Logo"
              className="h-6 md:h-8 w-auto object-contain mix-blend-screen transition-opacity hover:opacity-80"
            />
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">{item.name}</a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="#join"
            className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Pre-Order
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-display tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#join"
            className="w-full py-4 border border-white/20 rounded-xl text-xs uppercase tracking-widest text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pre-Order
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${centered ? 'text-center' : ''}`}
  >
    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-4 block">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
      {title}
    </h2>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const collaborationRef = useRef<HTMLDivElement>(null);

  const scrollToCollaborations = () => {
    collaborationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-black selection:bg-white/20 overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-60" 
        style={{ scaleX }} 
      />
      
      <Nav />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center brightness-[0.25] opacity-90 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[8px] uppercase tracking-[0.8em] text-white/30 mb-10 font-bold"
          >
            Invisible Signal. Discrete Safety.
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-[9.5rem] font-display font-medium mb-12 leading-[0.75] tracking-tighter"
          >
            Invisible protection. <br/>
            <span className="luxury-serif italic text-white/60">Embedded.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-lg md:text-xl luxury-serif text-white/20 mb-16 max-w-xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Redefining the architecture of personal safety <br/> through the lens of luxury jewelry.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <a 
              href="#vision"
              className="group relative px-16 py-5 bg-white text-black rounded-full font-bold uppercase text-[9px] tracking-[0.3em] overflow-hidden transition-all duration-500 hover:tracking-[0.4em] text-center"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-500" />
            </a>
            <a 
              href="#protocol"
              className="px-16 py-5 border border-white/5 text-white/30 rounded-full font-bold uppercase text-[9px] tracking-[0.3em] hover:bg-white/5 hover:text-white/60 transition-all duration-500 text-center"
            >
              Access Protocol
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10"
        >
          <span className="text-[7px] uppercase tracking-[0.5em]">System Ready</span>
          <div className="w-[1px] h-16 bg-white" />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-container relative">
        <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-white/10 to-transparent" />
        <div className="grid md:grid-cols-2 gap-16 md:gap-40 items-center">
          <div>
            <SectionHeading subtitle="01 / The Vision" title="Safety is no longer an accessory. It's a standard." />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl text-white/30 luxury-serif leading-relaxed mb-16 font-light"
            >
              Traditional wearables create a visible profile. EMBED integrates silent safety protocols within timeless aesthetic forms.
            </motion.p>
            <div className="grid grid-cols-2 gap-12 text-[8px] uppercase tracking-[0.3em] text-white/10 font-bold border-t border-white/5 pt-12">
              <div className="flex flex-col gap-2">
                <span className="text-white/20 underline underline-offset-4 decoration-white/5">Operational Spec</span>
                <span>CODE: EMB_ALMA_01A</span>
              </div>
              <div className="flex flex-col gap-2 text-right">
                <span className="text-white/20 underline underline-offset-4 decoration-white/5">Authentification</span>
                <span>VERIFIED_LAB_2026</span>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/5 bg-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1974" 
              alt="High-End Diamond Necklace" 
              className="w-full h-full object-cover grayscale brightness-[0.7] transition-all duration-[2s] group-hover:scale-110 group-hover:brightness-100 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute top-10 right-10 text-[7px] font-mono text-white/20 tracking-widest uppercase">
              SCAN_REF: 809.28.JWLR
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="bg-[#050505] py-32">
        <div className="section-container">
          <SectionHeading subtitle="Active Data Strategy" title="How EMBED Works" centered />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROTOCOLS.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 bg-white/[0.02]"
              >
                <div className="text-white/20 group-hover:text-white transition-colors duration-500 mb-8">
                  {p.icon}
                </div>
                <div className="mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-1">{p.subtitle}</span>
                  <h3 className="text-xl font-display font-medium">{p.id}. {p.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section id="tech" className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-40 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-2 md:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/5] group border border-white/5 bg-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?auto=format&fit=crop&q=80&w=1974" 
              alt="Luxury Pearl Necklace" 
              className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110 brightness-[0.6] group-hover:brightness-100 grayscale-[0.3] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center">
               <p className="text-lg luxury-serif italic text-white/40 max-w-[200px] leading-tight">The interface between beauty and absolute control.</p>
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                 <CircleDot className="w-5 h-5 text-white/10" />
               </div>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 block mb-10 font-bold">TECH_SPEC / INTERFACE</span>
            <h2 className="text-5xl md:text-[5rem] font-display font-medium leading-[0.95] tracking-tighter mb-16">
              Jewelry re-engineered <br/> for the modern frontier.
            </h2>
            
            <div className="space-y-12">
              {[
                { id: '01', title: 'SOS Activation', detail: 'Patented pressure-sensing technology detects intentional distress signals without accidental triggers.', grade: 'R.A.8' },
                { id: '02', title: 'Haptic Confirmation', detail: 'Discrete micro-vibrations provide binary tactile feedback through the skin.', grade: 'S-FEED' },
                { id: '03', title: 'Precision Engineering', detail: 'Miniaturized hardware housing encased in ethical fine silver or 18k gold.', grade: 'GRADE 5' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-10 group"
                >
                  <div className="pt-2 text-[10px] font-mono text-white/10 group-hover:text-white/40 transition-colors uppercase tracking-widest">{item.id || `0${i+1}`}</div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">{item.title}</h4>
                      <span className="text-[8px] text-white/10 font-mono tracking-[0.3em] uppercase">{item.grade}</span>
                    </div>
                    <p className="text-base text-white/30 leading-relaxed font-light luxury-serif">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="bg-[#1C1B1B] text-white py-40 overflow-hidden">
        <div className="section-container text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block text-white/40"
          >
            03 / EMBED BY INNOVATION
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-12"
          >
            Empower your identity <br/> <span className="luxury-serif italic text-white/80">with safety.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-xl luxury-serif mb-16 text-white/60">
            EMBED provides jewellery brands with a smart chip, connected app system, and safety alert infrastructure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 text-left mt-24">
            {[
              { title: 'The Smart Chip', desc: 'Sovereign hardware designed to fit seamlessly beneath any gemstone or metal setting.' },
              { title: 'Connected App', desc: 'A white-label safety application that mirrors your brand’s existing digital design system.' },
              { title: 'Safety Infrastructure', desc: 'Direct, low-latency ecosystem ensuring your customers stay protected globally.' },
            ].map((item, i) => (
              <div key={i}>
                <span className="text-[9px] uppercase tracking-widest block mb-4 text-white/30 underline decoration-1 underline-offset-4">Module {i + 1}</span>
                <h3 className="text-2xl font-display font-medium mb-4">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-6 font-bold">TRUST_MODEL / ARCHITECTURE</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">
              Zero Tracking. <br/> Absolute Autonomy.
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-6">
                <div className="p-3 h-fit rounded-lg bg-white/5 border border-white/10">
                  <Shield className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2">On-Device Obfuscation</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Telemetry is strictly event-triggered. We have zero-visibility into your routine until the moment you decide otherwise.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex gap-6">
                <div className="p-3 h-fit rounded-lg bg-white/5 border border-white/10">
                  <Lock className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2">Hardware-Level Protection</h4>
                  <p className="text-xs text-white/40 leading-relaxed">End-to-end encryption ensures that even our engineers cannot intercept or manipulate data without an active trigger.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
              <Shield className="w-8 h-8 text-white/20" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-4 block">Safety_Protocol_v2.0.7</span>
            <p className="text-sm text-white/60 leading-relaxed luxury-serif max-w-xs">
              Our sovereign architecture puts the user in total control. Decoupled data-points ensure privacy without compromising speed.
            </p>
            <div className="mt-12 text-[8px] font-mono text-white/20">VERIFIED_ROOT_ENGINE // 07-28-2026</div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="enterprise" ref={collaborationRef} className="py-32 border-t border-white/5">
        <div className="section-container">
          <SectionHeading subtitle="EMBED_MANIFOLD / CAPSULE" title="Collaborations" centered />
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
            {COLLABS.map((collab, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={collab.name === 'EMBED x MEJURI' ? scrollToCollaborations : undefined}
                className="text-center group cursor-pointer"
              >
                <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-2">{collab.type}</span>
                <p className="text-2xl md:text-3xl font-display tracking-[0.1em]">{collab.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="section-container pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-6">Individuals</span>
              <h3 className="text-3xl md:text-4xl font-display font-medium mb-8 leading-tight">Join the Waitlist.</h3>
              <p className="text-sm text-white/50 mb-12">Early access to limited releases and exclusive partner drops.</p>
            </div>
            <div className="flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-full p-2">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent flex-1 px-6 py-4 sm:py-0 text-[10px] tracking-widest font-bold placeholder:text-white/20 outline-none w-full" 
              />
              <button className="px-8 py-4 sm:py-3 bg-white text-black rounded-[1rem] sm:rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all w-full sm:w-auto">
                Join Waitlist
              </button>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden group flex flex-col justify-between h-full"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-6">Partners</span>
              <h3 className="text-3xl md:text-4xl font-display font-medium mb-8 leading-tight">Brand Partnership Inquiry.</h3>
              <p className="text-sm text-white/50 mb-12">Discuss integrating EMBED technology into your collections.</p>
            </div>
            <div className="flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-full p-2">
              <input 
                type="text" 
                placeholder="WORK EMAIL ADDRESS"
                className="bg-transparent flex-1 px-6 py-4 sm:py-0 text-[10px] tracking-widest font-bold placeholder:text-white/20 outline-none w-full" 
              />
              <button className="px-8 py-4 sm:py-3 bg-white text-black rounded-[0.8rem] sm:rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                Send Inquiry <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-32">
            <div className="col-span-2">
              <div className="mb-8">
                <img
                  src="https://cdn.imweb.me/thumbnail/20260518/64fe2abfe75ba.png"
                  alt="EMBED Logo"
                  className="h-10 md:h-12 w-auto object-contain mix-blend-screen"
                />
              </div>
              <p className="text-base text-white/40 max-w-sm leading-relaxed luxury-serif italic">
                The intersection of invisible safety <br/> and aesthetic excellence.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">Navigation</h4>
              <ul className="space-y-4 text-[10px] text-white/40 uppercase tracking-[0.2em]">
                <li><a href="#vision" className="hover:text-white transition-colors">Philosophy</a></li>
                <li><a href="#protocol" className="hover:text-white transition-colors">Protocol</a></li>
                <li><a href="#tech" className="hover:text-white transition-colors">Laboratory</a></li>
                <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-8">Information</h4>
              <ul className="space-y-4 text-[10px] text-white/40 uppercase tracking-[0.2em]">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bespoke</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5 opacity-30">
            <p className="text-[8px] uppercase tracking-[0.4em]">© 2026 EMBED LABS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-12 text-[8px] uppercase tracking-[0.4em]">
              <span>ALMA_0.1A // PRJ_EMB</span>
              <span>UIN: 809.28.JWLR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
