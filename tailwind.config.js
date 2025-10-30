module.exports = {
  content: [
    './docs/**/*.html',
    './docs/**/*.md',
    './src/**/*.html',
    './apps/demo/index.html',
    './apps/demo/src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
