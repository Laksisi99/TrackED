-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: trackedu
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `academic_staff`
--

DROP TABLE IF EXISTS `academic_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `academic_staff` (
  `Staff_ID` int NOT NULL AUTO_INCREMENT,
  `Staff_Name` varchar(50) NOT NULL,
  `Staff_Email` varchar(100) NOT NULL,
  `Staff_Contact_Number` varchar(15) DEFAULT NULL,
  `NIC` varchar(15) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Staff_ID`),
  UNIQUE KEY `Staff_Email` (`Staff_Email`),
  UNIQUE KEY `NIC` (`NIC`),
  UNIQUE KEY `Password_UNIQUE` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic_staff`
--

LOCK TABLES `academic_staff` WRITE;
/*!40000 ALTER TABLE `academic_staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `academic_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `Admin_ID` int NOT NULL AUTO_INCREMENT,
  `Admin_Name` varchar(50) NOT NULL,
  `Admin_Email` varchar(100) NOT NULL,
  `Admin_Password` varchar(100) NOT NULL,
  PRIMARY KEY (`Admin_ID`),
  UNIQUE KEY `Admin_Email` (`Admin_Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batches` (
  `Batch_ID` int NOT NULL AUTO_INCREMENT,
  `Batch_Start_Year` int NOT NULL,
  `Batch_End_Year` int NOT NULL,
  `Batch_Code` varchar(20) NOT NULL,
  `Batch_Name` varchar(45) NOT NULL,
  PRIMARY KEY (`Batch_ID`),
  UNIQUE KEY `Batch_Code` (`Batch_Code`),
  UNIQUE KEY `Batch_Name_UNIQUE` (`Batch_Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clubs`
--

DROP TABLE IF EXISTS `clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clubs` (
  `Club_ID` int NOT NULL AUTO_INCREMENT,
  `Club_Name` varchar(100) NOT NULL,
  `Club_Code` varchar(20) NOT NULL,
  PRIMARY KEY (`Club_ID`),
  UNIQUE KEY `Club_Code` (`Club_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs`
--

LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;
/*!40000 ALTER TABLE `clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `Course_ID` int NOT NULL AUTO_INCREMENT,
  `Course_Name` varchar(100) NOT NULL,
  `Course_Code` varchar(20) NOT NULL,
  `Lecturer_ID` int DEFAULT NULL,
  PRIMARY KEY (`Course_ID`),
  UNIQUE KEY `Course_Code` (`Course_Code`),
  KEY `Lecturer_ID` (`Lecturer_ID`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`Lecturer_ID`) REFERENCES `lecturers` (`Lecturer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwttokensacademicstaff`
--

DROP TABLE IF EXISTS `jwttokensacademicstaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwttokensacademicstaff` (
  `TokenID` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `RefreshToken` varchar(255) NOT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`TokenID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `jwttokensacademicstaff_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `academic_staff` (`Staff_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwttokensacademicstaff`
--

LOCK TABLES `jwttokensacademicstaff` WRITE;
/*!40000 ALTER TABLE `jwttokensacademicstaff` DISABLE KEYS */;
/*!40000 ALTER TABLE `jwttokensacademicstaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwttokensadmin`
--

DROP TABLE IF EXISTS `jwttokensadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwttokensadmin` (
  `TokenID` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `RefreshToken` varchar(255) NOT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`TokenID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `jwttokensadmin_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `admin` (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwttokensadmin`
--

LOCK TABLES `jwttokensadmin` WRITE;
/*!40000 ALTER TABLE `jwttokensadmin` DISABLE KEYS */;
/*!40000 ALTER TABLE `jwttokensadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwttokenslecturer`
--

DROP TABLE IF EXISTS `jwttokenslecturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwttokenslecturer` (
  `TokenID` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `RefreshToken` varchar(255) NOT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`TokenID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `jwttokenslecturer_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `lecturers` (`Lecturer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwttokenslecturer`
--

LOCK TABLES `jwttokenslecturer` WRITE;
/*!40000 ALTER TABLE `jwttokenslecturer` DISABLE KEYS */;
/*!40000 ALTER TABLE `jwttokenslecturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwttokensnonacademicstaff`
--

DROP TABLE IF EXISTS `jwttokensnonacademicstaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwttokensnonacademicstaff` (
  `TokenID` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `RefreshToken` varchar(255) NOT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`TokenID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `jwttokensnonacademicstaff_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `non_academic_staff` (`Non_Academic_Staff_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwttokensnonacademicstaff`
--

LOCK TABLES `jwttokensnonacademicstaff` WRITE;
/*!40000 ALTER TABLE `jwttokensnonacademicstaff` DISABLE KEYS */;
/*!40000 ALTER TABLE `jwttokensnonacademicstaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jwttokensstudent`
--

DROP TABLE IF EXISTS `jwttokensstudent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jwttokensstudent` (
  `TokenID` int NOT NULL AUTO_INCREMENT,
  `Token` varchar(255) NOT NULL,
  `RefreshToken` varchar(255) NOT NULL,
  `UserID` int DEFAULT NULL,
  PRIMARY KEY (`TokenID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `jwttokensstudent_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `students` (`Student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jwttokensstudent`
--

LOCK TABLES `jwttokensstudent` WRITE;
/*!40000 ALTER TABLE `jwttokensstudent` DISABLE KEYS */;
/*!40000 ALTER TABLE `jwttokensstudent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecturers`
--

DROP TABLE IF EXISTS `lecturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lecturers` (
  `Lecturer_ID` int NOT NULL AUTO_INCREMENT,
  `Lecturer_Name` varchar(50) NOT NULL,
  `Lecturer_Email` varchar(100) NOT NULL,
  `Lecturer_Contact_Number` varchar(15) DEFAULT NULL,
  `NIC` varchar(15) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Lecturer_ID`),
  UNIQUE KEY `Lecturer_Email` (`Lecturer_Email`),
  UNIQUE KEY `NIC` (`NIC`),
  UNIQUE KEY `Password_UNIQUE` (`Password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecturers`
--

LOCK TABLES `lecturers` WRITE;
/*!40000 ALTER TABLE `lecturers` DISABLE KEYS */;
/*!40000 ALTER TABLE `lecturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_details`
--

DROP TABLE IF EXISTS `login_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_details` (
  `Login_ID` int NOT NULL AUTO_INCREMENT,
  `User_ID` int DEFAULT NULL,
  `Login_Time` datetime DEFAULT NULL,
  PRIMARY KEY (`Login_ID`),
  KEY `User_ID` (`User_ID`),
  CONSTRAINT `login_details_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `admin` (`Admin_ID`) ON DELETE CASCADE,
  CONSTRAINT `login_details_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `students` (`Student_ID`) ON DELETE CASCADE,
  CONSTRAINT `login_details_ibfk_3` FOREIGN KEY (`User_ID`) REFERENCES `lecturers` (`Lecturer_ID`) ON DELETE CASCADE,
  CONSTRAINT `login_details_ibfk_4` FOREIGN KEY (`User_ID`) REFERENCES `academic_staff` (`Staff_ID`) ON DELETE CASCADE,
  CONSTRAINT `login_details_ibfk_5` FOREIGN KEY (`User_ID`) REFERENCES `non_academic_staff` (`Non_Academic_Staff_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_details`
--

LOCK TABLES `login_details` WRITE;
/*!40000 ALTER TABLE `login_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `non_academic_staff`
--

DROP TABLE IF EXISTS `non_academic_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `non_academic_staff` (
  `Non_Academic_Staff_ID` int NOT NULL AUTO_INCREMENT,
  `Non_Academic_Staff_Name` varchar(50) NOT NULL,
  `Non_Academic_Staff_Email` varchar(100) NOT NULL,
  `Non_Academic_Staff_Contact_Number` varchar(15) DEFAULT NULL,
  `NIC` varchar(15) NOT NULL,
  `Club_ID` int DEFAULT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Non_Academic_Staff_ID`),
  UNIQUE KEY `Non_Academic_Staff_Email` (`Non_Academic_Staff_Email`),
  UNIQUE KEY `NIC` (`NIC`),
  UNIQUE KEY `Password_UNIQUE` (`Password`),
  KEY `Club_ID` (`Club_ID`),
  CONSTRAINT `non_academic_staff_ibfk_1` FOREIGN KEY (`Club_ID`) REFERENCES `clubs` (`Club_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `non_academic_staff`
--

LOCK TABLES `non_academic_staff` WRITE;
/*!40000 ALTER TABLE `non_academic_staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `non_academic_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester_courses`
--

DROP TABLE IF EXISTS `semester_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester_courses` (
  `Semester_ID` int NOT NULL,
  `Course_ID` int NOT NULL,
  PRIMARY KEY (`Semester_ID`,`Course_ID`),
  KEY `Course_ID` (`Course_ID`),
  CONSTRAINT `semester_courses_ibfk_1` FOREIGN KEY (`Semester_ID`) REFERENCES `semester_details` (`Semester_ID`),
  CONSTRAINT `semester_courses_ibfk_2` FOREIGN KEY (`Course_ID`) REFERENCES `courses` (`Course_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester_courses`
--

LOCK TABLES `semester_courses` WRITE;
/*!40000 ALTER TABLE `semester_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `semester_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semester_details`
--

DROP TABLE IF EXISTS `semester_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semester_details` (
  `Semester_ID` int NOT NULL AUTO_INCREMENT,
  `Semester_Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Semester_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester_details`
--

LOCK TABLES `semester_details` WRITE;
/*!40000 ALTER TABLE `semester_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `semester_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_results`
--

DROP TABLE IF EXISTS `student_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_results` (
  `Result_ID` int NOT NULL AUTO_INCREMENT,
  `Student_ID` int DEFAULT NULL,
  `Course_ID` int DEFAULT NULL,
  `Assignment_Marks` decimal(5,2) DEFAULT NULL,
  `Mid_Exam_Marks` decimal(5,2) DEFAULT NULL,
  `End_Exam_Marks` decimal(5,2) DEFAULT NULL,
  `Overall_Marks` decimal(5,2) DEFAULT NULL,
  `Grade` varchar(2) DEFAULT NULL,
  `Semester_ID` int DEFAULT NULL,
  PRIMARY KEY (`Result_ID`),
  KEY `Student_ID` (`Student_ID`),
  KEY `Course_ID` (`Course_ID`),
  KEY `Semester_ID` (`Semester_ID`),
  CONSTRAINT `student_results_ibfk_1` FOREIGN KEY (`Student_ID`) REFERENCES `students` (`Student_ID`),
  CONSTRAINT `student_results_ibfk_2` FOREIGN KEY (`Course_ID`) REFERENCES `courses` (`Course_ID`),
  CONSTRAINT `student_results_ibfk_3` FOREIGN KEY (`Semester_ID`) REFERENCES `semester_details` (`Semester_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_results`
--

LOCK TABLES `student_results` WRITE;
/*!40000 ALTER TABLE `student_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `Student_ID` int NOT NULL AUTO_INCREMENT,
  `Student_Name` varchar(50) NOT NULL,
  `Student_Reg_Num` varchar(20) NOT NULL,
  `Student_Email` varchar(100) NOT NULL,
  `Student_Contact_Number` varchar(15) DEFAULT NULL,
  `Batch_ID` int DEFAULT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`Student_ID`),
  UNIQUE KEY `Student_Reg_Num` (`Student_Reg_Num`),
  UNIQUE KEY `Student_Email` (`Student_Email`),
  UNIQUE KEY `Password_UNIQUE` (`Password`),
  KEY `Batch_ID` (`Batch_ID`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`Batch_ID`) REFERENCES `batches` (`Batch_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UserID` int NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `UserType` varchar(20) NOT NULL,
  PRIMARY KEY (`UserID`),
  CONSTRAINT `users_chk_1` CHECK ((`UserType` in (_utf8mb4'Admin',_utf8mb4'Student',_utf8mb4'Lecturer',_utf8mb4'Academic Staff',_utf8mb4'Non Academic Staff')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-14 12:28:05
