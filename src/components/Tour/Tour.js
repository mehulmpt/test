import React, { Component } from 'react';

import './Tour.scss';

export default class Tour extends Component {

    state = {
        showInfo:false
    }

    Info = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {


        const { city, img, name, info } = this.props.tour;


        return (
            <React.Fragment>

                <article className="tour">
                    <img src={img} className="card__img" alt="" />
                    <span onClick={this.Info}>
                        <i className="fas fa-arrow-alt-circle-right" /> INFO
                    </span>
                    <div className="tour-info">
                    {this.state.showInfo && <h3>{info}</h3>}
                        
                    </div>
                    <h2>{city.toUpperCase()}</h2>
                    <h2>{name}</h2>
                </article>

            </React.Fragment>
        )
    }
}
