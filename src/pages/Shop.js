import React, { useState, useEffect, useContext } from 'react'
import { graphql } from 'gatsby'

import MainLayout from '../components/Layouts/MainLayout'
import { AppContext } from '../context/app-context'

const Shop = ({ data }) => {
    const { swell } = useContext(AppContext)
    const allProducts = data.allSwellProduct.nodes

    const [componentUnmounted, setComponentUnmounted] = useState(false)
    const [products, setProducts] = useState([])

    const getProducts = async (limit, page) => {
        !componentUnmounted &&
            setProducts(
                await swell.products.list({
                    limit: limit, // Max. 100
                    page: page,
                })
            )
    }

    // Get Products on mount
    useEffect(() => {
        getProducts(25, 1)
        return () => {
            setComponentUnmounted(true)
        }
    }, [])

    useEffect(() => {
        products && console.log(products)
    }, [products])

    return (
        <MainLayout>
            <main id="Shop">
                <section className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="font-bold text-3xl">Shop</h1>
                    <div className="grid grid-cols-3 max-w-7xl w-full mt-16 gap-x-6 gap-y-10">
                        {allProducts.map(product => (
                            <div key={product.id} className="flex flex-col">
                                <img
                                    className="w-full h-auto aspect-square object-cover rounded-t-xl"
                                    src={product.images[0].file.url}
                                    alt=""
                                />
                                <div className="flex flex-col bg-gray-800 text-white p-4">
                                    <h2 className="text-xl font-semibold">
                                        {product.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export const query = graphql`
    query {
        allSwellProduct {
            nodes {
                active
                id
                name
                price
                popularity
                images {
                    file {
                        url
                    }
                }
            }
        }
    }
`

export default Shop
