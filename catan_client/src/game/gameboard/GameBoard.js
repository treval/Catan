import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';
import HexGrid from './HexGrid'

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
        this.loadGameBoard(this.props.match.params.gameid);
    }

	render() {
		return(
			<div gameboard-container>
				{
					this.state.game ? (
						<HexGrid 
							className='board'
							game={this.state.game}
						/>
					) : null
				}
			</div>
		)
	}

}

export default withRouter(GameBoard);