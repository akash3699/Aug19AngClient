package tx_new.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import tx_new.model.*;

@Repository
public class TestDAOImpl implements TestDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void insertUser(User user) {
		sessionFactory.getCurrentSession().save(user);
	}

}
