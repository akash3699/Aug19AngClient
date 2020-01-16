package com.app.service;

import java.util.List;

import com.app.pojos.Employee;

public interface IEmpService {
	List<Employee> getAllEmps();

	Employee getEmpDetails(int empId);

	Employee addEmpDetails(Employee e);
	Employee updateDetails(int empId,Employee e);
	void deleteEmpInfo(int empId);
}
