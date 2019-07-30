import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import {
    Link,
    withRouter
} from 'react-router-dom';

class HexGrid extends Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	resource2color = (resource) => {
		switch(resource) {
			case "wood":
				return("green");
				break;
			case "brick":
				return("red");
				break;
			case "wheat":
				return("yellow");
				break;
			case "sheep":
				return("pink");
				break;
			case "stone":
				return("gray");
				break;
			case "desert":
				return("tan");
				break;
			default:
				alert("error!");
				return("black");
				break;
		}
	}

	componentDidMount() {
		let hexcounter = 0;

	    const size = 36;

	    let shiftx = 0;
	    let shifty = 30;

		const canvas = this.canvasRef.current;
		const context = canvas.getContext('2d');

		for (let i=200; i <= 326 ; i+=63) {
			context.beginPath();
			context.moveTo(i + size * Math.sin(0), (100+shifty) + size * Math.cos(0));
			for (let side=0; side < 7; side++) {
			  context.lineTo(i + size * Math.sin(side * 2 * Math.PI / 6), (100+shifty) + size * Math.cos(side * 2 * Math.PI / 6));
			}
			context.fillStyle = this.resource2color(this.props.game.hexes[hexcounter].resource);
			context.fill();
			context.closePath();
			hexcounter++;
		}

		for (let i=168; i<=389; i+=63) {
			context.beginPath();
			context.moveTo(i + size * Math.sin(0), (155+shifty) + size * Math.cos(0));
			for (let side=0; side < 7; side++) {
			  context.lineTo(i + size * Math.sin(side * 2 * Math.PI / 6), (155+shifty) + size * Math.cos(side * 2 * Math.PI / 6));
			}
			context.fillStyle = this.resource2color(this.props.game.hexes[hexcounter].resource);
			context.fill();
			context.closePath();
			hexcounter++;
		}

		for (let i=136; i<=388; i+=63) {
			context.beginPath();
			context.moveTo(i + size * Math.sin(0), (210+shifty) + size * Math.cos(0));
			for (let side=0; side < 7; side++) {
			  context.lineTo(i + size * Math.sin(side * 2 * Math.PI / 6), (210+shifty) + size * Math.cos(side * 2 * Math.PI / 6));
			}
			context.fillStyle = this.resource2color(this.props.game.hexes[hexcounter].resource);
			context.fill();
			context.closePath();
			hexcounter++;
		}

		for (let i=168; i<=389; i+=63) {
			context.beginPath();
			context.moveTo(i + size * Math.sin(0), (265+shifty) + size * Math.cos(0));
			for (let side=0; side < 7; side++) {
			  context.lineTo(i + size * Math.sin(side * 2 * Math.PI / 6), (265+shifty) + size * Math.cos(side * 2 * Math.PI / 6));
			}
			context.fillStyle = this.resource2color(this.props.game.hexes[hexcounter].resource);
			context.fill();
			context.closePath();
			hexcounter++;
		}

		for (let i=200; i<=326; i+=63) {
			context.beginPath();
			context.moveTo(i + size * Math.sin(0), (320+shifty) + size * Math.cos(0));
			for (let side=0; side < 7; side++) {
			  context.lineTo(i + size * Math.sin(side * 2 * Math.PI / 6), (320+shifty) + size * Math.cos(side * 2 * Math.PI / 6));
			}
			context.fillStyle = this.resource2color(this.props.game.hexes[hexcounter].resource);
			context.fill();
			context.closePath();
			hexcounter++;
		}

	}

	render() {
		return(
			<canvas 
				className={this.props.className}
				id="myCanvas" 
				ref={this.canvasRef}
				width="800px" 
				height="500px" 
				onClick={(e) => { 
					e.preventDefault();
					console.log(e.clientX, e.clientY);
				}}
				style={{border: 'thin solid black'}}
			/>
		)
	}

}

export default withRouter(HexGrid);