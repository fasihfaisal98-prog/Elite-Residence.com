import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MessageCircle, BedDouble, Bath, Maximize, MapPin, Check, ArrowLeft } from 'lucide-react'
import { properties, amenities, brand } from './data'

export default function Details() {
  const { id } = useParams()
  const p = properties.find((x) => x.id === id)
  const [i, setI] = useState(0)
  if (!p) return <div className="py-32 text-center"><p className="font-serif text-3xl">Property not found</p><Link to="/" className="btn-gold mt-6">Back home</Link></div>
  const specs = [[BedDouble, 'Bedrooms', p.bedrooms], [Bath, 'Bathrooms', p.bathrooms], [Maximize, 'Net area', `${p.net.toLocaleString()} sqft`]]
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <Link to="/#properties" className="mb-6 inline-flex items-center gap-2 text-sm text-black/60 hover:text-black"><ArrowLeft size={16} />All properties</Link>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="aspect-[4/3] overflow-hidden bg-ink"><img src={p.images[i]} alt="" className="h-full w-full object-contain" /></div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {p.images.map((src, n) => (
              <button key={src} onClick={() => setI(n)} className={`aspect-[4/3] overflow-hidden border-2 ${n === i ? 'border-gold' : 'border-transparent'}`}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <span className="eyebrow">{p.type} · {p.label}</span>
          <h1 className="mt-2 font-serif text-4xl font-semibold">Elite Residence · {p.name}</h1>
          <p className="mt-2 flex items-center gap-1 text-black/60"><MapPin size={16} />{brand.address}</p>
          <p className="mt-5 font-serif text-3xl text-forest">{p.price}</p>
          <p className="mt-5 text-black/70">{p.description}</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {specs.map(([Icon, l, v]) => (
              <div key={l} className="border border-black/10 bg-white p-4 text-center"><Icon className="mx-auto mb-1 text-champagne" size={20} /><p className="text-xs text-black/50">{l}</p><p className="text-sm font-semibold">{v}</p></div>
            ))}
          </div>
          <p className="mt-4 text-sm text-black/60">
            {p.terrace > 0 && <>Open-to-sky terrace {p.terrace} sqft · </>}Service &amp; circulation area {p.service} sqft
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={brand.wa(`Hello, I'm interested in Elite Residence ${p.name}. Please share details.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-95"><MessageCircle size={18} />Enquire on WhatsApp</a>
            <a href={`tel:${brand.tel}`} className="border border-charcoal px-6 py-3 text-sm hover:bg-charcoal hover:text-white">Call Sales</a>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div><h2 className="font-serif text-3xl font-semibold">Property features</h2>
          <ul className="mt-4 space-y-2">{p.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-forest" />{f}</li>)}</ul></div>
        <div><h2 className="font-serif text-3xl font-semibold">Building amenities</h2>
          <ul className="mt-4 space-y-2">{amenities.map((f) => <li key={f} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 text-forest" />{f}</li>)}</ul></div>
      </div>
    </main>
  )
}
