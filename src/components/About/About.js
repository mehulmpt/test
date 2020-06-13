import React from 'react';
import { ReactComponent as Team } from '../../team-red.svg';
import './About.scss';
export default function About() {
    return (
        <React.Fragment>

            <h1>About Us</h1>
            <a name="about-footer" href="about-footer">
                <div className="about">
                    <Team />
                </div>
            </a>

        </React.Fragment>
    );
};