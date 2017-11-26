/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AnimateHeight from 'react-animate-height'
import ResponsiveSwitcher from './responsive'

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
                    <NavLink className='nav-title-m' to={this.props.home}>
                        {this.props.title}
                    </NavLink>
                    <div className='nav-toggle-container-m'>
                        <button className={'nav-toggle-m' + (this.state.toggled ? ' active-m' : '')}
                                onClick={this.toggle}></button>
                    </div>
                </div>
                <AnimateHeight duration={500} height={(this.state.toggled ? 'auto' : '0')}>
                    <ul className='nav-link-set-m'>
                        {this.props.navlinks.map((navlink, i) => (
                            <li className='nav-link-m' key={i}>
                                <NavLink to={navlink.href}>
                                    {navlink.title}
                                </NavLink>
                            </li>
                        ))}
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
                    <NavLink className='nav-title' to={this.props.home}>
                        {this.props.title}
                    </NavLink>
                </div>
                <ul className='nav-link-set'>
                    {this.props.navlinks.map((navlink, i) => (
                        <li className='nav-link' key={i}>
                            <NavLink to={navlink.href}>
                                {navlink.title}
                            </NavLink>
                        </li>
                    ))}
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
            <ResponsiveSwitcher
                onDesktop={NavbarD}
                onMobile={NavbarM}
                {...this.props}/>
        )
    }
}
Navbar.defaultProps = {
    home: '/'
}
