import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSessionContext } from '../utils/GlobalState';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const TopNav = () => {
    const [state, dispatch] = useSessionContext();
    let history = useHistory();

    const handleSelect = (event) => {
        history.push(`/${event}`);
    }
    
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand>Memory Hacker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {state.auth ? 
                        <Nav className="ml-auto">
                            <Nav.Link eventKey="start" onSelect={(event) => handleSelect(event)}>Study</Nav.Link>
                            <Nav.Link eventKey="results" onSelect={(event) => handleSelect(event)}>Review</Nav.Link>
                            <Nav.Link eventKey="new" onSelect={(event) => handleSelect(event)}>Create</Nav.Link>
                            <Button href="/profile" variant="link">
                                <Image src={`https://api.adorable.io/avatars/25/${state.name}@adorable.io.png`} />
                            </Button>
                        </Nav>
                    :
                        <Nav className="ml-auto">
                            <Nav.Link href="/signin">Sign in</Nav.Link>
                            <Button href="/signup" variant="outline-info">Sign up</Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;