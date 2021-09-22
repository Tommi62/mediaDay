import React from 'react';
import Hello from '../components/Hello';

const About = ({ name }) => (
    <div>
        <h2>About sivu, name propsina {name}</h2>
        <Hello />
    </div>
);


export default About;
