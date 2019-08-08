package com.catan.Catan.model;

import java.util.HashSet;
import java.util.ArrayList;
import java.util.List;

import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "Nodes")
public class Node {
  
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private boolean settlement; 
	
	private Long tHexId;
	private Long bHexId;
	private Long lHexId;
	private Long rHexId;
    

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "game_id", nullable = false)
	private Game game;


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


	public Long gettHexId() {
		return tHexId;
	}


	public void settHexId(Long tHexId) {
		this.tHexId = tHexId;
	}


	public Long getbHexId() {
		return bHexId;
	}


	public void setbHexId(Long bHexId) {
		this.bHexId = bHexId;
	}


	public Long getlHexId() {
		return lHexId;
	}


	public void setlHexId(Long lHexId) {
		this.lHexId = lHexId;
	}


	public Long getrHexId() {
		return rHexId;
	}


	public void setrHexId(Long rHexId) {
		this.rHexId = rHexId;
	}


	public Game getGame() {
		return game;
	}


	public void setGame(Game game) {
		this.game = game;
	}

	
}
