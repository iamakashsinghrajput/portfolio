/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = {
    webpack: (config, { }) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          {
            loader: 'pdf-loader',
          },
        ],
      });

      // Ignore the canvas.node file
      config.module.rules.push({
        test: /\.node$/,
        loader: 'ignore-loader',
      });

      return config;
    },
  };

module.exports = nextConfig;