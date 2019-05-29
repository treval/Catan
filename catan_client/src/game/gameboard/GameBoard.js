import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import { getGameById } from '../../util/APIUtils';

import './GameBoard.css';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { List } from 'antd';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: null,
			isLoading: false
		}
		this.loadGameBoard = this.loadGameBoard.bind(this);
	}

	loadGameBoard(gameid) {
		this.setState({
			isLoading: true,
		});
		getGameById(gameid).then(response => {
			this.setState({
				isLoading: false,
				game: response
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
        const gameid = 19;
        this.loadGameBoard(gameid);
    }

	render() {
		return(
			<div>
				{
					this.state.game ? (
						<div>
							<div>GAME: {JSON.stringify(this.state.game.id)}</div>
							<div>USER STATUSES: {JSON.stringify(this.state.game.userStatuses)}</div>
							<div>GAME STATUS:</div>
							<div>WOOD: {JSON.stringify(this.state.game.wood)}</div>
							<div>BRICK: {JSON.stringify(this.state.game.brick)}</div>
							<div>WHEAT: {JSON.stringify(this.state.game.wheat)}</div>
							<div>SHEEP: {JSON.stringify(this.state.game.sheep)}</div>
							<div>STONE: {JSON.stringify(this.state.game.stone)}</div>
							<div>VICTORY CARDS: {JSON.stringify(this.state.game.victoryCards)}</div>
							<div>KNIGHTS: {JSON.stringify(this.state.game.knight)}</div>
							<div>ROAD BUILDING: {JSON.stringify(this.state.game.roadBuilding)}</div>
							<div>MONOPOLY: {JSON.stringify(this.state.game.monopoly)}</div>
							<div>YEAR OF PLENTY: {JSON.stringify(this.state.game.yearOfPlenty)}</div>
							<div>HEXES: {JSON.stringify(this.state.game.hexes)}</div>
						</div>
					) : null
				}
			</div>
		)
	}

}

export default withRouter(GameBoard);