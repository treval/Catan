import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

const {earcut} = require('earcut');

export function buildEdge(scene, x, y, hasRoad, edgeType) {

	var red = new BABYLON.StandardMaterial("red", scene);
	red.diffuseColor = new BABYLON.Color3.FromHexString('#a80000');

	let height = 0;

	if (hasRoad)
		height = 0.1;


	const width = 0.1;
	const length = 0.4;	

	var corners = [];

	var theta;
	if (edgeType==="upslant")
		theta=Math.PI/6;
	else if (edgeType==="downslant")
		theta=-Math.PI/6;
	else if (edgeType==="side")
		theta=Math.PI/2;

    var corners = [ 
    	new BABYLON.Vector2(y, x),
	    new BABYLON.Vector2((-Math.sin(theta) * length)+y, (Math.cos(theta) * length)+x),
	    new BABYLON.Vector2(((width * Math.cos(theta))-(Math.sin(theta) * length))+y, ((width * Math.sin(theta))+(Math.cos(theta) * length))+x),
	    new BABYLON.Vector2((width * Math.cos(theta))+y, (width * Math.sin(theta))+x)
	];
          
    var edgeBuilder = new BABYLON.PolygonMeshBuilder("edge", corners, scene);
    var edge = edgeBuilder.build(null, height);
    edge.position.y = + 0.03;
    edge.material = red;

};