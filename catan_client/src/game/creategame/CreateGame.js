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
            usernames: []
        }   
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBlur = this.onBlur.bind(this);
	}

    onBlur(e) {
        e.preventDefault();
        var currentUsers = this.state.usernames;
        currentUsers.push({username: e.target.value});
        this.setState(currentUsers);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log({usernames: this.state.usernames});
        createGame({usernames: this.state.usernames})
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
                                placeholder="username" 
                                onBlur={(e) => this.onBlur(e)}
                            />
                        </FormItem>
                        <FormItem label="Player 2">
                            <Input 
                                placeholder="username" 
                                onBlur={(e) => this.onBlur(e)}
                            />
                        </FormItem>
                        <FormItem label="Player 3">
                            <Input 
                                placeholder="username" 
                                onBlur={(e) => this.onBlur(e)}
                            />
                        </FormItem>
                        <FormItem label="Player 4">
                            <Input 
                                placeholder="username" 
                                onBlur={(e) => this.onBlur(e)}
                            />
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