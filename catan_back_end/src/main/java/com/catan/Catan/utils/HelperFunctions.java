package com.catan.Catan.utils;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.catan.Catan.model.Edge;
import com.catan.Catan.model.Node;

public class HelperFunctions {

	public static Set<Node> nodeSetCreator(List<Node> gameNodes, int[] setNodesIdx) {
		Set<Node> nodeSet = new HashSet<>();
		for (int i=0; i<setNodesIdx.length; i++) {
			nodeSet.add(gameNodes.get(setNodesIdx[i]));
		}
		return nodeSet;
	}
	
	public static Set<Edge> edgeSetCreator(List<Edge> gameEdges, int[] setEdgeIdx) {
		Set<Edge> edgeSet = new HashSet<>();
		for (int i=0; i<setEdgeIdx.length; i++) {
			edgeSet.add(gameEdges.get(setEdgeIdx[i]));
		}
		return edgeSet;
	}
}
