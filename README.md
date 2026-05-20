# AquaDD - Website za prodaju vode u balonima

Moderan React web sajt za prodaju prirodne vode u balonima (5L i 10L).

## 🚀 Pokretanje projekta

### Preduslov
- Node.js (verzija 14 ili novija)
- npm ili yarn

### Instalacija

1. Instalirajte zavisnosti:
```bash
npm install
```

2. Pokrenite razvojni server:
```bash
npm start
```

Sajt će biti dostupan na [http://localhost:3000](http://localhost:3000)

### Build za produkciju

```bash
npm run build
```

Ova komanda kreira optimizovanu produkcijsku verziju u `build` folderu.

## 📁 Struktura projekta

```
aquadd-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Features.js & Features.css
│   │   ├── Products.js & Products.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 📦 Komponente

### Navbar
- Fiksni meni koji postaje providniji pri skrolovanju
- Linkovi ka svim sekcijama sajta
- Animirani logo sa efektom plutanja

### Hero
- Glavna sekcija sa naslovom
- Call-to-action dugmići
- Animirani pozadinski elementi

### Features
- 4 kartice sa prednostima:
  - 100% Prirodna voda
  - Kontrola kvaliteta
  - Brza dostava
  - Eko pakovanje
- Hover efekti na karticama

### Products
- Prikaz 5L i 10L balona
- Cene i karakteristike
- Dugme za poručivanje

### Contact
- Kontakt informacije (telefon, adresa)
- Forma za porudžbine
- Polja: ime, telefon, adresa, poruka

### Footer
- Logo i copyright informacije

## 🎨 Karakteristike

- ✅ Komponente razdvojene u posebne fajlove
- ✅ CSS modularizovan po komponentama
- ✅ Responzivan dizajn
- ✅ Prirodne boje (plava, zelena, bela)
- ✅ Glatke animacije
- ✅ Moderni hover efekti

## 🛠️ Tehnologije

- React 18
- Lucide React (ikone)
- CSS3 (custom properties, animations)
- Google Fonts (Crimson Pro, Work Sans)

## 📝 Prilagođavanje

### Promena cena

Otvorite `src/components/Products.js` i pronađite `products` niz:

```javascript
const products = [
  {
    id: 1,
    name: 'AquaDD 5L',
    price: '250 RSD', // Promenite ovde
    ...
  }
];
```

### Promena kontakt informacija

U `src/components/Contact.js`:

```javascript
<Phone size={24} />
<span>+381 64 123 4567</span> // Vaš broj
```

### Promena boja

Otvorite `src/index.css` i promenite CSS promenljive:

```css
:root {
  --primary-blue: #0891b2;
  --deep-blue: #0e7490;
  --fresh-green: #10b981;
  ...
}
```

## 🌐 Deploy

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/aquadd"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## 📄 Licenca

© 2024 AquaDD. Sva prava zadržana.
