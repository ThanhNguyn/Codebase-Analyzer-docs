import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep':    '#060a10',
        'bg-base':    '#0c1018',
        'bg-surface': '#131a26',
        'bg-raised':  '#1a2332',
        'bg-hover':   '#212d3f',
        'border-default': '#253044',
        'border-lit':     '#334155',
        'txt':       '#e2e8f0',
        'txt-dim':   '#8899aa',
        'txt-muted': '#556677',
        'accent':     '#22c55e',
        'accent-dim': '#15803d',
        'neon-blue':   '#3b82f6',
        'neon-cyan':   '#22d3ee',
        'neon-amber':  '#f59e0b',
        'neon-red':    '#ef4444',
        'neon-purple': '#a78bfa',
        'neon-pink':   '#ec4899',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Cascadia Code', 'Fira Code', 'monospace'],
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'beam': 'beam 8s ease-in-out infinite',
        'text-reveal': 'textReveal 0.5s ease forwards',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        beam: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.8', transform: 'translateY(-20px) scaleX(1.1)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) rotate(-45deg) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) rotate(-45deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
