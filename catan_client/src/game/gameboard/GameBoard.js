import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

import { getGameById } from '../../util/APIUtils';

import {
    Link,
    withRouter
} from 'react-router-dom';

import { List } from 'antd';

import { buildHex } from './Hex.js';
import { buildEdge } from './Edge.js';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: undefined,
			isLoading: false
		}
		this.loadGameBoard = this.loadGameBoard.bind(this);
	}

	onSceneMount(e) {
        const { canvas, scene, engine } = e;

        // Camera Configuration
        var camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, BABYLON.Vector3.Zero(), scene)
        camera.attachControl(canvas, true);
        camera.upperBetaLimit = (Math.PI/2) - 0.05;
        camera.lowerRadiusLimit = 10;

        // Ground Configuration
        var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 0, scene);

        // Light Configuration
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.4;

        // Mesh Configuration
        var hex = 0;
        var xTransform = 0.9;
        var yTransform = 0.8;
        for (let i=0; i<5; i++) {
        	if (i==0 | i==4)
        		for (let j=0; j<3; j++) {
        			buildHex((i*yTransform)-2,(j*xTransform)-1, this.game.hexes[hex].resource, this.game.hexes[hex].probability, scene);
        			hex++;
        		}
        	if (i==1 | i==3)
        		for (let j=0; j<4; j++) {
        			buildHex((i*yTransform)-2,(j*xTransform)-1.45, this.game.hexes[hex].resource, this.game.hexes[hex].probability, scene);
        			hex++;
        		}
        	if (i==2)
        		for (let j=0; j<5; j++) {
        			buildHex((i*yTransform)-2,(j*xTransform)-1.9, this.game.hexes[hex].resource, this.game.hexes[hex].probability, scene);
        			hex++;
        		}
        }

        buildEdge()

        // Render Loop
        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    };

	loadGameBoard(gameid) {
		console.log("loading game board...");
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
			<div>
		        <div>
		        	{	
		        		this.state.game ?
				            <BabylonScene 
				            	onSceneMount={this.onSceneMount}
				            	width='1200'
				            	height='800'
				            	game={this.state.game}
				            /> : <div>Loading Game...</div>
				        
		        	}
		        </div>	
			</div>
		)
	}

}

export default withRouter(GameBoard);