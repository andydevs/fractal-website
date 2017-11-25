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
import { Mobile, Desktop } from './responsive'

/**
 * Mobile Navbar
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
class NavbarM extends Component {
    /**
     * Constructs NavbarM
     *
     * @props the component props
     */
    constructor(props) {
        // Call super props
        super(props)

        // Toggle state
        this.state = { toggled: false };

        // Bind methods
        this.toggle = this.toggle.bind(this)
    }

    /**
     * Handle nav toggle
     */
    toggle() {
        this.setState({ toggled: !this.state.toggled })
    }

    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='navbar-m'>
                <div className='nav-header-m'>
                    <a className='nav-title-m' href={this.props.home}>
                        {this.props.title}
                    </a>
                    <div className='nav-toggle-container-m'>
                        <button className={'nav-toggle-m' + (this.state.toggled ? ' active-m' : '')}
                                onClick={this.toggle}></button>
                    </div>
                </div>
                <AnimateHeight duration={500} height={(this.state.toggled ? 'auto' : '0')}>
                    <ul className='nav-link-set-m'>
                        {this.props.navlinks.map((navlink, i) => {
                            return (
                                <li className='nav-link-m' key={i}>
                                    <a href={navlink.href}>{navlink.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </AnimateHeight>
            </div>
        )
    }
}

/**
 * Desktop Navbar
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
class NavbarD extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        return (
            <div className='navbar'>
                <div className='nav-header'>
                    <a className='nav-title' href='#'>{this.props.title}</a>
                </div>
                <ul className='nav-link-set'>
                    {this.props.navlinks.map((navlink, i) => {
                        return (
                            <li className='nav-link' key={i}>
                                <a href='{navlink.href}'>{navlink.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

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
            <div>
                <Mobile><NavbarM {...this.props}/></Mobile>
                <Desktop><NavbarD {...this.props}/></Desktop>
            </div>
        )
    }
}
