package com.devsup.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsup.dsmovie.dto.MovieDTO;
import com.devsup.dsmovie.dto.ScoreDTO;
import com.devsup.dsmovie.entities.Movie;
import com.devsup.dsmovie.entities.Score;
import com.devsup.dsmovie.entities.User;
import com.devsup.dsmovie.repositories.MovieRepo;
import com.devsup.dsmovie.repositories.ScoreRepo;
import com.devsup.dsmovie.repositories.UserRepo;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepo movierepo;
	
	@Autowired
	private UserRepo userrepo;
	
	@Autowired
	private ScoreRepo scorerepo;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userrepo.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userrepo.saveAndFlush(user);
		}
		
		Movie movie = movierepo.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scorerepo.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);

		movie.setCount(movie.getScores().size());
		
		movie = movierepo.save(movie);
		
		return new MovieDTO(movie);
		
	}
	
	
	
	

}
