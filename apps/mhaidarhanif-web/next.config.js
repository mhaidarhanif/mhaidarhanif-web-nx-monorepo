const withNx = require('@nrwl/next/plugins/with-nx')
const withPWA = require('next-pwa')

/**
 * Only run next-pwa when not in development
 * Setup is ready for Vercel
 */
module.exports =
  process.env.NODE_ENV !== 'development'
    ? withNx(
        withPWA({
          nx: { svgr: true },
          pwa: { dest: 'public' },
          images: { domains: ['mhaidarhanif.com', 'placekitten.com'] },
        })
      )
    : withNx({
        nx: { svgr: true },
        images: { domains: ['mhaidarhanif.com', 'placekitten.com'] },
      })
