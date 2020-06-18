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
      storeName: 'archilton testing',
      storeDescription: 'Demo store description',
      email: 'infoshop_theme.com',
      company: 'ARChilton Demo',
      location: 'Demoville',
      address: '1 Centre St.',
      phone: '+44 7777777777',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      logoUrl: 'https://checkpointlive.com/img/icon.svg',
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
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Spoilers',
              type: 'collection',
              handle: 'spoilers',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Suspension kits',
              type: 'collection',
              handle: 'suspension',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Bolt Kits',
              type: 'collection',
              handle: 'bolts',
              textColor: 'white',
              textBgColor: 'primary',
            },

            // {
            //   name: 'Silk Summer Top',
            //   type: 'product',
            //   handle: 'silk-summer-top',
            //   textColor: 'white',
            //   textBgColor: 'primary',
            // },
          ],
        },

        {
          name: 'bolt kit',
          type: 'product',
          handle: 'bolt-kit',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'dip spoiler',
          type: 'product',
          handle: 'dip-spoiler',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'suspension kits',
          type: 'product',
          handle: 'suspension-kit',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'bolt kit',
          type: 'product',
          handle: 'bolt-kit',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'dip spoiler',
          type: 'product',
          handle: 'dip-spoiler',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'suspension kits',
          type: 'product',
          handle: 'suspension-kit',
          textColor: 'white',
          textBgColor: 'primary',
        },

        // {
        //   name: 'Garden',
        //   type: 'collection',
        //   handle: 'garden',
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
        children: [
          {
            name: 'Bolt Kits',
            type: 'collection',
            handle: 'bolts',
          },
          {
            name: 'Suspension Kits',
            type: 'collection',
            handle: 'suspension',
          },
          { name: 'Spoilers', type: 'collection', handle: 'spoilers' },
        ],
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
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-UK',
      currency: 'GBP',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
}