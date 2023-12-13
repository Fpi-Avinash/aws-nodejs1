module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // future: {
  //   webpack5: true,
  // },
  images: {
    domains: [
      "dev.paperliteca.com",
      "qa.paperliteca.com",
      "release.paperliteca.com",
      "preprod.paperliteca.com",
      "app.paperlite.io",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
