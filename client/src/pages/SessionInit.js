import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useSessionContext } from '../utils/GlobalState';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../utils/API";
import { SET_SESSION } from "../utils/actions";


const SessionInit = () => {
    const [state, dispatch] = useSessionContext();
    let history = useHistory();

    useEffect(() => {
        initSession();
    }, []);

    const initSession = () => {
        //get session items and store in state
        //the magic happens in controllers/sessionControllers.js
        API.initSession(state.id)
            .then(result => {
                dispatch({
                    type: SET_SESSION,
                    post: {
                       sessionItems: result.data 
                    }
                })
                history.push('/session');

            })
    }

    return (
        <Container>
            <Row className="my-5 justify-content-center">
                <Col xs="12" lg="8">
                    <h4 className="text-secondary font-weight-light text-center mb-4">
                        Creating your personalized study session ... please wait!
                    </h4>
                </Col>
            </Row>    
        </Container>
    )
}

export default SessionInit;