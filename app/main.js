/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import './resources/style/main.scss'

/**
 * Main web application class
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
class FractalWebsite extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <Navbar
                title='Fractal Generator'
                home='#'
                navlinks={[
                    {link: '#', title: 'Images'},
                    {link: '#', title: 'Algorithm'},
                    {link: '#', title: 'Development'}
                ]}/>
        )
    }
}

// Render react app
ReactDOM.render(
    <FractalWebsite />,
    document.getElementById('app'))
