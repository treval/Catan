import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import { getUserGames } from '../../util/APIUtils';

import './GameList.css';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { List } from 'antd';

class GameList extends Component {
	constructor(props) {
        super(props);    
        this.state = {
            games: null,
            isLoading: false
        }       
        this.loadUserGames = this.loadUserGames.bind(this);  
	}

	loadUserGames(userid) {
        this.setState({
            isLoading: true
        });
        getUserGames(userid)
        .then(response => {
            this.setState({
                games: response,
                isLoading: false
            });
        }).catch(error => {
            if(error.status === 404) {
                this.setState({
                    notFound: true,
                });
            } else {
                this.setState({
                    serverError: true,
                    isLoading: false
                });        
            }
        });    
    }

    componentDidMount() {
        const userid = this.props.match.params.userid;
        this.loadUserGames(userid);
    }

    componentDidUpdate(nextProps) {
        if(this.props.match.params.userid !== nextProps.match.params.userid) {
            this.loadUserGames(nextProps.match.params.userid);
        }        
    }

	render() {
        console.log(this.state.games);
		return(
			<div>
				{
					this.state.games ? (
						<div>
                            <List
                                header={<div>Header</div>}
                                footer={<div>Footer</div>}
                                bordered
                                dataSource={this.state.games.ids}
                                style={{
                                    height: '500px',
                                    overflow: 'auto',
                                    marginTop: '100px'
                                }}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to={"/game/"+item}>
                                            {item}
                                        </Link>
                                    </List.Item>
                                )}
                            />
						</div>
					) : null
				}
			</div>
		)
	}
}

export default withRouter(GameList);