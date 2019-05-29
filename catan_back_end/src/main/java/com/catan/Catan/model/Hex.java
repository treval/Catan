package com.catan.Catan.model;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.*;



@Entity
@Table(name = "Hexes")
public class Hex {
  
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String resource;
	private int probability;
	private boolean thief;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "game_id", nullable = false)
	private Game game;
	
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JoinTable(name = "hex_nodes",
            joinColumns = @JoinColumn(name = "hex_id"),
            inverseJoinColumns = @JoinColumn(name = "node_id"))
    private Set<Node> nodes = new HashSet<>();
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "hex_edges",
            joinColumns = @JoinColumn(name = "hex_id"),
            inverseJoinColumns = @JoinColumn(name = "edge_id"))
    private Set<Edge> edges = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public Set<Node> getNodes() {
		return nodes;
	}

	public void setNodes(Set<Node> nodes) {
		this.nodes = nodes;
	}

	public Set<Edge> getEdges() {
		return edges;
	}

	public void setEdges(Set<Edge> edges) {
		this.edges = edges;
	}
    
}
