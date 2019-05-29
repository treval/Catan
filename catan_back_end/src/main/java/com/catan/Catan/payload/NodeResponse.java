package com.catan.Catan.payload;

import java.util.List;

public class NodeResponse {

	private long id;
	private boolean settlement;
	private boolean city;
	private List<EdgeResponse> edges;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public boolean isSettlement() {
		return settlement;
	}
	public void setSettlement(boolean settlement) {
		this.settlement = settlement;
	}
	public boolean isCity() {
		return city;
	}
	public void setCity(boolean city) {
		this.city = city;
	}
	public List<EdgeResponse> getEdges() {
		return edges;
	}
	public void setEdges(List<EdgeResponse> edges) {
		this.edges = edges;
	}
	
}
