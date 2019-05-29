package com.catan.Catan.payload;

public class UserStatusResponse {

	private long id;
	private long gameId;
	private long userId;
    private String color;
    private int victoryPoints = 0;
    private int wood = 0;
    private int brick = 0;
    private int wheat = 0;
    private int sheep = 0;
    private int stone = 0;
    private int settlements = 5;
    private int cities = 4;
    private int roads = 16;
    private int devVictory = 0;
    private int yearOfPlenty = 0;
    private int monopoly = 0;
    private int roadBuilder = 0;
    private int knights = 0;
    
	public long getGameId() {
		return gameId;
	}
	public void setGameId(long gameId) {
		this.gameId = gameId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getVictoryPoints() {
		return victoryPoints;
	}
	public void setVictoryPoints(int victoryPoints) {
		this.victoryPoints = victoryPoints;
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
	public int getSettlements() {
		return settlements;
	}
	public void setSettlements(int settlements) {
		this.settlements = settlements;
	}
	public int getCities() {
		return cities;
	}
	public void setCities(int cities) {
		this.cities = cities;
	}
	public int getRoads() {
		return roads;
	}
	public void setRoads(int roads) {
		this.roads = roads;
	}
	public int getDevVictory() {
		return devVictory;
	}
	public void setDevVictory(int devVictory) {
		this.devVictory = devVictory;
	}
	public int getYearOfPlenty() {
		return yearOfPlenty;
	}
	public void setYearOfPlenty(int yearOfPlenty) {
		this.yearOfPlenty = yearOfPlenty;
	}
	public int getMonopoly() {
		return monopoly;
	}
	public void setMonopoly(int monopoly) {
		this.monopoly = monopoly;
	}
	public int getRoadBuilder() {
		return roadBuilder;
	}
	public void setRoadBuilder(int roadBuilder) {
		this.roadBuilder = roadBuilder;
	}
	public int getKnights() {
		return knights;
	}
	public void setKnights(int knights) {
		this.knights = knights;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
}
