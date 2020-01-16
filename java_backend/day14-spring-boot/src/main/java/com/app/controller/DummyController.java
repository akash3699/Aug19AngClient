package com.app.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dummy")
@CrossOrigin
public class DummyController {
	public DummyController() {
		System.out.println("in dummy constr");
	}
	@GetMapping
	public List<Integer> testMe()
	{
		return Arrays.asList(1,2,3,4);
	}
}
