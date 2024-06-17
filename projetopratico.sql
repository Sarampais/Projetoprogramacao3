-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 17, 2024 at 07:52 PM
-- Server version: 8.3.0
-- PHP Version: 8.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projetopratico`
--

-- --------------------------------------------------------

--
-- Table structure for table `enfermeiro`
--

DROP TABLE IF EXISTS `enfermeiro`;
CREATE TABLE IF NOT EXISTS `enfermeiro` (
  `nome` text NOT NULL,
  `numero_mecan` int NOT NULL,
  `servico` text NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`numero_mecan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `enfermeiro`
--

INSERT INTO `enfermeiro` (`nome`, `numero_mecan`, `servico`, `createdAt`, `updatedAt`) VALUES
('João Vasco', 6516849, 'Feridas', '2024-05-05 04:51:39', '2024-05-05 04:51:39'),
('adwad', 64684684, 'awdawd', '2024-06-17 04:00:04', '2024-06-17 04:00:04'),
('Joaquim de Almeida', 124642161, 'Tratamento de Feridas', '0000-00-00 00:00:00', '2024-06-17 03:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `episodio`
--

DROP TABLE IF EXISTS `episodio`;
CREATE TABLE IF NOT EXISTS `episodio` (
  `tpo_cicratizacao` text NOT NULL,
  `area` int NOT NULL,
  `largura` int NOT NULL,
  `comprimento` int NOT NULL,
  `inflamacao` text NOT NULL,
  `qualidade` text NOT NULL,
  `odor` text NOT NULL,
  `observacoes` text NOT NULL,
  `n_de_episodio` bigint NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `cor` text NOT NULL,
  `id_ferida` int NOT NULL,
  `numero_mecan` int NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`n_de_episodio`),
  KEY `n_de_utente` (`id_ferida`),
  KEY `e_numero_mecan` (`numero_mecan`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `episodio`
--

INSERT INTO `episodio` (`tpo_cicratizacao`, `area`, `largura`, `comprimento`, `inflamacao`, `qualidade`, `odor`, `observacoes`, `n_de_episodio`, `data`, `cor`, `id_ferida`, `numero_mecan`, `createdAt`, `updatedAt`) VALUES
('Estável', 2, 1, 1, 'Estável', 'Boa', 'Sem Odor', 'Quase tratada', 6, '2024-01-15', 'Avermelhada', 9, 124642161, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Má', 0, 0, 0, 'Muito Grave', 'Má', 'Odor Ligeiro', 'Muito mau', 7, '2024-06-27', 'Rosa', 16, 64684684, '2024-06-17 15:11:17', '2024-06-17 16:06:47'),
('Má', 0, 0, 0, 'Muito Grave', 'Má', 'Odor Grave', 'Teste', 8, '2024-06-20', 'Verde', 12, 64684684, '2024-06-17 15:20:25', '2024-06-17 16:05:35');

-- --------------------------------------------------------

--
-- Table structure for table `ferida`
--

DROP TABLE IF EXISTS `ferida`;
CREATE TABLE IF NOT EXISTS `ferida` (
  `id_ferida` int NOT NULL AUTO_INCREMENT,
  `tpo_cicratizacao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `area` int NOT NULL,
  `largura` int NOT NULL,
  `comprimento` int NOT NULL,
  `inflamacao` text NOT NULL,
  `qualidade` text NOT NULL,
  `odor` text NOT NULL,
  `cor` text NOT NULL,
  `n_de_utente` int NOT NULL,
  `n_mecan` int NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id_ferida`),
  KEY `n_de_utente` (`n_de_utente`),
  KEY `n_mecan` (`n_mecan`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ferida`
--

INSERT INTO `ferida` (`id_ferida`, `tpo_cicratizacao`, `area`, `largura`, `comprimento`, `inflamacao`, `qualidade`, `odor`, `cor`, `n_de_utente`, `n_mecan`, `createdAt`, `updatedAt`) VALUES
(9, 'Estável', 2, 1, 1, 'Estável', 'Estável', 'Odor Ligeiro', 'Vermelha', 243563167, 15425468, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, '', 5, 3, 7, 'Grave', 'Estável', 'Odor Ligeiro', 'Amarela', 278126006, 15425468, '2024-06-17 04:58:21', '2024-06-17 04:58:21'),
(12, '', 54, 21, 75, 'Muito Grave', 'Má', 'Odor Grave', 'Vermelha', 243563167, 6848754, '2024-06-17 05:01:38', '2024-06-17 05:01:38'),
(13, 'Má', 15, 12, 35, 'Muito Grave', 'Má', 'Odor Grave', 'Vermelha', 278126006, 6848754, '2024-06-17 05:08:17', '2024-06-17 14:59:24'),
(14, '', 50, 12, 15, 'Muito Grave', 'Má', 'Odor Grave', 'Amarela', 278126006, 15425468, '2024-06-17 05:10:05', '2024-06-17 05:10:05'),
(15, '', 2, 3, 4, 'Muito Grave', 'Estável', 'Odor Grave', 'Preto', 243563167, 15425468, '2024-06-17 13:45:15', '2024-06-17 13:45:15'),
(16, 'Estável', 0, 0, 0, 'Estável', 'Estável', 'Odor Ligeiro', 'Vermelha', 243563167, 15425468, '2024-06-17 13:50:05', '2024-06-17 13:50:05'),
(17, 'Estável', 0, 0, 0, 'Grave', 'Estável', 'Odor Ligeiro', 'Laranja', 243563167, 6848754, '2024-06-17 14:44:58', '2024-06-17 14:44:58');

-- --------------------------------------------------------

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
CREATE TABLE IF NOT EXISTS `medico` (
  `n_mecan` int NOT NULL,
  `nome` text NOT NULL,
  `ct_profissional` text NOT NULL,
  `especialidade` text NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`n_mecan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `medico`
--

INSERT INTO `medico` (`n_mecan`, `nome`, `ct_profissional`, `especialidade`, `createdAt`, `updatedAt`) VALUES
(6848754, 'João Lopes', 'GSFG1577', 'Cardiologia', '2024-06-17 04:04:04', '2024-06-17 04:19:57'),
(15425468, 'João Lopes', 'NB25KL97', 'Pediátrica', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `medico_utente`
--

DROP TABLE IF EXISTS `medico_utente`;
CREATE TABLE IF NOT EXISTS `medico_utente` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `medicoNMecan` int NOT NULL,
  `utenteNDeUtente` int NOT NULL,
  PRIMARY KEY (`medicoNMecan`,`utenteNDeUtente`),
  KEY `utenteNDeUtente` (`utenteNDeUtente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medico_utente`
--

INSERT INTO `medico_utente` (`createdAt`, `updatedAt`, `medicoNMecan`, `utenteNDeUtente`) VALUES
('2024-05-05 03:06:43', '2024-05-05 03:06:43', 15425468, 243563167),
('2024-05-05 03:06:43', '2024-05-05 03:06:43', 15425468, 278126006);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'sara', 'sara');

-- --------------------------------------------------------

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
CREATE TABLE IF NOT EXISTS `utente` (
  `n_de_utente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `nif` int NOT NULL,
  `n_seguranca_social` int NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`n_de_utente`)
) ENGINE=InnoDB AUTO_INCREMENT=1549879846 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `utente`
--

INSERT INTO `utente` (`n_de_utente`, `nome`, `nif`, `n_seguranca_social`, `createdAt`, `updatedAt`) VALUES
(243563167, 'Paula Mendes', 281009376, 555501234, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(278126006, 'João Manuel', 214329259, 546212756, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(648468484, 'Marinho', 48646464, 64686876, '2024-06-17 04:32:20', '2024-06-17 04:36:18');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `episodio`
--
ALTER TABLE `episodio`
  ADD CONSTRAINT `episodio_ibfk_1` FOREIGN KEY (`id_ferida`) REFERENCES `ferida` (`id_ferida`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `episodio_ibfk_2` FOREIGN KEY (`numero_mecan`) REFERENCES `enfermeiro` (`numero_mecan`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `ferida`
--
ALTER TABLE `ferida`
  ADD CONSTRAINT `ferida_ibfk_1` FOREIGN KEY (`n_de_utente`) REFERENCES `utente` (`n_de_utente`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ferida_ibfk_2` FOREIGN KEY (`n_mecan`) REFERENCES `medico` (`n_mecan`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `medico_utente`
--
ALTER TABLE `medico_utente`
  ADD CONSTRAINT `medico_utente_ibfk_1` FOREIGN KEY (`medicoNMecan`) REFERENCES `medico` (`n_mecan`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medico_utente_ibfk_2` FOREIGN KEY (`utenteNDeUtente`) REFERENCES `utente` (`n_de_utente`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
