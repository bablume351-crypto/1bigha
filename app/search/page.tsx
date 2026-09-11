'use client';

import { useEffect, useMemo, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { cities, properties } from '@/lib/data';

export default function SearchPage() {
  const [q,setQ]=useState('');
  const [city,setCity]=useState('');
  const [type,setType]=useState('');
  const [verified,setVerified]=useState(false);

  useEffect(()=>{
    const p=new URLSearchParams(window.location.search);
    setQ(p.get('q')||'');
    setCity(p.get('city')||'');
    setType(p.get('type')||'');
  },[]);

  const filtered=useMemo(()=>properties.filter(p=>{
    const hay=`${p.title} ${p.location} ${p.type}`.toLowerCase();
    const matchesQ=!q || hay.includes(q.toLowerCase());
    const matchesCity=!city || p.city.toLowerCase()===city.toLowerCase();
    const matchesType=!type || p.type.toLowerCase().includes(type.toLowerCase());
    const matchesVerified=!verified || p.verified;
    return matchesQ && matchesCity && matchesType && matchesVerified;
  }),[q,city,type,verified]);

  return <main className="searchpage"><div className="container"><div className="sectionhead"><div><h2>Property Search</h2><p className="muted">{filtered.length} properties found</p></div></div><div className="searchlayout"><aside className="sidebar"><b>Filters</b><p><label>Keyword</label><input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Location or property"/></p><p><label>City</label><select className="input" value={city} onChange={e=>setCity(e.target.value)}><option value="">All cities</option>{cities.map(c=><option key={c} value={c}>{c}</option>)}</select></p><p><label>Type</label><select className="input" value={type} onChange={e=>setType(e.target.value)}><option value="">Any</option>{[...new Set(properties.map(p=>p.type))].map(t=><option key={t} value={t}>{t}</option>)}</select></p><p><label><input type="checkbox" checked={verified} onChange={e=>setVerified(e.target.checked)}/> Verified only</label></p></aside><section>{filtered.length?<div className="results">{filtered.map(p=><PropertyCard key={p.id} p={p}/>)}</div>:<div className="empty"><h3>No matching properties</h3><p className="muted">Try another city or property type.</p></div>}</section></div></div></main>;
}
