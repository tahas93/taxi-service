module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NEXT_PUBLIC_DEFAULT_ENV === 'production' ? { cssnano: {} } : {})
  }
};
