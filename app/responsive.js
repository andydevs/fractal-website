/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

// Mobile width
const MOBILE_WIDTH = '470px'

/**
 * Renders this view if on desktop
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
export class Desktop extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        // Return appropriate props
        return (
            <MediaQuery query={'(min-width: '+MOBILE_WIDTH+')'}>
                {this.props.children}
            </MediaQuery>
        )
    }
}

/**
 * Renders this view if on mobile
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
export class Mobile extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        // Return appropriate props
        return (
            <MediaQuery query={'(max-width: '+MOBILE_WIDTH+')'}>
                {this.props.children}
            </MediaQuery>
        )
    }
}
