const path = require('path')
const { products } = require('swell-js')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // ** Product Pages **
    const resultProducts = await graphql(`
        {
            products: allSwellProduct {
                nodes {
                    slug
                    id
                }
            }
        }
    `)

    resultProducts.data.products.nodes.forEach(product => {
        // Create Slug
        if (product.slug) {
            // Create Page
            createPage({
                path: `/Shop/Produkt/${product.slug}`,
                component: path.resolve(`./src/templates/Product.js`),
                context: {
                    id: product.id,
                },
            })
        }
    })
}
