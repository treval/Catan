package com.catan.Catan.payload;

import java.util.List;

public class GameResponse {

	private Long id;
	private List<UserStatusResponse> userStatuses;
	private List<NodeResponse> nodes;
	private List<HexResponse> hexes;
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
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<UserStatusResponse> getUserStatuses() {
		return userStatuses;
	}
	public void setUserStatuses(List<UserStatusResponse> userStatuses) {
		this.userStatuses = userStatuses;
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
	public void setYearOfPlenty(int yearOfPlenty) {
		this.yearOfPlenty = yearOfPlenty;
	}
	public List<NodeResponse> getNodes() {
		return nodes;
	}
	public void setNodes(List<NodeResponse> nodes) {
		this.nodes = nodes;
	}

	public List<HexResponse> getHexes() {
		return this.hexes;
	}

	public void setHexes(List<HexResponse> hexes) {
		this.hexes = hexes;
	}
	
}
