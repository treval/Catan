import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import { createGame } from '../../util/APIUtils';

import './CreateGame.css';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { Form, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class CreateGame extends Component {
	constructor(props) {
        super(props);
        this.state = {
            usernames: {
                value: ''
            }
        }   
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    
        const gameRequest = {
            usernames: [{username:this.state.usernames.value}],
        };
        console.log(gameRequest);
        createGame(gameRequest)
        .then(response => {
            notification.success({
                message: 'Catan App',
                description: "Game Initialization Successful! :)",
            });          
        }).catch(error => {
            notification.error({
                message: 'Catan App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

	render() {
		return(
            <div className="signup-container">
                <h1 className="page-title">Create a Game Here!</h1>
                <div className="signup-content">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <FormItem label="Player 1">
                            <Input 
                                size="large"
                                name="usernames"
                                autoComplete="off"
                                placeholder="username"
                                value={this.state.usernames.value} 
                                onChange={(event) => this.handleInputChange(event)} />    
                        </FormItem>
                        <FormItem>
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                className="signup-form-button">
                                    CREATE GAME
                             </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
		)
	}

}

export default withRouter(CreateGame);