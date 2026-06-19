const config = {
  plugins: {
    autoprefixer: {},

    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            minifyFontValues: true,
            colormin: true,
          },
        ],
      },
    }),
  },
};

export default config;