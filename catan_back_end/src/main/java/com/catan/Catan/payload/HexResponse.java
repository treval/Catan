package com.catan.Catan.payload;

import java.util.List;

public class HexResponse {

	private long id;
	private long gameId;
	private String resource;
	private int probability;
	private boolean thief;
	private List<NodeResponse> nodes;
	private List<EdgeResponse> edges;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getGameId() {
		return gameId;
	}
	public void setGameId(long gameId) {
		this.gameId = gameId;
	}
	public String getResource() {
		return resource;
	}
	public void setResource(String resource) {
		this.resource = resource;
	}
	public int getProbability() {
		return probability;
	}
	public void setProbability(int probability) {
		this.probability = probability;
	}
	public boolean isThief() {
		return thief;
	}
	public void setThief(boolean thief) {
		this.thief = thief;
	}
	public List<NodeResponse> getNodes() {
		return nodes;
	}
	public void setNodes(List<NodeResponse> nodes) {
		this.nodes = nodes;
	}
	public List<EdgeResponse> getEdges() {
		return edges;
	}
	public void setEdges(List<EdgeResponse> edges) {
		this.edges = edges;
	}
	
}
