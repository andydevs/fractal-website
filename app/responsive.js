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
 * Responsively switches between desktop and mobile
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 25 - 2017
 */
export default class ResponsiveSwitcher extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        // Extract component
        let DesktopComponent = this.props.onDesktop
        let MobileComponent = this.props.onMobile

        // Return jsx
        return (
            <div className='responsive'>
                <MediaQuery query={'(min-width: '+MOBILE_WIDTH+')'}>
                    <DesktopComponent {...this.props}/>
                </MediaQuery>
                <MediaQuery query={'(max-width: '+MOBILE_WIDTH+')'}>
                    <MobileComponent {...this.props}/>
                </MediaQuery>
            </div>
        )
    }
}
