module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./css/tailwind.css"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Brazilian Flag Green
        primary: {
          50: "#e6f7ed", // light green-50
          100: "#ccefdb", // light green-100
          500: "#009739", // Brazilian flag green
          700: "#006b29", // dark green-700
          900: "#004d1d", // dark green-900
          DEFAULT: "#009739", // Brazilian flag green
        },
        // Secondary Colors - Brazilian Flag Blue
        secondary: {
          50: "#e6e7f0", // blue-50
          100: "#cccedf", // blue-100
          500: "#012169", // Brazilian flag blue
          700: "#01184a", // dark blue-700
          900: "#01102b", // dark blue-900
          DEFAULT: "#012169", // Brazilian flag blue
        },
        // Accent Colors - Tactical Red
        accent: {
          50: "#ffe6e6", // red-50
          100: "#ffcccc", // red-100
          500: "#FF0000", // tactical red
          700: "#cc0000", // dark red-700
          900: "#990000", // dark red-900
          DEFAULT: "#FF0000", // tactical red
        },
        // Background Colors
        background: "#000000", // pure black
        surface: {
          DEFAULT: "#1a1a1a", // dark gray
          light: "#2a2a2a", // lighter gray
        },
        // Text Colors
        text: {
          primary: "#00FF41", // neon green
          secondary: "#FEDD00", // Brazilian flag yellow
          muted: "#888888", // muted gray
          white: "#ffffff", // white
        },
        // Status Colors
        success: "#00FF41", // neon green
        warning: "#FF0000", // tactical red
        error: "#FF4444", // softer red
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        sans: ['Roboto Mono', 'monospace'], // Default to mono for terminal feel
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(0, 255, 65, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-yellow': '0 0 15px rgba(254, 221, 0, 0.3)',
        'glow-red': '0 0 15px rgba(255, 0, 0, 0.3)',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
        'ease-out': 'ease-out',
      },
      animation: {
        'glitch': 'glitch 300ms ease-in-out',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}