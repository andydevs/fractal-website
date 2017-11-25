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
import Page from './page'
import homepage from './pages/home.markdown'
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
                    <Page
                        imgurl='app/resources/images/jumbotron.jpg'
                        title='Algorithmic Art'
                        subtitle='Creating Fractal Images using OpenCL'
                        source={homepage}/>
                </div>
            </div>
        )
    }
}

// Render react app
ReactDOM.render(
    <FractalWebsite />,
    document.getElementById('app'))
