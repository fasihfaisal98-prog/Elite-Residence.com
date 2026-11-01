import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X, BedDouble, Bath, Maximize, MapPin, ArrowRight, Phone, Mail } from 'lucide-react'
import { brand } from './data'

export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
)

const links = [['Home', '/'], ['Properties', '/#properties'], ['About Us', '/#about'], ['Interiors', '/#interiors'], ['Services', '/#services'], ['Contact', '/#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => setOpen(false), [pathname, hash])
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={brand.logo} alt="Elite Residence logo" className="h-12 w-12 object-contain" />
          <span className="font-serif text-xl tracking-[0.3em] text-gold">ELITE RESIDENCE</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([t, to]) => <Link key={t} to={to} className="text-sm text-white/80 transition hover:text-gold">{t}</Link>)}
          <Link to="/#properties" className="btn-gold rounded-3xl">Explore Properties</Link>
        </nav>
        <button className="text-white lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-ink lg:hidden">
            <div className="flex flex-col gap-1 px-5 pb-5">
              {links.map(([t, to]) => <Link key={t} to={to} className="border-b border-white/10 py-3 text-white/80">{t}</Link>)}
              <Link to="/#properties" className="btn-gold mt-3">Explore Properties</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={brand.logo} alt="" className="mb-3 h-14" />
          <p className="font-serif text-2xl tracking-[0.25em] text-gold">ELITE RESIDENCE</p>
          <p className="mt-3 text-sm">Twelve Residences. One remarkable address.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{brand.address}</p>
          <p className="flex gap-2"><Mail size={16} className="text-gold" />{brand.email}</p>
          <p className="flex gap-2"><Phone size={16} className="text-gold" />{brand.phone}</p>
        </div>
        <div className="flex items-center gap-4 md:justify-end">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">A project by</span>
          <img src={brand.developerLogo} alt="Techno Builders & Developers" className="h-24 object-contain" />
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} Elite Residence. Images are artist impressions.</p>
    </footer>
  )
}

export function PropertyCard({ p }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="group flex flex-col overflow-hidden border border-black/10 bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img src={p.plan} alt={`${p.name} floor plan`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">{p.label}</span>
        <span className="absolute right-3 top-3 bg-ink/80 px-3 py-1 text-[11px] uppercase tracking-wider text-white">{p.type}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-2xl font-semibold">Elite Residence · {p.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-black/60"><MapPin size={14} />Rae Avenue, {p.location}, Karachi</p>
        <p className="mt-3 font-serif text-xl text-forest">{p.price}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 border-y border-black/10 py-3 text-xs text-black/70">
          <span className="flex items-center gap-1"><BedDouble size={15} />{p.bedrooms} Beds</span>
          <span className="flex items-center gap-1"><Bath size={15} />{p.bathrooms}</span>
          <span className="flex items-center gap-1"><Maximize size={15} />{p.net.toLocaleString()} sqft</span>
        </div>
        <div className="mt-5 flex gap-3">
          <Link to={`/property/${p.id}`} className="btn-gold flex-1 rounded-3xl">View Details <ArrowRight size={16} /></Link>
          <a href={brand.wa(`Hello, I'm interested in Elite Residence ${p.name}. Please share details.`)} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95 rounded-3xl"><MessageCircle size={16} />WhatsApp</a>
        </div>
      </div>
    </motion.article>
  )
}

export const WhatsAppFab = () => (
  <a href={brand.wa('Hello, I would like to know more about Elite Residence.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110">
    <MessageCircle size={26} />
  </a>
)
