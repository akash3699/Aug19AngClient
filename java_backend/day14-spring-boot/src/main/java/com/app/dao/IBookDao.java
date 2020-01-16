package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Books;



public interface IBookDao extends JpaRepository<Books, Integer> {

}
