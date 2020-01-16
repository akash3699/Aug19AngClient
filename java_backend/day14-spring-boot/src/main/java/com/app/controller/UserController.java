package com.app.controller;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Employee;
import com.app.pojos.Users;
import com.app.service.IUsersService;

@RestController // @Controller + @ResponseBody
@RequestMapping("/Users") // resource oriented
@CrossOrigin
public class UserController {

	@Autowired
	private IUsersService service;

	public UserController() {
	System.out.println("in user controller");
	}
	
	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		System.out.println("in get all emps");
		List<Users> list = service.getAllUsers();
		if (list.isEmpty())
			return new ResponseEntity<String>("No Emps ", NO_CONTENT);
		return new ResponseEntity<List<Users>>(list, OK);
	}
	
	
	@GetMapping("/{emailid}")
	public ResponseEntity<?> getUser(@PathVariable String emailid) {
		System.out.println("in get users");
		Users u1= service.isValid(emailid);
		System.out.println(u1);
//		if (u1.getEmail()!=null)
//			return new ResponseEntity<String>("No Emps ", NO_CONTENT);
		return new ResponseEntity<Users>(u1, OK);
	}
	
	@PostMapping
	public ResponseEntity<?> AddUser(@RequestBody Users u) {
		System.out.println("in get users");
		String result= service.AddUserDetails(u);
		System.out.println(result);
//		if (u1.getEmail()!=null)
//			return new ResponseEntity<String>("No Emps ", NO_CONTENT);
		return new ResponseEntity<String>(result, OK);
	}
}
