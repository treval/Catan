package com.catan.Catan.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.catan.Catan.model.Game;
import com.catan.Catan.model.UserStatus;
import com.catan.Catan.payload.ApiResponse;
import com.catan.Catan.payload.GameListResponse;
import com.catan.Catan.payload.GameRequest;
import com.catan.Catan.payload.GameResponse;
import com.catan.Catan.repository.GameRepository;
import com.catan.Catan.repository.UserRepository;
import com.catan.Catan.service.GameService;


@RestController
@RequestMapping("/api/games")
public class GameController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private GameService gameService;
	
    private static final Logger logger = LoggerFactory.getLogger(GameController.class);

    @GetMapping("/user/{userId}")
    public GameListResponse getGameByUser(@PathVariable long userId) {
		List<Game> games = gameRepository.findByUser(userId);
		GameListResponse gameList = new GameListResponse();
		
		List<Long> ids = new ArrayList<>();
		List<List<String>> usernames = new ArrayList<>();
		for (int i=0; i<games.size(); i++) {
			Game game = games.get(i);
			ids.add(game.getId());
			List<UserStatus> userStatuses = game.getUserStatuses();
			List<String> users = new ArrayList<>();
			for (int j=0; j<userStatuses.size(); j++) {
				UserStatus user = userStatuses.get(j);
				users.add(user.getUser().getUsername());
			}
			usernames.add(users);
		}
		
		gameList.setIds(ids);
		gameList.setUsers(usernames);
		
		return gameList;
    }
    
    @GetMapping("/{gameId}")
    public GameResponse getGameById(@PathVariable Long gameId) {
        return gameService.getGameById(gameId);
    }
    
	@PostMapping
	public ResponseEntity<?> createGame(@Valid @RequestBody GameRequest gameRequest) {
		Game game = gameService.createGame(gameRequest);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{gameId}")
				.buildAndExpand(game.getId()).toUri();
		
		return ResponseEntity.created(location)
				.body(new ApiResponse(true, "Game Created Successfully"));
		
	}
	
}
