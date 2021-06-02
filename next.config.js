module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      }
    )

    return config
  },
}
