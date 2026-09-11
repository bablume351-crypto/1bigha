'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Heart, MapPin, MessageCircle, Phone, Share2, ShieldCheck } from 'lucide-react';
import { properties } from '@/lib/data';

type Props = { params: Promise<{ id: string }> };

export default function PropertyPage({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);
  const [showLogin, setShowLogin] = useState(false);

  if (!property) {
    return (
      <main className="section">
        <div className="container">
          <h1>Property not found</h1>
        </div>
      </main>
    );
  }

  async function shareProperty() {
    const shareData = {
      title: property.title,
      text: `${property.title} — ${property.location} — ${property.price}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Property link copied.');
      }
    } catch {
      // User cancelled the share sheet.
    }
  }

  function requireLogin() {
    setShowLogin(true);
  }

  return (
    <main className="detailhero">
      <div className="container">
        <div className="detail-topbar">
          <button className="btn" onClick={() => router.back()}>
            <ArrowLeft size={15} /> Back
          </button>

          <div className="detail-actions">
            <button className="icon-btn" onClick={shareProperty} title="Share property" aria-label="Share property">
              <Share2 size={18} />
            </button>
            <button className="icon-btn" onClick={requireLogin} title="Shortlist" aria-label="Shortlist">
              <Heart size={18} />
            </button>
          </div>
        </div>

        <div className="gallery">
          <img src={property.image} alt={property.title} />
          <div className="gallery-side">
            <img className="small" src={property.image} alt="Property view" />
            <img className="small" src={property.image} alt="Property view" />
          </div>
        </div>

        <div className="detailgrid">
          <div className="panel">
            <div className="detail-location">
              <MapPin size={17} /> {property.location}
            </div>

            <div className="detail-title-row">
              <div>
                <h1>{property.title}</h1>
                <div className="detail-price">{property.price}</div>
              </div>
              {property.verified && (
                <span className="verified-large">
                  <ShieldCheck size={15} /> Verified
                </span>
              )}
            </div>

            <div className="meta">
              <span className="pill">{property.area}</span>
              <span className="pill">{property.type}</span>
              <span className="pill">{property.road}</span>
            </div>

            <p className="detail-description">{property.description}</p>

            <div className="featurelist">
              <div className="feature"><b>Area</b><br />{property.area}</div>
              <div className="feature"><b>Road</b><br />{property.road}</div>
              <div className="feature"><b>Location</b><br />{property.city}</div>
              <div className="feature"><b>Listing</b><br />{property.verified ? 'Verified' : 'Standard'}</div>
            </div>

            <h3>Location</h3>
            <div className="mapbox">
              <MapPin size={20} />
              {property.location}
            </div>
          </div>

          <aside className="panel seller-panel">
            <h3>Interested in this property?</h3>
            <p className="muted">
              View seller details or contact the owner after mobile verification.
            </p>

            <button className="btn primary full" onClick={requireLogin}>
              <Phone size={17} /> View Owner Details
            </button>

            <button className="btn full contact-alt" onClick={requireLogin}>
              <MessageCircle size={17} /> WhatsApp Owner
            </button>

            <button className="btn full contact-alt" onClick={requireLogin}>
              <Heart size={17} /> Shortlist Property
            </button>

            <div className="login-note">
              <ShieldCheck size={16} />
              Login is required only when you contact the seller.
            </div>
          </aside>
        </div>
      </div>

      {showLogin && (
        <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <div className="login-modal-icon"><ShieldCheck size={24} /></div>
            <h2>Continue with mobile</h2>
            <p className="muted">
              You can view the property without login. Verify your mobile number only to contact the seller.
            </p>
            <button
              className="btn primary full"
              onClick={() =>
                router.push(`/login?next=${encodeURIComponent(window.location.pathname)}`)
              }
            >
              Continue to Login
            </button>
            <button className="btn full" onClick={() => setShowLogin(false)}>
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
