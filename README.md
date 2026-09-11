# 1Bigha Homepage V4

Updates:
- Share button on every property card
- Share button on property detail pages
- Mobile Login button in header
- 10 NCR/UP demo properties
- City + property-type search/filter
- Expressway hero sections for Tronica City, Ghaziabad and Baghpat

Upload the CONTENTS of this folder to the GitHub repository root.


## Contact/Login flow
Properties are viewable without login. Seller contact actions (owner details, WhatsApp, shortlist) open a mobile-login gate. Real SMS OTP still requires an SMS provider and production auth/session setup.


## Next.js 15 fix
Dynamic property route uses Promise-based `params` with React `use(params)` so `/property/[id]` type-checks on Next.js 15.
