/**
 * Fractal Website
 *
 * Test for designing websites using ReactJS and Webpack
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 24 - 2017
 */
import React, { Component } from 'react'

/**
 * Image gallery static component
 *
 * Author:  Anshul Kharbanda
 * Created: 11 - 25 - 2017
 */
export default class Gallery extends Component {
    /**
     * Renders component
     *
     * @return component rendering
     */
    render() {
        // Split images into columns
        var percol = this.props.imgurls.length / this.props.maxcols
        var columns = []
        for (var i = 0; i < this.props.maxcols-1; i++) {
            columns[columns.length] = this.props.imgurls.slice(percol*i, percol*(i+1))
        }
        columns[this.props.maxcols-1] = this.props.imgurls.slice(percol*(this.props.maxcols-1))

        // Render columns
        return (
            <div className='gallery'>
                <div className='g-content'>
                    {columns.map((column, i) => (
                        <div className='g-column' key={i}>
                            {column.map((image, i) => (
                                <div className='g-image' key={i}>
                                    <img src={image}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
