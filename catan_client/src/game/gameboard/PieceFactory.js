import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function smallCard(resource, scene) {

    var white = new BABYLON.StandardMaterial("white", scene);
    white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

    var cardCorners = [
        new BABYLON.Vector2(0.35,-0.4),
        new BABYLON.Vector2(-0.35,-0.4),
        new BABYLON.Vector2(-0.35,0.5),
        new BABYLON.Vector2(0.35,0.5)    
    ];

    var cardBuilder = new BABYLON.PolygonMeshBuilder(resource+"", cardCorners, scene);
    var card = cardBuilder.build(null, 0);
    card.position.y = 0.02;
    card.material = white;

    return (card);

}

export function bigCard(type, scene) {

    var white = new BABYLON.StandardMaterial("white", scene);
    white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

    var cardCorners = [
        new BABYLON.Vector2(-0.5,-.75),
        new BABYLON.Vector2(0.5,-.75),
        new BABYLON.Vector2(0.5,.75),
        new BABYLON.Vector2(-0.5,.75)    
    ];

    var cardBuilder = new BABYLON.PolygonMeshBuilder(type+"", cardCorners, scene);
    var card = cardBuilder.build(null, 0);
    card.position.y = 0.02;
    card.material = white;

    return (card);	

}

export function settlement(scene) {

    var white = new BABYLON.StandardMaterial("white", scene);
    white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

    var settlementCorners = [
        new BABYLON.Vector2(-0.1,-0.1),
        new BABYLON.Vector2(0.1,-0.1),
        new BABYLON.Vector2(0.1,0.1),
        new BABYLON.Vector2(-0.1,0.1)    
    ];

    var settlementBuilder = new BABYLON.PolygonMeshBuilder("settlement", settlementCorners, scene);
    var settlement = settlementBuilder.build(null, 0.05);
    settlement.position.y = 0.02;
    settlement.rotation.x = Math.PI;
    settlement.material = white;

    return (settlement);    

}

export function city(scene) {

    var white = new BABYLON.StandardMaterial("white", scene);
    white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

    var cityCorners = [
        new BABYLON.Vector2(-0.1,-0.1),
        new BABYLON.Vector2(0.2,-0.1),
        new BABYLON.Vector2(0.2,0.1),
        new BABYLON.Vector2(-0.1,0.1)    
    ];

    var cityBuilder = new BABYLON.PolygonMeshBuilder("city", cityCorners, scene);
    var city = cityBuilder.build(null, 0.1);
    city.position.y = 0.02;
    city.rotation.x = Math.PI;
    city.material = white;

    return (city);    

}

export function road(scene) {
    var white = new BABYLON.StandardMaterial("white", scene);
    white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

    var roadCorners = [
        new BABYLON.Vector2(-0.15,-0.05),
        new BABYLON.Vector2(0.15,-0.05),
        new BABYLON.Vector2(0.15,0.05),
        new BABYLON.Vector2(-0.15,0.05)    
    ];

    var roadBuilder = new BABYLON.PolygonMeshBuilder("road", roadCorners, scene);
    var road = roadBuilder.build(null, 0.01);
    road.position.y = 0.02;
    road.rotation.x = Math.PI;
    road.material = white;

    return (road);  
}
