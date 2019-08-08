package com.catan.Catan.payload;

import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import com.catan.Catan.model.Hex;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class NodeResponse {

	private long id;
	private long gameId;
	
	private Long tHexId;
	private Long bHexId;
	private Long lHexId;
	private Long rHexId;
	
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

	public boolean isSettlement() {
		return settlement;
	}

	public void setSettlement(boolean settlement) {
		this.settlement = settlement;
	}

	private boolean settlement; 
	
}
