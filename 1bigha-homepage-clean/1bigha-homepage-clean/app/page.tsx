import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ChevronRight, MapPin, Search, ShieldCheck, Tractor, UserRoundCheck, Warehouse } from 'lucide-react';
import { properties } from '@/lib/data';

const categories = [
  { title: 'Agricultural Land', text: 'Farming, investment & long-term growth', icon: Tractor, href: '/search?type=Agricultural%20Land', tone: 'green' },
  { title: 'Residential Plots', text: 'Build your home in the right location', icon: Building2, href: '/search?type=Residential%20Plot', tone: 'sand' },
  { title: 'Commercial Land', text: 'High-visibility land for business', icon: Warehouse, href: '/search?type=Commercial%20Plot', tone: 'blue' },
];

const locations = ['Ghaziabad', 'Baghpat', 'Lucknow', 'Ballia'];

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-container home-hero-grid">
          <div className="home-hero-copy">
            <div className="home-eyebrow"><span className="home-eyebrow-dot" /> Land & property marketplace</div>
            <h1>Find the right land.<br /><span>Build what comes next.</span></h1>
            <p>Search land, plots and investment opportunities by location, budget and property type — all in one clear place.</p>

            <form action="/search" className="home-search-card">
              <div className="home-search-main">
                <MapPin size={20} strokeWidth={2} />
                <input name="q" aria-label="Location" placeholder="City, district, village or locality" />
              </div>
              <select name="type" aria-label="Property type">
                <option value="">Property type</option>
                <option>Agricultural Land</option>
                <option>Residential Plot</option>
                <option>Commercial Plot</option>
                <option>Farm Land</option>
                <option>Industrial Land</option>
              </select>
              <button className="home-search-btn" type="submit"><Search size={19} /> Search</button>
            </form>

            <div className="home-popular">
              <span>Popular:</span>
              {locations.map((location) => <Link key={location} href={`/search?q=${encodeURIComponent(location)}`}>{location}</Link>)}
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-visual-image" />
            <div className="home-visual-card home-visual-card-top">
              <ShieldCheck size={18} />
              <div><strong>Trust starts with clarity</strong><span>Clear property information</span></div>
            </div>
            <div className="home-visual-card home-visual-card-bottom">
              <MapPin size={18} />
              <div><strong>Explore by location</strong><span>Local land, wider opportunities</span></div>
            </div>
            <div className="home-plot-badge"><span>1</span><div>One place<br /><b>for land</b></div></div>
          </div>
        </div>
      </section>

      <section className="home-trust-strip">
        <div className="home-container home-trust-grid">
          <div><ShieldCheck size={21} /><span><b>Clear listings</b><small>Useful property details</small></span></div>
          <div><UserRoundCheck size={21} /><span><b>Direct enquiries</b><small>Connect with sellers</small></span></div>
          <div><MapPin size={21} /><span><b>Location-first search</b><small>Find land where you need it</small></span></div>
          <div><CheckCircle2 size={21} /><span><b>Made for land</b><small>Simple, focused experience</small></span></div>
        </div>
      </section>

      <section className="home-section home-section-tight">
        <div className="home-container">
          <div className="home-section-head">
            <div><span className="home-kicker">EXPLORE</span><h2>Find land for your next move</h2><p>Start with the property type that matches your plan.</p></div>
          </div>
          <div className="home-category-grid">
            {categories.map(({ title, text, icon: Icon, href, tone }) => (
              <Link href={href} className={`home-category home-category-${tone}`} key={title}>
                <div className="home-category-icon"><Icon size={26} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={19} className="home-category-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-featured">
        <div className="home-container">
          <div className="home-section-head home-featured-head">
            <div><span className="home-kicker">LISTINGS</span><h2>Featured properties</h2><p>A few opportunities to get you started.</p></div>
            <Link href="/search" className="home-text-link">View all properties <ArrowRight size={17} /></Link>
          </div>
          <div className="home-property-grid">
            {properties.slice(0, 3).map((p) => (
              <Link href={`/property/${p.id}`} className="home-property-card" key={p.id}>
                <div className="home-property-image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {p.verified && <span className="home-verified"><ShieldCheck size={14} /> Verified</span>}
                </div>
                <div className="home-property-body">
                  <div className="home-property-location"><MapPin size={14} /> {p.location}</div>
                  <h3>{p.title}</h3>
                  <div className="home-property-row"><strong>{p.price}</strong><span>{p.area}</span></div>
                  <div className="home-property-type">{p.type} <ChevronRight size={15} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container home-why-grid">
          <div>
            <span className="home-kicker">WHY 1BIGHA</span>
            <h2>Less clutter.<br />More confidence.</h2>
            <p className="home-why-lead">Buying or selling land gets easier when the information is simple, visible and organised.</p>
            <Link href="/about" className="home-outline-btn">Know more <ArrowRight size={17} /></Link>
          </div>
          <div className="home-benefits">
            <div><span>01</span><div><h3>Search around your location</h3><p>Start with a city, district, village or locality and narrow down from there.</p></div></div>
            <div><span>02</span><div><h3>Compare useful property details</h3><p>See price, area, type, road access and listing information together.</p></div></div>
            <div><span>03</span><div><h3>Connect when you're ready</h3><p>Send an enquiry, ask questions and take the next step directly.</p></div></div>
          </div>
        </div>
      </section>

      <section className="home-seller-cta">
        <div className="home-container home-seller-inner">
          <div><span className="home-kicker home-kicker-light">SELL YOUR PROPERTY</span><h2>Have land to sell?</h2><p>Put your property in front of people who are actively looking.</p></div>
          <Link href="/sell" className="home-seller-btn">Post your property <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
