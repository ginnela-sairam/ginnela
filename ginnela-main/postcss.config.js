/**
 * ============================================================================
 * GINNELA SYSTEMS - POSTCSS ROUTING ARCHITECTURE
 * ============================================================================
 * This configuration acts as the compiler bridge between Vite and Tailwind CSS.
 * It ensures that the highly customized deep-tech design tokens created in 
 * tailwind.config.js are accurately parsed and compiled into raw CSS.
 * 
 * Furthermore, it integrates Autoprefixer to automatically inject vendor 
 * prefixes (-webkit-, -moz-, -ms-), guaranteeing that the enterprise UI 
 * renders flawlessly across all global browsers and hardware environments.
 */

export default {
  plugins: {
    // 1. Core Engine: Initializes Tailwind to process all utility classes and JIT (Just-In-Time) compilation.
    tailwindcss: {},
    
    // 2. Compatibility Layer: Automatically polyfills modern CSS features.
    autoprefixer: {
      // Enforces modern flexbox standards, dropping buggy legacy 2009 syntax.
      flexbox: 'no-2009',
      
      // Enables automatic CSS Grid polyfills for highly complex, multi-dimensional enterprise dashboard layouts.
      grid: 'autoplace'
    },
  },
}
