package com.catan.Catan.payload;

import java.util.List;

public class GameListResponse {

	private List<Long> ids;
	private List<List<String>> users;
	
	public List<Long> getIds() {
		return ids;
	}
	public void setIds(List<Long> ids) {
		this.ids = ids;
	}
	public List<List<String>> getUsers() {
		return users;
	}
	public void setUsers(List<List<String>> users) {
		this.users = users;
	}

}
