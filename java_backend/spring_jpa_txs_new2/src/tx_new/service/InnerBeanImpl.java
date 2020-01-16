package tx_new.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;



@Service
public class InnerBeanImpl implements InnerBean {

	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public void testRequired() {
		throw new RuntimeException("Rollback this transaction!");
	}

	@Override
	@Transactional(propagation=Propagation.REQUIRES_NEW)
	public void testRequiresNew() {
		throw new RuntimeException("Rollback this transaction!");
	}

}
