'use client';

import { useMemo, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data';

export default function SearchPage() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('');
  const [verified, setVerified] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesQuery =
        !q ||
        `${p.title} ${p.location} ${p.type}`
          .toLowerCase()
          .includes(q.toLowerCase());

      const matchesType =
        !type ||
        p.type.toLowerCase().includes(type.toLowerCase());

      const matchesVerified =
        !verified || p.verified;

      return matchesQuery && matchesType && matchesVerified;
    });
  }, [q, type, verified]);

  return (
    <main className="searchpage">
      <div className="container">
        <div className="sectionhead">
          <div>
            <h2>Property Search</h2>
            <p className="muted">
              {filtered.length} properties found
            </p>
          </div>
        </div>

        <div className="searchlayout">
          <aside className="sidebar">
            <b>Filters</b>

            <p>
              <label>Search</label>
              <input
                className="input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Location or keyword"
              />
            </p>

            <p>
              <label>Property Type</label>
              <select
                className="input"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Any</option>
                {[...new Set(properties.map((p) => p.type))].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </p>

            <p>
              <label>
                <input
                  type="checkbox"
                  checked={verified}
                  onChange={(e) => setVerified(e.target.checked)}
                />{' '}
                Verified only
              </label>
            </p>
          </aside>

          <section>
            {filtered.length > 0 ? (
              <div className="results">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} p={p} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h3>No matching properties</h3>
                <p className="muted">
                  Try a broader location or property type.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
