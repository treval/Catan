import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function buildHex(x, y, resource, probability, scene) {
	// Color Materials

	var darkgreen = new BABYLON.StandardMaterial("darkgreen", scene);
	darkgreen.diffuseColor = new BABYLON.Color3.FromHexString('#004d00');

	var maroon = new BABYLON.StandardMaterial("maroon", scene);
	maroon.diffuseColor = new BABYLON.Color3.FromHexString('#800000');

	var yellow = new BABYLON.StandardMaterial("yellow", scene);
	yellow.diffuseColor = new BABYLON.Color3.FromHexString('#cccc00');

	var lightgreen = new BABYLON.StandardMaterial("lightgreen", scene);
	lightgreen.diffuseColor = new BABYLON.Color3.FromHexString('#66ff66');

	var gray = new BABYLON.StandardMaterial("gray", scene);
	gray.diffuseColor = new BABYLON.Color3.FromHexString('#a6a6a6');

	var tan = new BABYLON.StandardMaterial("tan", scene);
	tan.diffuseColor = new BABYLON.Color3.FromHexString('#bf8040');

	var hex = BABYLON.DiscBuilder.CreateDisc("Hex", {tessellation: 6}, scene);
    hex.position = new BABYLON.Vector3(x, 0.01, y);
    hex.rotation = new BABYLON.Vector3(Math.PI/2, Math.PI/2, Math.PI/2);
    
    switch(resource) {
    	case "wood":
    		hex.material=darkgreen;
    		break;
    	case "brick":
    		hex.material=maroon;
    		break;
    	case "wheat":
    		hex.material=yellow;
    		break;
    	case "sheep":
    		hex.material=lightgreen;
    		break;
    	case "stone":
    		hex.material=gray;
    		break;
    	case "desert":
    		hex.material=tan;
    		break;
    	default:
    		break;
    };

    if (probability !== 0) {
        var probTile = BABYLON.DiscBuilder.CreateDisc("probTile", {radius: 0.1}, scene);
        probTile.position = new BABYLON.Vector3(x, 0.02, y);
        probTile.rotation = new BABYLON.Vector3(Math.PI/2, Math.PI/2, Math.PI);

        var probText = new BABYLON.DynamicTexture("probText", 256, scene);

        if (probability === 6 | probability === 8)
            probText.drawText(probability, 60, 150, "bold 180px monospace", 'red', '#dbc3a3', false, true);
        else if ((probability !== 6 & probability !== 8) & probability < 10)
            probText.drawText(probability, 60, 150, "bold 180px monospace", 'black', '#dbc3a3', false, true);
        else
            probText.drawText(probability, 40, 150, "bold 180px monospace", 'black', '#dbc3a3', false, true);

        var probTextMaterial = new BABYLON.StandardMaterial("probTextMaterial", scene);
        probTextMaterial.diffuseTexture = probText;

        probTile.material = probTextMaterial;
    }
};