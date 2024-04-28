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
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }