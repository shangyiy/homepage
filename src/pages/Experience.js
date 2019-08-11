import React from 'react';
import { Timeline } from 'antd';

export function Experience () {
    return (
        <div className='Experience'>
            <h2>Experience</h2>
            <br />
            <Timeline mode="alternate">
                <Timeline.Item>
                    <h4>Software Engineer @ Trend Micro</h4>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ NuLand</h4>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ Sunbird Software</h4>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Englich Corner TA @ Taipei Tech</h4>
                </Timeline.Item>
            </Timeline>
        </div>
    )
} 