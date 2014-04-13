-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2014 at 02:58 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `finalproject`
--
CREATE DATABASE IF NOT EXISTS `finalproject` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `finalproject`;

-- --------------------------------------------------------

--
-- Table structure for table `beds`
--

CREATE TABLE IF NOT EXISTS `beds` (
  `bedID` int(10) NOT NULL AUTO_INCREMENT,
  `roomID` int(10) NOT NULL,
  `wardID` int(10) NOT NULL,
  `availability` varchar(10) NOT NULL,
  `patientID` varchar(255) DEFAULT NULL,
  `patientFirstName` varchar(255) DEFAULT NULL,
  `patientLastName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bedID`),
  UNIQUE KEY `patientID` (`patientID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

--
-- Dumping data for table `beds`
--

INSERT INTO `beds` (`bedID`, `roomID`, `wardID`, `availability`, `patientID`, `patientFirstName`, `patientLastName`) VALUES
(1, 1, 1, 'dirty', NULL, NULL, NULL),
(2, 1, 1, 'dirty', NULL, NULL, NULL),
(3, 2, 1, 'dirty', NULL, NULL, NULL),
(4, 2, 1, 'vacant', NULL, NULL, NULL),
(5, 3, 1, 'dirty', NULL, NULL, NULL),
(6, 3, 1, 'occupied', '000001', 'Denlis', 'Bertrand'),
(7, 4, 1, 'vacant', NULL, NULL, NULL),
(8, 4, 1, 'vacant', NULL, NULL, NULL),
(9, 5, 1, 'vacant', NULL, NULL, NULL),
(10, 5, 1, 'occupied', '000002', 'Jennifer', 'Lawrence'),
(11, 6, 2, 'vacant', NULL, NULL, NULL),
(12, 6, 2, 'dirty', NULL, NULL, NULL),
(13, 7, 2, 'occupied', '000003', 'Michele', 'Flus'),
(14, 7, 2, 'occupied', '000004', 'Johnny', 'Cash'),
(15, 8, 2, 'occupied', '000005', 'clint', 'eastmond'),
(16, 8, 2, 'dirty', NULL, NULL, NULL),
(17, 9, 2, 'occupied', '000006', 'crystal', 'henry'),
(18, 9, 2, 'vacant', NULL, NULL, NULL),
(19, 10, 2, 'dirty', NULL, NULL, NULL),
(20, 10, 2, 'dirty', NULL, NULL, NULL),
(21, 11, 3, 'dirty', NULL, NULL, NULL),
(22, 11, 3, 'vacant', NULL, NULL, NULL),
(23, 12, 3, 'dirty', NULL, NULL, NULL),
(24, 12, 3, 'occupied', '000007', 'Jonathon', 'Ward'),
(25, 13, 3, 'vacant', NULL, NULL, NULL),
(26, 13, 3, 'vacant', NULL, NULL, NULL),
(27, 14, 3, 'vacant', NULL, NULL, NULL),
(28, 14, 3, 'dirty', NULL, NULL, NULL),
(29, 15, 3, 'vacant', NULL, NULL, NULL),
(30, 15, 3, 'occupied', '000008', 'Christopher', 'Ellis'),
(31, 16, 4, 'occupied', '000009', 'Rosemary', 'Julien'),
(32, 16, 4, 'occupied', '000010', 'Christopher', 'Flus'),
(33, 17, 4, 'occupied', '000011', 'John', 'Green'),
(34, 17, 4, 'dirty', NULL, NULL, NULL),
(35, 18, 4, 'occupied', '000012', 'Emilio', 'van Criedle'),
(36, 18, 4, 'dirty', NULL, NULL, NULL),
(37, 19, 4, 'dirty', NULL, NULL, NULL),
(38, 19, 4, 'dirty', NULL, NULL, NULL),
(39, 20, 4, 'dirty', NULL, NULL, NULL),
(40, 20, 4, 'vacant', NULL, NULL, NULL),
(41, 21, 5, 'dirty', NULL, NULL, NULL),
(42, 21, 5, 'occupied', '000013', 'Jamie', 'Henry'),
(43, 22, 5, 'vacant', NULL, NULL, NULL),
(44, 22, 5, 'vacant', NULL, NULL, NULL),
(45, 23, 5, 'vacant', NULL, NULL, NULL),
(46, 23, 5, 'occupied', '000014', 'Henry', 'Charles'),
(47, 24, 5, 'vacant', NULL, NULL, NULL),
(48, 24, 5, 'dirty', NULL, NULL, NULL),
(49, 25, 5, 'occupied', '000015', 'Brandon', 'McIntyre'),
(50, 25, 5, 'occupied', '000016', 'Kerissa', 'Joseph'),
(51, 26, 6, 'occupied', '000017', 'Kimberly', 'Johnson'),
(52, 26, 6, 'dirty', NULL, NULL, NULL),
(53, 27, 6, 'occupied', '000018', 'Kenwyn', 'Jones'),
(54, 27, 6, 'vacant', NULL, NULL, NULL),
(55, 28, 6, 'dirty', NULL, NULL, NULL),
(56, 28, 6, 'dirty', NULL, NULL, NULL),
(57, 29, 6, 'dirty', NULL, NULL, NULL),
(58, 29, 6, 'vacant', NULL, NULL, NULL),
(59, 30, 6, 'dirty', NULL, NULL, NULL),
(60, 30, 6, 'occupied', '000019', 'allan', 'harper');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `roomID` int(10) NOT NULL AUTO_INCREMENT,
  `wardID` int(10) NOT NULL,
  `noOfBeds` int(10) NOT NULL,
  PRIMARY KEY (`roomID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`roomID`, `wardID`, `noOfBeds`) VALUES
(1, 1, 2),
(2, 1, 2),
(3, 1, 2),
(4, 1, 2),
(5, 1, 2),
(6, 2, 2),
(7, 2, 2),
(8, 2, 2),
(9, 2, 2),
(10, 2, 2),
(11, 3, 2),
(12, 3, 2),
(13, 3, 2),
(14, 3, 2),
(15, 3, 2),
(16, 4, 2),
(17, 4, 2),
(18, 4, 2),
(19, 4, 2),
(20, 4, 2),
(21, 5, 2),
(22, 5, 2),
(23, 5, 2),
(24, 5, 2),
(25, 5, 2),
(26, 6, 2),
(27, 6, 2),
(28, 6, 2),
(29, 6, 2),
(30, 6, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date_employed` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `type`, `firstname`, `lastname`, `address`, `date_employed`, `dob`, `gender`) VALUES
(1, 'hi@welcome.com', '202cb962ac59075b964b07152d234b70', 'cleaner', 'John', 'Doe', '#8 Pond Street, Beaulieu Gardens, Trincity', '01-03-2014', '09-11-1992', 'M'),
(2, 'hello@welcome.com', '202cb962ac59075b964b07152d234b70', 'nurse', 'Jennifer', 'Lawrence', '#12 ariapita avenue, Woodbrook, Port of Spain', '20-11-2013', '23-04-1989', 'F'),
(3, 'qwerty@welcome.com', 'd8578edf8458ce06fbc5bb76a58c5ca4', 'bureau', 'Clint', 'Eastwood', '#234 Twitter lane, Arima', '04-12-2012', '09-04-1985', 'M'),
(4, 'flus@gmail.com', '202cb962ac59075b964b07152d234b70', 'administrator', 'Christopher', 'Flus', '#8pond street,trincity', '12-12-2012', '09-11-1992', 'M');

-- --------------------------------------------------------

--
-- Table structure for table `wards`
--

CREATE TABLE IF NOT EXISTS `wards` (
  `wardID` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) NOT NULL,
  `floor` int(10) NOT NULL,
  PRIMARY KEY (`wardID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `wards`
--

INSERT INTO `wards` (`wardID`, `type`, `floor`) VALUES
(1, 'surgical', 3),
(2, 'medical', 2),
(3, 'medical', 3),
(4, 'surgical', 1),
(5, 'medical', 1),
(6, 'surgical', 4);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
