import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function buildNode(scene, x, y) {
	// Color Materials
    var cb = new BABYLON.StandardMaterial("cb", scene);
    cb.diffuseColor = new BABYLON.Color3.FromHexString('#99badd');
    
    var node = BABYLON.DiscBuilder.CreateDisc("node", {radius: 0.1}, scene);
    node.position = new BABYLON.Vector3(x, 0.04, y);
    //node.rotation = new BABYLON.Vector3(Math.PI/2, Math.PI/2, Math.PI/2);
    node.rotation.x = Math.PI/2;
    node.material = cb;

};