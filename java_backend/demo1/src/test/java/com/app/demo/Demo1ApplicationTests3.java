package com.app.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.app.demo.service2.ITaxService;
import com.app.demo.service2.TaxBracketServiceImpl;
import com.app.demo.service2.TaxServiceImpl;

@RunWith(SpringRunner.class)
//@SpringBootTest //tells SC to start application ctx , loading all spring beans --can be slow
//can't specify i/f names here , have to supply impl class names.
@ContextConfiguration(classes = { TaxServiceImpl.class, TaxBracketServiceImpl.class })

public class Demo1ApplicationTests3 {
	@Autowired
	private ITaxService service;

	@Test
	public void getTaxBracketTest() {
		String bracket = service.getTaxBracket(15000);
		assertEquals("MEDIUM", bracket);
		assertThat(bracket).isEqualTo("MEDIUM");
	}

	@Test
	public void allBracketsTest() {
		List<String> brackets = service.allBrackets();
		assertThat(brackets).isNotEmpty();
		assertThat(brackets).contains("PREMIUM").doesNotContainNull();

	}

}
