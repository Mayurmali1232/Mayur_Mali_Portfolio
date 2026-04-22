# Modern Portfolio Website

A stunning, interactive portfolio website built with React, featuring 3D animations, smooth scrolling, and beautiful glassmorphism design.

## 🚀 Features

- **3D Graphics**: Interactive 3D scenes with React Three Fiber
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Glassmorphism Design**: Modern glass-like UI components
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Responsive Design**: Optimized for laptop and mobile devices
- **Interactive Elements**: Hover effects, parallax, and smooth transitions
- **Typewriter Effect**: Dynamic text animation
- **Particle Systems**: Beautiful background animations
- **Custom Cursor**: Interactive cursor effects
- **Loading Animation**: Elegant loading screen
- **Scroll Progress**: Visual progress indicator
- **Testimonials Section**: Client feedback showcase
- **Advanced 3D Effects**: Environment mapping and auto-rotation

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **GSAP** - High-performance animation library
- **React Three Fiber** - 3D graphics in React
- **@react-three/drei** - Useful helpers for React Three Fiber
- **React Icons** - Popular icon library
- **AOS** - Animate on scroll library
- **React Parallax Tilt** - Tilt effects for cards
- **React Simple Typewriter** - Typewriter animation effect

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── resume.pdf
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── Cursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── ErrorBoundary.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── animations/
│   │   ├── framerVariants.js
│   │   └── gsapAnimations.js
│   ├── three/
│   │   ├── Scene.jsx
│   │   ├── FloatingSphere.jsx
│   │   └── Particles.jsx
│   │   └── Particles.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .vscode/
│   └── settings.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/sections/Hero.jsx` - Name and tagline
- `src/sections/About.jsx` - Personal story and skills
- `src/sections/Experience.jsx` - Work experience and education
- `src/sections/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

### Styling
- `src/styles/global.css` - Global styles and animations
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Main CSS imports

### 3D Elements
- `src/three/Scene.jsx` - Main 3D scene
- `src/three/FloatingSphere.jsx` - Animated sphere
- `src/three/Particles.jsx` - Particle system

### Animations
- `src/animations/framerVariants.js` - Framer Motion variants
- `src/animations/gsapAnimations.js` - GSAP animations
- `src/hooks/useScrollAnimation.js` - Scroll-based animations

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Laptop**: 1024px to 1199px
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🌟 Key Features Explained

### 3D Background
The hero section features an interactive 3D scene with:
- Floating geometric shapes
- Particle systems
- Orbital camera controls
- Gradient backgrounds

### Glassmorphism Cards
All major components use glassmorphism effects with:
- Semi-transparent backgrounds
- Blur effects
- Subtle borders
- Hover animations

### Smooth Scrolling
Implemented smooth scrolling navigation with:
- Active section highlighting
- Scroll-based animations
- Mobile-friendly hamburger menu

### Interactive Elements
- Custom cursor with hover effects
- Parallax tilt cards
- Animated skill bars
- Typewriter text effects
- Loading animations

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Three.js, and modern web technologies.
