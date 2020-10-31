import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import NavBar from '../Shared/NavBar';

const Contract = () => {
    return (
        <>
            <NavBar></NavBar>
            <Jumbotron className='display-2 text-center'>This is Contract Page</Jumbotron>
        </>
    );
};

export default Contract;