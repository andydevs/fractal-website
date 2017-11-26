/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Markdown from 'react-remarkable'
import Navbar from './navbar'
import Page from './page'
import Gallery from './gallery'
import homePage from './pages/home.markdown'
import algorithmPage from './pages/algorithm.markdown'
import './resources/style/main.scss'

/**
 * Home page of the website
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
const Home = () => (
    <Page
        imgurl='app/resources/images/fimage.jpg'
        title='Fractal Design Page'
        subtitle='Creating a Webpage using ReactJS'>
        <Markdown source={homePage}/>
    </Page>
)

/**
 * Images page of the website
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
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

/**
 * Algorithm page of the website
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
const Algorithm = () => (
    <Page
        imgurl='app/resources/images/jimage.jpg'
        title='The Fractal Image Algorithm'
        subtitle='Creating the fractal images'>
        <Markdown source={algorithmPage}/>
    </Page>
)

/**
 * Main web application class
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
const FractalWebsite = () => (
    <BrowserRouter>
        <div id='fractal-website'>
            <Navbar
                title='Fractal Design'
                navlinks={[
                    {href: '/images', title: 'Images'},
                    {href: '/algorithm', title: 'Algorithm'}
                ]}/>
            <Route exact path='/' component={Home}/>
            <Route path='/images' component={Images}/>
            <Route path='/algorithm' component={Algorithm}/>
        </div>
    </BrowserRouter>
)

// Render react app
render(<FractalWebsite />, document.getElementById('app'))
