import React, { Component } from 'react';

import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import LoadingIndicator  from '../../common/LoadingIndicator';

import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

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
			game: undefined,
			isLoading: false
		}
		this.loadGameBoard = this.loadGameBoard.bind(this);
	}

	onSceneMount(e) {
        const { canvas, scene, engine } = e;

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;

        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    };

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
			            <div>
			                <BabylonScene onSceneMount={this.onSceneMount} />
			            </div>
					) : null
				}
			</div>
		)
	}

}

export default withRouter(GameBoard);