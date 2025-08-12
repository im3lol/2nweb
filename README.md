# 2N Business Management - Portfolio Website

A modern, responsive portfolio website for 2N Business Management, showcasing their premium marketing agency and Amazon account management services.

## 🚀 Features

- **Modern React + TypeScript** - Built with Vite for fast development
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Performance Focused** - Optimized for Core Web Vitals
- **Accessible** - WCAG compliant components
- **Animations** - Smooth animations with animejs

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── ServicesPage.tsx # Services overview
│   ├── WorkPage.tsx    # Portfolio & case studies
│   ├── ContactPage.tsx # Contact form
│   ├── PrivacyPage.tsx # Privacy policy
│   └── TermsPage.tsx   # Terms of service
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Animations**: animejs
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

### Home Page
- Hero section with main value proposition
- "Why 2N" section highlighting unique advantages
- 6-step process overview
- Featured work preview

### Services Page
- Marketing Agency Services
  - Performance & Media Buying
  - Branding & Visual Identity
  - Social Media Management
  - Web & Shopify Development
  - Content & UGC Production
- Amazon Account Management
  - Full Management
  - Imaging & Cataloging
  - Advertising Optimization
  - FBA Preparation
  - Shipping & Returns

### Work Page
- Portfolio showcase
- Case studies across different industries
- Services provided for each project

### Contact Page
- Comprehensive contact form
- Multiple service selection options
- Market targeting options
- WhatsApp integration

### Legal Pages
- Privacy Policy
- Terms of Service

## 🎨 Design System

### Colors
- **Primary**: Black (#000000) and White (#FFFFFF)
- **Accent**: Custom accent colors for highlights
- **Typography**: Inter font family with Arabic support

### Components
- Custom button variants (primary, secondary, large, medium, small)
- Responsive container system
- Consistent spacing and typography

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Include SEO meta tags using `react-helmet-async`

### Styling
- Use Tailwind CSS classes for styling
- Custom styles can be added to `src/index.css`
- Component-specific styles use CSS modules or styled-components

## 📈 Performance Optimization

- Lazy loading for images and components
- Optimized bundle splitting
- Core Web Vitals optimization
- SEO best practices implementation

## 🔒 Security

- Form validation and sanitization
- Secure meta tags
- Privacy policy compliance

## 📞 Support

For questions or support, contact the development team.

---

Built with ❤️ for 2N Business Management
