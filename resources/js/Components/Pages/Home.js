import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import NavBar from '../Shared/NavBar'

const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Jumbotron className='display-2 text-center'>This is Home Page</Jumbotron>
        </>
    )
}

export default Home;