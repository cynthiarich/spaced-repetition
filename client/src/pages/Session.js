import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSessionContext } from '../utils/GlobalState';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import API from "../utils/API";


const Session = () => {
    const [state, dispatch] = useSessionContext();
    const [respSelected, setSelected] = useState();
    const [itemStem, setItemStem] = useState();
    const [itemResps, setItemResps] = useState();
    const [currItem, setCurrItem] = useState(0);
    const [totalTime, setTimer] = useState(0);
    const [elapTime, setElapsed] = useState(0);
    const [timerActive, setActive] = useState(false);
    let history = useHistory();

    useEffect(() => {
        getQuestion();
    }, [currItem]);

    useEffect(() => {
        let interval = null;
        if(timerActive){
            interval = setInterval(() => {
                if(elapTime + 1000 < totalTime){
                    setElapsed(elapTime => elapTime + 1000);
                } else {
                    setElapsed(totalTime);
                    handleResponse(-1);
                }
                
            }, 1000);
        } else if(!timerActive && elapTime !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, elapTime]);


    const getQuestion = () => {
        //grab first question from array in state
        //and grab responses from db
        API.getItem(state.sessionItems[currItem].id)
            .then(item => {
                setItemStem(item.data.itemStem);
                setItemResps(item.data.ItemResps);
                const baseTimer = 6;
                let vTimer = 8;
                if(state.sessionItems[currItem].rScore < 100){
                    vTimer = 10 * ((100 - state.sessionItems[currItem].rScore)/100);
                }
                setTimer((baseTimer + vTimer) * 1000);
                setElapsed(0);
                setActive(true);
            })
    }

    const handleResponse = (sel) => {
        setActive(false);
        //show correct/incorrect
        if(respSelected === sel){
            setSelected("");
        } else {
            setSelected(sel);
        }
        if(sel !== -1){
            //save user response
            API.saveResponse(
                state.id, 
                state.sessionItems[currItem].id,
                itemResps[sel].id
                ).then(response => {
                    if(currItem < state.sessionItems.length - 1) {
                        setTimeout(() => {
                            setSelected("");
                            //get the next question
                            setCurrItem(currItem + 1);
                        }, 1500);
                        
                    } else {
                        //no more questions, let's view results
                        history.push('/results')
                    }
                        
                    })
        } else {
            if(currItem < state.sessionItems.length - 1) {
                setTimeout(() => {
                    setSelected("");
                    //get the next question
                    setCurrItem(currItem + 1);
                }, 1500);
                
            } else {
                //no more questions, let's view results
                history.push('/results')
            }
        }
        
    }

    return (
        <Container>
            <Row className="my-5 justify-content-center">
                <Col xs="12" lg="8">
                    <h4 className="text-secondary font-weight-light text-center mb-4">
                        {itemStem ? itemStem : "Loading ..."}
                    </h4>
                    <ListGroup>
                        {itemResps ? 
                            itemResps.map((item, index) => {
                                return <ListGroup.Item key={index} className="mb-2 border border-secondary rounded font-weight-light" variant={respSelected === index ? (item.correct ? 'success' : 'danger') : null} active={respSelected === index} action onClick={() => handleResponse(index)}>{item.respStem}</ListGroup.Item>
                            })
                        : null}
                    </ListGroup>
                    <div className="my-5">
                        <ProgressBar striped variant="info" now={(elapTime/totalTime)*100} />
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Session;