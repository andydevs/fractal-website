/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height'

/**
 * The navigation bar of the application
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
export default class Navbar extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='navbar'>
                <div className='nav-header'>
                    <a className='nav-title' href='#'>Fractal Generator</a>
                </div>
                <ul className='nav-link-set'>
                    <li className='nav-link'><a href='#'>Images</a></li>
                    <li className='nav-link'><a href='#'>Algorithm</a></li>
                    <li className='nav-link'><a href='#'>Development</a></li>
                </ul>
            </div>
        )
    }
}
