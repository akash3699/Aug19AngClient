package com.app.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
	@GetMapping("/greet")
	public String greeting(@RequestParam String name,@RequestParam(required=false,defaultValue="Day") String time)
	{
		return "Good " +time +" "+name;
	}
	@GetMapping("/test/{course_id}/courses/{s_id}")
	public String test1(@PathVariable int course_id,@PathVariable int s_id)
	{
		return "Fetching Course "+course_id+" Student "+s_id;
	}
	@GetMapping("/test2")
	public String test2(@RequestHeader(value="Cookie",required=false,defaultValue="No Cookie set") String cookie,@RequestHeader(value="Host") String host)
	{
		return "Cookie " +cookie+" Host "+host;
	}

}
