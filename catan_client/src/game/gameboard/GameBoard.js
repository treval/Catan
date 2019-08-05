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
import { buildNode } from './Node.js';
import { buildHand } from './PlayerHand.js';

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

        for (let i=0; i<6; i++) {
            if (i===0 | i===5) {
                for (let j=0; j<7; j++) {
                    if (j%2!==0) {
                        buildNode(scene, (i*0.84)-2.5, (j*0.45)-1.45);
                    } else {
                        if (i===0) {
                            buildNode(scene, (i*0.84)-2.3, (j*0.45)-1.45);
                        } else {
                            buildNode(scene, (i*0.84)-2.7, (j*0.45)-1.45);
                        }
                    }
                }
            } else if (i===1 | i===4) {
                for (let j=0; j<9; j++) {
                    if (j%2!==0) {
                        buildNode(scene, (i*0.84)-2.5, (j*0.45)-1.9);
                    } else {
                        if (i===1) {
                            buildNode(scene, (i*0.84)-2.3, (j*0.45)-1.9);
                        } else {
                            buildNode(scene, (i*0.84)-2.7, (j*0.45)-1.9);
                        }
                    }
                }
            } else if (i===2 | i===3) {
                for (let j=0; j<11; j++) {
                    if (j%2!==0) {
                        buildNode(scene, (i*0.84)-2.5, (j*0.45)-2.35);
                    } else {
                        if (i===2) {
                            buildNode(scene, (i*0.84)-2.3, (j*0.45)-2.35);
                        } else {
                            buildNode(scene, (i*0.84)-2.7, (j*0.45)-2.35);
                        }
                    }
                }
            }
        }

        for (let i=0; i<11; i++) {
            if (i===0) {
                for (let j=0; j<6; j++) {
                    if (j%2===0) {
                        buildEdge(scene, (j*0.45)-1.4, i-2.3, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-1.4, i-2.5, false, "downslant");
                    }
                }
            } else if (i===1) {
                for (let j=0; j<4; j++) {
                    buildEdge(scene, (j*0.88)-1.48, i-2.8, false, "side");
                }
            } else if (i===2) {
                for (let j=0; j<8; j++) {
                    if (j%2===0) {
                        buildEdge(scene, (j*0.45)-1.85, i-3.55, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-1.85, i-3.75, false, "downslant");
                    }
                }
            } else if (i===3) {
                for (let j=0; j<5; j++) {
                    buildEdge(scene, (j*0.88)-1.92, i-4, false, "side");
                }
            } else if (i===4) {
                for (let j=0; j<10; j++) {
                    if (j%2===0) {
                        buildEdge(scene, (j*0.45)-2.3, i-4.7, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-2.3, i-4.9, false, "downslant");
                    }
                }
            } else if (i===5) {
                for (let j=0; j<6; j++) {
                    buildEdge(scene, (j*0.88)-2.35, i-5.22, false, "side");
                }
            } else if (i===6) {
                for (let j=0; j<10; j++) {
                    if (j%2!==0) {
                        buildEdge(scene, (j*0.45)-2.3, i-5.95, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-2.3, i-6.15, false, "downslant");
                    }
                }      
            } else if (i==7) {
                for (let j=0; j<5; j++) {
                    buildEdge(scene, (j*0.88)-1.92, i-6.4, false, "side");
                }
            } else if (i===8) {
                for (let j=0; j<8; j++) {
                    if (j%2!==0) {
                        buildEdge(scene, (j*0.45)-1.85, i-7.15, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-1.85, i-7.35, false, "downslant");
                    }
                }
            } else if (i===9) {
                for (let j=0; j<4; j++) {
                    buildEdge(scene, (j*0.88)-1.46, i-7.6, false, "side");
                }
            } else if (i===10) {
                for (let j=0; j<6; j++) {
                    if (j%2!==0) {
                        buildEdge(scene, (j*0.45)-1.4, i-8.4, false, "upslant");
                    } else {
                        buildEdge(scene, (j*0.45)-1.4, i-8.6, false, "downslant");
                    }
                }                
            }
        }

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
			</div>
		)
	}

}

export default withRouter(GameBoard);