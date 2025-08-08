import '../styles/globals.css'

import { Karla, Lora } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const karla = Karla({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-karla',
})

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Hemingway Brunch"
        description="Serving tasty takes on American classics such as French Benny, Buddha Bowl, and White chocolate raspberry pancakes."
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: 'https://www.hemingwaybrunch.com/',
          site_name: 'Hemingway Brunch',
          description:
            'Serving tasty takes on American classics such as French Benny, Buddha Bowl, and White chocolate raspberry pancakes.',
          images: [
            {
              url: 'https://www.hemingwaybrunch.com/img/og_image.jpg',
              alt: 'OG Image',
            },
          ],
        }}
      />
      <div className={`${karla.variable} ${lora.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
