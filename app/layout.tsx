import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '1Bigha — Buy & Sell Land and Property',
  description: 'Discover land, plots and property opportunities across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="site-header">
        <div className="site-container site-header-inner">
          <Link href="/" className="brand" aria-label="1Bigha home">
            <img src="/1bigha-logo.png" alt="1Bigha" className="brand-logo" />
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/search">Buy</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/search?type=Agricultural%20Land">Agricultural</Link>
            <Link href="/search?type=Residential%20Plot">Plots</Link>
            <Link href="/search?q=Delhi%20NCR">Locations</Link>
            <Link href="/search">Explore</Link>
          </nav>

          <div className="site-actions">
            <Link href="/search" className="site-login">Login / Sign up</Link>
            <Link href="/sell" className="site-post-btn">List Property</Link>
          </div>
        </div>
      </div>

      {children}

      <footer className="site-footer">
        <div className="site-container site-footer-grid">
          <div>
            <img src="/1bigha-logo.png" alt="1Bigha" className="footer-logo" />
            <p>Land discovery made simpler with better search, clearer information and trusted local opportunities.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/search">Buy Property</Link>
            <Link href="/search?type=Agricultural%20Land">Agricultural Land</Link>
            <Link href="/search?type=Residential%20Plot">Residential Plots</Link>
          </div>
          <div>
            <h4>For owners</h4>
            <Link href="/sell">List Property</Link>
            <Link href="/sell">Sell Land</Link>
            <Link href="/search">Find Buyers</Link>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="site-container">© 2026 1Bigha. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
