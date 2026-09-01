'use client';

export default function Sell() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert('Demo listing received. Seller dashboard will be connected in V2.');
  }

  return (
    <main className="section">
      <div className="container">
        <div
          className="panel"
          style={{ maxWidth: 850, margin: '0 auto' }}
        >
          <h1 style={{ fontFamily: 'Playfair Display, serif' }}>
            List your property
          </h1>

          <p className="muted">
            Start with the essential information. We can add
            verification, payments and seller tools in later versions.
          </p>

          <form className="formgrid" onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="Property title"
            />

            <select className="input" defaultValue="">
              <option value="" disabled>
                Property type
              </option>
              <option>Agricultural Land</option>
              <option>Residential Plot</option>
              <option>Commercial Plot</option>
              <option>Farm Land</option>
            </select>

            <input
              className="input"
              placeholder="State"
            />

            <input
              className="input"
              placeholder="District / City"
            />

            <input
              className="input"
              placeholder="Area (e.g. 5 Bigha)"
            />

            <input
              className="input"
              placeholder="Price"
            />

            <input
              className="input full"
              placeholder="Road access / nearby landmark"
            />

            <textarea
              className="input full"
              rows={5}
              placeholder="Describe the property"
            />

            <input
              className="input full"
              type="file"
              multiple
            />

            <button
              className="btn primary full"
              type="submit"
            >
              Submit Property
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
