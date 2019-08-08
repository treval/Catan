import { buildHex } from './Hex.js';
import { buildEdge } from './Edge.js';
import { buildNode } from './Node.js';

export function mapBoard(game, scene) {

	var hexes = game.hexes;
	var nodes = game.nodes;

	var yTransform = 0.87;
	buildHex(-1, 2*yTransform, hexes[0], scene);
	buildHex(0, 2*yTransform, hexes[1], scene);
	buildHex(1, 2*yTransform, hexes[2], scene);

	buildHex(-1.5, 1*yTransform, hexes[3], scene);
	buildHex(-0.5, 1*yTransform, hexes[4], scene);
	buildHex(0.5, 1*yTransform, hexes[5], scene);
	buildHex(1.5, 1*yTransform, hexes[6], scene);

	buildHex(-2, 0, hexes[7], scene);
	buildHex(-1, 0, hexes[8], scene);
	buildHex(0, 0, hexes[9], scene);
	buildHex(1, 0, hexes[10], scene);
	buildHex(2, 0, hexes[11], scene);

	buildHex(-1.5, -1*yTransform, hexes[12], scene);
	buildHex(-0.5, -1*yTransform, hexes[13], scene);
	buildHex(0.5, -1*yTransform, hexes[14], scene);
	buildHex(1.5, -1*yTransform, hexes[15], scene);

	buildHex(-1, -2*yTransform, hexes[16], scene);
	buildHex(0, -2*yTransform, hexes[17], scene);
	buildHex(1, -2*yTransform, hexes[18], scene);

	yTransform = 0.85;
	var yShift = -1.2;
	buildNode(-1.5, 4*yTransform+yShift-0.2, {rH: hexes[0]}, scene);
	buildNode(-1, 4*yTransform+yShift, {bH: hexes[0]}, scene);
	buildNode(-0.5, 4*yTransform+yShift-0.2, {lH: hexes[0], rH: hexes[1]}, scene);
	buildNode(0, 4*yTransform+yShift, {bH: hexes[1]}, scene);
	buildNode(0.5, 4*yTransform+yShift-0.2, {lH: hexes[1], rH: hexes[2]}, scene);
	buildNode(1, 4*yTransform+yShift, {bH: hexes[2]}, scene);
	buildNode(1.5, 4*yTransform+yShift-0.2, {lH: hexes[2]}, scene);

	buildNode(-2, 3*yTransform+yShift-0.2, {rH: hexes[3]}, scene);
	buildNode(-1.5, 3*yTransform+yShift, {bH: hexes[3], lH: hexes[0]}, scene);
	buildNode(-1, 3*yTransform+yShift-0.2, {tH: hexes[0], lH: hexes[3], rH: hexes[4]}, scene);
	buildNode(-0.5, 3*yTransform+yShift, {bH: hexes[4], lH: hexes[0], rH: hexes[1]}, scene);
	buildNode(0, 3*yTransform+yShift-0.2, {tH: hexes[1], lH: hexes[4], rH: hexes[4]}, scene);
	buildNode(0.5, 3*yTransform+yShift, {bH: hexes[5], lH: hexes[1], rH: hexes[2]}, scene);
	buildNode(1, 3*yTransform+yShift-0.2, {tH: hexes[2], lH: hexes[5], rH: hexes[6]}, scene);
	buildNode(1.5, 3*yTransform+yShift, {bH: hexes[6], lH: hexes[2]}, scene);
	buildNode(2, 3*yTransform+yShift-0.2, {lH: hexes[6]}, scene);

	buildNode(-2.5, 2*yTransform+yShift-0.2, {}, scene);
	buildNode(-2, 2*yTransform+yShift, {}, scene);
	buildNode(-1.5, 2*yTransform+yShift-0.2, {}, scene);
	buildNode(-1, 2*yTransform+yShift, {}, scene);
	buildNode(-0.5, 2*yTransform+yShift-0.2, {}, scene);
	buildNode(0, 2*yTransform+yShift, {}, scene);
	buildNode(0.5, 2*yTransform+yShift-0.2, {}, scene);
	buildNode(1, 2*yTransform+yShift, {}, scene);
	buildNode(1.5, 2*yTransform+yShift-0.2, {}, scene);
	buildNode(2, 2*yTransform+yShift, {}, scene);
	buildNode(2.5, 2*yTransform+yShift-0.2, {}, scene);

	buildNode(-2.5, 1*yTransform+yShift, {}, scene);
	buildNode(-2, 1*yTransform+yShift-0.2, {}, scene);
	buildNode(-1.5, 1*yTransform+yShift, {}, scene);
	buildNode(-1, 1*yTransform+yShift-0.2, {}, scene);
	buildNode(-0.5, 1*yTransform+yShift, {}, scene);
	buildNode(0, 1*yTransform+yShift-0.2, {}, scene);
	buildNode(0.5, 1*yTransform+yShift, {}, scene);
	buildNode(1, 1*yTransform+yShift-0.2, {}, scene);
	buildNode(1.5, 1*yTransform+yShift, {}, scene);
	buildNode(2, 1*yTransform+yShift-0.2, {}, scene);

	buildNode(-2, 0*yTransform+yShift, {}, scene);
	buildNode(-1.5, 0*yTransform+yShift-0.2, {}, scene);
	buildNode(-1, 0*yTransform+yShift, {}, scene);
	buildNode(-0.5, 0*yTransform+yShift-0.2, {}, scene);
	buildNode(0, 0*yTransform+yShift, {}, scene);
	buildNode(0.5, 0*yTransform+yShift-0.2, {}, scene);
	buildNode(1, 0*yTransform+yShift, {}, scene);
	buildNode(1.5, 0*yTransform+yShift-0.2, {}, scene);
	buildNode(2, 0*yTransform+yShift, {}, scene);

	buildNode(-1.5, -1*yTransform+yShift, {}, scene);
	buildNode(-1, -1*yTransform+yShift-0.2, {}, scene);
	buildNode(-0.5, -1*yTransform+yShift, {}, scene);
	buildNode(0, -1*yTransform+yShift-0.2, {}, scene);
	buildNode(0.5, -1*yTransform+yShift, {}, scene);
	buildNode(1, -1*yTransform+yShift-0.2, {}, scene);
	buildNode(1.5, -1*yTransform+yShift, {}, scene);


/*
    //edges
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

   */

}