'use client';

import { useState } from 'react';

export default function Sell() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="section">
      <div className="container">
        <div className="panel" style={{ maxWidth: 850, margin: '0 auto' }}>
          <h1>List Your Property</h1>
          <p className="muted">Add the key details and submit your listing.</p>

          {submitted ? (
            <div style={{ padding: 24, marginTop: 24, borderRadius: 16, background: '#e9f7ef', border: '1px solid #b7dfc6' }}>
              <h3 style={{ marginTop: 0 }}>✅ Property details received</h3>
              <p className="muted">Your listing information has been submitted.</p>
              <button type="button" className="btn primary" onClick={() => setSubmitted(false)}>Add Another</button>
            </div>
          ) : (
            <form className="formgrid" onSubmit={handleSubmit}>
              <input className="input" name="title" placeholder="Property title" required />
              <select className="input" name="type" defaultValue="" required>
                <option value="" disabled>Property type</option>
                <option>Agricultural Land</option>
                <option>Residential Plot</option>
                <option>Commercial Plot</option>
                <option>Farm Land</option>
                <option>Industrial Land</option>
              </select>
              <input className="input" name="state" placeholder="State" required />
              <input className="input" name="city" placeholder="District / City" required />
              <input className="input" name="area" placeholder="Area" required />
              <input className="input" name="price" placeholder="Expected price" required />
              <input className="input full" name="road" placeholder="Road access / landmark" />
              <textarea className="input full" name="description" rows={5} placeholder="Property details" required />
              <input className="input full" name="images" type="file" accept="image/*" multiple />
              <button className="btn primary full" type="submit">Submit Property</button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
