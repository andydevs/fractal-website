/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'

/**
 * The footer of the web app
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 28 - 2017
 */
export default class Footer extends Component {
    /**
     * Renders the component
     *
     * @return component rendering
     */
    render() {
        return (
            <footer className='footer'>
                <p className='f-item'>Designed by Anshul Kharbanda 2017</p>
                <p className='f-item'><a href='https://www.github.com/andydevs'>https://www.github.com/andydevs</a></p>
            </footer>
        )
    }
}
