import React from 'react';
import profile from '../assets/profile.jpg';
import '../css/Avatar.css';

export function Avatar () {
    return (
        <div className="avatar">
        <img src={profile} alt="avatar" className="avatar-image"/>
        </div>
    )
}