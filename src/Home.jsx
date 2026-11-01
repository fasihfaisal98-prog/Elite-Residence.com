import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Home as HomeIcon, Tag, KeyRound, MapPin, Phone, Mail, Check, MessageCircle } from 'lucide-react'
import { properties, amenities, materials, nearby, interiors, lobby, kitchen, brand } from './data'
import { PropertyCard, Reveal } from './ui'

const areaOpts = [['', 'Any area'], ['2200', '2,200+ sqft'], ['2300', '2,300+ sqft']]

function Hero() {
  return (
    <section className="relative overflow-visible bg-ink text-white [background-image:radial-gradient(ellipse_at_80%_20%,rgba(242,194,48,0.13),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(31,61,46,0.35),transparent_50%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-40 pt-16 lg:grid-cols-2 lg:pt-24">
        <div>
          <p className="eyebrow">Elite Residence · Beyond Luxury</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">Find a Place That Feels Like Home.</h1>
          <p className="mt-6 max-w-lg text-white/70">Twelve four-bedroom residences on Rae Avenue, Gulshan-e-Iqbal. The space and privacy of a bungalow, in an exclusive residential address.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#properties" className="btn-gold rounded-3xl">Explore Properties</a>
            <a href="#contact" className="btn-line rounded-3xl">Contact Us</a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {[['12', 'Residences'], ['4', 'Bedrooms each'], ['2,205+', 'Sqft net area']].map(([n, l]) => (
              <div key={l}><dt className="font-serif text-3xl text-gold">{n}</dt><dd className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</dd></div>))}
          </dl>
        </div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden border border-champagne/40 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <img src="/img/facade.jpg" alt="Elite Residence facade" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Properties() {
  return (
    <section id="properties" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center"><p className="eyebrow">Featured properties</p><h2 className="h2 mt-3">Choose Your Residence</h2>
          <p className="mx-auto mt-3 max-w-xl text-black/60">Pricing is shared by the sales team. Contact us for availability and payment plans.</p></Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{properties.map((p) => <PropertyCard key={p.id} p={p} />)}</div>
      </div>
    </section>
  )
}

const Amenities = () => (
  <section className="bg-charcoal px-5 py-24 text-white">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <Reveal><p className="eyebrow">Premium amenities</p><h2 className="h2 mt-3">Luxury Living</h2>
        <p className="mt-4 text-white/70">Spacious apartments with extra ceiling height and premium servant quarters, built with trusted materials: {materials.join(', ')}.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{amenities.map((a) => <li key={a} className="flex gap-2 text-sm"><Check size={16} className="text-gold" />{a}</li>)}</ul></Reveal>
      <Reveal><img src="/img/living.jpg" alt="Interior" loading="lazy" className="mx-auto max-h-[520px] w-full object-cover" /></Reveal>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="scroll-mt-20 px-5 py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <Reveal><img src="/img/lounge.jpg" alt="Elite Residence interior" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
      <Reveal><p className="eyebrow">About us</p><h2 className="h2 mt-3">Beyond Luxury</h2>
        <p className="mt-4 text-black/70">Created for those who have outgrown conventional apartment living, Elite Residence brings the space and privacy of a bungalow into an exclusive residential experience: generously spacious four-bedroom apartments, exceptional design and uncompromisable privacy.</p>
        <p className="mt-4 text-black/70">A development by Techno Builders &amp; Developers, carrying forward the principles of Techno International, established in 1982 by Mr. Sheikh Abdul Sattar.</p>
        <div className="mt-6 flex items-center gap-5 border-t border-black/10 pt-6">
          <img src="/img/developer.jpg" alt="Azmat Khan" className="h-40 w-25 rounded-xl object-cover" />
          <p className="text-sm text-black/70">“I invite you to become part of this vision and experience a new standard of modern luxury living.”<br /><b>Azmat Khan</b>, Developer | Elite Residence</p>
        </div>
        <a href="#contact" className="btn-gold mt-8 rounded-3xl ">Contact Us</a></Reveal>
    </div>
    <div className="mx-auto mt-20 max-w-7xl">
      <h3 className="font-serif text-3xl font-semibold">Prime location · Gulshan-e-Iqbal</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nearby.map(([n, t]) => <div key={n} className="border border-black/10 bg-white p-4"><MapPin size={16} className="text-champagne" /><p className="mt-1 font-semibold">{n}</p><p className="text-xs text-black/50">{t}</p></div>)}
      </div>
    </div>
  </section>
)

const Services = () => (
  <section id="services" className="scroll-mt-20 bg-white px-5 py-24">
    <div className="mx-auto max-w-3xl"><Reveal className="text-center"><p className="eyebrow">Services</p><h2 className="h2 mt-3">How We Can Help</h2></Reveal>
      <Reveal><div className="mt-12 border border-black/10 p-10 text-center transition hover:border-champagne hover:shadow-lg">
        <Tag className="mx-auto text-champagne" size={32} /><h3 className="mt-4 font-serif text-3xl font-semibold">Book an Appointment</h3>
        <p className="mx-auto mt-3 max-w-xl text-black/60">Speak with our team and view your future home</p>
        <a href={brand.wa('Hello, I would like to know about selling a property at Elite Residence.')} target="_blank" rel="noreferrer" className="btn-gold mt-6 rounded-3xl">Talk to Sales</a></div></Reveal>
    </div>
  </section>
)

function Lightbox({ src, onClose }) {
  if (!src) return null
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button className="absolute right-5 top-5 text-3xl text-white" aria-label="Close" onClick={onClose}>×</button>
      <img src={src} alt="" className="max-h-[90vh] max-w-full object-contain" />
    </div>
  )
}

function Group({ title, imgs, limit, setLb, dark }) {
  const [all, setAll] = useState(false)
  const shown = all ? imgs : imgs.slice(0, limit)
  return (
    <div className="mt-14 first:mt-0">
      <div className="mb-5 flex items-end justify-between border-b border-champagne/40 pb-3">
        <h3 className={`font-serif text-3xl font-semibold ${dark ? 'text-gold' : ''}`}>{title}</h3>
        <span className={`text-xs uppercase tracking-widest ${dark ? 'text-white/50' : 'text-black/40'}`}>{imgs.length} photos</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {shown.map((n) => (
          <button key={n} onClick={() => setLb(`/img/gal/${n}`)} className="group aspect-[16/10] rounded-2xl overflow-hidden bg-ink">
            <img src={`/img/gal/${n}`} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {imgs.length > limit && <button onClick={() => setAll(!all)} className=" btn-gold mt-5 rounded-3xl">{all ? 'Show less' : `Show all ${imgs.length}`}</button>}
    </div>
  )
}

function Interiors() {
  const [lb, setLb] = useState(null)
  return (
    <section id="interiors" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center"><p className="eyebrow">Interiors</p><h2 className="h2 mt-3">Designed Down to the Detail</h2></Reveal>
        {interiors.map(([id, t, imgs]) => <Group key={id} title={t} imgs={imgs} limit={id === 'lounge' ? 6 : 6} setLb={setLb} />)}
      </div>
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </section>
  )
}

function Kitchen() {
  const [lb, setLb] = useState(null)
  return (
    <section id="kitchen" className="scroll-mt-20 bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
   
        {kitchen.map(([t, imgs]) => <Group key={t} title={t} imgs={imgs} limit={6} setLb={setLb} />)}
      </div>
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </section>
  )
}

function Lobby() {
  const [lb, setLb] = useState(null)
  return (
    <section id="lobby" className="scroll-mt-20 bg-charcoal px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center"><p className="eyebrow">Entrance &amp; corridors</p><h2 className="h2 mt-3">The Lobby</h2></Reveal>
        {lobby.map(([t, imgs]) => <Group key={t} title={t} imgs={imgs} limit={6} setLb={setLb} dark />)}
      </div>
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </section>
  )
}

function Contact() {
  const cards = [
    [MapPin, 'Visit', brand.address, null],
    [Phone, 'Call', brand.phone, `tel:${brand.tel}`],
    [Mail, 'Email', brand.email, `mailto:${brand.email}`],
  ]
  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-5 py-24 text-white [background-image:radial-gradient(ellipse_at_50%_0%,rgba(242,194,48,0.12),transparent_60%)]">
      <div className="mx-auto max-w-5xl text-center">
        <img src={brand.logo} alt="" className="mx-auto h-20 rounded-xl" />
        <p className="eyebrow mt-6">For sales inquiries</p>
        <h2 className="h2 mt-3">Make Elite Residence Yours</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">Speak directly with the sales team for availability, floor plans and payment details.</p>
        <a href={brand.wa('Hello, I would like to know more about Elite Residence.')} target="_blank" rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-[#25D366] px-9 py-4 text-base font-semibold rounded-3xl text-white shadow-lg transition hover:brightness-95">
          <MessageCircle size={22} />Chat on WhatsApp
        </a>
        <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
          {cards.map(([Icon, t, v, href]) => {
            const C = href ? 'a' : 'div'
            return (<C key={t} href={href} className="border border-white/10 bg-white/[0.03] p-6 transition hover:border-champagne/60">
              <Icon className="text-gold" size={22} /><p className="mt-3 text-xs uppercase tracking-[0.25em] text-champagne">{t}</p>
              <p className="mt-1 text-sm text-white/85">{v}</p></C>)
          })}
        </div>
        <div className="mt-12 flex items-center justify-center gap-5 border-t border-white/10 pt-8">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne">A project by</span>
          <img src={brand.developerLogo} alt="Techno Builders & Developers" className="h-24 object-contain rounded-xl" />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (<main><Hero /><Properties /><Amenities /><Interiors /><Kitchen /><About /><Services /><Lobby /><Contact /></main>)
}
