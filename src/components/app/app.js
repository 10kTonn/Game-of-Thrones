import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotService';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

export default class App extends Component{
    state = {
        showRandomeChar: true,
        error: false,
        selectChar: 130
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomeChar: !state.showRandomeChar
            }
        });
    };

    onCharSelected = (id) =>{
        this.setState({
            selectChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomeChar ? <RandomChar/> : null;
        return(
            <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button className='toggle-btn'
                        onClick={this.toggleRandomChar}>Toggle random character</button>
                    </Col>
                </Row>
                <CharacterPage/>
            </Container>
        </>
        )
    }
}


