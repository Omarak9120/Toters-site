# Toters Marketing Website

A bilingual (English/Arabic) marketing website for Toters delivery service built with Astro, Tailwind CSS, and semantic HTML.

## Features

- 🌍 **Bilingual Support**: English and Arabic with RTL support
- 🎨 **Modern Design**: Built with Tailwind CSS and custom design tokens
- ♿ **Accessibility**: Semantic HTML and ARIA-friendly markup
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Meta tags, structured data, and semantic markup
- ⚡ **Fast**: Built with Astro for optimal performance

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.astro     # Navigation with locale switch
│   ├── Footer.astro     # Site footer with links
│   ├── Hero.astro       # Hero section component
│   ├── ValueProps.astro # Value propositions section
│   ├── AppBadges.astro  # App download badges
│   ├── FeaturesGrid.astro # Features showcase
│   └── HowItWorks.astro # How it works section
├── layouts/
│   └── Base.astro       # Base layout with SEO meta
├── pages/               # Page routes
│   ├── index.astro      # Homepage (English)
│   ├── ar/
│   │   └── index.astro  # Homepage (Arabic)
│   ├── customers.astro  # For customers page
│   ├── partners.astro   # For partners page
│   ├── couriers.astro   # For couriers page
│   ├── about.astro      # About us page
│   ├── contact.astro    # Contact page
│   ├── download.astro   # Download app page
│   ├── privacy.astro    # Privacy policy
│   └── terms.astro      # Terms of service
└── styles/
    └── tokens.css       # Design tokens and CSS variables
```

## Components

### Header Component

- Responsive navigation menu
- Language switcher (EN/AR)
- Mobile hamburger menu
- Download app CTA button

### Footer Component

- Multi-column layout with links
- Social media links
- Language-specific content
- Legal links

### Hero Component

- Compelling headline and subheadline
- Feature highlights
- Statistics display
- Call-to-action buttons
- Animated visual elements

### ValueProps Component

- Six key value propositions
- Icon-based design
- Feature lists
- Hover effects

### AppBadges Component

- App Store and Google Play badges
- QR code for easy download
- Phone mockup visualization
- Feature highlights

### FeaturesGrid Component

- Grid layout of features
- Color-coded icons
- Statistics section
- Responsive design

### HowItWorks Component

- Three-step process
- Alternating layout
- Visual representations
- Detailed explanations

## Internationalization

The website supports both English and Arabic languages:

- **English**: Default language, LTR layout
- **Arabic**: RTL layout with Arabic translations
- **Language Switching**: Seamless switching between languages
- **URL Structure**: `/` for English, `/ar/` for Arabic

## Design System

### Colors

- **Primary**: Blue color palette (#0ea5e9)
- **Secondary**: Gray color palette
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography

- **English**: Inter font family
- **Arabic**: Noto Sans Arabic font family
- **Responsive**: Fluid typography scales

### Spacing

- Consistent spacing scale using Tailwind CSS
- Custom CSS variables for design tokens

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Development

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import the Base layout and required components
3. Add content with proper semantic HTML
4. Include Header and Footer components

### Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Define TypeScript interfaces for props
3. Include accessibility attributes
4. Support both English and Arabic locales

### Styling

- Use Tailwind CSS classes for styling
- Add custom styles to `src/styles/tokens.css`
- Follow the established design system
- Ensure responsive design

## Accessibility Features

- Semantic HTML elements (`<main>`, `<nav>`, `<header>`, `<footer>`)
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## SEO Features

- Meta tags for each page
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs
- Language-specific meta tags
- Sitemap ready

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement
- Graceful degradation

## Performance

- Optimized images and assets
- Minimal JavaScript
- CSS optimization
- Fast loading times
- Core Web Vitals optimized

## Contributing

1. Follow the established code style
2. Ensure accessibility compliance
3. Test on multiple devices and browsers
4. Update documentation as needed
5. Maintain bilingual support

## License

This project is proprietary to Toters.
