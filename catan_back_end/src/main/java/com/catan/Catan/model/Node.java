package com.catan.Catan.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "Nodes")
public class Node {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private boolean settlement;
	private boolean city;
	
    @ManyToMany(fetch = FetchType.LAZY,
    		cascade = CascadeType.ALL)
    @JoinTable(name = "node_edges",
            joinColumns = @JoinColumn(name = "node_id"),
            inverseJoinColumns = @JoinColumn(name = "edge_id"))
    private Set<Edge> edges = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	public Set<Edge> getEdges() {
		return edges;
	}

	public void setEdges(Set<Edge> edges) {
		this.edges = edges;
	}
 
}
