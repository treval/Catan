import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function buildNode(x, y, hexes, nodeData, scene) {
	// Color Materials

	var hexIds = [nodeData.tHexId, nodeData.bHexId, nodeData.lHexId, nodeData.rHexId];

	var hexData = [];
	hexes.forEach( (hex, idx) => {
		hexIds.forEach( (id) => {
			if (id === idx)
				hexData.push(hex);
		});
	});

    var cb = new BABYLON.StandardMaterial("cb", scene);
    cb.diffuseColor = new BABYLON.Color3.FromHexString('#99badd');
    
    var node = BABYLON.DiscBuilder.CreateDisc("node", {radius: 0.1}, scene);
    node.position = new BABYLON.Vector3(x, 0.04, y);
    node.rotation.x = Math.PI/2;
    node.material = cb;

    node.actionManager = new BABYLON.ActionManager(scene);

    node.actionManager.registerAction(
    	new BABYLON.ExecuteCodeAction(
	        {
	            trigger: BABYLON.ActionManager.OnPickTrigger,
	        },
	        function () { 
	        	console.log(hexData); 
	        }
	    )
	);

	return node;

};