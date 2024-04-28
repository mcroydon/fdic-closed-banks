export default function manifest() {
    return {
      name: 'Closed Banks',
      short_name: 'Closed Banks',
      description: 'Tracking how long it has been since the FDIC closed a bank and listing them out for you to learn more.',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        },
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }