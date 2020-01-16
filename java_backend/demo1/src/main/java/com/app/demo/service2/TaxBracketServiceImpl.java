package com.app.demo.service2;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TaxBracketServiceImpl implements ITaxBracketService {

	@Override
	public List<String> all() {
		return Arrays.asList("LOW", "MEDIUM", "HIGH","PREMIUM");
	}

}
