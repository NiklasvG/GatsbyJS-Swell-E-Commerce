import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../context/app-context'

const Product = ({ pageContext }) => {
    const { swell } = useContext(AppContext)

    const [componentUnmounted, setComponentUnmounted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const getProduct = async slug => {
        !componentUnmounted && setProduct(await swell.products.get(slug))
        setIsLoading(false)
    }

    // Get Products on mount
    useEffect(() => {
        getProduct(pageContext.slug)
        return () => {
            setComponentUnmounted(true)
        }
    }, [])

    useEffect(() => {
        product && console.log(product)
    }, [product])

    return (
        <>
            {isLoading ? (
                <div>...loading</div>
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <h1 className="font-bold text-5xl">{product.name}</h1>
                </div>
            )}
        </>
    )
}

export default Product
