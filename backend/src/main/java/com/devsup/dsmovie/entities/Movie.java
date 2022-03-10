package com.devsup.dsmovie.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_movie")
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //tipos classe "Long" sempre maiusculo 
    //pois trabalha com o banco de dados melhor
    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;

    public Movie(){

    }

    public Movie(Long id, String title, Double score, Integer count, String image){
        this.id = id;
        this.title = title;
        this.score = score;
        this.count = count;
        this.image = image;
    }

    public Long getId(){
        return id;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public Double getScore(){
        return score;
    }

    public void setScore(Double score){
        this.score = score;
    }

    public Integer getCount(){
        return count;
    }

    public void setCount(Integer count){
        this.count = count;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image = image;
    }

}
