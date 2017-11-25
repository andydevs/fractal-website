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
import homePage from './pages/home.markdown'
import './resources/style/main.scss'

// Home page
const Home = () => (
    <Page
        imgurl='app/resources/images/jumbotron.jpg'
        title='Fractal Design Page'
        subtitle='Experimenting with creating a Webpage'
        source={homePage}/>
)

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
            <div id='fractal-website'>
                <Navbar
                    title='Fractal Design'
                    home='#'
                    navlinks={[
                        {link: '#', title: 'Images'},
                        {link: '#', title: 'Algorithm'},
                        {link: '#', title: 'Development'}
                    ]}/>
                <Home />
            </div>
        )
    }
}

// Render react app
ReactDOM.render(<FractalWebsite />, document.body)
