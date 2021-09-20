import React from 'react';
import '../css/page.css';
import { Card, Row, Col } from 'antd';

export class Volunteer extends React.Component {
    render() {
        return (
            <div className="volunteering">
                <h2>Volunteering</h2>
                <br />
                {this.renderVolunteering()}
            </div>
        )
    }

    renderVolunteering() {
        return (
            <div className="div-grid">
                <Row>
                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Volunteer Lecturer @ Erasmus In School</h3>
                            <br />Served as a volunteer to present culture and personal experience to Estonian high school students
                        </Card>
                    </Col>

                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Volunteer @ PyCon Estonia</h3>
                            <br />Served as a volunteer to assist with the conference
                        </Card>
                    </Col>

                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Student Volunteer @ World Vision</h3>
                            <br />Served as a volunteer to organize and record the event 30 hours famine in Taipei Tech
                        </Card>
                    </Col>
                </Row>

                <Row >
                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Student Volunteer @ WowAfrica</h3>
                            <br /> erved as a volunteer to assist a team of fourteen to promote African culture and record the event
                        </Card>
                    </Col>

                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Elderly Care Volunteer @ 私立松瑞園老人養護所</h3>
                            <br />Served as an emotional support and companionship for elderly people
                        </Card>
                    </Col>

                    <Col flex="1 0 25%" className='card-col'>
                        <Card className="card">
                            <h3>Student Volunteer @ 北科牡丹服務隊</h3>
                            <br />Served as educational support and companionship for indigenous children
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}