package com.catan.Catan.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Size;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "Games")
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private int wood = 19;
	private int brick = 19;
	private int wheat = 19;
	private int sheep = 19;
	private int stone = 19;
	private int victoryCards = 5;
	private int knight = 14;
	private int roadBuilding = 2;
	private int monopoly = 2;
	private int yearOfPlenty = 2;
	
    @OneToMany(
            mappedBy = "game",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    @Fetch(FetchMode.SELECT)
    @BatchSize(size = 30)
    private List<UserStatus> userStatuses = new ArrayList<>();
    
    @OneToMany(
        mappedBy = "game",
        cascade = CascadeType.ALL,
        fetch = FetchType.EAGER,
        orphanRemoval = true
    )
    @Fetch(FetchMode.SELECT)
    @BatchSize(size = 30)
    private List<Node> nodes = new ArrayList<>();

    @OneToMany(
        mappedBy = "game",
        cascade = CascadeType.ALL,
        fetch = FetchType.EAGER,
        orphanRemoval = true
    )
    @Fetch(FetchMode.SELECT)
    @BatchSize(size = 30)
    private List<Hex> hexes = new ArrayList<>();
    
	public Long getId() {
		return id;
	}

	public int getWood() {
		return wood;
	}

	public void setWood(int wood) {
		this.wood = wood;
	}

	public int getBrick() {
		return brick;
	}

	public void setBrick(int brick) {
		this.brick = brick;
	}

	public int getWheat() {
		return wheat;
	}

	public void setWheat(int wheat) {
		this.wheat = wheat;
	}

	public int getSheep() {
		return sheep;
	}

	public void setSheep(int sheep) {
		this.sheep = sheep;
	}

	public int getStone() {
		return stone;
	}

	public void setStone(int stone) {
		this.stone = stone;
	}

	public int getVictoryCards() {
		return victoryCards;
	}

	public void setVictoryCards(int victoryCards) {
		this.victoryCards = victoryCards;
	}

	public int getKnight() {
		return knight;
	}

	public void setKnight(int knight) {
		this.knight = knight;
	}

	public int getRoadBuilding() {
		return roadBuilding;
	}

	public void setRoadBuilding(int roadBuilding) {
		this.roadBuilding = roadBuilding;
	}

	public int getMonopoly() {
		return monopoly;
	}

	public void setMonopoly(int monopoly) {
		this.monopoly = monopoly;
	}

	public int getYearOfPlenty() {
		return yearOfPlenty;
	}

	public void setyOP(int yearOfPlenty) {
		this.yearOfPlenty = yearOfPlenty;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<UserStatus> getUserStatuses() {
		return userStatuses;
	}

	public void setUserStatuses(List<UserStatus> userStatuses) {
		this.userStatuses = userStatuses;
	}

	public List<Node> getNodes() {
		return nodes;
	}

	public void setNodes(List<Node> nodes) {
		this.nodes = nodes;
	}
	
	public List<Hex> getHexes() {
		return hexes;
	}

	public void setHexes(List<Hex> hexes) {
		this.hexes = hexes;
	}
	
}
