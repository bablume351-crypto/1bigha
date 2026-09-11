'use client';

import { Share2 } from 'lucide-react';

export default function ShareButton({ title }: { title: string }) {
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      alert('Property link copied');
    } catch {
      // User cancelled the native share sheet.
    }
  };

  return (
    <button type="button" className="share-button" onClick={share} aria-label={`Share ${title}`} title="Share property">
      <Share2 size={15} />
      <span>Share</span>
    </button>
  );
}
