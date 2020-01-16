package com.app.controller;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Employee;
import com.app.service.IEmpService;

@RestController // @Controller + @ResponseBody
@RequestMapping("/employees") // resource oriented
@CrossOrigin // (origins="http://localhost:4200")
public class EmpController {
	@Autowired
	private IEmpService service;

	public EmpController() {
		System.out.println("in emp controller constr");
	}

	// request handling method for sending list of emps to REST clnt
	@GetMapping
	public ResponseEntity<?> getAllEmps() {
		System.out.println("in get all emps");
		List<Employee> list = service.getAllEmps();
		if (list.isEmpty())
			return new ResponseEntity<String>("No Emps ", NO_CONTENT);
		return new ResponseEntity<List<Employee>>(list, OK);
	}

	// request handling method for sending specific empdetails to REST clnt
	@GetMapping("/{emp_id}") // URI template variable
	// eg : http://host:port/test_web/employees/123
	public ResponseEntity<?> getEmpDtls(@PathVariable int emp_id) {
		System.out.println("in get emp dtls " + emp_id);
		Employee empDetails = service.getEmpDetails(emp_id);
		if (empDetails == null)
			return new ResponseEntity<String>("Emp not found...", NOT_FOUND);
		return new ResponseEntity<Employee>(empDetails, OK);

	}

	// request handling method creating emp
	@PostMapping("/add")
	public ResponseEntity<Employee> addNewEmp(@RequestParam String name, @RequestParam String address,
			@RequestParam(value = "image", required = false) MultipartFile image) {
		System.out.println("in add emp " + name + " " + address);

		Employee e = new Employee(name, address);
		try {
			if (image != null) {
				e.setImage(image.getBytes());
				return new ResponseEntity<Employee>(service.addEmpDetails(e), CREATED);

			}
		} catch (Exception e1) {
			return new ResponseEntity<Employee>(new Employee(), INTERNAL_SERVER_ERROR);
		}
		return null;
	}

	// request handling method to update emp details
	@PutMapping("/{empId}")
	public ResponseEntity<Employee> updateEmpDetails(@PathVariable int empId, @RequestParam String name, @RequestParam String address,
			@RequestParam(value = "image", required = false) MultipartFile image) {
		System.out.println("in update " + empId + " " +name+" "+address);
		Employee e = new Employee(name, address);
		e.setId(empId);
		try {
			if (image != null) {
				e.setImage(image.getBytes());
				return new ResponseEntity<Employee>(service.updateDetails(empId,e), CREATED);

			}
		} catch (Exception e1) {
			return new ResponseEntity<Employee>(new Employee(), INTERNAL_SERVER_ERROR);
		}
		return null;
	}

	// request handling method for deletion of emp
	@DeleteMapping("/{emp_id}")
	public void deleteEmp(@PathVariable int emp_id) {
		System.out.println("in del emp " + emp_id);

		service.deleteEmpInfo(emp_id);

	}

}
