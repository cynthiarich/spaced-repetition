import React, { useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';

import API from '../utils/API';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';


const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const pwRef = useRef();
    const termsRef = useRef();
    const [showError, setError] = useState(false);
    let history = useHistory();


    const handleFormSubmit = event => {
        event.preventDefault();
        setError(false);
        if (!emailRef.current.value || !pwRef.current.value || termsRef.current.value === "off") {
            return;
        }

        API.signUpUser(nameRef.current.value, emailRef.current.value, pwRef.current.value)
            .then((res) => {
                history.push('/signin');
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
                        <Col xs={{ span: 8}}>
                            <h4 className="text-secondary font-weight-light">Create an account</h4>
                        </Col>
                        <Col className="text-md-right">
                            or
                            <Button variant="link" className="py-0 px-1" href="/signin">sign in</Button>
                        </Col>
                    </Row>
                    {showError ? 
                        <Alert variant={'danger'}>
                            This email address is already registered, please&nbsp; 
                            <Alert.Link href="/signin">sign in</Alert.Link> or use a different email. 
                        </Alert>
                    : null}
                    <Form onSubmit={(event) => handleFormSubmit(event)}>
                        
                        <Form.Group controlId="firstName">
                            <Form.Control type="text" placeholder="First name" ref={nameRef} />
                        </Form.Group>

                        <Form.Group controlId="userEmail">
                            <Form.Control type="email" placeholder="Email" ref={emailRef} />
                        </Form.Group>
                        
                        <Form.Group controlId="userPassword">
                            <Form.Control type="password" placeholder="Password" ref={pwRef} />
                        </Form.Group>
                        
                        <Row className="justify-content-sm-space-between"> 
                            <Col>
                                <Form.Group controlId="rememberMe">
                                    <Form.Check type="checkbox" label="I agree to the terms" ref={termsRef} />
                                </Form.Group>
                            </Col>
                            <Col className="text-md-right"> 
                                <Button variant="primary" type="submit">Create an account</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Alert variant={'warning'} className="mt-3">
                        This is a demo app running on unsecured services. Please do not use a real email or password here! 
                    </Alert>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Signup;