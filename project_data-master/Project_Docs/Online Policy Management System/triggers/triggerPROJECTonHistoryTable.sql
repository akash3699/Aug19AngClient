DROP TRIGGER IF EXISTS tr_premium;

DELIMITER $$
CREATE TRIGGER tr_premium 
AFTER DELETE ON premium_schedule
FOR EACH ROW
BEGIN
         INSERT into history_paid_premium(policy_id,cust_id, premium_id,paid_date,paid_time) VALUES(OLD.policy_id,OLD.cust_id,OLD.premium_id,CURDATE(),CURTIME());

	UPDATE customer_policy_details SET premium_count=premium_count+1 where policy_id=OLD.policy_id AND cust_id=OLD.cust_id;
END
$$
DELIMITER ;
