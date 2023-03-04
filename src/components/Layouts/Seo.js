import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ title, description, pathname, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    image
                    siteUrl
                    title
                }
            }
        }
    `)

    const defaultTitle = data.site.siteMetadata?.title
    const defaultDescription = data.site.siteMetadata?.description
    const siteUrl = data.site.siteMetadata?.siteUrl
    const image = data.site.siteMetadata?.image

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {children}
        </>
    )
}
