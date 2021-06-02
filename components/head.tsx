import NextHead from 'next/head'

import { bio } from 'data/bio'

export default function Head({ title, desc, image }: { title: string; desc: string; image?: string }) {
  const theme = bio.darkTheme ? '/themes/vela-blue/theme.css' : '/themes/saga-blue/theme.css'

  let imageUrl = image
  if (process.browser) {
    imageUrl = `${document.location.href}${image.slice(1, image.length)}`
  }

  let url = ''
  if (process.browser) {
    url = `${document.location.href}`
  }

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="HTML, CSS, Javascript, React, AWS, Cloud, Developer" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={desc} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <link id="theme-link" rel="stylesheet" href={theme}></link>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </NextHead>
  )
}
