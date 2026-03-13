# F6IT Corporate Website (Static)

Modern corporate fintech/IT website (dark + blue theme), fully responsive, with smooth reveal animations and reusable header/footer components.

## Pages

- `index.html` (Home)
- `about.html`
- `services.html`
- `products.html`
- `careers.html`
- `contact.html`

## Tech

- HTML5
- TailwindCSS (CDN)
- Custom CSS: `assets/css/styles.css`
- JavaScript: `assets/js/components.js`, `assets/js/main.js`, `assets/js/contact.js`

## Run locally

For best results, serve via a local web server (instead of opening the HTML files directly).

### Option A: Python

```bash
python -m http.server 5173
```

Open `http://localhost:5173/`.

### Option B: Node

```bash
npx serve .
```

## Customize

- Replace placeholder logos/text inside each page.
- Update company name and contact details in `assets/js/components.js` (header/footer).

