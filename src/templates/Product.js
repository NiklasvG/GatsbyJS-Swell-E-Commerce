import React from 'react'

const Product = ({ pageContext }) => {
    console.log(pageContext)
    return <div>{pageContext.id}</div>
}

export default Product
