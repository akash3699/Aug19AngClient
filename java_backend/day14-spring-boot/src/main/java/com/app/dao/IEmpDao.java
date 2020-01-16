package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Employee;

public interface IEmpDao extends JpaRepository<Employee, Integer>{
	

}
