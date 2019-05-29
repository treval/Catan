import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import './Settings.css';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { List } from 'antd';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return(
			<div>NOT YET IMPLEMENTED.</div>
		)
	}

}

export default withRouter(Settings);