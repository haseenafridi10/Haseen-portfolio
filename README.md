# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

### 1. Sticky Navigation with Active States
- Navigation highlights current section during scroll
- Smooth scrolling to sections with offset for fixed header
- Mobile menu with slide-in animation

### 2. Project Showcase with Filtering
- Grid layout for portfolio projects with category filters
- Modal popups with project details and image carousels
- "Load More" pagination for additional projects

### 3. Interactive Skills Visualization
- Animated progress bars for technical skills
- Skills filter by category (frontend, backend, tools)
- Hover effects showing skill descriptions

### 4. Blog System with Search
- Blog post cards with featured images and excerpts
- Search functionality that filters posts in real-time
- Category and tag-based filtering
- Individual blog post pages with full content

### 5. Contact Form with Validation
- Multi-field contact form with comprehensive validation
- Interactive map integration (embedded Google Maps)
- Social media links with hover animations

### 6. Reading Progress Indicator
- Top progress bar that fills as user scrolls through blog posts
- Estimated reading time display
- Table of contents with jump links for long articles
- Active section highlighting in table of contents

### 7. Performance Optimizations
- Lazy loading for images below the fold
- CSS animations instead of JavaScript where possible
- Responsive images with proper loading attributes
- Static site generation for optimal performance

## Technologies Used

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

- `/app` - Next.js app router pages
- `/components` - React components
  - `/sections` - Main page sections (Hero, About, Skills, Projects, Blog, Contact)
  - `/ui` - Reusable UI components (shadcn/ui)
- `/lib` - Utility functions

## Customization

### Update Personal Information

Edit the following components to customize with your own information:

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Name, title, and description
   - Social media links

2. **About Section** (`components/sections/About.tsx`)
   - Bio text
   - Statistics
   - Profile image

3. **Skills Section** (`components/sections/Skills.tsx`)
   - Add/modify skills and proficiency levels

4. **Projects Section** (`components/sections/Projects.tsx`)
   - Add your own projects with images and descriptions

5. **Blog Section** (`components/sections/Blog.tsx`)
   - Add your blog posts

6. **Contact Section** (`components/sections/Contact.tsx`)
   - Contact information
   - Social media links
   - Map location

### Color Scheme

The color scheme can be customized in `app/globals.css` by modifying the CSS variables under `:root` and `.dark`.

## License

MIT
