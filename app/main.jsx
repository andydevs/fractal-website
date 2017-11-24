/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React from 'react'
import ReactDOM from 'react-dom'

// Render main app
ReactDOM.render(
    // Component
    <h1>Hello World, Man!</h1>,

    // App div element
    document.body.appendChild(
        document.createElement('div', {id: 'app'})))
