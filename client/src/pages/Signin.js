import React, { useRef, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import { useHistory } from 'react-router-dom';
import { SET_USER } from '../utils/actions'
import { useSessionContext } from '../utils/GlobalState';

import setAuthToken from '../utils/setAuthToken';
import API from '../utils/API';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';


const Signin = () => {
    const emailRef = useRef();
    const pwRef = useRef();
    const rememberRef = useRef();
    const [state, dispatch] = useSessionContext();
    const [showError, setError] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (localStorage.jwtToken) {
            processToken(localStorage.jwtToken);
        }
    }, []);

    const processToken = (token) => {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const decoded = jwt_decode(token);
        if(decoded) {
            dispatch({
                type: SET_USER,
                post: {
                    ...decoded,
                    auth: true
                }
            })
            history.push('/profile');
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        setError(false);
        if (!emailRef.current.value || !pwRef.current.value) {
            return;
        }

        API.signInUser(emailRef.current.value, pwRef.current.value)
            .then((res) => {
                const { token } = res.data;
                processToken(token);
                
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    }

    return (
        <Container>
            <Row className="justify-content-sm-center align-items-center my-5">
                <Col xs={{ order: 'last' }} lg={{ span: 6, order: 'first'}}>
                    <Image src="./assets/signin.png" fluid />
                </Col>
                <Col lg="5">
                    <Row className="justify-content-lg-space-between mb-2">
                        <Col >
                            <h4 className="text-secondary font-weight-light">Sign in</h4>
                        </Col>
                        <Col className="text-md-right">
                            or
                            <Button variant="link" className="py-0 px-1" href="/signup">create an account</Button>
                        </Col>
                    </Row>
                    {showError ? 
                        <Alert variant={'danger'}>
                            Your email or password do not match our records, please try again or&nbsp; 
                            <Alert.Link href="/signup">create an account</Alert.Link>. 
                        </Alert>
                    : null}
                    <Form onSubmit={(event) => handleFormSubmit(event)}>
                        <Form.Group controlId="userEmail">
                            <Form.Control type="email" placeholder="Email" ref={emailRef} />
                        </Form.Group>
                        
                        <Form.Group controlId="userPassword">
                            <Form.Control type="password" placeholder="Password" ref={pwRef} />
                        </Form.Group>
                        
                        <Row className="justify-content-sm-space-between"> 
                            <Col>
                                <Form.Group controlId="rememberMe">
                                    <Form.Check type="checkbox" label="Remember me" ref={rememberRef} />
                                </Form.Group>
                            </Col>
                            <Col className="text-md-right"> 
                                <Button variant="primary" type="submit">Submit</Button>
                            </Col>
                        </Row>
                        
                        
                        
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Signin;