-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2023 a las 00:14:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_task`
--
CREATE DATABASE IF NOT EXISTS `db_task` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_task`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `poster`, `createdAt`, `updatedAt`) VALUES
(24, 'Perrito', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing', 'https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg', '2023-10-13 22:28:59', '2023-10-16 21:45:47'),
(25, 'Inteligencia Artificial', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing', 'https://www.eude.es/wp-content/uploads/2023/06/Dise%C3%B1o-sin-t%C3%ADtulo-3.png', '2023-10-14 01:11:21', '2023-10-16 21:46:00'),
(26, 'Mario', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, accusamus? Minima reprehenderit ab suscipit deserunt id quae illo amet beatae aliquam quas quasi molestiae, aspernatur nam quaerat magnam recusandae magni?Lorem, ipsum dolor sit amet consectetur adipisicing ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgEcfT6Lxuz3FZ6mJ-IHY8EYXGQ-8jrfOEL9LEIdHuA&s', '2023-10-14 18:01:10', '2023-10-14 22:20:21'),
(27, 'Prueba', 'Si', 'https://www.shutterstock.com/shutterstock/photos/577901041/display_1500/stock-photo-tall-measure-height-child-growing-scale-577901041.jpg', '2023-10-14 19:14:20', '2023-10-16 21:10:28'),
(30, 'asdasda', 'asdasd', 'https://www.eude.es/wp-content/uploads/2023/06/Dise%C3%B1o-sin-t%C3%ADtulo-3.png', '2023-10-16 21:48:33', '2023-10-16 21:49:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
