import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function buildHand(scene, location) {

    var red = new BABYLON.StandardMaterial("red", scene);
    red.diffuseColor = new BABYLON.Color3.FromHexString('#ff0000');

    var green = new BABYLON.StandardMaterial("green", scene);
    green.diffuseColor = new BABYLON.Color3.FromHexString('#00ff00');

    var blue = new BABYLON.StandardMaterial("blue", scene);
    blue.diffuseColor = new BABYLON.Color3.FromHexString('#0000ff');

    var orange = new BABYLON.StandardMaterial("orange", scene);
    orange.diffuseColor = new BABYLON.Color3.FromHexString('#ffa500');

    var handColor;
    if (location==="south") {
        var corners = [
            new BABYLON.Vector2(5, -5),
            new BABYLON.Vector2(5, 5),
            new BABYLON.Vector2(10, 5),
            new BABYLON.Vector2(10, -5)
        ];
        handColor = blue;
    } 

    if (location==="east") {
        var corners = [
            new BABYLON.Vector2(-5, 5),
            new BABYLON.Vector2(-5, 10),
            new BABYLON.Vector2(5, 10),
            new BABYLON.Vector2(5, 5)
        ];
        handColor = red;
    }

    if (location==="west") {
        var corners = [
            new BABYLON.Vector2(-5, -10),
            new BABYLON.Vector2(5, -10),
            new BABYLON.Vector2(5, -5),
            new BABYLON.Vector2(-5, -5)
        ];
        handColor = green;
    }

    if (location==="north") {
        var corners = [
            new BABYLON.Vector2(-10, -5),
            new BABYLON.Vector2(-10, 5),
            new BABYLON.Vector2(-5, 5),
            new BABYLON.Vector2(-5, -5)
        ];
        handColor = orange;
    }


    var planeBuilder = new BABYLON.PolygonMeshBuilder("hand", corners, scene);
    var hand = planeBuilder.build(null, 0);
    hand.position.y = + 0.01;
    hand.material = handColor;

};