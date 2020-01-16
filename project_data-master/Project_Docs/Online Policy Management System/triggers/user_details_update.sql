DROP TRIGGER IF EXISTS user_details_update;

DELIMITER $$
CREATE TRIGGER user_details_update
AFTER UPDATE ON customer_table
FOR EACH ROW
BEGIN
         UPDATE userdetails SET email=NEW.email WHERE email=OLD.email ;
END
$$
DELIMITER ;
