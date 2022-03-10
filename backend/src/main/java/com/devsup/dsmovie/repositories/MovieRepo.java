package com.devsup.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.dsmovie.entities.Movie;



public interface MovieRepo extends JpaRepository<Movie, Long> {
	
}
