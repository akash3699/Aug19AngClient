package com.app.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import com.app.demo.service.ITaxService;
import com.app.demo.service.TaxServiceImpl;

@RunWith(SpringRunner.class)
public class Demo1ApplicationTests {
	private ITaxService service=new TaxServiceImpl();

	@Test
	public void getTaxBracketTest(){
			String bracket=service.getTaxBracket(15000);
			assertEquals("MEDIUM", bracket);
			assertThat(bracket).isEqualTo("MEDIUM");
	}
	@Test
	public void allBracketsTest()
	{
		List<String> brackets=service.allBrackets();
		assertThat(brackets).isNotEmpty();
		assertThat(brackets).contains("LOW","MEDIUM","HIGH").doesNotContainNull();
	
	}

}
