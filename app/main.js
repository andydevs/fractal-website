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
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './navbar'
import Page from './page'
import Markdown from 'react-remarkable'
import Gallery from './gallery'
import homePage from './pages/home.markdown'
import algorithmPage from './pages/algorithm.markdown'
import developmentPage from './pages/development.markdown'
import './resources/style/main.scss'

// Home page
const Home = () => (
    <Page
        imgurl='app/resources/images/fimage.jpg'
        title='Fractal Design Page'
        subtitle='Creating a Webpage using ReactJS'>
        <Markdown source={homePage}/>
    </Page>
)

// Images page
const Images = () => (
    <Page
        imgurl='app/resources/images/fimage2.jpg'
        title='Fractal Image Showcase'
        subtitle='Images generated from fractals'>
        <Gallery
            imgurls={[
                'app/resources/images/hpe.jpg',
                'app/resources/images/ink.jpg',
                'app/resources/images/jimage.jpg',
                'app/resources/images/mimage.jpg',
                'app/resources/images/wimage.jpg'
            ]}
            maxcols={2}/>
    </Page>
)

// Algorithm Page
const Algorithm = () => (
    <Page
        imgurl='app/resources/images/jimage.jpg'
        title='The Fractal Image Algorithm'
        subtitle='Creating the fractal images'>
        <Markdown source={algorithmPage}/>
    </Page>
)

// Development Page
const Development = () => (
    <Page
        imgurl='app/resources/images/hpe.jpg'
        title='Developing the Fractal Algorithm'
        subtitle='Using CImg for image writing, and PugiXML for configuration'>
        <Markdown source={developmentPage}/>
    </Page>
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
            <BrowserRouter>
                <div id='fractal-website'>
                    <Navbar
                        title='Fractal Design'
                        home='/'
                        navlinks={[
                            {href: '/images', title: 'Images'},
                            {href: '/algorithm', title: 'Algorithm'},
                            {href: '/development', title: 'Development'}
                        ]}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/images' component={Images}/>
                    <Route path='/algorithm' component={Algorithm}/>
                    <Route path='/development' component={Development}/>
                </div>
            </BrowserRouter>
        )
    }
}

// Render react app
ReactDOM.render(<FractalWebsite />, document.body)
