import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene.js';

import * as PieceFactory from './PieceFactory.js';

export function buildUserHand(scene, game, user) {

    console.log(game);
    console.log(user);

    var brickNum = 5;
    var woodNum = 5;
    var wheatNum = 5;
    var sheepNum = 5;
    var stoneNum = 5;

    var monopolyNum = 2;
    var yopNum = 2;
    var roadbNum = 2;
    var knightNum = 5;
    var victoryPtNum = 5;

    var settlementsNum = 5;
    var citiesNum = 4;
    var roadsNum = 15;

    var pivot = new BABYLON.TransformNode("root");
    pivot.position = new BABYLON.Vector3(0, 0, 0); 

    // Colors
    {
        var red = new BABYLON.StandardMaterial("red", scene);
        red.diffuseColor = new BABYLON.Color3.FromHexString('#ff0000');

        var green = new BABYLON.StandardMaterial("green", scene);
        green.diffuseColor = new BABYLON.Color3.FromHexString('#00ff00');

        var blue = new BABYLON.StandardMaterial("blue", scene);
        blue.diffuseColor = new BABYLON.Color3.FromHexString('#0000ff');

        var orange = new BABYLON.StandardMaterial("orange", scene);
        orange.diffuseColor = new BABYLON.Color3.FromHexString('#ffa500');

        var white = new BABYLON.StandardMaterial("white", scene);
        white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

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
    }

    var placeCorners = [
        new BABYLON.Vector2(-5, -10),
        new BABYLON.Vector2(5, -10),
        new BABYLON.Vector2(5, -5),
        new BABYLON.Vector2(-5, -5)
    ];

    var planeBuilder = new BABYLON.PolygonMeshBuilder("hand", placeCorners, scene);
    var hand = planeBuilder.build(null, 0);
    hand.position.y = 0.01;

    var cardCorners = [
        new BABYLON.Vector2(2.5, -7),
        new BABYLON.Vector2(3.5, -7),
        new BABYLON.Vector2(3.5, -5.5),
        new BABYLON.Vector2(2.5, -5.5)    
    ];

    var largestArmy = PieceFactory.bigCard("largestArmy", scene);
    largestArmy.position.x = 3;
    largestArmy.position.z = -6;
    largestArmy.parent = pivot;

    var longestRoad = PieceFactory.bigCard("longestRoad", scene);
    longestRoad.position.x = 4.3;
    longestRoad.position.z = -6;
    longestRoad.parent = pivot;

    for (var i=0; i<woodNum; i++) {
        var wood = PieceFactory.smallCard("wood", scene);
        wood.position.x = -2.5;
        wood.position.z = -6 - i/25;
        wood.position.y = 0.02 + i/100;
        wood.enableEdgesRendering();
        wood.edgesWidth = 0.6;
        wood.parent = pivot;
        wood.material = darkgreen;
    }

    for (var i=0; i<stoneNum; i++) {
        var brick = PieceFactory.smallCard("brick", scene);
        brick.position.x = -1.5;
        brick.position.z = -6 - i/25;
        brick.position.y = 0.02 + i/100;
        brick.enableEdgesRendering();
        brick.edgesWidth = 0.6;
        brick.parent = pivot;
        brick.material = maroon;
    }

    for (var i=0; i<wheatNum; i++) {
        var wheat = PieceFactory.smallCard("wheat", scene);
        wheat.position.x = -0.5;
        wheat.position.z = -6 - i/25;
        wheat.position.y = 0.02 + i/100;
        wheat.enableEdgesRendering();
        wheat.edgesWidth = 0.6;
        wheat.parent = pivot;
        wheat.material = yellow;
    }

    for (var i=0; i<sheepNum; i++) {
        var sheep = PieceFactory.smallCard("sheep", scene);
        sheep.position.x = 0.5;
        sheep.position.z = -6 - i/25;
        sheep.position.y = 0.02 + i/100;
        sheep.enableEdgesRendering();
        sheep.edgesWidth = 0.6;
        sheep.parent = pivot;
        sheep.material = lightgreen;
    }

    for (var i=0; i<stoneNum; i++) {
        var stone = PieceFactory.smallCard("stone", scene);
        stone.position.x = 1.5;
        stone.position.z = -6 - i/25;
        stone.position.y = 0.02 + i/100;
        stone.enableEdgesRendering();
        stone.edgesWidth = 0.6;
        stone.parent = pivot;
        stone.material = gray;
    }

    for (var i=0; i<yopNum; i++) {
        var yop = PieceFactory.smallCard("yop", scene);
        yop.position.x = -4.3 + i/10;
        yop.position.z = -6;
        yop.position.y = 0.02 + i/100;
        yop.enableEdgesRendering();
        yop.edgesWidth = 0.6;
        yop.parent = pivot;
        yop.material = gray;
    }

    for (var i=0; i<monopolyNum; i++) {
        var monopoly = PieceFactory.smallCard("monopoly", scene);
        monopoly.position.x = -4.3 + i/10;
        monopoly.position.z = -7.5;
        monopoly.position.y = 0.02 + i/100;
        monopoly.enableEdgesRendering();
        monopoly.edgesWidth = 0.6;
        monopoly.parent = pivot;
        monopoly.material = gray;
    }

    for (var i=0; i<roadbNum; i++) {
        var roadbuilder = PieceFactory.smallCard("roadbuilder", scene);
        roadbuilder.position.x = -4.3 + i/10;
        roadbuilder.position.z = -9;
        roadbuilder.position.y = 0.02 + i/100;
        roadbuilder.enableEdgesRendering();
        roadbuilder.edgesWidth = 0.6;
        roadbuilder.parent = pivot;
        roadbuilder.material = gray;
    }

    for (var i=0; i<knightNum; i++) {
        var knight = PieceFactory.smallCard("knight", scene);
        knight.position.x = 1 + i/10;
        knight.position.z = -7.9;
        knight.position.y = 0.02 + i/100;
        knight.enableEdgesRendering();
        knight.edgesWidth = 0.6;
        knight.parent = pivot;
        knight.material = gray;
    }

    for (var i=0; i<victoryPtNum; i++) {
        var victory = PieceFactory.smallCard("victory", scene);
        victory.position.x = 1 + i/10;
        victory.position.z = -9;
        victory.position.y = 0.02 + i/100;
        victory.enableEdgesRendering();
        victory.edgesWidth = 0.6;
        victory.parent = pivot;
        victory.material = gray;
    }

    var pieces = [];

    for (var i=0; i<settlementsNum; i++) {
        var settlement = PieceFactory.settlement(scene);
        settlement.position.x = -2.5 + i/2;
        settlement.position.z = -7.5;
        settlement.parent = pivot;
        pieces.push(settlement);
    } 

    for (var i=0; i<citiesNum; i++) {
        var city = PieceFactory.city(scene);
        city.position.x = -2.5 + i/1.5;
        city.position.z = -8;
        city.parent = pivot;
        pieces.push(city);
    } 

    for (var i=0; i<roadsNum; i++) {
        var road = PieceFactory.road(scene);
        if (i < 5) {
            road.position.x = -2.5 + i/2;
            road.position.z = -8.5;
        }
        else if (i < 10) {
            road.position.x = -2.5 + i/2 - 2.5;
            road.position.z = -9;
        }
        else {
            road.position.x = -2.5 + i/2 - 5;
            road.position.z = -9.5;
        }
        road.parent = pivot;
        pieces.push(road);
    }

    if (loc === "south") {
        pieces.forEach( piece => piece.material=blue);
    } else if (loc === "north") {
        pieces.forEach( piece => piece.material=red);
        pivot.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD)
    } else if (loc === "west") {
        pieces.forEach( piece => piece.material=green);
        pivot.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD)
    } else if (loc=== "east") {
        pieces.forEach( piece => piece.material=orange);
        pivot.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.WORLD)
    }
};

export function buildUserHand(scene, game, user, loc) {

    console.log(game);
    console.log(user);

    var numResources = 21;

    var devCards = 9;

    var settlementsNum = 5;
    var citiesNum = 4;
    var roadsNum = 15;

    var pivot = new BABYLON.TransformNode("root");
    pivot.position = new BABYLON.Vector3(0, 0, 0); 

    // Colors
    {
        var red = new BABYLON.StandardMaterial("red", scene);
        red.diffuseColor = new BABYLON.Color3.FromHexString('#ff0000');

        var green = new BABYLON.StandardMaterial("green", scene);
        green.diffuseColor = new BABYLON.Color3.FromHexString('#00ff00');

        var blue = new BABYLON.StandardMaterial("blue", scene);
        blue.diffuseColor = new BABYLON.Color3.FromHexString('#0000ff');

        var orange = new BABYLON.StandardMaterial("orange", scene);
        orange.diffuseColor = new BABYLON.Color3.FromHexString('#ffa500');

        var white = new BABYLON.StandardMaterial("white", scene);
        white.diffuseColor = new BABYLON.Color3.FromHexString('#ffffff');

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
    }

    var placeCorners = [
        new BABYLON.Vector2(-5, -10),
        new BABYLON.Vector2(5, -10),
        new BABYLON.Vector2(5, -5),
        new BABYLON.Vector2(-5, -5)
    ];

    var planeBuilder = new BABYLON.PolygonMeshBuilder("hand", placeCorners, scene);
    var hand = planeBuilder.build(null, 0);
    hand.position.y = 0.01;

    var cardCorners = [
        new BABYLON.Vector2(2.5, -7),
        new BABYLON.Vector2(3.5, -7),
        new BABYLON.Vector2(3.5, -5.5),
        new BABYLON.Vector2(2.5, -5.5)    
    ];

    var largestArmy = PieceFactory.bigCard("largestArmy", scene);
    largestArmy.position.x = 3;
    largestArmy.position.z = -6;
    largestArmy.parent = pivot;

    var longestRoad = PieceFactory.bigCard("longestRoad", scene);
    longestRoad.position.x = 4.3;
    longestRoad.position.z = -6;
    longestRoad.parent = pivot;

    for (var i=0; i<woodNum; i++) {
        var wood = PieceFactory.smallCard("wood", scene);
        wood.position.x = -2.5;
        wood.position.z = -6 - i/25;
        wood.position.y = 0.02 + i/100;
        wood.enableEdgesRendering();
        wood.edgesWidth = 0.6;
        wood.parent = pivot;
        wood.material = darkgreen;
    }

    for (var i=0; i<stoneNum; i++) {
        var brick = PieceFactory.smallCard("brick", scene);
        brick.position.x = -1.5;
        brick.position.z = -6 - i/25;
        brick.position.y = 0.02 + i/100;
        brick.enableEdgesRendering();
        brick.edgesWidth = 0.6;
        brick.parent = pivot;
        brick.material = maroon;
    }

    for (var i=0; i<wheatNum; i++) {
        var wheat = PieceFactory.smallCard("wheat", scene);
        wheat.position.x = -0.5;
        wheat.position.z = -6 - i/25;
        wheat.position.y = 0.02 + i/100;
        wheat.enableEdgesRendering();
        wheat.edgesWidth = 0.6;
        wheat.parent = pivot;
        wheat.material = yellow;
    }

    for (var i=0; i<sheepNum; i++) {
        var sheep = PieceFactory.smallCard("sheep", scene);
        sheep.position.x = 0.5;
        sheep.position.z = -6 - i/25;
        sheep.position.y = 0.02 + i/100;
        sheep.enableEdgesRendering();
        sheep.edgesWidth = 0.6;
        sheep.parent = pivot;
        sheep.material = lightgreen;
    }

    for (var i=0; i<stoneNum; i++) {
        var stone = PieceFactory.smallCard("stone", scene);
        stone.position.x = 1.5;
        stone.position.z = -6 - i/25;
        stone.position.y = 0.02 + i/100;
        stone.enableEdgesRendering();
        stone.edgesWidth = 0.6;
        stone.parent = pivot;
        stone.material = gray;
    }

    for (var i=0; i<yopNum; i++) {
        var yop = PieceFactory.smallCard("yop", scene);
        yop.position.x = -4.3 + i/10;
        yop.position.z = -6;
        yop.position.y = 0.02 + i/100;
        yop.enableEdgesRendering();
        yop.edgesWidth = 0.6;
        yop.parent = pivot;
        yop.material = gray;
    }

    for (var i=0; i<monopolyNum; i++) {
        var monopoly = PieceFactory.smallCard("monopoly", scene);
        monopoly.position.x = -4.3 + i/10;
        monopoly.position.z = -7.5;
        monopoly.position.y = 0.02 + i/100;
        monopoly.enableEdgesRendering();
        monopoly.edgesWidth = 0.6;
        monopoly.parent = pivot;
        monopoly.material = gray;
    }

    for (var i=0; i<roadbNum; i++) {
        var roadbuilder = PieceFactory.smallCard("roadbuilder", scene);
        roadbuilder.position.x = -4.3 + i/10;
        roadbuilder.position.z = -9;
        roadbuilder.position.y = 0.02 + i/100;
        roadbuilder.enableEdgesRendering();
        roadbuilder.edgesWidth = 0.6;
        roadbuilder.parent = pivot;
        roadbuilder.material = gray;
    }

    for (var i=0; i<knightNum; i++) {
        var knight = PieceFactory.smallCard("knight", scene);
        knight.position.x = 1 + i/10;
        knight.position.z = -7.9;
        knight.position.y = 0.02 + i/100;
        knight.enableEdgesRendering();
        knight.edgesWidth = 0.6;
        knight.parent = pivot;
        knight.material = gray;
    }

    for (var i=0; i<victoryPtNum; i++) {
        var victory = PieceFactory.smallCard("victory", scene);
        victory.position.x = 1 + i/10;
        victory.position.z = -9;
        victory.position.y = 0.02 + i/100;
        victory.enableEdgesRendering();
        victory.edgesWidth = 0.6;
        victory.parent = pivot;
        victory.material = gray;
    }

    var pieces = [];

    for (var i=0; i<settlementsNum; i++) {
        var settlement = PieceFactory.settlement(scene);
        settlement.position.x = -2.5 + i/2;
        settlement.position.z = -7.5;
        settlement.parent = pivot;
        pieces.push(settlement);
    } 

    for (var i=0; i<citiesNum; i++) {
        var city = PieceFactory.city(scene);
        city.position.x = -2.5 + i/1.5;
        city.position.z = -8;
        city.parent = pivot;
        pieces.push(city);
    } 

    for (var i=0; i<roadsNum; i++) {
        var road = PieceFactory.road(scene);
        if (i < 5) {
            road.position.x = -2.5 + i/2;
            road.position.z = -8.5;
        }
        else if (i < 10) {
            road.position.x = -2.5 + i/2 - 2.5;
            road.position.z = -9;
        }
        else {
            road.position.x = -2.5 + i/2 - 5;
            road.position.z = -9.5;
        }
        road.parent = pivot;
        pieces.push(road);
    }

    if (loc === "south") {
        pieces.forEach( piece => piece.material=blue);
    } else if (loc === "north") {
        pieces.forEach( piece => piece.material=red);
        pivot.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.WORLD)
    } else if (loc === "west") {
        pieces.forEach( piece => piece.material=green);
        pivot.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD)
    } else if (loc=== "east") {
        pieces.forEach( piece => piece.material=orange);
        pivot.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.WORLD);
        hand.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.WORLD)
    }
};