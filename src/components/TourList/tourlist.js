import React, { Component } from 'react';
import Tour from "../Tour/Tour.js";
import './tourlist.scss';
import { tourData } from "../../tourData";


export default class TourList extends Component {

    state = {
        tours: tourData
    };


    OpenModalInfo = id => {
        console.log(id);
    }




    render() {

        //console.log(this.state.tours);

        const { tours } = this.state;
        // 😍
        return (
            <React.Fragment>
                <h1>Tours - Explore the city!  </h1>
                <div className="container">
                    {tours.map(tour => (
                        <Tour key={tour.id} tour={tour} />
                    ))}
                </div>
               
            </React.Fragment>

        );

    }
}
