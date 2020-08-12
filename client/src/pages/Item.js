import React, { useEffect, useState, useRef }  from 'react';
import API from '../utils/API';
import { useSessionContext } from '../utils/GlobalState';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Fade from 'react-bootstrap/Fade';

const Item = () => {
    const [state, dispatch] = useSessionContext();
    const [show, setAlert] = useState();
    const [topics, setTopics] = useState();
    const [subtopics, setSubTopics] = useState();
    const [subtopic, setSubTopic] = useState();
    const [visibility, setVisibility] = useState("public");
    const visibilityRef = useRef();
    const stemRef = useRef();
    const resp1Ref = useRef();
    const resp2Ref = useRef();
    const resp3Ref = useRef();
    const resp4Ref = useRef();

    useEffect(() => {
        getTopics();
    }, []);

    const getTopics = () => {
        API.getTopics()
            .then(result => {
                setTopics(result.data);
            })
    }

    const handleTopicSelection = event => {
        API.getSubTopics(event.target.value)
            .then(result => {
                setSubTopics(result.data);
            })
    }

    const handleSubTopicSelection = event => {
        setSubTopic(event.target.value);
    }

    const handleRadioSelection = event => {
        setVisibility(event.target.id);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createItem(
            state.id, 
            subtopic, 
            visibility, 
            stemRef.current.value,
            resp1Ref.current.value,
            resp2Ref.current.value,
            resp3Ref.current.value,
            resp4Ref.current.value
        ).then(resp => { 
            setAlert(true);
            stemRef.current.value = "";
            resp1Ref.current.value = "";
            resp2Ref.current.value = "";
            resp3Ref.current.value = "";
            resp4Ref.current.value = "";
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        })
    }

    return (
        <Container>
            <Row className="justify-content-sm-center align-items-center my-5">
                <Col xs="8">
                    <h2 className="text-secondary font-weight-light mb-2">Create a new item</h2>
                    <p className="mb-2">Need to learn something we don't cover yet? Want to add a new question to an existing topic? 
                    Add your own items here.</p>
                    <hr />
                    <Form onSubmit={(event) => handleFormSubmit(event)}>
                        <h3 className="text-secondary font-weight-light mb-2">1: Select a topic</h3>
                        {show ? 
                            <Fade>
                                <Alert variant={'success'}>
                                    Your item has been saved! 
                                </Alert>
                            </Fade>
                        : null }
                        <Form.Group controlId="topicSelect">
                            <Form.Control as="select" onChange={(event) => handleTopicSelection(event)}>
                                <option key="topic0">Select a topic...</option>
                                {topics ? 
                                topics.map((topic, index) => (
                                        <option key={`topic${index}`} id={topic.id}>{topic.name}</option>
                                ))
                                : null }
                            </Form.Control>
                        </Form.Group>
                        {subtopics ? 
                            <Form.Group controlId="subtopicSelect">
                                <Form.Control as="select" onChange={(event) => handleSubTopicSelection(event)}>
                                    <option key="subtopic0">Select a subtopic...</option>
                                    {subtopics.map((subtopic, index) => (
                                        <option key={`subtopic${index}`} id={subtopic.id}>{subtopic.name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        : null }
                        <hr />
                        <h3 className="text-secondary font-weight-light mb-2">2: Who can see this item?</h3>
                        <Form.Group ref={visibilityRef}>
                            <Row> 
                                <Col xs="1">
                                    <Form.Check
                                        type="radio"
                                        id="public"
                                        aria-label="public"
                                        name="itemVisibility"
                                        onChange={(event) => handleRadioSelection(event)}
                                        defaultChecked
                                    />
                                </Col>
                                <Col xs="11">
                                    <p><span className="font-weight-bold">Public:</span> anyone who selects this topic will see this item</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="1">
                                    <Form.Check
                                        type="radio"
                                        id="private"
                                        aria-label="private"
                                        name="itemVisibility"
                                        onChange={(event) => handleRadioSelection(event)}
                                    />
                                </Col>
                                <Col xs="11">
                                    <p><span className="font-weight-bold">Private:</span> you will see this item, but others will not</p>
                                </Col>
                            </Row>
                        </Form.Group>
                        <hr />
                        <h3 className="text-secondary font-weight-light mb-2">3: Write a great question</h3>
                        <Form.Group controlId="itemStem">
                            <Form.Control as="textarea" rows="2" ref={stemRef} placeholder="Write the question"/>
                        </Form.Group>
                        <hr />
                        <h3 className="text-secondary font-weight-light mb-2">4: Provide response options</h3>
                        <p>First, provide the correct response</p>
                        <Form.Group controlId="itemStem">
                            <Form.Control type="text" placeholder="Write a correct response" ref={resp1Ref} />
                        </Form.Group>
                        <p>Now provide some incorrect responses as distractors</p>   
                        <Form.Group controlId="itemStem">
                            <Form.Control type="text" placeholder="Write an incorrect response" ref={resp2Ref} />
                        </Form.Group>
                        <Form.Group controlId="itemStem">
                            <Form.Control type="text" placeholder="Write an incorrect response" ref={resp3Ref} />
                        </Form.Group>
                        <Form.Group controlId="itemStem">
                            <Form.Control type="text" placeholder="Write an incorrect response" ref={resp4Ref} />
                        </Form.Group> 
                        <Row>
                            <Col className="text-md-right">
                                <Button variant="primary" type="submit">Create item</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            
        </Container>
        

    )
}

export default Item;