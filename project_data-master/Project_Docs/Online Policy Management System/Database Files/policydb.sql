-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: policy_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_new_policy_details`
--

DROP TABLE IF EXISTS `add_new_policy_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_new_policy_details` (
  `policy_id` int(11) NOT NULL,
  `policy_name` varchar(45) DEFAULT NULL,
  `description` varchar(125) DEFAULT NULL,
  `years` int(11) DEFAULT NULL,
  `add_date` date DEFAULT NULL,
  `add_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_new_policy_details`
--

LOCK TABLES `add_new_policy_details` WRITE;
/*!40000 ALTER TABLE `add_new_policy_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `add_new_policy_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `claim_details`
--

DROP TABLE IF EXISTS `claim_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `claim_details` (
  `claim_id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_id` int(11) NOT NULL,
  `cust_id` int(11) DEFAULT NULL,
  `claim_status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`claim_id`,`policy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `claim_details`
--

LOCK TABLES `claim_details` WRITE;
/*!40000 ALTER TABLE `claim_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `claim_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_policy_details`
--

DROP TABLE IF EXISTS `customer_policy_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_policy_details` (
  `policy_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `pay_freq` int(11) DEFAULT NULL,
  `buy_date` date DEFAULT NULL,
  `premium_amt` int(11) DEFAULT NULL,
  `premium_count` int(11) DEFAULT NULL,
  `total_premium_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`policy_id`,`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_policy_details`
--

LOCK TABLES `customer_policy_details` WRITE;
/*!40000 ALTER TABLE `customer_policy_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_policy_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_table`
--

DROP TABLE IF EXISTS `customer_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_table` (
  `cust_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `nominee` varchar(45) DEFAULT NULL,
  `relation` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pan` varchar(45) DEFAULT NULL,
  `adhar_no` int(11) DEFAULT NULL,
  `customer_tablecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `pan_UNIQUE` (`pan`),
  UNIQUE KEY `adhar_no_UNIQUE` (`adhar_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_table`
--

LOCK TABLES `customer_table` WRITE;
/*!40000 ALTER TABLE `customer_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history_paid_premium`
--

DROP TABLE IF EXISTS `history_paid_premium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history_paid_premium` (
  `paid_premium_id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `premium_id` int(11) NOT NULL,
  `paid_date` date NOT NULL,
  `paid_time` varchar(45) NOT NULL,
  PRIMARY KEY (`paid_premium_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_paid_premium`
--

LOCK TABLES `history_paid_premium` WRITE;
/*!40000 ALTER TABLE `history_paid_premium` DISABLE KEYS */;
/*!40000 ALTER TABLE `history_paid_premium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otp`
--

DROP TABLE IF EXISTS `otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otp` (
  `userid` int(11) NOT NULL,
  `timestamp` timestamp(1) NULL DEFAULT NULL,
  `otp` int(11) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otp`
--

LOCK TABLES `otp` WRITE;
/*!40000 ALTER TABLE `otp` DISABLE KEYS */;
/*!40000 ALTER TABLE `otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passdetails`
--

DROP TABLE IF EXISTS `passdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passdetails` (
  `userid` int(11) NOT NULL,
  `pass` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passdetails`
--

LOCK TABLES `passdetails` WRITE;
/*!40000 ALTER TABLE `passdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `passdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `premium_schedule`
--

DROP TABLE IF EXISTS `premium_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `premium_schedule` (
  `premium_id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `premium_date` date NOT NULL,
  PRIMARY KEY (`premium_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `premium_schedule`
--

LOCK TABLES `premium_schedule` WRITE;
/*!40000 ALTER TABLE `premium_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `premium_schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_premium` AFTER DELETE ON `premium_schedule` FOR EACH ROW BEGIN
         INSERT into history_paid_premium(policy_id,cust_id, premium_id,paid_date,paid_time) VALUES(OLD.policy_id,OLD.cust_id,OLD.premium_id,CURDATE(),CURTIME());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `roleid` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`roleid`),
  UNIQUE KEY `role_UNIQUE` (`role`),
  UNIQUE KEY `roleid_UNIQUE` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdetails`
--

DROP TABLE IF EXISTS `userdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdetails` (
  `userid` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `roleid` varchar(45) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `roleid_UNIQUE` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetails`
--

LOCK TABLES `userdetails` WRITE;
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `userdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-08 18:41:11
