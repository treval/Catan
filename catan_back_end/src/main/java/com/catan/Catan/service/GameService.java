package com.catan.Catan.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catan.Catan.exception.ResourceNotFoundException;
import com.catan.Catan.model.Game;
import com.catan.Catan.model.Hex;
import com.catan.Catan.model.Node;
import com.catan.Catan.model.UserStatus;
import com.catan.Catan.payload.GameRequest;
import com.catan.Catan.payload.GameResponse;
import com.catan.Catan.payload.HexResponse;
import com.catan.Catan.payload.NodeResponse;
import com.catan.Catan.payload.UserStatusResponse;
import com.catan.Catan.repository.GameRepository;
import com.catan.Catan.repository.UserRepository;

@Service
public class GameService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
    private static final Logger logger = LoggerFactory.getLogger(GameService.class);
    
	public GameResponse getGameById(Long gameId) {
		Game game = gameRepository.findById(gameId).orElseThrow(
				() -> new ResourceNotFoundException("Game", "id", gameId));
		
		GameResponse res = new GameResponse();
		res.setId(game.getId());
		
		List<UserStatusResponse> userStatuses = new ArrayList<>();
		
		for (int i = 0; i < game.getUserStatuses().size(); i++) {
			UserStatus status = game.getUserStatuses().get(i);
			UserStatusResponse statusRes = new UserStatusResponse();
			statusRes.setGameId(status.getGame().getId());
			statusRes.setUserId(status.getUser().getId());
			statusRes.setId(status.getId());
			statusRes.setBrick(status.getBrick());
			statusRes.setCities(status.getCities());
			userStatuses.add(statusRes);
		}
		
		res.setUserStatuses(userStatuses);

		List<HexResponse> hexes = new ArrayList<>();

		for (int i = 0; i < game.getHexes().size(); i++) {
			
			Hex hex = game.getHexes().get(i);
			HexResponse hexRes = new HexResponse();
			
			hexRes.setId(hex.getId());
			hexRes.setGameId(hex.getGame().getId());
			hexRes.setProbability(hex.getProbability());
			hexRes.setResource(hex.getResource());
			hexRes.setThief(hexRes.isThief());
			
			hexes.add(hexRes);
		}

		res.setHexes(hexes);
		
		List<NodeResponse> nodes = new ArrayList<>();

		for (int i=0; i < game.getNodes().size(); i++) {

			Node node = game.getNodes().get(i);
			NodeResponse nodeRes = new NodeResponse();

			nodeRes.setId(node.getId());
			nodeRes.setGameId(node.getGame().getId());
			
			nodeRes.settHexId(node.gettHexId());
			nodeRes.setbHexId(node.getbHexId());
			nodeRes.setlHexId(node.getlHexId());
			nodeRes.setrHexId(node.getrHexId());

			nodes.add(nodeRes);
		}

		res.setNodes(nodes);

		return res;
	}
    
    public Game createGame(GameRequest gameRequest) {
    	Game game = new Game();
    	
    	List<UserStatus> userStatuses = new ArrayList<>();

    	for (int i = 0; i < gameRequest.getUsernames().size(); i++) {
    		UserStatus userStatus = new UserStatus();
    		userStatus.setGame(game);
    		userStatus.setUser(userRepository.findByUsername(gameRequest.getUsernames().get(i).getUsername()).get());
    		userStatuses.add(userStatus);
    	}
    	
    	game.setUserStatuses(userStatuses);

    	List<Hex> hexes = new ArrayList<>();

    	ArrayList<String> resources = new ArrayList<>(Arrays.asList(
				"wood", "wood", "wood", "wood", 
				"brick", "brick", "brick",
				"wheat", "wheat", "wheat", "wheat",
				"sheep", "sheep", "sheep", "sheep",
				"stone", "stone", "stone",
				"desert"));
		Collections.shuffle(resources);
		
		ArrayList<Integer> probs = new ArrayList<>(Arrays.asList(
				2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 0));
		
		Collections.shuffle(probs);
    	
    	for (int i = 0; i < 19; i++) {
    		Hex hex = new Hex();
    		hex.setResource(resources.get(i));
    		hex.setThief(false);
    		hex.setProbability(probs.get(i));
    		hex.setGame(game);
    		hexes.add(hex);
    	}
    	
    	Hex desert = null;
    	int probSwitch = -1;
    	
    	for (int i = 0; i < hexes.size(); i++) {	
    		if (hexes.get(i).getResource().equals("desert")) 
    			desert = hexes.get(i);	
    	}
    	
    	if (desert.getProbability() != 0) {
    		probSwitch = desert.getProbability();
    		desert.setProbability(0);
    	}
    	
    	for (int i = 0; i < hexes.size(); i++) {
    		Hex hex = hexes.get(i);
    		if (!hex.getResource().equals("desert") && hex.getProbability()==0) {
    			hex.setProbability(probSwitch);
    		} else if (hex.getResource().equals("desert")) 
                hex.setThief(true);
    	}

    	game.setHexes(hexes);

    	List<Node> nodes = new ArrayList<>();
    	
    	for (int i = 0; i < 53; i++) {
    		Node node = new Node();
    		node.setGame(game);
    		node.setSettlement(false);

    		nodes.add(node);
    	}

    	nodes.get(0).setrHexId(new Long(0));
    	nodes.get(1).setbHexId(new Long(0));
    	nodes.get(2).setlHexId(new Long(0));
    	nodes.get(2).setrHexId(new Long(0));
    	nodes.get(3).setbHexId(new Long(1));
    	nodes.get(4).setlHexId(new Long(1));
    	nodes.get(4).setrHexId(new Long(2));
    	nodes.get(5).setbHexId(new Long(2));    	
    	nodes.get(6).setrHexId(new Long(2));
    	

    	
    	game.setNodes(nodes);
    	
		return gameRepository.save(game);
    }


    
}
