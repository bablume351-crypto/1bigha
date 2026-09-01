'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/data';

function SearchContent() {
  const sp = useSearchParams();

  const [q, setQ] = useState(sp.get('q') || '');
  const [type, setType] = useState(sp.get('type') || '');
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
    <div className="container">
      <div className="sectionhead">
        <div>
          <h2>Property search</h2>
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
            <label>Type</label>
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
          {filtered.length ? (
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
  );
}

export default function Search() {
  return (
    <main className="searchpage">
      <Suspense fallback={<div className="container section">
        <p>Loading properties...</p>
      </div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
