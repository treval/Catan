package com.catan.Catan.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catan.Catan.exception.ResourceNotFoundException;
import com.catan.Catan.model.Edge;
import com.catan.Catan.model.Game;
import com.catan.Catan.model.Hex;
import com.catan.Catan.model.Node;
import com.catan.Catan.model.UserStatus;
import com.catan.Catan.payload.EdgeResponse;
import com.catan.Catan.payload.GameRequest;
import com.catan.Catan.payload.GameResponse;
import com.catan.Catan.payload.HexResponse;
import com.catan.Catan.payload.NodeResponse;
import com.catan.Catan.payload.UserStatusResponse;
import com.catan.Catan.repository.GameRepository;
import com.catan.Catan.repository.UserRepository;
import com.catan.Catan.utils.HelperFunctions;

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
		List<HexResponse> hexes = new ArrayList<>();
		
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
		
		for (int i = 0; i < game.getHexes().size(); i++) {
			
			Hex hex = game.getHexes().get(i);
			HexResponse hexRes = new HexResponse();
			
			hexRes.setId(hex.getId());
			hexRes.setGameId(hex.getGame().getId());
			hexRes.setProbability(hex.getProbability());
			hexRes.setResource(hex.getResource());
			hexRes.setThief(hexRes.isThief());
			
			List<NodeResponse> hexNodes = new ArrayList<>();
			Set<Node> nodes = hex.getNodes();
			for (int j=0; j<nodes.size(); j++) {
				NodeResponse nodeRes = new NodeResponse();
				
				List<Node> nodeList = new ArrayList<Node>();
				nodeList.addAll(nodes);
				Node node = nodeList.get(j);
				
				nodeRes.setSettlement(node.isSettlement());
				nodeRes.setCity(node.isCity());
				nodeRes.setId(node.getId());
				
				Set<Edge> edges = node.getEdges();
				List<EdgeResponse> nodeEdges = new ArrayList<>();
				for (int k=0; k<edges.size(); k++) {
					EdgeResponse edgeRes = new EdgeResponse();
					
					List<Edge> edgeList = new ArrayList<Edge>();
					edgeList.addAll(edges);
					Edge edge = edgeList.get(k);
					
					edgeRes.setId(edge.getId());
					edgeRes.setRoad(edge.isRoad());
					
					nodeEdges.add(edgeRes);
				}
				nodeRes.setEdges(nodeEdges);
				
				hexNodes.add(nodeRes);
			}
			hexRes.setNodes(hexNodes);
			
			List<EdgeResponse> hexEdges = new ArrayList<>();
			Set<Edge> edges = hex.getEdges();
			for (int j=0; j<edges.size(); j++) {
				EdgeResponse edgeRes = new EdgeResponse();
				
				List<Edge> edgeList = new ArrayList<Edge>();
				edgeList.addAll(edges);
				Edge edge = edgeList.get(j);
				
				edgeRes.setRoad(edge.isRoad());
				edgeRes.setId(edge.getId());
				hexEdges.add(edgeRes);
			}
			hexRes.setEdges(hexEdges);
			
			hexes.add(hexRes);
		}
		
		res.setUserStatuses(userStatuses);
		res.setHexes(hexes);
		
		return res;
	}
    
    public Game createGame(GameRequest gameRequest) {
    	Game game = new Game();
    	
    	List<UserStatus> userStatuses = new ArrayList<>();

    	// All of the hexes in the game.
    	List<Hex> hexes = new ArrayList<>();
    	// All of the nodes in the game... used to make smaller sets.
    	List<Node> nodes = new ArrayList<>();
    	// All of the edges in the game... used to make smaller sets.
    	List<Edge> edges = new ArrayList<>();
    
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
    		}
    	}
    	
    	for (int i = 0; i < 54; i++) {
    		Node node = new Node();
    		node.setSettlement(false);
    		node.setCity(false);
    		nodes.add(node);
    	}
    
    	for (int i = 0; i < 72; i++) {
    		edges.add(new Edge());
    	}
    	
    	for (int i = 0; i < gameRequest.getUsernames().size(); i++) {
    		UserStatus userStatus = new UserStatus();
    		userStatus.setGame(game);
    		userStatus.setUser(userRepository.findByUsername(gameRequest.getUsernames().get(i).getUsername()).get());
    		userStatuses.add(userStatus);
    	}
    	
    	hexes.get(0).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{0,1,2,3,4,5}));
    	hexes.get(1).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{2,6,7,8,9,3}));
    	hexes.get(2).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{7,10,11,12,13,8}));
    	hexes.get(3).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{14,5,4,15,16,17}));
    	hexes.get(4).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{4,3,9,18,19,15}));
    	hexes.get(5).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{9,8,13,20,21,18}));
    	hexes.get(6).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{13,12,22,23,24,20}));
    	hexes.get(7).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{17,18,26,27,28,25}));
    	hexes.get(8).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{16,15,19,29,30,26}));
    	hexes.get(9).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{19,18,21,31,32,29}));
    	hexes.get(10).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{21,20,24,33,34,31}));
    	hexes.get(11).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{24,23,35,36,37,33}));
    	hexes.get(12).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{38,27,26,30,39,40}));
    	hexes.get(13).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{30,31,32,40,42,39}));
    	hexes.get(14).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{44,41,32,31,34,43}));
    	hexes.get(15).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{33,34,37,45,46,43}));
    	hexes.get(16).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{47,40,39,42,49,48}));
    	hexes.get(17).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{49,42,41,44,51,50}));
    	hexes.get(18).setNodes(HelperFunctions.nodeSetCreator(nodes,new int[]{51,44,43,46,53,52}));
    	
    	hexes.get(0).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{0,1,2,3,4,5}));
    	hexes.get(1).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{6,7,8,9,10,3}));
    	hexes.get(2).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{11,12,13,14,15,8}));
    	hexes.get(3).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{16,17,5,18,19,20}));
    	hexes.get(4).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{18,4,10,21,22,23}));
    	hexes.get(5).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{21,9,15,24,25,26}));
    	hexes.get(6).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{24,14,27,28,29,30}));
    	hexes.get(7).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{31,20,32,33,34,35}));
    	hexes.get(8).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{32,19,23,36,37,38}));
    	hexes.get(9).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{36,22,26,39,40,41}));
    	hexes.get(10).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{39,25,30,42,43,44}));
    	hexes.get(11).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{42,29,45,46,47,48}));
    	hexes.get(12).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{49,33,38,50,51,52}));
    	hexes.get(13).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{50,37,41,53,54,55}));
    	hexes.get(14).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{53,40,44,56,57,58}));
    	hexes.get(15).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{56,43,48,59,60,61}));
    	hexes.get(16).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{62,51,55,63,64,65}));
    	hexes.get(17).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{63,54,58,66,67,68}));
    	hexes.get(18).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{66,57,61,69,70,71}));
    	
    	nodes.get(0).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{0,1}));
    	nodes.get(1).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{1,2}));
    	nodes.get(2).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{2,6}));
    	nodes.get(3).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{6,7}));
    	nodes.get(4).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{7,11}));
    	nodes.get(5).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{11,12}));
    	nodes.get(6).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{12,13}));
    	nodes.get(7).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{16,17}));
    	nodes.get(8).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{17,0,5}));
    	nodes.get(9).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{5,18,4}));
    	nodes.get(10).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{4,3,10}));
    	nodes.get(11).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{10,21,9}));
    	nodes.get(12).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{9,8,15}));
    	nodes.get(13).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{15,24,14}));
    	nodes.get(14).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{14,13,27}));
    	nodes.get(15).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{27,28}));
    	nodes.get(16).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{31,35}));
    	nodes.get(17).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{31,16,20}));
    	nodes.get(18).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{20,32,19}));
    	nodes.get(19).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{19,18,23}));
    	nodes.get(20).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{23,36,22}));
    	nodes.get(21).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{22,21,26}));
    	nodes.get(22).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{26,39,25}));
    	nodes.get(23).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{25,24,30}));
    	nodes.get(24).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{30,42,29}));
    	nodes.get(25).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{29,28,45}));
    	nodes.get(26).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{45,46}));
    	nodes.get(27).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{35,34}));
    	nodes.get(28).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{34,49,33}));
    	nodes.get(29).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{33,32,38}));
    	nodes.get(30).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{38,50,37}));
    	nodes.get(31).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{37,36,41}));
    	nodes.get(32).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{41,53,40}));
    	nodes.get(33).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{40,39,44}));
    	nodes.get(34).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{44,56,43}));
    	nodes.get(35).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{43,42,48}));
    	nodes.get(36).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{48,59,47}));
    	nodes.get(37).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{47,46}));
    	nodes.get(38).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{49,52}));
    	nodes.get(39).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{62,52,51}));
    	nodes.get(40).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{51,50,55}));
    	nodes.get(41).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{55,63,54}));
    	nodes.get(42).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{54,53,58}));
    	nodes.get(43).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{58,66,57}));
    	nodes.get(44).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{57,56,61}));
    	nodes.get(45).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{61,69,60}));
    	nodes.get(46).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{60,59}));
    	nodes.get(47).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{62,65}));
    	nodes.get(48).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{65,64}));
    	nodes.get(49).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{64,68}));
    	nodes.get(50).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{68,67}));
    	nodes.get(51).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{67,71}));
    	nodes.get(52).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{71,70}));
    	nodes.get(53).setEdges(HelperFunctions.edgeSetCreator(edges, new int[]{70,69}));
    	
    	game.setUserStatuses(userStatuses);
    	game.setHexes(hexes);
    	
		return gameRepository.save(game);
    }


    
}
