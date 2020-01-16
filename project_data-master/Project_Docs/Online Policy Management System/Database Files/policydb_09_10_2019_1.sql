CREATE DATABASE  IF NOT EXISTS `policydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `policydb`;
-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: policydb
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
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
  PRIMARY KEY (`claim_id`,`policy_id`),
  KEY `fk_claim_details_1_idx` (`policy_id`),
  KEY `fk_claim_details_2_idx` (`cust_id`),
  CONSTRAINT `fk_claim_details_1` FOREIGN KEY (`policy_id`) REFERENCES `add_new_policy_details` (`policy_id`),
  CONSTRAINT `fk_claim_details_2` FOREIGN KEY (`cust_id`) REFERENCES `customer_table` (`cust_id`)
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
  PRIMARY KEY (`policy_id`,`cust_id`),
  KEY `fk_customer_policy_details_2_idx` (`cust_id`),
  CONSTRAINT `fk_customer_policy_details_1` FOREIGN KEY (`policy_id`) REFERENCES `add_new_policy_details` (`policy_id`),
  CONSTRAINT `fk_customer_policy_details_2` FOREIGN KEY (`cust_id`) REFERENCES `customer_table` (`cust_id`)
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
  `gender` char(2) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `mobile` bigint(12) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pan` varchar(45) DEFAULT NULL,
  `adhar_no` bigint(15) DEFAULT NULL,
  `customer_tablecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `pan_UNIQUE` (`pan`),
  UNIQUE KEY `adhar_no_UNIQUE` (`adhar_no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_table`
--

LOCK TABLES `customer_table` WRITE;
/*!40000 ALTER TABLE `customer_table` DISABLE KEYS */;
INSERT INTO `customer_table` VALUES (1,'admin','admin','admin','1994-03-17','admin','admin','India','M',0,8149281827,'admin@yahoo.com','00000000000',7808624,''),(2,'shamli','dipak','Father','2001-12-14','satara','maharashtra','india','F',415002,96358741,'shamalimane94@gmail.com','0',454515,NULL),(3,'shreyash','raju','friend','1997-03-27','kokan','maharashtra','India','M',415110,1231234566,'shreyash@yahoomail.com','000',7894561,NULL);
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
  PRIMARY KEY (`paid_premium_id`),
  KEY `fk_history_paid_premium_1_idx` (`policy_id`),
  KEY `fk_history_paid_premium_2_idx` (`cust_id`),
  CONSTRAINT `fk_history_paid_premium_1` FOREIGN KEY (`policy_id`) REFERENCES `add_new_policy_details` (`policy_id`),
  CONSTRAINT `fk_history_paid_premium_2` FOREIGN KEY (`cust_id`) REFERENCES `customer_table` (`cust_id`)
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
  PRIMARY KEY (`userid`),
  CONSTRAINT `fk_otp_1` FOREIGN KEY (`userid`) REFERENCES `userdetails` (`userid`)
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
  `oldpass` varchar(45) NOT NULL,
  `newpass` varchar(45) NOT NULL,
  PRIMARY KEY (`userid`),
  CONSTRAINT `fk_passdetails_1` FOREIGN KEY (`userid`) REFERENCES `userdetails` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passdetails`
--

LOCK TABLES `passdetails` WRITE;
/*!40000 ALTER TABLE `passdetails` DISABLE KEYS */;
INSERT INTO `passdetails` VALUES (1,'123','12345'),(2,'123','12345'),(3,'123','12345');
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
  PRIMARY KEY (`premium_id`),
  KEY `fk_premium_schedule_1_idx` (`policy_id`),
  KEY `fk_premium_schedule_2_idx` (`cust_id`),
  CONSTRAINT `fk_premium_schedule_1` FOREIGN KEY (`policy_id`) REFERENCES `add_new_policy_details` (`policy_id`),
  CONSTRAINT `fk_premium_schedule_2` FOREIGN KEY (`cust_id`) REFERENCES `customer_table` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `premium_schedule`
--

LOCK TABLES `premium_schedule` WRITE;
/*!40000 ALTER TABLE `premium_schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `premium_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `roleid` int(11) NOT NULL,
  `role` varchar(10) NOT NULL,
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
INSERT INTO `role` VALUES (0,'Admin'),(1,'User');
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
  `roleid` int(11) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_userdetails_1_idx` (`roleid`),
  CONSTRAINT `fk_userdetails_1` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetails`
--

LOCK TABLES `userdetails` WRITE;
/*!40000 ALTER TABLE `userdetails` DISABLE KEYS */;
INSERT INTO `userdetails` VALUES (1,'admin@yahoo.com',0),(2,'shamalimane94@gmail.com',1),(3,'shreyash@yahoomail.com',1);
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

-- Dump completed on 2019-10-09 12:14:24
