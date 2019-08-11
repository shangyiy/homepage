import React from 'react';
import { Timeline } from 'antd';

export function Experience () {
    return (
        <div className='Experience'>
            <h2>Experience</h2>
            <br />
            <Timeline mode="alternate">
                <Timeline.Item>
                    <p>
                        <h4>Software Engineer @ Trend Micro</h4>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Front-end Developer Intern @ NuLand</h4>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Front-end Developer Intern @ Sunbird Software</h4>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Englich Corner TA @ Taipei Tech</h4>
                    </p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
} 