package com.devsup.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.dsmovie.entities.Score;
import com.devsup.dsmovie.entities.ScorePK;


public interface ScoreRepo extends JpaRepository<Score, ScorePK> {

}