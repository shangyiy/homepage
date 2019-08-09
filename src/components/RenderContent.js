import React from 'react';
import '../css/RenderContent.css';
import { Home } from '../pages/Home';
import { Experience } from '../pages/Experience';
import { Projects } from '../pages/Projects';
import { Volunteer } from '../pages/Volunteer';
 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function RenderContent () {
    return (
        <Router>
            <div className="main-content">
                <div className="tool-bar">
                    <button> <Link to="/">Home</Link> </button>
                    <button> <Link to="/experience">Experience</Link></button>
                    <button><Link to="projects">Projects</Link> </button>
                    <button><Link to="volunteer">Volunteer</Link> </button>
                    <button>Links</button>
                </div>
                <div className="body">
                    <Route exact path="/" component={Home} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/volunteer" component={Volunteer} />
                </div>
            </div>
        </Router>
    )
}