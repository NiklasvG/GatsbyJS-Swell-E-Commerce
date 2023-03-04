/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Gatsby Starter`,
        description: `Example project for the Gatsby Head API`,
        image: `/Favicon.png`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/img/Favicon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/img/',
            },
            __key: 'images',
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-swell',
            options: {
                // The domain name of your Swell store. This is required.
                storeId: process.env.GATSBY_SWELL_STORE_ID,
                // The key used to access your data by API. This is required.
                secretKey: process.env.GATSBY_SWELL_SECRET_KEY,
                // List of data types you want to fetch.
                // Defaults to ['category', 'product'].
                dataTypes: [
                    'category',
                    'product',
                    'attribute',
                    'variant',
                    'coupon',
                    'promotion',
                ],
            },
        },
    ],
}
