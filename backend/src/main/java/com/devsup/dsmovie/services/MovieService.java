package com.devsup.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsup.dsmovie.dto.MovieDTO;
import com.devsup.dsmovie.entities.Movie;
import com.devsup.dsmovie.repositories.MovieRepo;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepo repo;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		
		Page<Movie> result = repo.findAll(pageable);
		Page<MovieDTO> Page = result.map(x -> new MovieDTO(x));
		return Page;
		
		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repo.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}

}
