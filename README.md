# HLAPL - Next.js Law Firm Website

This is a Next.js conversion of the HLAPL HTML template, preserving all original fonts, images, and layout.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── css/          # All original CSS files
│   ├── js/           # All original JavaScript files
│   ├── fonts/        # All original font files
│   └── images/       # All original images
├── package.json
├── tsconfig.json
└── next.config.js
```

## Features

- ✅ All original CSS preserved
- ✅ All original JavaScript functionality
- ✅ All fonts and images in public folder
- ✅ Same layout and design
- ✅ TypeScript support
- ✅ Next.js App Router
- ✅ Component-based architecture

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All assets (CSS, JS, fonts, images) are served from the `/public` directory
- Original jQuery plugins and animations are preserved
- Bootstrap and custom styles work exactly as in the original HTML
