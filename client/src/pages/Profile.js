import React, { useEffect, useState } from "react";
import { useSessionContext } from '../utils/GlobalState';
import { useHistory } from 'react-router-dom';

import API from "../utils/API";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Fade from 'react-bootstrap/Fade';
import Alert from 'react-bootstrap/Alert';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Profile = () => {
    const [state, dispatch] = useSessionContext();
    const [topics, setTopics] = useState();
    const [selected, setSelected] = useState([]);
    const [time, setTime] = useState(5);
    const [saved, setSaved] = useState();
    const [active, setActive] = useState(false);
    let history = useHistory();
    
    useEffect(() => {
        getTopics();
        getUser();
    }, []);

    const getTopics = () => {
        API.getTopics()
            .then(result => {
                setTopics(result.data);
            })
    }

    const getUser = () => {
        API.getUser(state.id)
            .then(result => {
                setTime(result.data.durationGoal);
            })

        API.getUserTopics(state.id)
            .then(result => {
                const prevSelections = result.data.map(topic => topic.TopicId);
                setSelected(prevSelections);
                setActive(true);
            })
    }

    const handleTimeSelection = (event) => {
        setTime(event.target.value);
    }

    const handleTopicSelection = (event) => {
        const userSelection = parseInt(event.target.value);
        if(selected.includes(userSelection)){
            const newList = selected.filter(topic => topic !== userSelection);
            setSelected(newList);
        } else {
            setSelected([
                ...selected,
                userSelection
            ]);
        }
        setActive(false);
    }

    const handleStart = (event) => {
        history.push('/start');
    }

    const handleUpdate = (event) => {
        API.updateUser(
            state.id,
            selected,
            time
        ).then(result => {
            setActive(true);
            setSaved(true);
            setTimeout(() => {
                setSaved(false);
            }, 3000);
        })
    }

    return (
        <Container>
            <Row className="my-5">
                <h1 className="text-secondary font-weight-light mb-2">Welcome, {state.name}</h1>
            </Row>
            <Row>
                <Col xs="12" lg="6">
                    <h2 className="text-secondary font-weight-light mb-4">Study now!</h2>
                    <Row>
                        <Col xs="12" className="text-center">
                            {active ? 
                                <Button variant="success" onClick={(event) => handleStart(event)}>Start a new study session</Button>
                                :
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Please set up and save your profile</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button variant="secondary" disabled style={{ pointerEvents: 'none' }}>
                                            Start a new study session
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                            }
                        </Col>
                    </Row>
                    <h2 className="text-secondary font-weight-light my-4">Your stats</h2>
                    <Row className="p-3">
                        <Col xs="12">
                            <h4 className="text-secondary font-weight-light mb-2">Study sessions at a glance</h4>
                            <p>Imagine a beautiful chart here showing how many days you've studied for your goal duration in the last 60 days</p>
                            <h4 className="text-secondary font-weight-light mb-2">Study sessions by topic</h4>
                            <p>Imagine another graphic here showing study sessions and % of items above an rScore of 95 by topic</p>
                        </Col>
                    </Row>

                </Col>
                <Col xs="12" lg="6">
                    <h2 className="text-secondary font-weight-light mb-4">Your preferences</h2>
                    {saved ? 
                        <Row>
                            <Col xs="12">
                                <Fade>
                                    <Alert variant={'success'}>
                                        Your preferences have been updated! 
                                    </Alert>
                                </Fade>
                            </Col>
                        </Row>
                    : null }
                    <Row className="bg-light p-3 align-items-center">
                        <Col xs="12">
                            <h4 className="text-secondary font-weight-light mb-2">How long will you study?</h4>
                            <p>The perfect companion for your morning coffee - in just 5 minutes per day you can learn new things and improve your memory.</p>
                        </Col>
                        <Col xs="12" className="justify-content-center mt-3 px-2">
                            <Form>
                                <Form.Group controlId="rangeStudyTime">
                                    <Form.Control type="range" value="5" min="0" max="30" step="5" onChange={(event) => handleTimeSelection(event)}/>
                                </Form.Group>
                            </Form>
                            <h4 className="text-center text-secondary font-weight-light mb-5">{time} minutes per day</h4>
                        </Col>
                    </Row>
                    <Row className="bg-light p-3 align-items-center my-3">
                        <Col xs="12">
                            <h4 className="text-secondary font-weight-light mb-2">What will you learn?</h4>
                            <p>Review topics of days gone by, or learn something new. Choose at least one topic.</p>
                        </Col>
                        <Col xs="12" className="justify-content-center mt-3 px-2">
                            <Form.Group>
                                {topics ? 
                                    topics.map((topic, index) => {
                                        return (
                                            <ToggleButton
                                                key={index}    
                                                type="checkbox"
                                                variant="outline-primary"
                                                className="m-2"
                                                checked={selected ? selected.indexOf(topic.id) !== -1 : null}
                                                value={topic.id}
                                                onChange={(event) => handleTopicSelection(event)}>
                                                    <span className="ml-2">{topic.name}</span>
                                            </ToggleButton>
                                        )})
                                : null}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="text-center">
                            <Button variant="primary" onClick={(event) => handleUpdate(event)}>Save profile changes</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;