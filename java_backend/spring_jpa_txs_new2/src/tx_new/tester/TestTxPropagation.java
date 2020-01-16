package tx_new.tester;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import tx_new.model.*;
import tx_new.service.*;

public class TestTxPropagation {
	public static void main(String[] args) {
		try (ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("spring-config.xml")) {
			OuterBean testBean = (OuterBean) ctx.getBean("outerBeanImpl");

			User u = new User("Sameer");

			// testBean.testRequired(u);

			testBean.testRequiresNew(u);
		} catch (Exception e) {
			System.out.println("err in main " + e);
		}

	}
}
