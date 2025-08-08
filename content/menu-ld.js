import { menu } from './menu'

export const schema = {
  '@context': 'http://schema.org',
  '@type': 'Restaurant',
  url: 'https://www.hemingwaybrunch.com/',
  id: 'https://www.hemingwaybrunch.com/',
  image: 'https://www.hemingwaybrunch.com/img/image2.png',
  name: 'Hemingway Brunch',
  telephone: '(972)-304-8871',
  description:
    'Serving tasty takes on American classics such as French Benny, Buddha Bowl, and White chocolate raspberry pancakes.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hemingway Brunch 140 West Sandy Lake Rd, Suite 140, Coppell TX 75019',
    addressLocality: 'Coppell',
    addressCountry: 'US',
    addressRegion: 'TX',
    postalCode: '75019',
  },
  servesCuisine: ['American cuisine'],
  hasMenu: {
    '@type': 'Menu',
    name: 'Dine-In Menu',
    description: 'Menu for in-restaurant dining only.',
    hasMenuSection: [
      menu.map((section) => {
        return {
          '@type': 'MenuSection',
          name: section.name,
          description: section.desc,
          hasMenuItem: section.products.map((product) => {
            return {
              '@type': 'MenuItem',
              name: product.name.endsWith('*') ? product.name.slice(0, -1) : product.name,
              description: product.desc,
            }
          }),
        }
      }),
    ],
  },
}
