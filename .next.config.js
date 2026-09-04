const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "*": ["./infra/migrations/**/*"],
    },
  },
};

module.exports = nextConfig;
