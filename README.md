# 🖨️ Print Forge

<div align="center">

![Print Forge Logo](public/printforge-logo-1.png)

**Your go-to platform for discovering amazing 3D models**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📱 Pages & Components](#-pages--components)
- [🎨 Design System](#-design-system)
- [📊 Data Models](#-data-models)
- [🔧 Configuration](#-configuration)
- [📦 Dependencies](#-dependencies)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

**Print Forge** is a modern, responsive web application built with Next.js 15 that serves as a comprehensive platform for discovering and exploring 3D printing models. The platform features a beautiful UI, advanced filtering capabilities, and a user-friendly interface designed for makers, hobbyists, and professional designers.

### 🎨 Key Highlights

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Advanced Filtering**: Category-based filtering and search functionality
- **Performance Optimized**: Image optimization and caching strategies
- **Beautiful UI**: Clean, modern interface with smooth animations

---

## ✨ Features

### 🔍 **Discovery & Search**
- **Advanced Search**: Search across model names, descriptions, and categories
- **Category Filtering**: Filter by 10+ categories including Art, Education, Tools, and more
- **Real-time Results**: Instant search with debounced input
- **Clear Filters**: Easy filter management and reset functionality

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Mobile drawer for category filtering
- **Adaptive Layout**: Grid system that adapts to different viewports
- **Smooth Animations**: Framer Motion powered transitions

### 🎨 **User Experience**
- **Loading States**: Skeleton loading for better perceived performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Hover Effects**: Interactive elements with smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 📊 **Data Management**
- **Static Data**: JSON-based model and category data
- **Type Safety**: Full TypeScript implementation
- **Caching**: In-memory caching for improved performance
- **Error Handling**: Graceful error states and fallbacks

---

## 🏗️ Project Structure

```
print_forge/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 3d_models/               # 3D Models pages
│   │   ├── 📄 page.tsx             # Models listing page
│   │   └── 📁 [id]/                # Dynamic model detail pages
│   │       └── 📄 page.tsx         # Individual model page
│   ├── 📁 about/                   # About page
│   │   └── 📄 page.tsx             # About page component
│   ├── 📁 data/                    # Static data files
│   │   ├── 📄 categories.json      # Category definitions
│   │   └── 📄 models.json          # 3D model data
│   ├── 📁 lib/                     # Utility functions
│   │   ├── 📄 categories.ts        # Category management
│   │   └── 📄 models.ts            # Model data handling
│   ├── 📁 types/                   # TypeScript type definitions
│   │   └── 📄 index.tsx            # Type definitions
│   ├── 📄 globals.css              # Global styles
│   ├── 📄 layout.tsx               # Root layout
│   └── 📄 page.tsx                 # Home page
├── 📁 components/                  # React components
│   ├── 📄 3d_models.tsx           # Main models component
│   ├── 📄 category.tsx             # Category list component
│   ├── 📄 header.tsx               # Navigation header
│   └── 📄 hero_section.tsx         # Homepage hero
├── 📁 public/                      # Static assets
│   ├── 🖼️ printforge-logo-1.png    # Desktop logo
│   ├── 🖼️ printforge-logo-mobile.png # Mobile logo
│   ├── 🖼️ mobile-home-page-hero-img.png # Hero image
│   └── 🖼️ about-page-image.png     # About page image
├── 📁 services/                    # Service layer
│   └── 📄 services.ts              # API configuration
├── 📄 next.config.ts               # Next.js configuration
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tailwind.config.js           # Tailwind CSS config
└── 📄 tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/print-forge.git
   cd print-forge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📱 Pages & Components

### 🏠 **Home Page** (`app/page.tsx`)
- **Hero Section**: Compelling introduction with call-to-action
- **Category Grid**: Visual category selection
- **Responsive Layout**: Mobile and desktop optimized

### 🔍 **3D Models Page** (`app/3d_models/page.tsx`)
- **Model Grid**: Responsive grid layout for model display
- **Search Bar**: Real-time search functionality
- **Category Sidebar**: Desktop filtering panel
- **Mobile Drawer**: Touch-friendly mobile filtering
- **Loading States**: Skeleton loading animations

### 📄 **Model Detail Page** (`app/3d_models/[id]/page.tsx`)
- **Model Information**: Detailed model view
- **Image Gallery**: High-quality model images
- **Metadata Display**: Likes, category, and date added
- **Responsive Design**: Mobile and desktop layouts

### ℹ️ **About Page** (`app/about/page.tsx`)
- **Company Story**: Mission and vision
- **Feature Highlights**: Key platform benefits
- **Statistics**: Community metrics
- **Visual Elements**: Icons and imagery

### 🧩 **Components**

#### **Header Component** (`components/header.tsx`)
- **Responsive Logo**: Desktop and mobile versions
- **Navigation Menu**: Active state management
- **Sticky Positioning**: Always visible navigation

#### **Hero Section** (`components/hero_section.tsx`)
- **Call-to-Action**: Prominent browse button
- **Responsive Images**: Optimized hero imagery
- **Typography**: Clear hierarchy and messaging

#### **Category List** (`components/category.tsx`)
- **Grid Layout**: Responsive category grid
- **Hover Effects**: Interactive category cards
- **Link Integration**: Seamless navigation

#### **3D Models Component** (`components/3d_models.tsx`)
- **Advanced Filtering**: Category and search filters
- **State Management**: Complex filtering logic
- **Performance Optimization**: Debounced search and caching
- **Mobile UX**: Touch-friendly drawer interface

---

## 🎨 Design System

### 🎨 **Color Palette**
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Yellow (#EAB308)
- **Background**: White (#FFFFFF)
- **Text**: Gray scale (100-900)
- **Accent**: Red for clear actions

### 📝 **Typography**
- **Primary Font**: Poppins (Google Fonts)
- **Heading Font**: Montserrat Alternates
- **Font Weights**: 100-900 available
- **Responsive Sizing**: Mobile-first approach

### 🎭 **Components**
- **Cards**: Rounded corners with shadow effects
- **Buttons**: Gradient backgrounds with hover states
- **Inputs**: Clean borders with focus states
- **Icons**: Flaticon integration for consistency

### 📱 **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

---

## 📊 Data Models

### 🏷️ **Category Model**
```typescript
type Category = {
  displayName: string    // Human-readable name
  slug: string          // URL-friendly identifier
  icon?: string         // Optional icon URL
}
```

### 🎯 **Model Data Structure**
```typescript
type Model = {
  id: number           // Unique identifier
  name: string         // Model name
  description: string  // Detailed description
  likes: number        // Popularity metric
  image: string        // Image URL
  category: string     // Category slug
  dateAdded: string    // ISO date string
}
```

### 📈 **Current Data**
- **52 Models** across 10 categories
- **Categories**: 3D Printer, Art, Education, Fashion, Hobby & DIY, Household, Miniatures, Props & Cosplay, Tools, Toys & Games
- **Image Sources**: Unsplash, Flaticon, and placeholder images
- **Date Range**: 2023-2024 model additions

---

## 🔧 Configuration

### ⚙️ **Next.js Configuration** (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https", 
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Additional image domains...
    ]
  }
}
```

### 🎨 **Tailwind CSS** (`tailwind.config.js`)
- **Custom Fonts**: Poppins and Montserrat Alternates
- **Responsive Design**: Mobile-first breakpoints
- **Custom Colors**: Brand-specific color palette
- **Component Classes**: Reusable utility classes

### 📝 **TypeScript** (`tsconfig.json`)
- **Strict Mode**: Enabled for type safety
- **Path Mapping**: Clean import paths
- **Next.js Integration**: Optimized for Next.js 15

---

## 📦 Dependencies

### 🚀 **Core Dependencies**
```json
{
  "next": "15.5.2",                    // React framework
  "react": "19.1.0",                  // UI library
  "react-dom": "19.1.0",              // DOM rendering
  "typescript": "^5"                   // Type safety
}
```

### 🎨 **UI & Styling**
```json
{
  "@heroui/react": "^2.8.3",          // UI component library
  "@heroui/navbar": "^2.2.23",        // Navigation components
  "@heroui/divider": "^2.2.18",       // Layout components
  "framer-motion": "^12.23.12",       // Animation library
  "tailwindcss": "^4"                 // CSS framework
}
```

### 🛠️ **Development Tools**
```json
{
  "eslint": "^9",                     // Code linting
  "eslint-config-next": "15.5.2",     // Next.js ESLint config
  "@types/node": "^20",               // Node.js types
  "@types/react": "^19",              // React types
  "@types/react-dom": "^19"           // React DOM types
}
```

---

## 🌐 Deployment

### 🚀 **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Deploy automatically on push to main branch

### 🐳 **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 🌍 **Environment Variables**
```bash
# Optional: Add any required environment variables
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

---

## 🤝 Contributing

We welcome contributions to Print Forge! Here's how you can help:

### 🐛 **Bug Reports**
- Use GitHub Issues to report bugs
- Include steps to reproduce
- Provide system information

### ✨ **Feature Requests**
- Suggest new features via GitHub Issues
- Describe the use case and benefits
- Consider implementation complexity

### 🔧 **Code Contributions**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📋 **Development Guidelines**
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Test on multiple screen sizes
- Ensure accessibility compliance

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **HeroUI** for beautiful components
- **Unsplash** for high-quality images
- **Flaticon** for consistent iconography

---
