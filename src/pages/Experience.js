import React from 'react';
import { Timeline } from 'antd';

export function Experience() {
    return (
        <div className='Experience'>
            <h2>Experience</h2>
            <br />
            <Timeline>
                <Timeline.Item>
                    <h4>Software Engineer @ Trend Micro Vision One Endpoint Inventory</h4>
                    Taipei Taiwan
                    <br />
                    - Host design meetings and coordinate between different team stakeholders
                    <br />
                    - Conduct task breakdown based on given feature request - including design, development, monitoring, and L1/ L2 test
                    <br />
                    - Develop event-driven architecture using Golang and Kafka to ensure service reliability
                    <br />
                    - Monitor service by prometheus-operator - design proper metrics and do aggregation by prometheus and thanos, notify developer by alertmanager
                    <br />
                    - Conduct end-to-end testing between different teams to deliver value to customers
                    <br />
                    - Develop and maintain cloud infrastructure including AWS, MongoDB, Opsgenie using Terraform
                    <br />
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Software Engineer @ Trend Micro ERS</h4>
                    Taipei Taiwan
                    <br />
                    - Developed Golang applications using gin lib with P90 response time less than 100ms
                    <br />
                    - Built a serverless datalake using PySpark on AWS EMR, AWS Step Function, AWS S3 to process 10+ million mail data per day
                    <br />
                    - Built serverless RESTful API using AWS APIGateway for MySQL database operation for 10+ million operations per day using AWS CloudFormation
                    <br />
                    - Decoupled monolithic systems into microservice architecture and migrated to EKS, reduce 80% deployment time
                    <br />
                    - Containerized legacy services involving Python Flask/ PHP CakePHP/ Ruby on Rail/ Perl/ Shell Script
                    <br />
                    - Applied IAM Role for Kubernetes service account to achieve the Principle of Least Privilege(POLP)
                    <br />
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ NuLand</h4>
                    Tallinn Estonia
                    <br />
                    - Developed frontend UI for blockchain web application using React
                </Timeline.Item>

                <Timeline.Item color="green">
                    <h4>Front-end Developer Intern @ Sunbird Software</h4>
                    Taipei Taiwan
                    <br />
                    - Migrated enterprise DCIM software from ExtJS to AngularJS
                </Timeline.Item>

            </Timeline>
        </div>
    )
}