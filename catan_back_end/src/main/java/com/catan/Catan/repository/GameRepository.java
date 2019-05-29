package com.catan.Catan.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.catan.Catan.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    @Override
	Optional<Game> findById(Long gameId);
    
    @Query("SELECT g FROM Game g JOIN g.userStatuses us where us.user.id = :userId")
    List<Game> findByUser(@Param("userId") Long userId);
}
