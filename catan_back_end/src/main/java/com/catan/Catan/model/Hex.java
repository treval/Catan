package com.catan.Catan.model;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

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

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
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

	public boolean getThief() {
		return thief;
	}

	public void setThief(boolean thief) {
		this.thief = thief;
	}
	    
}
