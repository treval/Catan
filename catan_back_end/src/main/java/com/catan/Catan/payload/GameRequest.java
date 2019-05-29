package com.catan.Catan.payload;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.catan.Catan.model.User;

public class GameRequest {

	private List <UserRegistryRequest> usernames;

	public List<UserRegistryRequest> getUsernames() {
		return usernames;
	}

	public void setUsers(List<UserRegistryRequest> usernames) {
		this.usernames = usernames;
	}
	
}
