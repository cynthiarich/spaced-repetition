import React, { useEffect, useState } from "react";
import { useSessionContext } from '../utils/GlobalState';
import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

import API from "../utils/API";

const SessionResults = () => {
    const [state, dispatch] = useSessionContext();
    const [corr, setCorr] = useState([]);
    const [incorr, setIncorr] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getLastSession();
    }, []);

    const getLastSession = () => {
        API.reviewSession(state.id)
            .then(items => {
                const incorrArr = [];
                const corrArr = [];
                //sort by correct/incorrect
                items.data.forEach(result => {
                    let corrResp = result.Item.ItemResps.find(resp => resp.correct === true);
                    let userResp = result.Item.ItemResps.find(resp => resp.id === result.ItemRespId);
                    let dispObj = {
                        itemStem: result.Item.itemStem,
                        respSel: userResp.respStem,
                        corrResp: corrResp.respStem
                    }
                    if (corrResp.id === result.ItemRespId){
                       corrArr.push(dispObj); 
                    } else {
                        incorrArr.push(dispObj);
                    }
                })
                setCorr(corrArr);
                setIncorr(incorrArr);
            })
    }
    const handleStart = (event) => {
        history.push('/start');
    }

    return (
        <Container>
            <Row className="my-5 justify-content-center">
                <h1 className="text-secondary font-weight-light mb-2">Results from your most recent study session</h1>
            </Row>
            <Row>
                <Col xs="12" className="text-center">
                    <Button variant="success" onClick={(event) => handleStart(event)}>Start a new study session</Button>
                </Col>
            </Row>
            <Row className="my-5 justify-content-center">
                <Col xs="10">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Incorrect <Badge variant="danger">{incorr ? incorr.length : 0}</Badge>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                {incorr.length !== 0 ? 
                                    <Table responsive="md">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Your response</th>
                                                <th>Correct response</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {incorr.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.itemStem}</td>
                                                        <td>{item.respSel}</td>
                                                        <td>{item.corrResp}</td>
                                                    </tr>
                                                )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                : 
                                <Card.Body>Nothing to see here!</Card.Body>}
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Correct <Badge variant="success">{corr ? corr.length : 0}</Badge>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                {corr.length !== 0 ? 
                                    <Table responsive="md">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Your response</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {corr.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.itemStem}</td>
                                                        <td>{item.respSel}</td>
                                                    </tr>
                                                )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                : 
                                    <Card.Body>Nothing to see here!</Card.Body>}
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        
    )
}

export default SessionResults;