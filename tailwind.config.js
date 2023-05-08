module.exports = {
  prefix: '',
  mode: 'jit',
  content: [
    "../src/**/*.html"
  ],
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    preflight: true
  },
  variants: {
    extend: {}
  }
}
