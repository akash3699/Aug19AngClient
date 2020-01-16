package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Payments;

public interface IPaymentsDao extends JpaRepository<Payments, Integer>{

}
