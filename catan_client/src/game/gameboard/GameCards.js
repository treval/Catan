import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

export function renderGameCards(game, scene) {

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

    // wood
    var cardCorners = [
        new BABYLON.Vector2(-2.3, -4),
        new BABYLON.Vector2(-1.6, -4),
        new BABYLON.Vector2(-1.6, -3),
        new BABYLON.Vector2(-2.3, -3)
    ];

    var planeBuilder = new BABYLON.PolygonMeshBuilder("wood", cardCorners, scene);

    for (var i=0; i<game.wood; i++) {
        var wood = planeBuilder.build(null, 0);
        wood.material = darkgreen;
        wood.position.y = i/100;
    }

    // brick
    cardCorners = [
        new BABYLON.Vector2(-1.3, -4),
        new BABYLON.Vector2(-0.6, -4),
        new BABYLON.Vector2(-0.6, -3),
        new BABYLON.Vector2(-1.3, -3)    
    ];

    planeBuilder = new BABYLON.PolygonMeshBuilder("brick", cardCorners, scene);

    for (var i=0; i<game.brick; i++) {
        var planeBuilder = new BABYLON.PolygonMeshBuilder("brick", cardCorners, scene);
        var brick = planeBuilder.build(null, 0);
        brick.material = maroon;
        brick.position.y = i/100;
    }

    // wheat
    cardCorners = [
        new BABYLON.Vector2(-0.3, -4),
        new BABYLON.Vector2(0.4, -4),
        new BABYLON.Vector2(0.4, -3),
        new BABYLON.Vector2(-0.3, -3)    
    ];

    planeBuilder = new BABYLON.PolygonMeshBuilder("wheat", cardCorners, scene);

    for (var i=0; i<game.wheat; i++) {
        var planeBuilder = new BABYLON.PolygonMeshBuilder("wheat", cardCorners, scene);
        var wheat = planeBuilder.build(null, 0);
        wheat.material = yellow;
        wheat.position.y = i/100;
    }

    // sheep
    cardCorners = [
        new BABYLON.Vector2(0.7, -4),
        new BABYLON.Vector2(1.4, -4),
        new BABYLON.Vector2(1.4, -3),
        new BABYLON.Vector2(0.7, -3)    
    ];

    planeBuilder = new BABYLON.PolygonMeshBuilder("sheep", cardCorners, scene);

    for (var i=0; i<game.sheep; i++) {
        var planeBuilder = new BABYLON.PolygonMeshBuilder("sheep", cardCorners, scene);
        var sheep = planeBuilder.build(null, 0);
        sheep.material = lightgreen;
        sheep.position.y = i/100;
    }

    // stone
    cardCorners = [
        new BABYLON.Vector2(1.7, -4),
        new BABYLON.Vector2(2.4, -4),
        new BABYLON.Vector2(2.4, -3),
        new BABYLON.Vector2(1.7, -3)    
    ];

    planeBuilder = new BABYLON.PolygonMeshBuilder("stone", cardCorners, scene);

    for (var i=0; i<game.stone; i++) {
        var planeBuilder = new BABYLON.PolygonMeshBuilder("stone", cardCorners, scene);
        var stone = planeBuilder.build(null, 0);
        stone.material = gray;
        stone.position.y = i/100;
    }

    // dev cards
    cardCorners = [
        new BABYLON.Vector2(2, 3),
        new BABYLON.Vector2(2.7, 3),
        new BABYLON.Vector2(2.7, 2),
        new BABYLON.Vector2(2, 2)    
    ];

    planeBuilder = new BABYLON.PolygonMeshBuilder("devcards", cardCorners, scene);

    var numDevCards = game.knight + game.monopoly + game.roadBuilding + game.victoryCards + game.yearOfPlenty;
    for (var i=0; i<numDevCards; i++) {
        var planeBuilder = new BABYLON.PolygonMeshBuilder("devcards", cardCorners, scene);
        var devcards = planeBuilder.build(null, 0);
        devcards.material = yellow;
        devcards.position.y = i/100;
    }

    // longest road card
    cardCorners = [
        new BABYLON.Vector2(-3.2, 2),
        new BABYLON.Vector2(-2.2, 2),
        new BABYLON.Vector2(-2.2, 1),
        new BABYLON.Vector2(-3.2, 1)    
    ];

    var planeBuilder = new BABYLON.PolygonMeshBuilder("longestroad", cardCorners, scene);
    var longestroad = planeBuilder.build(null, 0);
    longestroad.material = darkgreen;
    longestroad.position.y = 0.1;

    // largerst army card
    cardCorners = [
        new BABYLON.Vector2(-2.8, 3),
        new BABYLON.Vector2(-1.8, 3),
        new BABYLON.Vector2(-1.8, 2),
        new BABYLON.Vector2(-2.8, 2)   
    ];

    var planeBuilder = new BABYLON.PolygonMeshBuilder("largestarmy", cardCorners, scene);
    var largestarmy = planeBuilder.build(null, 0);
    largestarmy.material = lightgreen;
    largestarmy.position.y = 0.1;


    


};




