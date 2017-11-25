/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import { Mobile, Desktop } from './responsive'

/**
 * Jumbotron component for Desktop
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
class JumbotronD extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='jumbotron'
                 style={{backgroundImage: 'url('+this.props.imgurl+')'}}>
                <div className='jt-container'>
                    <h1 className='jt-title'>{this.props.title}</h1>
                    <h2 className='jt-subtitle'>{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}

/**
 * Jumbotron component for Mobile
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
class JumbotronM extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='jumbotron-m'
                 style={{backgroundImage: 'url('+this.props.imgurl+')'}}>
                <div className='jt-container-m'>
                    <h1 className='jt-title-m'>{this.props.title}</h1>
                    <h2 className='jt-subtitle-m'>{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}

/**
 * Jumbotron component
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
export default class Jumbotron extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div>
                <Mobile><JumbotronM {...this.props}/></Mobile>
                <Desktop><JumbotronD {...this.props}/></Desktop>
            </div>
        )
    }
}
