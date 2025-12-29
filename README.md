# AzLock - Educational Q&A App Lock Website

> Learn While You Lock. The Only App Lock That Makes You Smarter.

A modern, responsive marketing website for AzLock - the world's first educational app lock that turns every unlock into a learning opportunity.

## Features

- **Interactive Q&A Demo** - Live demonstration of the educational question system
- **12 Grade Levels** - Showcasing adaptive difficulty from Pre-KG to College level
- **Use Case Stories** - Targeted sections for parents, students, lifelong learners, and seniors
- **Comparison Section** - Clear visualization of AzLock vs traditional locks
- **Modern Design** - Built with Next.js 14, TailwindCSS, and Framer Motion
- **Responsive** - Fully optimized for mobile, tablet, and desktop
- **SEO Optimized** - Comprehensive meta tags and structured content

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** TailwindCSS with custom Material 3 inspired theme
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional)
- **Language:** TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
```

This will create a static export in the `out/` directory.

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages.

**Setup Steps:**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/azlock.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to Pages (left sidebar)
   - Under "Build and deployment"
   - Source: **GitHub Actions**

3. The site will automatically deploy on every push to `main` branch
4. Access your site at: `https://YOUR_USERNAME.github.io/azlock/`

**Manual Deployment:**

You can also trigger deployment manually from the Actions tab.

### Docker Deployment (Alternative)

Build and run using Docker:

```bash
docker build -t azlock-website .
docker run -d -p 3000:3000 azlock-website
```

Or using Docker Compose:

```bash
docker-compose up -d
```

## Project Structure

```
azlock-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── QADemo.tsx         # Interactive Q&A demonstration
│   ├── GradeLevels.tsx    # 12 grade levels showcase
│   ├── UseCases.tsx       # Use case stories
│   ├── Comparison.tsx     # Feature comparison
│   ├── Features.tsx       # Additional features
│   ├── Statistics.tsx     # Statistics bar
│   ├── DownloadCTA.tsx    # Download call-to-action
│   └── Footer.tsx         # Footer with links
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Key Sections

1. **Hero Section** - Eye-catching intro with "Learn While You Lock" tagline
2. **Statistics Bar** - Quick facts (100+ questions, 12 grades, 4 subjects)
3. **Q&A Revolution** - Deep dive into the educational system
4. **Grade Levels** - Visual showcase of all 12 difficulty levels
5. **Comparison** - Traditional PIN vs AzLock Q&A system
6. **Use Cases** - Stories for different user types
7. **Features** - Additional app features
8. **Download CTA** - Call-to-action with download buttons
9. **Footer** - Links and contact information

## Customization

### Colors

The primary blue theme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Modify these values
    500: '#2196f3',
    600: '#1e88e5',
    // ...
  }
}
```

### Content

All content is modular and can be easily edited in the respective component files.

## SEO Keywords

- Educational app lock
- Q&A app security
- Learning app lock
- Math app lock
- Educational security
- Grade-based app lock
- App lock for kids
- Parental control with learning

## License

All rights reserved © 2025 AzLock
