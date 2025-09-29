import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Soft, warm blue palette
        'trust-blue': {
          50: '#E6F1FF',    // Very light, soft blue
          100: '#B3D7FF',   // Light, gentle blue
          200: '#80BCFF',   // Soft, approachable blue
          300: '#4DA1FF',   // Warmer, more inviting blue
          400: '#1A86FF',   // Main trust blue, softer than original
          500: '#0069CC',   // Deeper blue for contrast
          600: '#004C99',   // Dark blue for depth
          700: '#003366',   // Darkest blue for accents
        },
        // Brand colors with warmer undertones
        slateblue: "#3A466E",
        teal: "#00B1A9",
        cloudwhite: "#F7F9FB",
        graphite: "#5B5B5B",
        coral: "#FF6B6B",
        softlime: "#D9ED92",
        // New secondary colors
        'secondary-red': {
          DEFAULT: '#Da3e3f',
          foreground: '#ffffff'
        },
        'secondary-blue-dark': {
          DEFAULT: '#14303e',
          foreground: '#ffffff'
        },
        'secondary-white': {
          DEFAULT: '#ffffff',
          foreground: '#14303e'
        },
        // Existing custom color variables
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'feature': '0 2px 24px 0 rgba(58,70,110,.08)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(.15,.75,.5,1) both'
      },
      backgroundImage: {
        'section-gradient': 'linear-gradient(90deg,#F7F9FB 60%,#E1F4F4 100%)',
        'warm-blue-gradient': 'linear-gradient(135deg, #E6F1FF 0%, #B3D7FF 100%)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
