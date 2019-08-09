import React from 'react';
import { Card } from 'antd';

export class Projects extends React.Component {
    render () {
        return (
            <div className="projects">
                <h2>Projects</h2>
                {this.renderProjects()}
            </div>
        )
    }

    renderProjects() {
        return(
            <div>
                <Card className="card" title="'mOkay" extra={<a href="https://github.com/charlie6118/HAHackathonRIGA">GitHub</a>}>
                    <p>
                        <h3>Garage48 Hardware and Art Hackathon, Solution for elderly who lived alone</h3>
                        <br />
                        <li>
                            <ul>•	Provide a solution to take care of elder people who lived alone</ul>
                            <ul>•	Build an IoT Device with Raspberry Pi and Python, integrate with the web app and smartphone</ul>
                            <ul>•	Be responsible for code refactoring </ul>
                            <ul>•	Assist with the team to develop SMS function and cascade web backend API</ul>
                        </li>
                        Co-author: Aljona Kurbatova, Ismayil Aliyev, Liina-Mai Kaunissaare, Martin Laan, Mathias Luik, Rauno Piirsalu, Роман Середа, Vladyslava Melnyk
                    </p>
                </Card>
            
                <Card className="card" title="'CubeSAt Antenna Tracking System" extra={<a href="https://github.com/Achaad/SatelliteHackathon">GitHub</a>}>
                    <p>
                        <h3>TTÜ100 Satellite Hackathon - "Antenna Tracking System"</h3>
                        <br />
                        <li>
                            <ul>•	Build a ground station antenna tracking system by Python</ul>
                            <ul>•	Be responsible for satellite position computing with ephem</ul>
                            <ul>•	Integrate modules and design CLI interface with team members</ul>
                        </li>
                        Co-author: Anton Perepelenko, Hiromasa Saito, Karl Matti
                    </p>
                </Card>
            </div>
        )
    }
} 