import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import NavBar from '../Shared/NavBar'

const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container fluid className="parallux d-flex flex-row justify-content-center align-items-center">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className='display-3 font-weight-bold text-light'>Welcome ProNazmul</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;