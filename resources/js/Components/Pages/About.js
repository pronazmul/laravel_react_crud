import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';

const About = () => {
    return (
        <>
            <NavBar></NavBar>
            <Jumbotron className='display-2 text-center'>This is About Page</Jumbotron>
        </>
    );
};

export default About;