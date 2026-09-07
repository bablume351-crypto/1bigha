import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '1Bigha — Buy & Sell Land & Property',
  description: 'Find land, plots and property opportunities by location, budget and type.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link href="/" className="brand" aria-label="1Bigha home">
          <Image src="/1bigha-logo.png" alt="1Bigha" width={176} height={112} priority className="brand-logo" />
        </Link>
        <nav className="site-nav">
          <Link href="/search">Buy</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/search?type=Agricultural%20Land">Land</Link>
          <Link href="/search?type=Residential%20Plot">Plots</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="site-actions"><Link href="/sell" className="site-post-btn">Post Property</Link></div>
      </div>
    </header>
    {children}
    <footer className="site-footer">
      <div className="site-container site-footer-grid">
        <div><Image src="/1bigha-logo.png" alt="1Bigha" width={150} height={96} className="footer-logo" /><p>Your land, your future — with a simpler way to discover opportunities.</p></div>
        <div><h4>Explore</h4><Link href="/search">Buy Property</Link><Link href="/sell">Sell Property</Link><Link href="/search?type=Agricultural%20Land">Agricultural Land</Link></div>
        <div><h4>Company</h4><Link href="/about">About 1Bigha</Link><Link href="/contact">Contact</Link><Link href="/terms">Terms & Privacy</Link></div>
      </div>
      <div className="site-container site-footer-bottom"><span>© 2026 1Bigha. All rights reserved.</span><span>आपकी जमीन, आपका भविष्य</span></div>
    </footer>
  </>;
}
