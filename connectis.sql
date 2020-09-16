-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2020 at 05:53 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `connectis`
--

-- --------------------------------------------------------

--
-- Table structure for table `co_ligne_article_operation`
--

CREATE TABLE `co_ligne_article_operation` (
  `id` int(64) NOT NULL,
  `produit_id` int(11) NOT NULL,
  `operation_id` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `co_operation`
--

CREATE TABLE `co_operation` (
  `id` int(64) NOT NULL,
  `emeteur` varchar(255) NOT NULL,
  `recepteur` varchar(255) NOT NULL,
  `prix` int(11) NOT NULL,
  `date_operation` date NOT NULL,
  `id_type_operation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `co_operation`
--

INSERT INTO `co_operation` (`id`, `emeteur`, `recepteur`, `prix`, `date_operation`, `id_type_operation`) VALUES
(1, 'CONNECTIS', 'grace', 5, '2020-09-16', 1),
(2, 'CONNECTIS', 'Teddy', 5, '2020-09-16', 2);

-- --------------------------------------------------------

--
-- Table structure for table `co_produits`
--

CREATE TABLE `co_produits` (
  `id` int(64) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `volume` varchar(20) NOT NULL,
  `prix` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `co_produits`
--

INSERT INTO `co_produits` (`id`, `nom`, `volume`, `prix`) VALUES
(1, 'Tchukudu 1GB', '1GB', '1$'),
(2, 'Tchukudu 3GB', '3GB', '3$'),
(3, 'Tchukudu 5GB', '5GB', '1$'),
(4, '', '', ''),
(5, '', '', ''),
(6, '', '', ''),
(7, '', '', ''),
(8, '', '', ''),
(9, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `co_utilisateur`
--

CREATE TABLE `co_utilisateur` (
  `id` int(64) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_date` date NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `co_utilisateur`
--

INSERT INTO `co_utilisateur` (`id`, `nom`, `prenom`, `dob`, `email`, `telephone`, `password`, `created_date`, `createdAt`, `updatedAt`) VALUES
(2, 'Teddy update 2', '', '0000-00-00', '', 0, '', '0000-00-00', '2020-09-16 12:13:34', '2020-09-16 14:44:02'),
(3, '', '', '0000-00-00', '', 0, '', '0000-00-00', '2020-09-16 12:13:46', '2020-09-16 12:13:46');

-- --------------------------------------------------------

--
-- Stand-in structure for view `userfidelite`
-- (See below for the actual view)
--
CREATE TABLE `userfidelite` (
`countItems` bigint(21)
);

-- --------------------------------------------------------

--
-- Structure for view `userfidelite`
--
DROP TABLE IF EXISTS `userfidelite`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `userfidelite`  AS  (select count(0) AS `countItems` from `co_operation` where (`co_operation`.`emeteur` = 1)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `co_ligne_article_operation`
--
ALTER TABLE `co_ligne_article_operation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `co_operation`
--
ALTER TABLE `co_operation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `co_produits`
--
ALTER TABLE `co_produits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `co_utilisateur`
--
ALTER TABLE `co_utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `co_ligne_article_operation`
--
ALTER TABLE `co_ligne_article_operation`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `co_operation`
--
ALTER TABLE `co_operation`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `co_produits`
--
ALTER TABLE `co_produits`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `co_utilisateur`
--
ALTER TABLE `co_utilisateur`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
