DROP TRIGGER IF EXISTS user_details_insert;

DELIMITER $$
CREATE TRIGGER user_details_insert 
AFTER INSERT ON customer_table
FOR EACH ROW
BEGIN
        INSERT into userdetails(userid,email,roleid) VALUES(NEW.cust_id,NEW.email,1);
	INSERT into passdetails(userid,oldpass,newpass,changeon) VALUES(NEW.cust_id,123,12345,CURRENT_TIMESTAMP);
END
$$
DELIMITER ;
