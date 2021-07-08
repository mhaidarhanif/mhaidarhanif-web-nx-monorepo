// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')
const withPWA = require('next-pwa')

module.exports = withNx(
  withPWA({
    nx: {
      // Set this to false if you do not want to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: true,
    },
    pwa: {
      dest: 'public',
    },
    images: {
      domains: ['mhaidarhanif.com', 'placekitten.com'],
    },
  })
)
