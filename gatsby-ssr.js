// normalize CSS across browsers
import './src/assets/css/normalize.css'
// custom CSS styles
import './src/assets/css/style.css'

import React from 'react'
import RootElement from './src/components/root-element'

export const wrapRootElement = ({ element }) => {
    return <RootElement>{element}</RootElement>
}
