import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

const {earcut} = require('earcut');

export function buildEdge(scene) {


    var corners = [ new BABYLON.Vector2(4, -4),
	    new BABYLON.Vector2(2, 0),
	    new BABYLON.Vector2(5, 2),
	    new BABYLON.Vector2(1, 2),
	    new BABYLON.Vector2(-5, 5),
	    new BABYLON.Vector2(-3, 1),
	    new BABYLON.Vector2(-4, -4),
	    new BABYLON.Vector2(-2, -3),
	    new BABYLON.Vector2(2, -3),
	];
          
    var poly_tri = new BABYLON.PolygonMeshBuilder("polytri", corners, scene);
    var polygon = poly_tri.build(null, 0.5);
    polygon.position.y = + 4;


};