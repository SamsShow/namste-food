import React from 'react';
import User from './User.jsx';
import UserClass from './Userclass.jsx';

export default function About() {
    return (
        <div className=''>
        <h1>About Page</h1>
        <User name={"Saksham Tyagi Function"} />
        <UserClass name={"Saksham Tyagi class"}/>
        </div>
    );
}