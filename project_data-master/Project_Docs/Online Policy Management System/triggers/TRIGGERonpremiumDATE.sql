DROP TRIGGER IF EXISTS tr_premium_schedule;

DELIMITER $$
CREATE TRIGGER tr_premium_schedule 
BEFORE INSERT ON customer_policy_details
FOR EACH ROW
BEGIN
	DECLARE v_date DATE;
	DECLARE v_years INT;
	DECLARE v_count INT;
	DECLARE v_freq INT;
	DECLARE v_total_count INT;
	SET v_count = 0;	
	SELECT years INTO v_years FROM add_new_policy_details WHERE policy_id=NEW.policy_id;
	SET v_freq = NEW.pay_freq;
	SET v_date = NEW.buy_date;
	
	CASE
	WHEN v_freq = 1 THEN
		WHILE v_count < v_years DO
	        			INSERT INTO premium_schedule(policy_id,cust_id,premium_date)VALUES(NEW.policy_id,NEW.cust_id,DATE_ADD(v_date,INTERVAL 365 DAY));
				SET v_date = DATE_ADD(v_date,INTERVAL 365 DAY);
				SET v_count = v_count + 1;
			END WHILE;
	WHEN v_freq = 30 THEN
			SET v_total_count=v_years*12;
			WHILE v_count < v_total_count DO
	        			INSERT INTO premium_schedule(policy_id,cust_id,premium_date)VALUES(NEW.policy_id,NEW.cust_id,DATE_ADD(v_date,INTERVAL 30 DAY));
				SET v_date = DATE_ADD(v_date,INTERVAL 30 DAY);
				SET v_count = v_count + 1;
			END WHILE;
	WHEN v_freq = 7  THEN
			SET v_total_count=v_years*52;
			WHILE v_count < v_total_count DO
        			INSERT INTO premium_schedule(policy_id,cust_id,premium_date)VALUES(NEW.policy_id,NEW.cust_id,DATE_ADD(v_date,INTERVAL 7 DAY));
				SET v_date = DATE_ADD(v_date,INTERVAL 7 DAY);
				SET v_count = v_count + 1;
			END WHILE;
		
	END CASE;
END;
$$
DELIMITER ;
