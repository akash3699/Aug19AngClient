package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IEmpDao;
import com.app.pojos.Employee;

@Service
@Transactional
public class EmpServiceImpl implements IEmpService {
	@Autowired
	private IEmpDao dao;

	@Override
	public List<Employee> getAllEmps() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Employee getEmpDetails(int empId) {
		// TODO Auto-generated method stub
		return dao.findById(empId).get();
	}

	@Override
	public Employee addEmpDetails(Employee e) {
		// TODO Auto-generated method stub
		Employee e1 = dao.save(e);
		return e1;
	}

	@Override
	public Employee updateDetails(int empId, Employee e) {
		// confirm if emp exists
		System.out.println(e);
		Employee e1 = dao.getOne(empId);
		 dao.save(e);
		 return e;

	}

	@Override
	public void deleteEmpInfo(int empId) {
		// confirm if emp exists
		dao.deleteById(empId);
		System.out.println("emp dtls deleted");
	}

}
