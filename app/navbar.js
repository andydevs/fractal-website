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
 * Desktop Navbar
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
export default class Navbar extends Component {
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
            <div className='flex-box-container'>
                <div className='navbar'>
                    <div className='nav-header'>
                        <NavLink className='nav-title' to={this.props.home}>
                            {this.props.title}
                        </NavLink>
                        <div className='nav-toggle-container'>
                            <button className={'nav-toggle' + (this.state.toggled ? ' active' : '')}
                                    onClick={this.toggle}></button>
                        </div>
                    </div>
                    <ul className={'nav-link-set' + (this.state.toggled ? ' active' : '')}>
                        {this.props.navlinks.map((navlink, i) => (
                            <li className='nav-link' key={i}>
                                <NavLink to={navlink.href}>
                                    {navlink.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
Navbar.defaultProps = {
    home: '/'
}
