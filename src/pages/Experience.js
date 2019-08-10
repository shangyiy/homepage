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
                        <li>
                            <ul>•	Migrate the deployment process from OpsWorks Chef to Docker</ul>
                            <ul>•	Monitor service via AWS OpsWorks and CloudWatch log</ul>
                        </li>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Front-end Developer Intern @ NuLand</h4>
                        <li>
                            <ul>•	Developed Front-end UI for blockchain web application using React</ul>
                            <ul>•	Cooperated with UX designer and backend engineer for UI and API design</ul>
                            <ul>•	Researched BlockChain domain knowledge for better user experience</ul>
                        </li>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Front-end Developer Intern @ Sunbird Software</h4>
                        <li>
                            <ul>•	Migrated enterprise DCIM software from ExtJS to AngularJS </ul>
                            <ul>•	Developed custom directive with design patterns</ul>
                        </li>
                    </p>
                </Timeline.Item>

                <Timeline.Item color="green">
                    <p>
                        <h4>Englich Corner TA @ Taipei Tech</h4>
                        <li>
                            <ul>•	Guided student group to practice English speaking with topics related to career plan </ul>
                            <ul>•	Gave students instruction in writing resume and polishing contents </ul>
                        </li>
                    </p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
} 