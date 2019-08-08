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

import { buildHand } from './PlayerHand.js';
import { mapBoard } from './mapBoard.js';

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

        console.log(this.game);
        // Camera Configuration
        var camera = new BABYLON.ArcRotateCamera('camera', -Math.PI/2, 0, 12, BABYLON.Vector3.Zero(), scene)
        camera.attachControl(canvas, true);
        camera.upperBetaLimit = (Math.PI/2) - 0.05;
        camera.lowerRadiusLimit = 10;

        // Ground Configuration
        var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 0, scene);

        // Light Configuration
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.4;

        // mesh configuration
        mapBoard(this.game, scene);

        buildHand(scene, "south");
        buildHand(scene, "east");
        buildHand(scene, "west");
        buildHand(scene, "north");

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
			<div style={{overflow: 'hidden', height: '800px'}}>
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
                {
                    /*
                        <div 
                            style={{
                                width: '400px', 
                                height: '200px', 
                                position: 'relative', 
                                backgroundColor: '#99badd', 
                                bottom: '250px',
                                left: '50px'
                            }}
                        >
                            Player Hand Here
                        </div>
                        <div 
                            style={{
                                width: '200px', 
                                height: '400px', 
                                position: 'relative', 
                                backgroundColor: 'red', 
                                bottom: '975px',
                                left: '1200px'
                            }}
                        >
                           Chat/Game Log
                        </div>  
                    */
                }  	
			</div>
		)
	}

}

export default withRouter(GameBoard);