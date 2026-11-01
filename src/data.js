const img = (n) => `/img/${n}`
export const brand = {
  name: 'Elite Residence', tagline: 'Beyond Luxury', developer: 'Techno Builders & Developers',
  address: 'Rae Avenue, Block 17, Gulshan-e-Iqbal, Karachi, Pakistan',
  email: 'sales@techno.com.pk', phone: '+921-313-320-2222', tel: '+923133202222',
  wa: (m) => `https://wa.me/923133202222?text=${encodeURIComponent(m)}`,
  logo: img('logo-er.png'), developerLogo: img('logo-techno.png'),
}
const shared = [
  'Extra ceiling height', 'Premium servant quarters', 'Large 42 ft lounge', 'Drawing room',
  'Separate kitchen & G/kitchen', 'Store room & powder room', 'Dedicated firefighting system', 'Indoor basement parking',
]
const WEST = ['ga2', 'ga3', 'a2', 'a3']
const mk = (id, name, floor, net, terrace, plan, label) => ({
  id, name, floor, net, terrace, service: 850, bedrooms: 4, bathrooms: '4 + powder', plan: img(plan),
  location: 'Gulshan-e-Iqbal', type: floor === 'Ground Floor' ? 'Ground Floor' : 'Typical Floor',
  price: 'Price on request', label,
  images: [img('facade.jpg'), img(plan), img('living-area.jpg'), img('bedroom.jpg'), img('washroom.jpg')],
  description: `Residence ${name} is a ${WEST.includes(id) ? 'west open spacious' : 'generously spacious'} four-bedroom apartment with ${net.toLocaleString()} sq ft of net area, bringing the space and privacy of a bungalow into an exclusive residential address on Rae Avenue.`,
  west: WEST.includes(id),
  features: WEST.includes(id) ? ['West open', ...shared] : shared,
})
export const properties = [
  { ...mk('ga1', 'Type GA1', 'Ground Floor', 2385.87, 720.31, 'plan-ga1.jpg', 'Featured') },
  mk('ga2', 'Type GA3', 'Ground Floor', 2205, 438.63, 'plan-ga2.jpg', 'New Listing'),
  mk('ga3', 'Type GA2', 'Ground Floor', 2216, 492.76, 'plan-ga3.jpg', 'New Listing'),
  mk('a1', 'Type A1', 'Typical Floor', 2388, 0, 'plan-a1.jpg', 'Featured'),
  mk('a2', 'Type A2', 'Typical Floor', 2240, 0, 'plan-a2.jpg', 'New Listing'),
  mk('a3', 'Type A3', 'Typical Floor', 2226, 0, 'plan-a3.jpg', 'Featured'),
]
export const amenities = ['Fully equipped gym', 'Sauna', 'Jacuzzi', 'Prayer area', 'High speed elevator', 'Indoor basement car parking', 'Guest sitting area']
export const materials = ['Naveena Steel', 'A7 Readymix', 'Pakistan Cables', 'Jotun Paints', 'Dadex PVC & PPR piping']
export const nearby = [
  ['School', 'Less than 1 min'], ['AOHS | DOHS Society', 'Less than 1 min'], ['KDA Officers Society', 'Less than 1 min'],
  ['National Stadium', 'Less than 2 mins'], ['Shazz', 'Less than 3 mins'], ['NED University', '20 mins'],
  ['LuckyOne Mall', '22 mins'], ['Agha Khan Hospital', '6 mins'],
]
export const gallery = [
  ['living-area.jpg', 'Living Area', 'State of the art'], ['bedroom.jpg', 'Bedroom', 'Bliss beyond'],
  ['washroom.jpg', 'Washroom', 'Porcelain retreat'], ['kids.jpg', 'Kids Bedroom', 'Play & dream'],
  ['guest.jpg', 'Guest Bedroom', 'Welcoming comfort'], ['masjid.jpg', 'Masjid', 'Serene worship'],
]

export const interiors = [
  ['drawing', 'Drawing Room', ['drawing-1.jpg', 'drawing-2.jpg', 'drawing-3.jpg', 'drawing-4.jpg', 'drawing-5.jpg', 'drawing-6.jpg', 'drawing-7.jpg', 'drawing-8.jpg', 'drawing-9.jpg', 'drawing-10.jpg']],
  ['lounge', 'Lounge', ['lounge-1.jpg', 'lounge-2.jpg', 'lounge-3.jpg', 'lounge-4.jpg', 'lounge-5.jpg', 'lounge-6.jpg', 'lounge-7.jpg', 'lounge-8.jpg', 'lounge-9.jpg', 'lounge-10.jpg', 'lounge-11.jpg', 'lounge-12.jpg', 'lounge-13.jpg', 'lounge-14.jpg', 'lounge-15.jpg', 'lounge-16.jpg', 'lounge-17.jpg', 'lounge-18.jpg', 'lounge-19.jpg', 'lounge-20.jpg', 'lounge-21.jpg', 'lounge-22.jpg', 'lounge-23.jpg', 'lounge-24.jpg', 'lounge-25.jpg', 'lounge-26.jpg', 'lounge-27.jpg', 'lounge-28.jpg', 'lounge-29.jpg', 'lounge-30.jpg', 'lounge-31.jpg', 'lounge-32.jpg', 'lounge-33.jpg', 'lounge-34.jpg']],
  ['master-bed', 'Master Bedroom', ['master-bed-1.jpg', 'master-bed-2.jpg']],
  ['guest-bed', 'Guest Bedroom', ['guest-bed-1.jpg', 'guest-bed-2.jpg', 'guest-bed-3.jpg']],
  ['kids-bed', 'Kids Bedroom', ['kids-bed-1.jpg', 'kids-bed-2.jpg']],
  ['parents-bed', 'Parents Bedroom', ['parents-bed-1.jpg', 'parents-bed-2.jpg']],
  ['master-bath', 'Master Bath', ['master-bath-1.jpg']],
  ['guest-bath', 'Guest Bath', ['guest-bath-1.jpg', 'guest-bath-2.jpg']],
  ['parents-bath', 'Parents Bath', ['parents-bath-1.jpg', 'parents-bath-2.jpg', 'parents-bath-3.jpg']],
  ['kids-bath', 'Kids Bath', ['kids-bath-1.jpg', 'kids-bath-2.jpg']],
  ['powder-room', 'Powder Room', ['powder-bath-1.jpg', 'powder-bath-2.jpg', 'powder-bath-3.jpg', 'powder-bath-4.jpg', 'powder-bath-5.jpg']],
]
export const lobby = [
  ['Lobby (Residential Floor)', ['lobby1-1.jpg', 'lobby1-2.jpg', 'lobby1-3.jpg', 'lobby1-4.jpg', 'lobby1-5.jpg']],
  ['Lobby (Amenity Floor)', ['lobby2-1.jpg', 'lobby2-2.jpg', 'lobby2-3.jpg', 'lobby2-4.jpg']],
]

export const kitchen = [
  ['Model Kitchen', ['kitchen1-1.jpg', 'kitchen1-2.jpg', 'kitchen1-3.jpg', 'kitchen1-4.jpg']],

]
