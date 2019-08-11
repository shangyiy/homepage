import React from 'react';
import { Card, Icon } from 'antd';
import '../css/page.css'

export class Projects extends React.Component {
    render () {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <br/>
                {this.renderProjects()}
            </div>
        )
    }

    renderProjects() {
        return(
            <div>
                <Card 
                    size='small'
                    className="card" 
                    title="'mOkay" 
                    extra={<a href="https://github.com/charlie6118/HAHackathonRIGA">
                            <Icon type="github" />
                           </a>}
                >
                    <h3>Garage48 Hardware and Art Hackathon - Solution for elderly who lived alone</h3>
                    <br />
                    <br/>•	Provide a solution to take care of elder people who lived alone
                    <br/>•	Build an IoT Device with Raspberry Pi and Python, integrate with the web app and smartphone
                    <br/>•	Be responsible for code refactoring 
                    <br/>•	Assist with the team to develop SMS function and cascade web backend API
                    <br/>Co-author: Aljona Kurbatova, Ismayil Aliyev, Liina-Mai Kaunissaare, Martin Laan, Mathias Luik, Rauno Piirsalu, Роман Середа, Vladyslava Melnyk
                </Card>
            
                <Card 
                    size='small'
                    className="card" 
                    title="CubeSat Antenna Tracking System" 
                    extra={<a href="https://github.com/Achaad/SatelliteHackathon">
                            <Icon type="github" />
                           </a>}
                >
                    <h3>TTÜ100 Satellite Hackathon - Antenna Tracking System</h3>
                    <br/>
                    <br/>•	Build a ground station antenna tracking system by Python
                    <br/>•	Be responsible for satellite position computing with ephem
                    <br/>•	Integrate modules and design CLI interface with team members
                    <br/>Co-author: Anton Perepelenko, Hiromasa Saito, Karl Matti
                </Card>
            </div>
        )
    }
} 