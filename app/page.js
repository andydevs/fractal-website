/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import Jumbotron from './jumbotron'

/**
 * The main page
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 25 - 2017
 */
export default class Page extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='page'>
                <Jumbotron {...this.props}/>
                <div className='page-content'>
                    <Markdown source={this.props.source}/>
                </div>
            </div>
        )
    }
}
