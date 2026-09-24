# Animated Progress Bars

A responsive, interactive web application showcasing various types of animated progress bars and indicators. Built with React, Tailwind CSS, and Motion.

![Project Preview](https://picsum.photos/seed/progress/800/400)

## 🚀 Features


- **📊 Multiple Progress Bar Types**:
  - **Linear Skill Bars**: Smooth width animations from 0% to target.
  - **Circular Indicators**: SVG-based circular progress with animated strokes.
  - **Striped & Animated**: Moving striped patterns for loading states.
  - **Gradient Bars**: Beautiful gradient fills for visual flair.
- **✨ Interactive Elements**:
  - **Dark/Light Mode Toggle**: Switch themes with a click; preference is saved to `localStorage`.
  - **Category Filtering**: Filter skills by domain (Frontend, Backend, Design).
  - **Live Demo Slider**: Adjust progress values in real-time to see animations update instantly.
- **🎨 Visual Effects**:
  - **Particle Background**: Custom HTML5 Canvas particle animation that reacts to window resizing.
  - **Entrance Animations**: Elements slide and fade in as they enter the viewport.
  - **Glassmorphism**: Subtle transparency and blur effects in the header.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices.
- **♿ Accessible**: Includes ARIA attributes (`role="progressbar"`, `aria-valuenow`) for screen readers.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/animated-progress-bars.git
   cd animated-progress-bars
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
/src
  ├── components/
  │   ├── Card.tsx              # Wrapper component with entrance animations
  │   ├── CircularProgress.tsx  # SVG-based circular progress indicator
  │   ├── Filter.tsx            # Category filter button group
  │   ├── ParticleBackground.tsx # Interactive HTML5 Canvas background
  │   ├── ProgressBar.tsx       # Linear progress bar with stripes/gradients
  │   └── ThemeToggle.tsx       # Dark/Light mode toggle switch
  ├── App.tsx                   # Main application layout and logic
  ├── main.tsx                  # Application entry point
  └── index.css                 # Global styles and Tailwind configuration
```

## 🎨 Customization

You can easily customize the colors, heights, and animations by modifying the props passed to the `ProgressBar` and `CircularProgress` components.

Example:
```tsx
<ProgressBar 
  label="Loading..." 
  percentage={75} 
  color="bg-purple-500" 
  striped 
  animated 
  height="h-6" 
/>
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React & Tailwind CSS.
