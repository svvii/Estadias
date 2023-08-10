-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2023 a las 17:39:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caja`
--

CREATE TABLE `caja` (
  `id` int(11) NOT NULL,
  `caja` varchar(50) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caja`
--

INSERT INTO `caja` (`id`, `caja`, `estado`) VALUES
(1, 'General', 1),
(2, 'Secundario', 1),
(3, 'Basico', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `abreviatura` varchar(10) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carreras`
--

INSERT INTO `carreras` (`id`, `nombre`, `abreviatura`, `estado`) VALUES
(1, 'TSU en Administración Área Administración y Evaluación de Proyectos', 'AEP', 1),
(2, 'TSU Administacion Area Formulacion y Evaluacion de Proyectos ', 'FEP', 1),
(3, 'TSU Mantenimiento Área Maquinaria Pesada', 'MMP', 1),
(4, 'TSU Minería  Área Beneficio Minero', 'MBM', 1),
(5, 'TSU Procesos Industriales Área Manufactura', 'PIM', 1),
(6, 'TSU Tecnologías de la Información y Comunicación', 'TIC', 1),
(7, 'TSU Tecnologías de la Información Área Infraestructura de Redes Digitales', 'TIRD', 1),
(8, 'Ingeniería en Gestión de Procesos  ', 'IGP', 1),
(9, 'Ingeniería en Mantenimiento Industrial', 'IMI', 1),
(10, 'Ingeniería en Minería', 'INM', 1),
(11, 'Ingenieria en Redes Inteligentes y Ciberseguridad', 'IRIC', 1),
(12, 'Ingeniería en Sistemas Productivos', 'ISP', 1),
(13, 'Ingeniería en Tecnologías de la Información', 'ITI', 1),
(14, 'Licenciatura en Gestión de Negocios y Proyectos', 'LGNP', 1),
(15, 'TSU En Agricultura Sustentable y Protegida ', 'ASP', 1),
(16, 'Ingeniería en Agricultura Sustentable y Protegida', 'IASP', 1),
(17, 'Ingeniería Industrial  ', 'INI', 1),
(21, 'gbhn', 'hjm', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion`
--

CREATE TABLE `configuracion` (
  `id` int(11) NOT NULL,
  `ruc` varchar(30) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `mensaje` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `configuracion`
--

INSERT INTO `configuracion` (`id`, `ruc`, `nombre`, `telefono`, `direccion`, `mensaje`) VALUES
(1, '082118086', 'Sistema Integral Para El Control De Estadías', '6271186400', 'Ave. Gral. Jesús Lozoya Solís Km 0.931, Hidalgo del Parral, Mexico', 'GRACIAS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_permisos`
--

CREATE TABLE `detalle_permisos` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_permisos`
--

INSERT INTO `detalle_permisos` (`id`, `id_usuario`, `id_permiso`) VALUES
(123, 4, 2),
(124, 4, 3),
(125, 4, 4),
(126, 4, 5),
(127, 4, 7),
(128, 5, 2),
(129, 5, 4),
(130, 5, 8),
(178, 1, 1),
(179, 1, 2),
(180, 1, 3),
(256, 2, 1),
(257, 2, 2),
(258, 2, 3),
(259, 2, 4),
(260, 2, 5),
(261, 2, 6),
(262, 2, 7),
(263, 2, 8),
(268, 3, 1),
(269, 3, 2),
(270, 3, 3),
(271, 3, 4),
(272, 3, 5),
(273, 3, 6),
(274, 3, 7),
(275, 3, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadias`
--

CREATE TABLE `estadias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `matricula` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `codigo` varchar(100) NOT NULL,
  `estante` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `carrera` varchar(100) NOT NULL,
  `generacion` varchar(100) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadias`
--

INSERT INTO `estadias` (`id`, `nombre`, `matricula`, `titulo`, `codigo`, `estante`, `color`, `carrera`, `generacion`, `estado`) VALUES
(1, 'sandraviviana', 'sandraviviana', 'sandraviviana', 'sandraviviana', 'sandraviviana', 'sandraviviana', 'sandraviviana', 'sandraviviana', 1),
(2, 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 1),
(3, 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 1),
(4, 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 'generacion', 1),
(5, 'ghujk', 'ghjk', 'hyujk', 'hjk', 'gbhjk', 'ghjk', 'ghj', 'ghjk,', 1),
(6, 'bn', 'nm', 'nm', 'bnm', 'bn m', 'bnm,', 'bnm', 'bnm', 1),
(8, 'SANDRA', '082118086', 'ESTADIAS', '81-1', '1', 'AMARILLO', 'TECNOLOGIAS', '2021', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generaciones`
--

CREATE TABLE `generaciones` (
  `id` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `final` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generaciones`
--

INSERT INTO `generaciones` (`id`, `inicio`, `final`, `estado`) VALUES
(1, '1997-09-29', '2003-09-08', 0),
(2, '2023-07-30', '2023-07-30', 0),
(3, '2023-07-24', '2023-07-02', 0),
(4, '2023-07-17', '2023-07-23', 0),
(5, '2023-07-16', '2023-07-25', 0),
(6, '2023-08-30', '2023-08-22', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lector`
--

CREATE TABLE `lector` (
  `id` int(11) NOT NULL,
  `lector` varchar(50) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lector`
--

INSERT INTO `lector` (`id`, `lector`, `estado`) VALUES
(1, 'JESUS', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lectores`
--

CREATE TABLE `lectores` (
  `id` int(11) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` text NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lectores`
--

INSERT INTO `lectores` (`id`, `dni`, `nombre`, `telefono`, `direccion`, `estado`) VALUES
(1, '123', '123', '123', '123', 1),
(2, '123456', '123456', '1234567', '123456789\r\n', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `permiso` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `permiso`) VALUES
(1, 'usuarios'),
(2, 'configuracion'),
(3, 'lectores'),
(4, 'generaciones'),
(5, 'prestamos'),
(6, 'estadias'),
(7, 'carreras'),
(8, 'cajas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamos`
--

CREATE TABLE `prestamos` (
  `id` int(11) NOT NULL,
  `id_lector` int(11) NOT NULL,
  `fecha_prestamo` date NOT NULL,
  `fecha_devolucion` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prestamos`
--

INSERT INTO `prestamos` (`id`, `id_lector`, `fecha_prestamo`, `fecha_devolucion`, `estado`) VALUES
(1, 2, '2023-07-18', '2023-07-14', 1),
(2, 1, '2023-07-17', '2023-07-16', 1),
(3, 1, '2023-07-24', '2023-07-25', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `id_caja` int(11) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `nombre`, `clave`, `id_caja`, `estado`) VALUES
(1, 'admin', 'administrador', '8bc2de1d79227b1fca12eb00cb257e2830566403108d1b5e00944177e0dced46', 1, 1),
(2, 'Encargado', 'Encargado', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 2, 1),
(3, 'Basico', 'Basico', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `caja`
--
ALTER TABLE `caja`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_permisos`
--
ALTER TABLE `detalle_permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estadias`
--
ALTER TABLE `estadias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `generaciones`
--
ALTER TABLE `generaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lector`
--
ALTER TABLE `lector`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lectores`
--
ALTER TABLE `lectores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prestamos`
--
ALTER TABLE `prestamos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_lector` (`id_lector`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_caja` (`id_caja`),
  ADD KEY `id_caja_2` (`id_caja`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caja`
--
ALTER TABLE `caja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `configuracion`
--
ALTER TABLE `configuracion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `detalle_permisos`
--
ALTER TABLE `detalle_permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=276;

--
-- AUTO_INCREMENT de la tabla `estadias`
--
ALTER TABLE `estadias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `generaciones`
--
ALTER TABLE `generaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `lector`
--
ALTER TABLE `lector`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lectores`
--
ALTER TABLE `lectores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `prestamos`
--
ALTER TABLE `prestamos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_caja`) REFERENCES `caja` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
