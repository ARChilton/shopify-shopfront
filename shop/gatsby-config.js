require('dotenv').config({ path: `.env` })
const flattenMenu = require('shop_theme/src/utils/flattenMenu')
module.exports = {
  pathPrefix: process.env.GATSBY_DEMO_DEPLOY_REPO,
  plugins: [
    {
      resolve: 'shop_theme',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '95',
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://archilton.github.io/shopify-shopfront',
    gatsbyStorefrontConfig: {
      storeName: process.env.GATSBY_SHOP_NAME,
      storeDescription: 'Demo store description',
      email: process.env.GATSBY_SHOP_EMAIL,
      company: process.env.GATSBY_SHOP_NAME,
      location: process.env.GATSBY_SHOP_LOCATION,
      address: process.env.GATSBY_SHOP_ADDRESS,
      phone: process.env.GATBSY_SHOP_PHONE,
      workingDays: process.env.GATSBY_SHOP_DAYS,
      workingHours: process.env.GATSBY_SHOP_HOURS,
      logoUrl: process.env.GATSBY_SHOP_LOGO,
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      // googleAnalyticsId: '',
      //  Main Page can contain:
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'New Car Parts',
              type: 'collection',
              handle: 'new',
              textColor: 'black',
              textBgColor: 'white',
            },

            {
              name: 'Used Car Parts',
              type: 'collection',
              handle: 'used',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Cars',
              type: 'collection',
              handle: 'cars',
              textColor: 'black',
              textBgColor: 'white',
            },
          ],
        },

        // {
        //   name: 'Garden',
        //   type: 'collection',
        //   handle: 'suspension',
        //   textColor: 'white',
        //   textBgColor: 'primary',
        // },
        // {
        //   name: 'Test',
        //   type: 'collection',
        //   handle: 'test-collection',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: 'One product',
        //   type: 'product',
        //   handle: 'red-sports-tee',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: 'Anchor Bracelet Mens',
        //   type: 'product',
        //   handle: 'leather-anchor',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: 'Yellow Sofa',
        //   type: 'product',
        //   handle: 'yellow-sofa',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: '7 Shakra Bracelet',
        //   type: 'product',
        //   handle: 'chain-bracelet',
        //   textColor: 'black',
        //   textBgColor: 'white',
        // },
        // {
        //   name: 'White Cotton Shirt',
        //   type: 'product',
        //   handle: 'white-cotton-shirt',
        //   textColor: 'white',
        //   textBgColor: 'primary',
        // },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        // {
        //   name: 'External',
        //   link: 'https://amazon.com',
        // },
      ],
      locales: 'en-UK',
      currency: 'GBP',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
}
