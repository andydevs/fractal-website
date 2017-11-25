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
import Jumbotron from './jumbotron'
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
            <div className='main'>
                <Navbar
                    title='Fractal Generator'
                    home='#'
                    navlinks={[
                        {link: '#', title: 'Images'},
                        {link: '#', title: 'Algorithm'},
                        {link: '#', title: 'Development'}
                    ]}/>
                <div className='content'>
                    <Jumbotron
                        imgurl='app/resources/images/jumbotron.jpg'
                        title='Algorithmic Art'
                        subtitle='Creating Fractal Images using OpenCL'/>
                </div>
            </div>
        )
    }
}

// Render react app
ReactDOM.render(
    <FractalWebsite />,
    document.getElementById('app'))
