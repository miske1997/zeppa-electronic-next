export default function robots() {
    const baseUrl = "https://zeppaelektronika.com"

    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }