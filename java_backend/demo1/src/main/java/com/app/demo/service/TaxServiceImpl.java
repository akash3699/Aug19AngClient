package com.app.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

//@Service
public class TaxServiceImpl implements ITaxService {

	@Override
	public String getTaxBracket(int income) {
		if (income < 10000)
			return "LOW";
		if (income < 20000)
			return "MEDIUM";
		return "HIGH";
	}

	@Override
	public List<String> allBrackets() {
		// TODO Auto-generated method stub
		return Arrays.asList("LOW", "MEDIUM", "HIGH");
	}

}
