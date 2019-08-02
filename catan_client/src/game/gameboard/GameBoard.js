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