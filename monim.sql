-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 15 juil. 2025 à 23:06
-- Version du serveur : 11.7.2-MariaDB
-- Version de PHP : 8.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `monim`
--

-- --------------------------------------------------------

--
-- Structure de la table `action_of_properties`
--

CREATE TABLE `action_of_properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `action` varchar(20) NOT NULL,
  `number_of_remaining_properties` int(11) DEFAULT NULL,
  `subscription_id` bigint(20) UNSIGNED DEFAULT NULL,
  `companie_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `action_of_properties`
--

INSERT INTO `action_of_properties` (`id`, `created_at`, `updated_at`, `action`, `number_of_remaining_properties`, `subscription_id`, `companie_id`, `product_id`) VALUES
(69, '2024-10-03 00:37:21', NULL, 'store', 14, 20, 33, 69),
(70, '2024-10-03 00:37:21', NULL, 'store', 13, 20, 33, 70),
(71, '2024-10-03 00:37:21', NULL, 'store', 12, 20, 33, 71),
(72, '2024-10-03 20:39:07', NULL, 'product deleted', NULL, NULL, 33, 69),
(73, '2024-10-03 20:39:07', NULL, 'store', 11, 20, 33, 72),
(74, '2024-10-03 20:39:07', NULL, 'store', 10, 20, 33, 73),
(75, '2024-10-03 20:39:07', NULL, 'store', 9, 20, 33, 74),
(76, '2024-10-03 20:39:07', NULL, 'store', 8, 20, 33, 75),
(77, '2024-10-03 20:39:07', NULL, 'store', 7, 20, 33, 76),
(78, '2024-10-05 18:31:31', NULL, 'store', 14, 21, 34, 77),
(79, '2024-10-05 18:46:32', NULL, 'store', 13, 21, 34, 78),
(80, '2024-10-05 18:46:32', NULL, 'store', 12, 21, 34, 79),
(81, '2024-10-06 10:31:04', NULL, 'store', 6, 20, 33, 80),
(82, '2024-10-06 10:31:04', NULL, 'store', 5, 20, 33, 81),
(83, '2024-10-07 09:39:50', NULL, 'store', 11, 21, 34, 82),
(84, '2024-10-07 09:39:50', NULL, 'store', 10, 21, 34, 83),
(85, '2024-10-13 11:03:50', NULL, 'store', 4, 20, 33, 84),
(86, '2024-10-14 09:09:49', NULL, 'store', 3, 20, 33, 85),
(87, '2024-10-15 10:48:08', NULL, 'store', 14, 23, 36, 86),
(88, '2024-10-18 15:30:50', NULL, 'product deleted', NULL, NULL, 33, 72),
(89, '2024-10-22 08:40:33', NULL, 'store', 14, 22, 35, 87),
(90, '2024-10-22 21:08:38', NULL, 'product deleted', NULL, NULL, 33, 74),
(91, '2024-10-28 20:50:57', NULL, 'store', 14, 28, 42, 88),
(92, '2024-10-30 18:57:08', NULL, 'store', 14, 29, 43, 89),
(93, '2024-11-11 11:55:46', NULL, 'store', 13, 29, 43, 90),
(94, '2024-11-11 16:37:17', NULL, 'store', 12, 29, 43, 91),
(95, '2024-11-18 09:17:28', NULL, 'store', 11, 29, 43, 92),
(96, '2024-11-18 09:17:28', NULL, 'store', 10, 29, 43, 93),
(99, '2024-11-25 14:30:32', NULL, 'Upated realestate', 8, 29, 43, 93),
(100, '2024-11-25 14:34:11', NULL, 'Upated realestate', 7, 29, 43, 93),
(101, '2024-11-25 14:37:38', NULL, 'Upated realestate', 6, 29, 43, 93),
(102, '2024-11-25 14:39:32', NULL, 'Upated realestate', 5, 29, 43, 93),
(103, '2024-11-25 14:46:34', NULL, 'Upated realestate', 4, 29, 43, 93),
(104, '2024-11-25 14:49:29', NULL, 'Upated realestate', 3, 29, 43, 93),
(105, '2024-11-25 14:53:18', NULL, 'Upated realestate', 2, 29, 43, 93),
(106, '2024-11-25 14:53:18', NULL, 'Upated realestate', 1, 29, 43, 91),
(107, '2024-11-25 14:53:18', NULL, 'Upated realestate', 0, 29, 43, 93),
(108, '2024-11-26 06:44:36', NULL, 'Upated realestate', -1, 29, 43, 91),
(109, '2024-11-26 06:51:44', NULL, 'Upated realestate', 18, 29, 43, 91),
(110, '2024-11-26 06:51:44', NULL, 'Upated realestate', 17, 29, 43, 91),
(111, '2024-11-26 07:17:33', NULL, 'Upated realestate', 16, 29, 43, 91),
(112, '2024-11-26 07:19:29', NULL, 'Upated realestate', 15, 29, 43, 91),
(113, '2024-11-26 07:21:27', NULL, 'Upated realestate', 14, 29, 43, 91),
(114, '2024-11-26 08:45:39', NULL, 'Upated realestate', 13, 29, 43, 90),
(115, '2024-11-26 09:29:30', NULL, 'store', 13, 29, 43, 94),
(116, '2024-11-26 10:16:34', NULL, 'Upated realestate', 11, 29, 43, 94),
(117, '2024-11-26 10:16:34', NULL, 'Upated realestate', 10, 29, 43, 94),
(118, '2024-11-26 10:16:34', NULL, 'Upated realestate', 9, 29, 43, 94),
(119, '2024-11-26 10:16:34', NULL, 'Upated realestate', 8, 29, 43, 94),
(120, '2024-11-26 10:16:34', NULL, 'Upated realestate', 7, 29, 43, 94),
(121, '2024-11-26 10:16:34', NULL, 'Upated realestate', 6, 29, 43, 94),
(122, '2024-11-26 10:16:34', NULL, 'Upated realestate', 5, 29, 43, 92),
(123, '2024-11-26 10:16:34', NULL, 'Upated realestate', 4, 29, 43, 92),
(124, '2024-11-26 10:16:34', NULL, 'Upated realestate', 3, 29, 43, 92),
(125, '2024-11-26 10:16:34', NULL, 'Upated realestate', 2, 29, 43, 92),
(126, '2024-11-26 10:16:34', NULL, 'Upated realestate', 1, 29, 43, 92),
(127, '2024-11-26 10:16:34', NULL, 'Upated realestate', 0, 29, 43, 92),
(128, '2024-11-26 10:16:34', NULL, 'Upated realestate', -1, 29, 43, 92),
(129, '2024-11-26 12:08:58', NULL, 'Upated realestate', 498, 29, 43, 92),
(130, '2024-11-29 00:13:06', NULL, 'product deleted', NULL, NULL, 43, 89),
(131, '2024-11-29 00:13:06', NULL, 'product deleted', NULL, NULL, 43, 89),
(132, '2023-03-11 17:11:10', NULL, 'Upated realestate', 98, 29, 43, 94),
(133, '2023-03-11 17:11:10', NULL, 'Upated realestate', 97, 29, 43, 94),
(134, '2023-03-11 17:11:10', NULL, 'Upated realestate', 96, 29, 43, 94),
(135, '2023-03-11 17:11:10', NULL, 'Upated realestate', 95, 29, 43, 93),
(136, '2023-03-11 17:11:10', NULL, 'Upated realestate', 94, 29, 43, 92),
(137, '2023-03-11 17:11:10', NULL, 'Upated realestate', 93, 29, 43, 94),
(138, '2023-03-11 17:11:10', NULL, 'Upated realestate', 92, 29, 43, 94),
(139, '2023-03-11 17:11:10', NULL, 'store', 92, 29, 43, 95),
(140, '2023-03-11 17:11:10', NULL, 'store', 91, 29, 43, 96),
(141, '2024-12-29 17:56:34', NULL, 'store', 90, 29, 43, 97),
(142, '2024-12-29 17:56:34', NULL, 'Upated realestate', 88, 29, 43, 92),
(143, '2025-03-04 15:42:42', NULL, 'store', 88, 29, 43, 98),
(144, '2025-03-04 21:32:32', NULL, 'store', 87, 29, 43, 99),
(145, '2025-03-05 22:29:18', NULL, 'Upated realestate', 85, 29, 43, 99),
(146, '2025-03-05 22:29:18', NULL, 'store', 85, 29, 43, 100),
(147, '2025-03-05 22:29:18', NULL, 'Upated realestate', 83, 29, 43, 94),
(148, '2025-03-05 22:29:18', NULL, 'Upated realestate', 82, 29, 43, 100),
(149, '2025-03-12 07:38:08', NULL, 'store', 14, 34, 48, 101),
(150, '2025-03-12 07:38:08', NULL, 'store', 82, 29, 43, 102),
(151, '2025-03-13 12:33:57', NULL, 'store', 13, 34, 48, 103),
(152, '2025-03-13 12:33:57', NULL, 'Upated realestate', 11, 34, 48, 103),
(153, '2025-03-13 12:33:57', NULL, 'Upated realestate', 10, 34, 48, 103),
(154, '2025-03-13 13:09:38', NULL, 'Upated realestate', 9, 34, 48, 103),
(155, '2025-03-13 13:09:38', NULL, 'store', 9, 34, 48, 104),
(156, '2025-03-13 13:09:38', NULL, 'Upated realestate', 7, 34, 48, 104),
(157, '2025-03-13 13:09:38', NULL, 'store', 7, 34, 48, 105),
(158, '2025-03-13 13:09:38', NULL, 'Upated realestate', 5, 34, 48, 105),
(159, '2025-03-13 13:09:38', NULL, 'Upated realestate', 4, 34, 48, 105),
(160, '2025-03-14 09:23:04', NULL, 'store', 4, 34, 48, 106),
(161, '2025-03-14 14:51:50', NULL, 'product deleted', NULL, NULL, 48, 105),
(162, '2025-03-14 14:51:50', NULL, 'product deleted', NULL, NULL, 48, 103),
(163, '2025-03-14 14:51:50', NULL, 'product deleted', NULL, NULL, 48, 104),
(164, '2025-03-14 14:51:50', NULL, 'product deleted', NULL, NULL, 48, 104),
(165, '2025-03-14 15:50:04', NULL, 'product deleted', NULL, NULL, 43, 90),
(166, '2025-03-14 15:50:04', NULL, 'product deleted', NULL, NULL, 43, 92),
(167, '2025-03-14 15:50:04', NULL, 'Upated realestate', 80, 29, 43, 96),
(168, '2025-03-14 15:50:04', NULL, 'product deleted', NULL, NULL, 43, 94),
(169, '2025-03-15 00:58:24', NULL, 'product deleted', NULL, NULL, 43, 100),
(170, '2025-03-15 00:58:24', NULL, 'product deleted', NULL, NULL, 43, 97),
(171, '2025-03-15 00:58:24', NULL, 'product deleted', NULL, NULL, 43, 91),
(172, '2025-03-15 01:50:50', NULL, 'product deleted', NULL, NULL, 43, 98),
(173, '2025-03-15 13:55:48', NULL, 'store', 80, 29, 43, 107),
(174, '2025-03-15 14:56:46', NULL, 'Upated realestate', 78, 29, 43, 107),
(175, '2025-03-15 14:56:46', NULL, 'store', 78, 29, 43, 108),
(176, '2025-03-15 14:56:46', NULL, 'store', 77, 29, 43, 109),
(177, '2025-03-20 07:25:27', NULL, 'store', 76, 29, 43, 110),
(178, '2025-03-20 23:36:40', NULL, 'store', 75, 29, 43, 111),
(179, '2025-03-21 14:13:27', NULL, 'Upated realestate', 73, 29, 43, 95),
(180, '2025-03-21 14:13:27', NULL, 'Upated realestate', 72, 29, 43, 111),
(181, '2025-03-21 14:13:27', NULL, 'Upated realestate', 71, 29, 43, 111),
(182, '2025-03-21 14:13:27', NULL, 'store', 71, 29, 43, 112),
(183, '2025-03-27 09:41:16', NULL, 'product deleted', NULL, NULL, 43, 95),
(184, '2025-04-03 17:14:24', NULL, 'store', 0, 40, 54, 113),
(185, '2025-04-04 18:49:02', NULL, 'store', 0, 40, 54, 115),
(186, '2025-04-04 21:56:12', NULL, 'store', 0, 40, 54, 117),
(187, '2025-04-10 15:47:00', NULL, 'Upated realestate', 84, 29, 43, 112),
(188, '2025-04-10 15:55:23', NULL, 'Upated realestate', 83, 29, 43, 112),
(189, '2025-04-10 15:56:57', NULL, 'Upated realestate', 82, 29, 43, 112),
(190, '2025-04-10 15:59:36', NULL, 'Upated realestate', 81, 29, 43, 112),
(191, '2025-04-10 16:16:58', NULL, 'Upated realestate', 80, 29, 43, 112),
(192, '2025-04-10 16:18:09', NULL, 'Upated realestate', 79, 29, 43, 112),
(193, '2025-04-17 10:43:06', NULL, 'store', 79, 29, 43, 120),
(194, '2025-04-23 03:23:57', NULL, 'store', 78, 29, 43, 121),
(195, '2025-04-24 10:58:00', NULL, 'store', 77, 29, 43, 122),
(196, '2025-04-24 17:30:19', NULL, 'Upated realestate', 75, 29, 43, 121),
(197, '2025-04-24 17:30:19', NULL, 'Upated realestate', 74, 29, 43, 121),
(198, '2025-04-27 00:11:05', NULL, 'store', 74, 29, 43, 123),
(199, '2025-04-27 00:11:05', NULL, 'store', 73, 29, 43, 124),
(200, '2025-05-03 23:41:08', NULL, 'Upated realestate', 71, 29, 43, 122),
(201, '2025-05-03 23:41:08', NULL, 'Upated realestate', 70, 29, 43, 124);

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `birth` varchar(255) NOT NULL,
  `adm_enable` tinyint(1) NOT NULL,
  `confirm_token` varchar(225) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `identifier` varchar(45) NOT NULL,
  `municipalitie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `district_id` bigint(20) UNSIGNED DEFAULT NULL,
  `citie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `identity_card` varchar(225) NOT NULL,
  `avatar` varchar(225) DEFAULT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `firstname`, `lastname`, `birth`, `adm_enable`, `confirm_token`, `phone`, `identifier`, `municipalitie_id`, `district_id`, `citie_id`, `role`, `email`, `email_verified_at`, `password`, `status`, `remember_token`, `created_at`, `updated_at`, `identity_card`, `avatar`, `countrie_id`) VALUES
(1, 'Admin', 'Admin test', '254525', 1, NULL, '0125455554', '123456789', NULL, NULL, NULL, 'admin_s', 'admin@gmail.com', NULL, '$2y$12$9MMxVHmf77xHnif1ALOe6.x6iS7OPczu37.VLGO74njHQuhZOGPXq', 0, 'dw8uyPhyUKkRDhbeY1gJCWSoThTP2NgqLpcWx2LERdCkYZUQFeSJpS8RweJ9', NULL, NULL, '1455225', NULL, 41);

-- --------------------------------------------------------

--
-- Structure de la table `app_versions`
--

CREATE TABLE `app_versions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `latest_version` varchar(10) NOT NULL DEFAULT '1.0.0',
  `minimum_required_version` varchar(10) NOT NULL DEFAULT '1.0.0',
  `update_url` varchar(225) NOT NULL DEFAULT 'https://play.google.com/store/apps/details?id=com.votre.app',
  `force_update` tinyint(1) NOT NULL DEFAULT 0,
  `release_notes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `app_versions`
--

INSERT INTO `app_versions` (`id`, `created_at`, `updated_at`, `latest_version`, `minimum_required_version`, `update_url`, `force_update`, `release_notes`) VALUES
(1, '2025-06-05 17:20:45', '2025-06-05 17:20:45', '1.0.1', '1.0.0', 'https://play.google.com/store/apps/details?id=dsdsdds', 0, 'La version 1.0.0 de la base updayye dsd dsd Dépendances critiques\n\n    http : Pour interroger votre API REST.\n\n    package_info_plus : Récupère la version installée (pubspec.yaml).\n\n    url_launcher : Ouvre le lien du Play Store/App Store.\n\nConfiguration Android/iOS\n\n    Le versionCode (Android) et CFBundleVersion (iOS) doivent correspondre au numéro après + dans pubspec.yaml.\n\n    Exemple pour Android (android/app/build.gradle) :');

-- --------------------------------------------------------

--
-- Structure de la table `busies`
--

CREATE TABLE `busies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cat_name` varchar(45) NOT NULL,
  `cat_status` tinyint(1) NOT NULL,
  `cat_image` longtext NOT NULL,
  `type_slog` varchar(15) NOT NULL,
  `slug` varchar(20) NOT NULL,
  `type_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `created_at`, `updated_at`, `cat_name`, `cat_status`, `cat_image`, `type_slog`, `slug`, `type_id`) VALUES
(1, '2024-07-27 16:40:36', '2024-07-27 16:40:36', 'Villa', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M120-120v-520l520-200v360h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v360H120Zm80-80h160v-280h200v-244L200-585v385Zm240 0h120v-120h80v120h120v-200H440v200ZM280-560Zm320 360Zm0-20Z\"/></svg>', 'house_type', 'house_villa', 1),
(2, '2024-07-27 16:40:36', '2024-07-27 16:40:36', 'studio', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z\"/></svg>', 'house_type', 'house_studio', 1),
(3, '2024-07-28 02:13:05', '2024-07-28 02:13:05', 'Chambre salon', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z\"/></svg>', 'house_type', 'house_livingroom', 1),
(4, '2024-09-22 23:48:09', '2024-09-22 23:48:09', 'Espace cultivable', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M80-160v-80h230q-22-85-83.5-146.5T80-470q20-5 39.5-7.5T160-480q134 0 227 93t93 227H80Zm480 0q0-42-9-83.5T525-323q42-71 114.5-114T800-480q21 0 40.5 2.5T880-470q-85 22-146 83.5T650-240h230v80H560Zm-80-239q0-65 24-122t66-100.5q42-43.5 98.5-69.5T789-719q-56 35-98 86t-65 114q-44 21-80.5 51.5T480-399Zm-73-75q-12-9-24-17t-25-16q0-6 1-12.5t1-12.5q0-76-24-144t-68-124q66 27 114.5 77.5T457-606q-18 30-31 63.5T407-474Z\"/></svg>', 'area_type', 'area_forest', 2),
(5, '2024-09-22 23:48:09', '2024-09-22 23:48:09', 'Terrain', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M520-400h200v-240H520v240ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z\"/></svg>', 'area_type', 'area_land', 2),
(6, '2024-09-22 23:50:00', '2024-09-22 23:50:00', 'Camion', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z\"/></svg>', 'car_type', 'car_truck', 3),
(7, '2024-09-23 10:26:51', '2024-09-23 10:26:51', 'Personnel', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-car-front-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z\"/>\n</svg>', 'car_type', 'car_personal', 3),
(8, '2024-09-23 10:26:51', '2024-09-23 10:26:51', 'TriCycliste', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M0-200v-80h164q11-68 56.5-119T332-470l-58-250H120v-80h154q27 0 49.5 17.5T352-738l78 338h-30q-66 0-113 47t-47 113v40H0Zm400 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T440-240q0-17-11.5-28.5T400-280q-17 0-28.5 11.5T360-240q0 17 11.5 28.5T400-200Zm360-40q-72 0-126.5-44.5T564-400h-94l-18-80h112q5-23 13.5-43t22.5-37H434l-18-80h226l-44-120H494v-80h104q26 0 46.5 14t29.5 38l54 146h32q83 0 141.5 58.5T960-442q0 85-58.5 143.5T760-240Zm0-80q51 0 85.5-35t34.5-85q0-51-34.5-85.5T760-560h-4l40 106-76 28-38-106q-20 17-31 40t-11 52q0 50 34.5 85t85.5 35Zm-360 80Zm360-200Z\"/></svg>', 'car_type', 'car_tricycle', 3),
(9, '2024-10-09 13:58:04', '2024-10-09 13:58:04', 'Magasin', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z\"/></svg>', 'house_type', 'house_store', 1),
(16, '2025-06-07 14:30:21', '2025-06-07 14:30:21', 'Moto', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M160-200q-66 0-113-47T0-360q0-57 36.5-101t93.5-55l-28-24H0v-60h180l100 60 160-60h126l-62-80H400v-80h142l84 108 134-68v120h-92l70 92q15-6 30.5-9t31.5-3q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-27 9.5-52.5T676-460l-20-24-136 204H400l-80-70q-5 63-51 106.5T160-200Zm0-80q33 0 56.5-23.5T240-360q0-33-23.5-56.5T160-440q-33 0-56.5 23.5T80-360q0 33 23.5 56.5T160-280Zm294-240-144 54 144-54h130-130Zm346 240q33 0 56.5-23.5T880-360q0-33-23.5-56.5T800-440q-33 0-56.5 23.5T720-360q0 33 23.5 56.5T800-280Zm-322-80 106-160H454l-144 54 120 106h48Z\"/></svg>', 'car_type', 'car_moto', 3),
(17, '2025-06-07 20:13:55', '2025-06-07 20:13:55', 'Appartement meublé', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M280-240h40v-60h320v60h40v-160q0-33-23.5-56.5T600-480H460v140H320v-180h-40v280Zm110-120q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z\"/></svg>', 'house_type', 'house_mble', 1),
(18, '2025-06-07 20:27:29', '2025-06-07 20:27:29', 'Hôtel', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z\"/></svg>', 'house_type', 'house_hotel', 1),
(19, '2025-06-07 20:58:46', '2025-06-07 20:58:46', 'Bus', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z\"/></svg>', 'car_type', 'car_bus', 3),
(20, '2025-06-07 21:12:28', '2025-06-07 21:12:28', 'mini-car', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M240-280q-39 0-69.5-22.5T128-360h-8q-33 0-56.5-23.5T40-440v-320q0-33 23.5-56.5T120-840h482q18 0 34 7t28 21l158 190q9 11 13.5 23.5T840-572v58q35 12 57.5 43.5T920-400q0 50-35 85t-85 35q-39 0-70.5-22.5T686-360H354q-14 35-44.5 57.5T240-280ZM120-640h160v-120H120v120Zm240 200h200v-320H360v120h120v80H360v120Zm280-160h96l-96-116v116ZM240-360q17 0 28.5-11.5T280-400q0-17-11.5-28.5T240-440q-17 0-28.5 11.5T200-400q0 17 11.5 28.5T240-360Zm560 0q17 0 28.5-11.5T840-400q0-17-11.5-28.5T800-440q-17 0-28.5 11.5T760-400q0 17 11.5 28.5T800-360ZM520-40 280-160h160v-80l240 120H520v80ZM120-560v120h6q14-35 44.5-57.5T240-520q11 0 21 1.5t19 4.5v-46H120Zm520 120h46q9-26 28.5-45.5T760-514v-6H640v80ZM120-560h160-160Zm520 40h120-120Z\"/></svg>', 'car_type', 'car_mbus', 3),
(21, '2025-06-07 23:56:14', '2025-06-07 23:56:14', 'Résidence', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z\"/></svg>', 'house_type', 'house_resid', 1);

-- --------------------------------------------------------

--
-- Structure de la table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `c_name` varchar(255) NOT NULL,
  `c_status` tinyint(1) NOT NULL DEFAULT 1,
  `countrie_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cities`
--

INSERT INTO `cities` (`id`, `created_at`, `updated_at`, `c_name`, `c_status`, `countrie_id`) VALUES
(1, '2024-07-29 18:46:03', '2024-07-29 18:46:03', 'Abidjan', 1, 24),
(2, '2024-07-29 18:46:03', '2024-07-29 18:46:03', 'Bouaké', 1, 24),
(3, '2024-07-29 18:47:00', '2024-07-29 18:47:00', 'Korhogo', 1, 24),
(4, '2024-07-29 18:47:00', '2024-07-29 18:47:00', 'Alepé', 1, 24),
(5, '2024-09-22 13:16:24', '2024-09-22 13:16:24', 'Yamoussoukro', 1, 24),
(6, '2024-09-22 13:16:24', '2024-09-22 13:16:24', 'San-Pédro', 1, 24),
(7, '2025-06-09 23:00:57', '2025-06-09 23:00:57', 'Daloa', 1, 24),
(8, '2025-06-09 23:00:57', '2025-06-09 23:00:57', 'Man', 1, 24),
(9, '2025-06-09 23:02:02', '2025-06-09 23:02:02', 'Gagnoa', 1, 24),
(10, '2025-06-09 23:02:02', '2025-06-09 23:02:02', 'Abengourou', 1, 24),
(11, '2025-06-09 23:02:52', '2025-06-09 23:02:52', 'Divo', 1, 24),
(12, '2025-06-09 23:02:52', '2025-06-09 23:02:52', 'Bondoukou', 1, 24),
(13, '2025-06-09 23:02:52', '2025-06-09 23:02:52', 'Agboville', 1, 24),
(19, '2025-06-12 17:21:17', '2025-06-12 17:21:17', 'Anyama', 1, 24),
(20, '2025-06-12 17:21:17', '2025-06-12 17:21:17', 'Aboisso', 1, 24),
(21, '2025-06-12 17:22:31', '2025-06-12 17:22:31', 'Soubré', 1, 24),
(22, '2025-06-12 17:22:31', '2025-06-12 17:22:31', 'Duékoué', 1, 24),
(23, '2025-06-12 17:22:31', '2025-06-12 17:22:31', 'Bouaflé', 1, 24),
(24, '2025-06-12 17:24:52', '2025-06-12 17:24:52', 'Bingerville', 1, 24),
(47, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Koumassi', 1, 24),
(48, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Guiglo', 1, 24),
(49, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Lakota', 1, 24),
(50, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Ferkéssédougou', 1, 24),
(51, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Adzopé', 1, 24),
(52, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Méagui', 1, 24),
(53, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Danané', 1, 24),
(54, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Dabou', 1, 24),
(55, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Sinfra', 1, 24),
(56, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Grand-Béréby', 1, 24),
(57, '2025-06-12 17:29:54', '2025-06-12 17:29:54', 'Vavoua', 1, 24),
(82, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Bouna', 1, 24),
(83, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Boundiali', 1, 24),
(84, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Tengréla', 1, 24),
(85, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Sago', 1, 24),
(86, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Katiola', 1, 24),
(87, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Songon', 1, 24),
(88, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Toumodi', 1, 24),
(89, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Afféry', 1, 24),
(90, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Odienné', 1, 24),
(91, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Ouangolodougou', 1, 24),
(92, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Tiassalé', 1, 24),
(93, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Grand-Lahou', 1, 24),
(94, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Mankono', 1, 24),
(95, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Dimbokro', 1, 24),
(96, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Tabou', 1, 24),
(97, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Dogbo', 1, 24),
(98, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Bocanda', 1, 24),
(99, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Taabo', 1, 24),
(100, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Jacqueville', 1, 24),
(101, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Zuénoula', 1, 24),
(102, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Akoupé', 1, 24),
(103, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Doropo', 1, 24),
(104, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Fresco', 1, 24),
(105, '2025-06-12 17:36:05', '2025-06-12 17:36:05', 'Bangolo', 1, 24),
(134, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Dahiri', 1, 24),
(135, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Lolobo', 1, 24),
(136, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Kong', 1, 24),
(137, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Kossou', 1, 24),
(138, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Bongouanou', 1, 24),
(139, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Touba', 1, 24),
(140, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Béoumi', 1, 24),
(141, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Biankouma', 1, 24),
(142, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Toulépleu', 1, 24),
(143, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Tiébissou', 1, 24),
(144, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Adiaké', 1, 24),
(145, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Sakassou', 1, 24),
(146, '2025-06-12 17:39:30', '2025-06-12 17:39:30', 'Botro', 1, 24);

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `companie_name` varchar(45) DEFAULT NULL,
  `identifier` varchar(20) DEFAULT NULL,
  `companie_slogan` varchar(255) DEFAULT NULL,
  `companie_description` longtext DEFAULT NULL,
  `companie_logo` varchar(255) DEFAULT NULL,
  `companie_status` tinyint(1) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `companies`
--

INSERT INTO `companies` (`id`, `created_at`, `updated_at`, `companie_name`, `identifier`, `companie_slogan`, `companie_description`, `companie_logo`, `companie_status`, `user_id`, `countrie_id`) VALUES
(33, '2024-10-01 09:59:30', '2024-10-01 09:59:30', 'Agence xap ', '430765510462', 'VFaire volé votre agenc', 'x Onnsd Dans le cadre du développement du prototype de notre application réseau social. Nous souhaitons faire intervenir un développeur full stack qui nous aidera à terminer la phase de développement et de tests de notre prototype. Responsabilités : •⁠ ⁠Développer en suivant les bonnes pratiques et une architecture MVP/MVC optimale. Effectuer également une revue de code sur le code existant et corriger les éventuels bugs. •⁠ ⁠Améliorer les configurations sur Firebase, pour l\'authentification, la BD Firestore, pour les notifications push, le stockage. •⁠ ⁠Améliorer la configuration des pipelines d\'intégration continue et de déploiement continu (CI/CD) via Github Actions pour automatiser les tests, les builds et les déploiements. •⁠ ⁠Proposer un environnement de déploiement adéquat et assurer le déploiement pour tester le prototype. •⁠ ⁠Tests et Qualité : Rédiger des tests unitaires, fonctionnels et d\'intégration pour', NULL, 1, 43, 1),
(34, '2024-10-05 13:07:20', '2024-10-05 13:07:20', NULL, '445925112000', NULL, NULL, NULL, 1, 44, 1),
(35, '2024-10-15 00:54:34', '2024-10-15 00:54:34', 'Bpildd ange ', '626999094414', 'Slogi sdd dsds', 'Recrutement d’un développeur freelance H/F\nDans le cadre du développement du prototype de notre application réseau social. Nous\nsouhaitons faire intervenir un développeur full stack qui nous aidera à terminer la\nphase de développement et de tests de notre prototype.\nResponsabilités :\n•⁠ ⁠Développer en suivant les bonnes pratiques et une architecture MVP/MVC optimale.\nEffectuer également une revue de code sur le code existant et corriger les éventuels\nbugs.\n•⁠ ⁠Améliorer les configurations sur Firebase, pour l\'authentification, la BD Firestore,\npour les notifications push, le stockage.\n•⁠ ⁠Améliorer la configuration des pipelines d\'intégration continue et de déploiement\ncontinu (CI/CD) via Github Actions pour automatiser les tests, les builds et les\ndéploiements.\n•⁠ ⁠Proposer un environnement de déploiement adéquat et assurer le déploiement pour\ntester le prototype.\n•⁠ ⁠Tests et Qualité : Rédiger des tests unitaires, fonctionnels et d\'intégration pour\nassurer la qualité du code.\nCompétences attendues :\n•⁠ ⁠Maîtrise de Flutter pour le développement mobile cross-platform (au moins 2 ans\nd\'xp)\n•⁠ ⁠L\'écosystème Firebase (Firestore, stockage, notifications, Cloud Functions)\n•⁠ ⁠NodeJS, API Rest\n•⁠ ⁠Architecture MVP/MVC\n•⁠ ⁠Versionning avec Github\n•⁠ ⁠CI/CD avec Github Actions\n•⁠ ⁠Rédiger du code propre, maintenable et bien documenté', NULL, 1, 62, 10),
(36, '2024-10-15 10:48:08', '2024-10-15 10:48:08', NULL, '648212847460', NULL, NULL, NULL, 1, 64, 3),
(38, '2024-10-17 09:29:17', '2024-10-17 09:29:17', NULL, '665589380513', NULL, NULL, NULL, 1, 66, 1),
(39, '2024-10-17 09:37:09', '2024-10-17 09:37:09', NULL, '685188252603', NULL, NULL, NULL, 1, 68, 1),
(40, '2024-10-17 09:37:09', '2024-10-17 09:37:09', NULL, '693633590770', NULL, NULL, NULL, 1, 69, 16),
(41, '2024-10-28 20:50:57', '2024-10-28 20:50:57', 'Angebce update', '708962628174', 'Votre maison dsd', 'Maisons à vendre - 11393 annonces ⇔ Laforêt Immobilier\nVous cherchez à acheter une maison ? Retrouvez l\'ensemble de nos maisons disponibles à l\'achat par ville. Avec ou sans jardin, avec une cave, piscine ou encore de plain-pied, il y a obligatoirement la maison de vos rêves parmi toutes nos offres de maisons. Vous ne trouvez pas le bien recherché ?', NULL, 1, 70, 17),
(42, '2024-10-28 20:50:57', '2024-10-28 20:50:57', 'Avidd agnece', '712493940082', 'LOD de mdsds', 'Maisons à vendre - 11393 annonces ⇔ Laforêt Immobilier\nVous cherchez à acheter une maison ? Retrouvez l\'ensemble de nos maisons disponibles à l\'achat par ville. Avec ou sans jardin, avec une cave, piscine ou encore de plain-pied, il y a obligatoirement la maison de vos rêves parmi toutes nos offres de maisons. Vous ne trouvez pas le bien recherché ?', NULL, 1, 71, 1),
(43, '2024-10-30 16:30:13', '2024-10-30 16:30:13', 'Agencex update ', '727689187339', 'Trouve plus ici udape55', '1. Nom d\'organismes administratifs chargés de tâches d\'information et/ou de coordination : Agence nationale pour l\'emploi. 2. Établissement commercial traitant de problèmes spécifiques et servant en particulier d\'intermédiaire entre la clientèle et des professionnels : Agence matrimoniale.', 'medias/company/1748906887600-IMG-20250507-WA0005.jpg', 1, 72, 24),
(47, '2025-03-06 13:18:30', '2025-03-06 13:18:30', NULL, '823622383435', NULL, NULL, 'medias/company/1748863438109-th-1727811168.jpg', 1, 82, 24),
(48, '2025-03-12 07:20:49', '2025-03-12 07:20:49', NULL, '832311021316', NULL, NULL, NULL, 1, 83, 24),
(49, '2025-03-20 23:36:40', '2025-03-20 23:36:40', NULL, '854146813503', NULL, NULL, NULL, 1, 85, 30),
(50, '2025-03-25 01:11:44', '2025-03-25 01:11:44', NULL, '105990455090', NULL, NULL, NULL, 1, 105, 24),
(51, '2025-03-25 22:47:31', '2025-03-25 22:47:31', NULL, '107823330061', NULL, NULL, NULL, 1, 107, 24),
(52, '2025-03-26 08:48:31', '2025-03-26 08:48:31', NULL, '108557969831', NULL, NULL, NULL, 1, 108, 24),
(53, '2025-03-27 02:19:11', '2025-03-27 02:19:11', NULL, '109669352655', NULL, NULL, NULL, 1, 109, 24),
(54, '2025-04-03 12:33:34', '2025-04-03 12:33:34', NULL, '112198024427', NULL, NULL, NULL, 1, 112, 24),
(55, '2025-04-08 11:39:39', '2025-04-08 11:39:39', NULL, '115132600260', NULL, NULL, NULL, 1, 115, 24),
(56, '2025-04-20 10:04:12', '2025-04-20 10:04:12', NULL, '117280717333', NULL, NULL, NULL, 1, 117, 24),
(57, '2025-04-20 10:04:12', '2025-04-20 10:04:12', NULL, '118424283486', NULL, NULL, NULL, 1, 118, 24),
(58, '2025-04-20 10:04:12', '2025-04-20 10:04:12', NULL, '119448287660', NULL, NULL, NULL, 1, 119, 24),
(59, '2025-04-20 10:04:12', '2025-04-20 10:04:12', NULL, '120552817152', NULL, NULL, NULL, 1, 120, 24),
(60, '2025-04-20 15:38:40', '2025-04-20 15:38:40', NULL, '121009402121', NULL, NULL, NULL, 1, 121, 24),
(61, '2025-04-20 15:38:40', '2025-04-20 15:38:40', NULL, '122286324548', NULL, NULL, NULL, 1, 122, 24),
(62, '2025-04-20 15:38:40', '2025-04-20 15:38:40', NULL, '123244200628', NULL, NULL, NULL, 1, 123, 24),
(63, '2025-06-01 23:23:34', '2025-06-01 23:23:34', NULL, '124174383167', NULL, NULL, 'medias/company/1748954155772-oiseau.jpeg', 1, 124, 24);

-- --------------------------------------------------------

--
-- Structure de la table `conditions`
--

CREATE TABLE `conditions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `conditions_wording` varchar(45) NOT NULL,
  `conditions_status` tinyint(1) NOT NULL,
  `conditions_icon` longtext NOT NULL,
  `conditions_slog` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `conditions`
--

INSERT INTO `conditions` (`id`, `created_at`, `updated_at`, `conditions_wording`, `conditions_status`, `conditions_icon`, `conditions_slog`) VALUES
(2, '2024-07-27 17:05:47', '2024-07-27 17:05:47', 'Location', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M120-160v-112q0-34 17.5-62.5T184-378q62-31 126-46.5T440-440q20 0 40 1.5t40 4.5q-4 58 21 109.5t73 84.5v80H120ZM760-40l-60-60v-186q-44-13-72-49.5T600-420q0-58 41-99t99-41q58 0 99 41t41 99q0 45-25.5 80T790-290l50 50-60 60 60 60-80 80ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm300 80q17 0 28.5-11.5T780-440q0-17-11.5-28.5T740-480q-17 0-28.5 11.5T700-440q0 17 11.5 28.5T740-400Z\"/></svg>', 'cxc_location'),
(3, '2024-07-28 01:59:55', '2024-07-28 01:59:55', 'Vente', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z\"/></svg>', 'cxc_vente');

-- --------------------------------------------------------

--
-- Structure de la table `configurations`
--

CREATE TABLE `configurations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `option` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `configurations`
--

INSERT INTO `configurations` (`id`, `created_at`, `updated_at`, `option`, `value`) VALUES
(1, '2024-07-21 13:24:45', '2024-07-21 13:24:45', 'api_key', 'visKlwdh15dh459djd0dpIS');

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `countries_name` varchar(70) NOT NULL,
  `countries_status` tinyint(1) NOT NULL,
  `countries_flag` text DEFAULT NULL,
  `countries_code` varchar(10) NOT NULL,
  `countries_currency` varchar(45) DEFAULT NULL,
  `slug` varchar(10) DEFAULT NULL,
  `number_size` int(11) DEFAULT NULL,
  `currencie_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `countries`
--

INSERT INTO `countries` (`id`, `created_at`, `updated_at`, `countries_name`, `countries_status`, `countries_flag`, `countries_code`, `countries_currency`, `slug`, `number_size`, `currencie_id`) VALUES
(24, '2024-10-30 16:30:13', '2024-10-30 16:30:13', 'Côte d\'Ivoire', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"480\" width=\"640\" id=\"flag-icon-css-ci\">\n  <g fill-rule=\"evenodd\">\n    <path fill=\"#00cd00\" d=\"M426.83 0H640v480H426.83z\"/>\n    <path fill=\"#ff9a00\" d=\"M0 0h212.88v480H0z\"/>\n    <path fill=\"#fff\" d=\"M212.88 0h213.95v480H212.88z\"/>\n  </g>\n</svg>', '225', 'FCFA', 'CI', 10, 1),
(25, '2024-10-30 17:26:51', '2024-10-30 17:26:51', 'Burkina Faso', 1, NULL, '226', 'FCFA', 'BF', 0, 2),
(27, '2024-11-12 11:52:31', '2024-11-12 11:52:31', 'Afghanistan', 1, NULL, '93', NULL, 'AF', 0, NULL),
(28, '2024-11-12 11:52:31', '2024-11-12 11:52:31', 'Algeria', 1, NULL, '213', NULL, 'DZ', 0, NULL),
(29, '2024-11-12 11:52:31', '2024-11-12 11:52:31', 'Albania', 1, NULL, '355', NULL, 'AL', 0, NULL),
(30, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'Germany', 1, NULL, '49', '$', 'DE', 0, 2),
(31, '2025-03-25 01:11:44', '2025-03-25 01:11:44', 'South Africa', 1, NULL, '27', NULL, 'ZA', 0, NULL),
(32, '2025-04-03 13:21:03', '2025-04-03 13:21:03', 'Antarctica', 1, NULL, '672', NULL, 'AQ', 6, NULL),
(33, '2025-04-03 13:30:52', '2025-04-03 13:30:52', 'Angola', 1, NULL, '244', NULL, 'AO', 9, NULL),
(34, '2025-04-15 17:21:40', '2025-04-15 17:21:40', 'Andorra', 1, NULL, '376', NULL, 'AD', NULL, NULL),
(35, '2025-04-15 17:21:40', '2025-04-15 17:21:40', 'Azerbaijan', 1, NULL, '994', NULL, 'AZ', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `devis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `currencies`
--

INSERT INTO `currencies` (`id`, `created_at`, `updated_at`, `devis`) VALUES
(1, '2025-04-05 01:36:33', '2025-04-05 01:36:33', 'FCFA'),
(2, '2025-04-05 01:36:33', '2025-04-05 01:36:33', '$');

-- --------------------------------------------------------

--
-- Structure de la table `debugs`
--

CREATE TABLE `debugs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `error` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `districts`
--

CREATE TABLE `districts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dist_name` varchar(255) NOT NULL,
  `dist_status` tinyint(1) NOT NULL,
  `citie_id` bigint(20) UNSIGNED NOT NULL,
  `municipalitie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `email_verified_codes`
--

CREATE TABLE `email_verified_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `email_verified_codes`
--

INSERT INTO `email_verified_codes` (`id`, `created_at`, `updated_at`, `email`, `code`) VALUES
(207, '2025-06-03 21:35:45', '2025-06-06 10:45:33', '355024525662', '23394'),
(208, '2025-06-10 17:26:56', NULL, 'sqsqsqss@sqsq.co', '06418'),
(209, '2025-06-10 17:26:56', NULL, 'sqsqsqss@sqsq.cds', '07163'),
(210, '2025-06-10 17:26:56', NULL, 'dsdsdd@dsds.cio ', '27535'),
(211, '2025-06-10 17:26:56', NULL, 'dsdsdd@dsds.csd ', '08149'),
(212, '2025-06-10 17:26:56', NULL, 'adou2@gmail.com', '52294');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `favorites`
--

INSERT INTO `favorites` (`id`, `created_at`, `updated_at`, `product_id`, `user_id`) VALUES
(179, '2025-05-30 12:04:10', NULL, 121, 72),
(187, '2025-06-09 12:32:52', NULL, 123, 72);

-- --------------------------------------------------------

--
-- Structure de la table `folders`
--

CREATE TABLE `folders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `folders_url` varchar(255) NOT NULL,
  `folders_status` tinyint(1) NOT NULL,
  `folders_first` tinyint(1) DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `folders`
--

INSERT INTO `folders` (`id`, `created_at`, `updated_at`, `folders_url`, `folders_status`, `folders_first`, `product_id`) VALUES
(241, '2024-10-30 18:57:08', '2024-10-30 18:57:08', 'medias/products/1730315089434-Design sans titre(19).jpg', 1, 0, 89),
(242, '2024-10-30 18:57:08', '2024-10-30 18:57:08', 'medias/products/1730315089439-Design sans titre(9).jpg', 1, 0, 89),
(244, '2024-11-11 11:55:46', '2024-11-11 11:55:46', 'medias/products/1731326655651-IMG-20241106-WA0008.jpg', 1, 0, 90),
(245, '2024-11-11 11:55:46', '2024-11-11 11:55:46', 'medias/products/1731326655668-IMG-20241106-WA0015.jpg', 1, 0, 90),
(246, '2024-11-11 11:55:46', '2024-11-11 11:55:46', 'medias/products/1731326655937-IMG-20241106-WA0010.jpg', 1, 0, 90),
(247, '2024-11-11 11:55:46', '2024-11-11 11:55:46', 'medias/products/1731326655946-IMG-20241106-WA0013.jpg', 1, 0, 90),
(249, '2024-11-11 16:37:17', '2024-11-11 16:37:17', 'medias/products/1731367317191-Design sans titre.jpg', 1, 0, 91),
(251, '2024-11-18 09:17:28', '2024-11-18 09:17:28', 'medias/products/1731923124713-2_2.jpeg', 1, 0, 92),
(252, '2024-11-18 09:17:28', '2024-11-18 09:17:28', 'medias/products/1731923124721-3.jpg', 1, 0, 92),
(259, '2024-11-26 09:29:30', '2024-11-26 09:29:30', 'medias/products/1732615757810-hands-820272_1280.jpg', 1, 0, 94),
(265, '2024-11-28 10:05:17', '2024-11-28 10:05:17', 'medias/products/1732795031299-developpemment-web.jpg', 1, 0, 94),
(267, '2024-11-28 12:46:15', '2024-11-28 12:46:15', 'medias/products/1732798122348-man-gd37b7871c_640.jpg', 1, 0, 94),
(270, '2024-11-28 12:57:20', '2024-11-28 12:57:20', 'medias/products/1732799300148-informatser.png', 1, 0, 94),
(298, '2024-11-28 14:29:39', '2024-11-28 14:29:39', 'medias/products/1732805948559-man-gd37b7871c_640.jpg', 1, 0, 93),
(308, '2024-11-28 23:55:28', '2024-11-28 23:55:28', 'medias/products/1732838144303-developpemment-web.jpg', 1, 0, 91),
(309, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732839203012-informatser.png', 1, 0, 91),
(311, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732840756888-rechemploi.png', 1, 0, 89),
(312, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732840815001-makting.webp', 1, 0, 91),
(313, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732887188996-developpemment-web.jpg', 1, 0, 92),
(316, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732890121896-makting.webp', 1, 0, 93),
(318, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732890235535-whatsapp.jpg', 1, 0, 93),
(319, '2024-11-29 00:13:06', '2024-11-29 00:13:06', 'medias/products/1732890349875-whatsapp.jpg', 1, 0, 92),
(321, '2024-11-29 14:30:39', '2024-11-29 14:30:39', 'medias/products/1732891271020-web-site.png', 1, 0, 93),
(322, '2024-11-29 14:30:39', '2024-11-29 14:30:39', 'medias/products/1732891271020-gmail.png', 1, 0, 93),
(323, '2023-03-11 17:11:10', '2023-03-11 17:11:10', 'medias/products/1734513663970-676-72px-1024x1024-1.webp', 1, 0, 95),
(324, '2023-03-11 17:11:10', '2023-03-11 17:11:10', 'medias/products/1734513663973-makting.webp', 1, 0, 95),
(325, '2023-03-11 17:11:10', '2023-03-11 17:11:10', 'medias/products/1734513896764-TÃ©lÃ©communications-750x422.jpg', 1, 0, 96),
(327, '2024-12-18 22:49:04', '2024-12-18 22:49:04', 'medias/products/1734590946524-676-72px-1024x1024-1.webp', 1, 0, 93),
(328, '2024-12-29 17:56:34', '2024-12-29 17:56:34', 'medias/products/1735502091563-IMG-20241217-WA0000.jpg', 1, 0, 97),
(329, '2024-12-29 17:56:34', '2024-12-29 17:56:34', 'medias/products/1735502091574-IMG-20241217-WA0003.jpg', 1, 0, 97),
(330, '2024-12-29 17:56:34', '2024-12-29 17:56:34', 'medias/products/1735502091651-IMG-20241214-WA0000.jpg', 1, 0, 97),
(331, '2024-12-29 17:56:34', '2024-12-29 17:56:34', 'medias/products/1735555258462-IMG-20241213-WA0002.jpg', 1, 0, 95),
(332, '2024-12-29 17:56:34', '2024-12-29 17:56:34', 'medias/products/1735555258518-IMG-20241219-WA0005.jpg', 1, 0, 95),
(333, '2025-03-04 15:42:42', '2025-03-04 15:42:42', 'medias/products/1741103214760-mongodb.png', 1, 0, 98),
(334, '2025-03-04 15:42:42', '2025-03-04 15:42:42', 'medias/products/1741103214762-developpemment-web.jpg', 1, 0, 98),
(335, '2025-03-04 21:32:32', '2025-03-04 21:32:32', 'medias/products/1741132048344-IMG_20250105_102212_530.jpg', 1, 0, 99),
(336, '2025-03-04 21:32:32', '2025-03-04 21:32:32', 'medias/products/1741132049027-IMG-20250304-WA0001.jpg', 1, 0, 99),
(337, '2025-03-04 21:32:32', '2025-03-04 21:32:32', 'medias/products/1741132049036-IMG-20250304-WA0000.jpg', 1, 0, 99),
(338, '2025-03-05 22:29:18', '2025-03-05 22:29:18', 'medias/products/1741216525911-38cd8053-f222-43ce-a662-4683a6105a46.png', 1, 0, 100),
(339, '2025-03-05 22:29:18', '2025-03-05 22:29:18', 'medias/products/1741216525922-96e562e3-5ba1-408c-bd3e-a9164101af65.png', 1, 0, 100),
(340, '2025-03-05 22:29:18', '2025-03-05 22:29:18', 'medias/products/1741216525949-d08fa49d-c2b8-4282-a0e4-7831901da134.png', 1, 0, 100),
(341, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767062656-th-32314010.jpg', 1, 0, 101),
(342, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767062659-nav-logo.png', 1, 0, 101),
(343, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767062659-th-1727811168.jpg', 1, 0, 101),
(344, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767062660-th-1284730766.jpg', 1, 0, 101),
(345, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767063076-IMG-20250311-WA0002.jpg', 1, 0, 102),
(346, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767063087-IMG-20250311-WA0003.jpg', 1, 0, 102),
(347, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767063094-IMG-20250310-WA0007.jpg', 1, 0, 102),
(348, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767063114-IMG-20250310-WA0010.jpg', 1, 0, 102),
(349, '2025-03-12 07:38:08', '2025-03-12 07:38:08', 'medias/products/1741767063136-IMG-20250310-WA0005.jpg', 1, 0, 102),
(350, '2025-03-13 12:33:57', '2025-03-13 12:33:57', 'medias/products/1741869409285-imAfrik.png', 1, 0, 103),
(351, '2025-03-13 12:33:57', '2025-03-13 12:33:57', 'medias/products/1741869409286-th-21665248.jpg', 1, 0, 103),
(352, '2025-03-13 13:09:38', '2025-03-13 13:09:38', 'medias/products/1741871584577-th-1727811168.jpg', 1, 0, 104),
(353, '2025-03-13 13:09:38', '2025-03-13 13:09:38', 'medias/products/1741871584579-th-1284730766.jpg', 1, 0, 104),
(354, '2025-03-13 13:09:38', '2025-03-13 13:09:38', 'medias/products/1741871584582-nav-logo.png', 1, 0, 104),
(355, '2025-03-13 13:09:38', '2025-03-13 13:09:38', 'medias/products/1741872690992-th-21665248.jpg', 1, 0, 105),
(356, '2025-03-13 13:09:38', '2025-03-13 13:09:38', 'medias/products/1741872690992-imAfrik.png', 1, 0, 105),
(357, '2025-03-14 09:23:04', '2025-03-14 09:23:04', 'medias/products/1741963686055-css-3.png', 1, 0, 106),
(358, '2025-03-14 09:23:04', '2025-03-14 09:23:04', 'medias/products/1741963686057-th-1284730766.jpg', 1, 0, 106),
(359, '2025-03-14 09:23:04', '2025-03-14 09:23:04', 'medias/products/1741963686058-Orange-Money-emblem-500x228.png', 1, 0, 106),
(360, '2025-03-14 09:23:04', '2025-03-14 09:23:04', 'medias/products/1741963686062-th-21665248.jpg', 1, 0, 106),
(361, '2025-03-15 01:50:50', '2025-03-15 01:50:50', 'medias/products/1742004839525-IMG-20250312-WA0001.jpg', 1, 0, 96),
(362, '2025-03-15 13:55:48', '2025-03-15 13:55:48', 'medias/products/1742049923772-4b53afbc-793f-4cf9-948b-a6ca86175afd7578239407372723112.jpg', 1, 0, 107),
(363, '2025-03-15 13:55:48', '2025-03-15 13:55:48', 'medias/products/1742049924361-5d9daa68-2fab-4a96-9173-43d46c1aaceb2281587103084345935.jpg', 1, 0, 107),
(364, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742050933819-IMG-20250311-WA0002.jpg', 1, 0, 108),
(365, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742050933823-IMG-20250311-WA0003.jpg', 1, 0, 108),
(366, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742050933824-IMG-20250311-WA0001.jpg', 1, 0, 108),
(367, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742050933828-IMG-20250311-WA0005.jpg', 1, 0, 108),
(368, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742051109055-e4da4432-4e6f-4bb4-9ca1-5f89c3d8a369923540808275729671.jpg', 1, 0, 109),
(369, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742051109596-fe14f1d4-74c9-4d3c-8ad0-ef98012ae3b51341475398379390887.jpg', 1, 0, 109),
(370, '2025-03-15 14:56:46', '2025-03-15 14:56:46', 'medias/products/1742051209573-2ac03d5d-03d5-4b7d-9c54-1b1a05ee2ffa4202699837597952122.jpg', 1, 0, 109),
(371, '2025-03-20 07:25:27', '2025-03-20 07:25:27', 'medias/products/1742459495407-IMG-20250316-WA0034.jpg', 1, 0, 110),
(372, '2025-03-20 07:25:27', '2025-03-20 07:25:27', 'medias/products/1742459495417-IMG-20250316-WA0036.jpg', 1, 0, 110),
(373, '2025-03-20 07:25:27', '2025-03-20 07:25:27', 'medias/products/1742459495440-b1be03a6-c306-47e1-9626-3cacddf6bc2a3858665875049936584.jpg', 1, 0, 110),
(374, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700319-IMG-20250316-WA0031.jpg', 1, 0, 111),
(375, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700330-IMG-20250316-WA0032.jpg', 1, 0, 111),
(376, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700331-IMG-20250318-WA0000.jpg', 1, 0, 111),
(377, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700364-IMG-20250318-WA0005.jpg', 1, 0, 111),
(378, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700375-IMG-20250316-WA0035.jpg', 1, 0, 111),
(379, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 'medias/products/1742515700383-IMG-20250316-WA0033.jpg', 1, 0, 111),
(380, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732004-e8e129cd-b10b-4ed5-bea6-3f200ac2cda258446281079055378.jpg', 1, 0, 112),
(381, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732562-IMG-20250316-WA0031.jpg', 1, 0, 112),
(382, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732569-IMG-20250316-WA0032.jpg', 1, 0, 112),
(383, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732575-IMG-20250316-WA0024.jpg', 1, 0, 112),
(384, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732584-IMG-20250316-WA0033.jpg', 1, 0, 112),
(385, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732590-IMG-20250316-WA0028.jpg', 1, 0, 112),
(386, '2025-03-21 14:13:27', '2025-03-21 14:13:27', 'medias/products/1742568732596-IMG-20250316-WA0027.jpg', 1, 0, 112),
(387, '2025-04-03 17:14:24', '2025-04-03 17:14:24', 'medias/products/1743702614957-th-1727811168.jpg', 1, 0, 113),
(388, '2025-04-03 17:14:24', '2025-04-03 17:14:24', 'medias/products/1743702614961-th-1640033452.jpg', 1, 0, 113),
(389, '2025-04-03 17:14:24', '2025-04-03 17:14:24', 'medias/products/1743702614961-th-1454940118.jpg', 1, 0, 113),
(393, '2025-04-04 18:49:02', '2025-04-04 18:49:02', 'medias/products/1743802949643-tÃ©lÃ©chargement (1).jpg', 1, 0, 115),
(395, '2025-04-04 21:56:12', '2025-04-04 21:56:12', 'medias/products/1743804376482-tÃ©lÃ©chargement (2).jpg', 1, 0, 117),
(398, '2025-04-15 00:13:46', '2025-04-15 00:13:46', 'medias/products/1744678192353-tÃ©lÃ©chargement (1).jpg', 1, 0, 110),
(399, '2025-04-17 10:43:06', '2025-04-17 10:43:06', 'medias/products/1744896752263-de0bf090-a3c6-4d3a-beae-d055661749503855868336147300762.jpg', 1, 0, 120),
(400, '2025-04-23 03:23:57', '2025-04-23 03:23:57', 'medias/products/1745378967094-tÃ©lÃ©chargement.jpg', 1, 0, 121),
(401, '2025-04-24 10:58:00', '2025-04-24 10:58:00', 'medias/products/1745493015206-tÃ©lÃ©chargement.jpg', 1, 0, 122),
(404, '2025-05-31 01:57:08', '2025-05-31 01:57:08', 'medias/products/1748695344931-ffff.jpg', 1, 0, 124),
(405, '2025-05-31 01:57:08', '2025-05-31 01:57:08', 'medias/products/1748695429032-rrte.jpg', 1, 0, 123),
(406, '2025-05-31 01:57:08', '2025-05-31 01:57:08', 'medias/products/1748695429037-images.jpg', 1, 0, 123);

-- --------------------------------------------------------

--
-- Structure de la table `histories`
--

CREATE TABLE `histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `action` varchar(255) NOT NULL,
  `admin_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `histories`
--

INSERT INTO `histories` (`id`, `created_at`, `updated_at`, `action`, `admin_id`) VALUES
(1, '2025-04-26 01:37:54', NULL, 'Ajouter de l\'image undefined à la page page_1 niveau pub_1', 1),
(2, '2025-04-26 01:37:54', NULL, 'Ajouter de l\'image undefined à la page page_1 niveau pub_1', 1),
(3, '2025-04-26 01:37:54', NULL, 'Ajouter de l\'image undefined à la page page_1 niveau pub_2', 1),
(4, '2025-04-26 01:37:54', NULL, 'Ajouter de l\'image undefined à la page page_1 niveau pub_3', 1),
(5, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_2 niveau pub_1', 1),
(6, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_2 niveau pub_2', 1),
(7, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_2 niveau pub_3', 1),
(8, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_3 niveau pub_1', 1),
(9, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_3 niveau pub_2', 1),
(10, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_3 niveau pub_3', 1),
(11, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_4 niveau pub_1', 1),
(12, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_4 niveau pub_2', 1),
(13, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_4 niveau pub_3', 1),
(14, '2025-04-27 00:11:05', NULL, 'Ajouter de l\'image undefined à la page page_1 niveau pub_1', 1);

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(43, 72, 121, '2025-04-24 10:58:00', NULL),
(48, 72, 122, '2025-05-31 01:15:03', NULL),
(50, 72, 124, '2025-06-06 10:45:33', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `message` longtext NOT NULL,
  `read_user` tinyint(1) NOT NULL,
  `read_admin` tinyint(1) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_06_09_045153_create_roles_table', 1),
(5, '2024_06_09_045422_create_products_table', 1),
(6, '2024_06_09_051618_create_cities_table', 1),
(7, '2024_06_09_051934_create_municipalities_table', 1),
(8, '2024_06_09_052209_create_districts_table', 1),
(9, '2024_06_09_061730_create_admins_table', 1),
(10, '2024_06_09_062759_create_messages_table', 1),
(11, '2024_06_09_063119_create_histories_table', 1),
(12, '2024_06_09_063132_create_notifications_table', 1),
(13, '2024_06_09_063924_create_pack_subscriptions_table', 1),
(14, '2024_06_09_064428_create_subscriptions_table', 1),
(15, '2024_06_09_190128_create_countries_table', 1),
(16, '2024_06_09_203528_create_folders_table', 1),
(17, '2024_06_10_114112_create_companies_table', 1),
(18, '2024_06_10_115300_create_configurations_table', 1),
(19, '2024_06_11_113347_create_conditions_table', 1),
(20, '2024_07_11_131329_create_email_verified_codes_table', 1),
(21, '2024_07_21_102723_create_action_on_properties_table', 1),
(22, '2024_07_21_213808_create_pack_subscription_histories_table', 1),
(29, '2024_07_21_235309_create_debugs_table', 2),
(30, '2024_10_17_084555_create_paiement_operators_table', 2),
(31, '2024_10_31_102056_create_property_searchs_table', 2),
(33, '2024_12_09_094650_create_favorites_table', 3),
(34, '2025_01_07_122830_create_promotional_codes_table', 4),
(35, '2025_01_16_105546_create_promotional_code_used_by_users_table', 5),
(36, '2025_03_06_124828_create_table_payement_resquets', 6),
(37, '2025_03_06_130004_create_payement_resquets', 7),
(38, '2025_04_05_012414_create_currencies_table', 8),
(39, '2025_04_09_144437_create_likes_table', 9),
(40, '2025_04_20_204050_create_validate_payments_table', 10),
(41, '2025_04_22_215209_create_product_identifies_table', 11),
(42, '2025_04_25_081303_create_pub_images_table', 12),
(43, '2019_12_14_000001_create_personal_access_tokens_table', 13),
(44, '2025_05_24_042141_add_column_to_table_payment_requests', 13),
(45, '2025_05_30_123445_create_reports_table', 14),
(46, '2025_06_05_165733_create_app_versions_table', 15);

-- --------------------------------------------------------

--
-- Structure de la table `municipalities`
--

CREATE TABLE `municipalities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `mu_name` varchar(255) NOT NULL,
  `mu_status` tinyint(1) NOT NULL,
  `citie_id` bigint(20) UNSIGNED NOT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `municipalities`
--

INSERT INTO `municipalities` (`id`, `created_at`, `updated_at`, `mu_name`, `mu_status`, `citie_id`, `countrie_id`) VALUES
(1, '2024-07-29 19:06:24', '2024-07-29 19:06:24', 'Adjamé', 1, 1, 1),
(2, '2024-07-29 19:06:24', '2024-07-29 19:06:24', 'Abobo', 1, 1, 1),
(3, '2024-07-29 19:07:13', '2024-07-29 19:07:13', 'Cocody', 1, 1, 1),
(4, '2024-07-29 19:07:13', '2024-07-29 19:07:13', 'Yopougon', 1, 1, 1),
(5, '2024-09-22 13:20:58', '2024-09-22 13:19:41', 'Albamuniesd', 1, 5, 3),
(6, '2024-09-22 13:19:41', '2024-09-22 13:19:41', 'albamunisoin', 1, 6, 3),
(7, '2024-09-22 13:20:58', '2024-09-22 13:20:58', 'Albacolie', 1, 6, 3),
(8, '2024-09-22 13:20:58', '2024-09-22 13:20:58', 'Albionsmu', 1, 6, 3);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `not_content` varchar(225) NOT NULL,
  `not_status` tinyint(1) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `admin_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `created_at`, `updated_at`, `not_content`, `not_status`, `user_id`, `admin_id`) VALUES
(7, '2024-12-21 03:44:17', '2024-12-21 03:44:17', 'Bilivente-gn.com ,est une plateforme de commerce électronique ', 1, 72, NULL),
(8, '2024-12-21 03:44:17', '2024-12-21 03:44:17', ' qui incarne l\'innovation en Guinée. Basée à Conakry ', 1, 72, NULL),
(9, '2024-12-21 03:47:16', '2024-12-21 03:47:16', ' est une plateforme de commerce électronique qui ', 1, 72, NULL),
(10, '2024-12-21 08:53:29', '2024-12-21 08:53:29', 'Free, high quality, open source icon library with over 2,000 icons. Include them anyway you like—SVGs, SVG sprite, or web fonts. Use them with or without Bootstrap in any project.', 1, 72, NULL),
(11, '2025-03-11 14:10:53', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(12, '2025-03-04 14:10:59', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(13, '2025-03-11 14:11:06', NULL, 'Votre demande de paiement du pack Pack de bienvenue a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(27, '2025-03-11 14:16:35', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(28, '2025-03-11 14:18:46', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(29, '2025-03-11 18:46:29', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(30, '2025-03-11 23:31:27', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(31, '2025-03-15 01:50:50', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(32, '2025-03-15 01:50:50', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(33, '2025-03-15 02:44:26', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(34, '2025-03-15 14:56:46', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(35, '2025-03-19 00:25:55', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(36, '2025-03-20 07:25:27', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(37, '2025-03-21 14:13:27', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(38, '2025-03-23 23:22:24', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(39, '2025-04-21 09:01:50', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 123, NULL),
(40, '2025-04-21 11:07:50', NULL, 'Votre achat du pack Pack dophina été validé. Vous bénéficiez de 30 point(s).', 1, 123, NULL),
(41, '2025-04-21 11:08:40', NULL, 'Votre achat du pack Pack dophina été validé. Vous bénéficiez de 30 point(s).', 1, 123, NULL),
(42, '2025-04-21 11:12:47', NULL, 'Votre achat du pack Pack dophina été validé. Vous bénéficiez de 30 point(s).', 1, 123, NULL),
(43, '2025-04-21 11:14:59', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 123, NULL),
(44, '2025-04-21 11:14:59', NULL, 'Votre achat du pack Pack dizea été validé. Vous bénéficiez de 300 point(s).', 1, 123, NULL),
(45, '2025-04-21 11:18:39', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 123, NULL),
(46, '2025-04-21 11:18:39', NULL, 'Votre achat du pack Packs missa été validé. Vous bénéficiez de 10 point(s).', 1, 123, NULL),
(47, '2025-04-21 12:35:45', NULL, 'Suite à une erreur de traitement, nous vous avons retiré -10 point(s).', 1, 123, NULL),
(48, '2025-04-21 12:39:05', NULL, 'Suite à une erreur de traitement, nous vous avons retiré -30 point(s).', 1, 123, NULL),
(49, '2025-04-21 12:39:05', NULL, 'Suite à une erreur de traitement, nous vous avons retiré -300 point(s).', 1, 123, NULL),
(50, '2025-04-21 13:25:01', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 123, NULL),
(51, '2025-05-28 00:20:59', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(52, '2025-05-28 00:20:59', NULL, 'Votre demande de paiement du pack Pack dize a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(53, '2025-05-28 00:20:59', NULL, 'Votre demande de paiement du pack Pack dophin a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(54, '2025-05-28 10:52:03', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(55, '2025-05-28 12:58:01', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL),
(56, '2025-05-28 13:00:38', NULL, 'Votre demande de paiement du pack Packs miss a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d\'avoir choisir notre service', 1, 72, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pack_subscriptions`
--

CREATE TABLE `pack_subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pack_price` int(11) NOT NULL,
  `pack_description` text NOT NULL,
  `pack_libele` varchar(225) NOT NULL,
  `pack_devis` varchar(20) NOT NULL,
  `pack_deadline` int(11) NOT NULL,
  `pack_type` varchar(255) NOT NULL,
  `pack_slug` varchar(255) NOT NULL,
  `number_of_properties` int(11) DEFAULT NULL,
  `deadline_editable` int(11) DEFAULT NULL,
  `pack_status` tinyint(1) NOT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL,
  `image` longtext DEFAULT NULL,
  `country_slug` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pack_subscriptions`
--

INSERT INTO `pack_subscriptions` (`id`, `created_at`, `updated_at`, `pack_price`, `pack_description`, `pack_libele`, `pack_devis`, `pack_deadline`, `pack_type`, `pack_slug`, `number_of_properties`, `deadline_editable`, `pack_status`, `countrie_id`, `image`, `country_slug`) VALUES
(2, '2024-08-26 22:36:30', '2024-08-26 22:36:30', 0, 'Pack de bienvenue', 'Pack de bienvenue', 'FCFA', 30, '', 'pack_vlsgratuit', 30, 1, 1, 24, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', 'CI'),
(3, '2024-10-16 13:04:03', '2024-10-16 13:04:03', 500, 'DSDS ', 'Packs miss', 'FCFA', 1, '', '', 10, 1, 1, 24, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', 'CI'),
(4, '2024-10-16 22:50:45', '2024-10-16 22:50:45', 1000, 'Paclodsds sds', 'Pack dophin', 'FCFA', 0, 'nombre', 'paiemant', 30, 1, 1, 24, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', 'CI'),
(5, '2024-10-16 23:00:30', '2024-10-16 23:00:30', 1500, 'Pack privil', 'Pack liberté', 'FCFA', 1, 'dsd', '', 100, NULL, 1, 3, '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', 'AL'),
(6, '2024-10-16 23:13:27', '2024-10-16 23:13:27', 2000, 'dsds', 'Pack dize', 'FCFA', 1, '', '', 300, 1, 1, 24, NULL, 'CI'),
(15, '2024-10-16 23:27:07', '2024-10-16 23:27:07', 3000, 'ddsd', 'Pack Grise', 'FCFA', 1, 'dsd', '', 400, NULL, 1, 3, NULL, 'AL');

-- --------------------------------------------------------

--
-- Structure de la table `pack_subscription_histories`
--

CREATE TABLE `pack_subscription_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `price` varchar(225) NOT NULL,
  `wording` varchar(100) NOT NULL,
  `icon` longtext DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `deadline` int(11) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `subscription_id` bigint(20) UNSIGNED NOT NULL,
  `companie_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `pack_subscriptions_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pack_subscription_histories`
--

INSERT INTO `pack_subscription_histories` (`id`, `created_at`, `updated_at`, `price`, `wording`, `icon`, `start`, `deadline`, `status`, `type`, `subscription_id`, `companie_id`, `user_id`, `pack_subscriptions_id`) VALUES
(31, '2025-03-12 07:20:49', '2025-03-12 07:20:49', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-house-down-fill\" viewBox=\"0 0 16 16\">\n  <path d=\"M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0\"/>\n  <path d=\"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z\"/>\n  <path d=\"m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z\"/>\n</svg>', '2025-03-12 07:20:49', 15, 1, 'Pack de bienvenue', 34, 48, 83, 2),
(32, '2025-03-20 23:36:40', '2025-03-20 23:36:40', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-03-20 23:36:40', 15, 1, 'Pack de bienvenue', 35, 49, 85, 2),
(33, '2025-03-25 01:11:44', '2025-03-25 01:11:44', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-03-25 01:11:44', 15, 1, 'Pack de bienvenue', 36, 50, 105, 2),
(34, '2025-03-25 22:47:31', '2025-03-25 22:47:31', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-03-25 22:47:31', 15, 1, 'Pack de bienvenue', 37, 51, 107, 2),
(35, '2025-03-26 08:48:31', '2025-03-26 08:48:31', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-03-26 08:48:31', 15, 1, 'Pack de bienvenue', 38, 52, 108, 2),
(36, '2025-03-27 02:19:11', '2025-03-27 02:19:11', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-03-27 02:19:11', 15, 1, 'Pack de bienvenue', 39, 53, 109, 2),
(37, '2025-04-03 12:33:34', '2025-04-03 12:33:34', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-03 12:33:34', 15, 1, 'Pack de bienvenue', 40, 54, 112, 2),
(38, '2025-04-04 22:39:52', '2025-04-04 22:39:52', '0 FCFA', 'Code promotionnel', NULL, NULL, 3, 1, 'Code promo', 40, 54, 112, NULL),
(39, '2025-04-04 23:22:02', '2025-04-04 23:22:02', '0 FCFA', 'Code promotionnel', NULL, NULL, 2, 1, 'Code promo', 40, 54, 112, NULL),
(40, '2025-04-04 23:23:37', '2025-04-04 23:23:37', '0 FCFA', 'Code promotionnel', NULL, NULL, 5, 1, 'Code promo', 40, 54, 112, NULL),
(41, '2025-04-04 23:53:30', '2025-04-04 23:53:30', '0 FCFA', 'Code promotionnel', NULL, NULL, 15, 1, 'number', 40, 54, 112, NULL),
(42, '2025-04-08 11:39:39', '2025-04-08 11:39:39', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-08 11:39:39', 15, 1, 'Pack de bienvenue', 41, 55, 115, 2),
(43, '2025-04-08 11:39:39', '2025-04-08 11:39:39', '0 FCFA', 'Code promotionnel', NULL, NULL, 15, 1, 'number', 41, 55, 115, NULL),
(44, '2025-04-08 11:39:39', '2025-04-08 11:39:39', '0 FCFA', 'Code promotionnel', NULL, NULL, 15, 1, 'number', 41, 55, 115, NULL),
(45, '2025-04-08 11:39:39', '2025-04-08 11:39:39', '0 FCFA', 'Code promotionnel', NULL, NULL, 15, 1, 'number', 29, 43, 72, NULL),
(46, '2025-04-20 10:04:12', '2025-04-20 10:04:12', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 10:04:12', 15, 1, 'Pack de bienvenue', 42, 56, 117, 2),
(47, '2025-04-20 10:04:12', '2025-04-20 10:04:12', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 10:04:12', 15, 1, 'Pack de bienvenue', 43, 57, 118, 2),
(48, '2025-04-20 10:04:12', '2025-04-20 10:04:12', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 10:04:12', 15, 1, 'Pack de bienvenue', 44, 58, 119, 2),
(49, '2025-04-20 10:04:12', '2025-04-20 10:04:12', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 10:04:12', 15, 1, 'Pack de bienvenue', 45, 59, 120, 2),
(50, '2025-04-20 15:38:40', '2025-04-20 15:38:40', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 15:38:40', 15, 1, 'Pack de bienvenue', 46, 60, 121, 2),
(51, '2025-04-20 15:38:40', '2025-04-20 15:38:40', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 15:38:40', 15, 1, 'Pack de bienvenue', 47, 61, 122, 2),
(52, '2025-04-20 15:38:40', '2025-04-20 15:38:40', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-04-20 15:38:40', 15, 1, 'Pack de bienvenue', 48, 62, 123, 2),
(58, '2025-04-21 11:12:47', NULL, '1000 FCFA', 'Pack dophin', NULL, '2025-04-21 09:01:50', 30, 1, 'number', 48, 62, 123, 4),
(59, '2025-04-21 11:14:59', NULL, '2000 FCFA', 'Pack dize', NULL, '2025-04-21 11:14:59', 300, 1, 'number', 48, 62, 123, 6),
(60, '2025-04-21 11:18:39', NULL, '500 FCFA', 'Packs miss', NULL, '2025-04-21 11:18:39', 10, 1, 'number', 48, 62, 123, 3),
(61, '2025-04-21 12:35:45', NULL, '0 FCFA', 'Packs miss', '', '2025-04-21 11:18:39', 10, 0, 'number', 48, 62, 123, 3),
(62, '2025-04-21 12:39:05', NULL, '', 'Pack dophin', NULL, '2025-04-21 09:01:50', 30, 0, 'number', 48, 62, 123, 4),
(63, '2025-04-21 12:39:05', NULL, '', 'Pack dize', NULL, '2025-04-21 11:14:59', 300, 0, 'number', 48, 62, 123, 6),
(64, '2025-06-01 23:23:34', '2025-06-01 23:23:34', '0 FCFA', 'Pack de bienvenue', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '2025-06-01 23:23:34', 15, 1, 'Pack de bienvenue', 49, 63, 124, 2);

-- --------------------------------------------------------

--
-- Structure de la table `paiement_operators`
--

CREATE TABLE `paiement_operators` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `logo` text DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `contact1` varchar(100) NOT NULL,
  `contact2` varchar(100) DEFAULT NULL,
  `number_size` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `slug` varchar(10) NOT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL,
  `country_slug` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `paiement_operators`
--

INSERT INTO `paiement_operators` (`id`, `created_at`, `updated_at`, `name`, `logo`, `info`, `contact1`, `contact2`, `number_size`, `status`, `slug`, `countrie_id`, `country_slug`) VALUES
(1, '2024-12-22 01:12:50', '2024-12-22 01:12:50', 'Wave', 'assets/payement/wave.png', 'Ouvrez votre application Wave et choisissez l\'option transfer ', 'Yapo ANge : 2250545252545', 'Bilo Avilda: 2250125445522', 10, 1, 'wave', 24, 'CI'),
(2, '2024-12-22 01:15:42', '2024-12-22 01:15:42', 'Orange', 'assets/payement/orange.png', 'Composer #144# puis 2 et 1 saisissez le montant ', '#144*2*4*2250147854565#', NULL, 10, 1, 'om', 24, 'CI'),
(3, '2024-12-22 01:15:42', '2024-12-22 01:15:42', 'MTN', 'assets/payement/mtn.png', 'Composer *133# puis 2 et 1 puis saisissez le montant', '22557545856', NULL, 10, 1, 'momo', 24, 'CI'),
(4, '2024-12-22 01:17:53', '2024-12-22 01:17:53', 'Moov', 'assets/payement/moov.png', 'Composer *155# puis 2 et 1 puis saisissez le montant', '2250478784458', NULL, 10, 1, 'flooz', 24, 'CI');

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`id`, `email`, `token`, `created_at`) VALUES
(19, 'adou2@gmail.com', NULL, '2025-05-02 22:19:53'),
(20, '2250101848964', '942008', '2025-04-12 11:42:17');

-- --------------------------------------------------------

--
-- Structure de la table `payment_requests`
--

CREATE TABLE `payment_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payer_number` varchar(255) NOT NULL,
  `receive_number` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `operator` varchar(255) NOT NULL,
  `icon` text DEFAULT NULL,
  `amount` varchar(255) NOT NULL,
  `value_to_add` int(11) NOT NULL,
  `currency` varchar(100) NOT NULL,
  `image_request` varchar(225) NOT NULL,
  `pack` varchar(100) NOT NULL,
  `motif` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `company_id` bigint(20) NOT NULL,
  `pack_id` bigint(20) NOT NULL,
  `countries_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `payment_requests`
--

INSERT INTO `payment_requests` (`id`, `payer_number`, `receive_number`, `status`, `operator`, `icon`, `amount`, `value_to_add`, `currency`, `image_request`, `pack`, `motif`, `created_at`, `updated_at`, `user_id`, `company_id`, `pack_id`, `countries_id`) VALUES
(29, '0122445552', NULL, 0, 'Orange', NULL, '1000', 30, 'FCFA', 'medias/payment_request/1745231384904-th-1640033452.jpg', 'Pack dophin', NULL, '2025-04-21 09:01:50', '2025-04-21 12:39:05', 123, 62, 4, 24),
(30, '0545254455', NULL, 0, 'MTN', NULL, '2000', 300, 'FCFA', 'medias/payment_request/1745234238590-th-113087520.jpg', 'Pack dize', NULL, '2025-04-21 11:14:59', '2025-04-21 12:39:05', 123, 62, 6, 24),
(31, '0245522554', NULL, 0, 'Wave', NULL, '500', 10, 'FCFA', 'medias/payment_request/1745234368702-th-113087520.jpg', 'Packs miss', NULL, '2025-04-21 11:18:39', '2025-04-21 12:35:45', 123, 62, 3, 24),
(32, '0115554445', NULL, 0, 'Moov', NULL, '1000', 30, 'FCFA', 'medias/payment_request/1745242007173-th-1727811168.jpg', 'Pack dophin', NULL, '2025-04-21 13:25:01', NULL, 123, 62, 4, 24),
(38, '0898888588', NULL, 0, 'Wave', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-back\" viewBox=\"0 0 16 16\">   <path d=\"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/> </svg>', '500', 10, 'FCFA', 'medias/payment_request/1748437262253-th-2544746914.jpg', 'Packs miss', NULL, '2025-05-28 13:00:38', NULL, 72, 43, 3, 24);

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pro_name` varchar(100) NOT NULL,
  `owners_number` varchar(20) DEFAULT NULL,
  `pro_info` varchar(225) DEFAULT NULL,
  `pro_description` longtext NOT NULL,
  `count_piece` int(11) DEFAULT NULL,
  `pro_price` varchar(255) NOT NULL,
  `pro_currency` varchar(20) NOT NULL,
  `pro_visit_price` varchar(255) DEFAULT NULL,
  `pro_commission` varchar(255) DEFAULT NULL,
  `pro_bail` varchar(255) DEFAULT NULL,
  `pro_price_by` varchar(255) DEFAULT NULL,
  `pro_enable` tinyint(1) NOT NULL,
  `visibility` tinyint(1) NOT NULL,
  `count_bedroom` int(11) DEFAULT NULL,
  `count_kitchen` int(11) DEFAULT NULL,
  `count_livingroom` int(11) DEFAULT NULL,
  `count_bathroom` int(11) DEFAULT NULL,
  `pro_area` varchar(255) DEFAULT NULL,
  `area_unity` varchar(20) DEFAULT NULL,
  `other` text DEFAULT NULL,
  `pro_status` tinyint(1) NOT NULL,
  `pro_inline` tinyint(1) NOT NULL,
  `pro_removed` tinyint(1) NOT NULL DEFAULT 0,
  `editable` tinyint(1) NOT NULL,
  `categorie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `municipalitie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `district_id` bigint(20) UNSIGNED DEFAULT NULL,
  `citie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `companie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL,
  `condition_id` bigint(20) UNSIGNED NOT NULL,
  `liked` tinyint(1) NOT NULL DEFAULT 0,
  `like_count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `created_at`, `updated_at`, `pro_name`, `owners_number`, `pro_info`, `pro_description`, `count_piece`, `pro_price`, `pro_currency`, `pro_visit_price`, `pro_commission`, `pro_bail`, `pro_price_by`, `pro_enable`, `visibility`, `count_bedroom`, `count_kitchen`, `count_livingroom`, `count_bathroom`, `pro_area`, `area_unity`, `other`, `pro_status`, `pro_inline`, `pro_removed`, `editable`, `categorie_id`, `type_id`, `municipalitie_id`, `district_id`, `citie_id`, `user_id`, `companie_id`, `countrie_id`, `condition_id`, `liked`, `like_count`) VALUES
(121, '2025-04-23 03:23:57', '2025-04-24 17:30:19', 'dggggfg fghfg fgggg fgggg fggdf fggg fhg fggg rthh fggg rtg', NULL, NULL, '[{\"insert\":\"Dgdggffggfhgfhg\\n\"}]', NULL, '10000', 'FCFA', '45', '74', '1200', '/ heure', 1, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 0, 1, 6, 3, 1, NULL, 1, 72, 43, 24, 2, 0, 0),
(122, '2025-04-24 10:58:00', '2025-05-03 23:41:08', 'avik update', NULL, NULL, '[{\"insert\":\"Je viysxx\\n\"}]', NULL, '2500', 'FCFA', '2500', '58', '1500', '/ heure', 1, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 0, 1, 6, 3, 1, NULL, 1, 72, 43, 24, 2, 0, 0),
(123, '2025-04-27 00:11:05', '2025-04-27 00:11:05', 'Villa diop', '0586546886', NULL, '[{\"insert\":\"Gjkhbkk\\n\"}]', NULL, '20000', 'FCFA', '589', '688', '2566', '/ Mois', 1, 5, 2588, 25800, 68969, 3000, NULL, NULL, NULL, 1, 1, 0, 1, 1, 1, 1, NULL, 1, 72, 43, 24, 2, 0, 0),
(124, '2025-04-27 00:11:05', '2025-05-03 23:41:08', 'Studio pour vou', NULL, NULL, '[{\"insert\":\"Je vais dans la ville \\n\"}]', NULL, '58998', 'FCFA', '4887', '2800', NULL, NULL, 1, 5, 2, 2, 2, 2, NULL, NULL, NULL, 1, 1, 0, 1, 2, 1, 1, NULL, 1, 72, 43, 24, 3, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `product_identifies`
--

CREATE TABLE `product_identifies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `identify` varchar(255) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product_identifies`
--

INSERT INTO `product_identifies` (`id`, `created_at`, `updated_at`, `identify`, `product_id`) VALUES
(1, NULL, NULL, '12182', 121),
(2, NULL, NULL, '12265', 122),
(3, NULL, NULL, '12388', 123),
(4, NULL, NULL, '12454', 124);

-- --------------------------------------------------------

--
-- Structure de la table `promotional_codes`
--

CREATE TABLE `promotional_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `usage_limit` int(11) NOT NULL,
  `end` datetime NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `value` int(11) NOT NULL DEFAULT 0,
  `number_of_time_used` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `promotional_codes`
--

INSERT INTO `promotional_codes` (`id`, `created_at`, `updated_at`, `code`, `usage_limit`, `end`, `user_id`, `status`, `value`, `number_of_time_used`) VALUES
(1, '2025-01-07 16:02:39', '2025-01-07 16:02:39', '123', 5, '2025-05-31 16:02:39', NULL, 1, 15, 2);

-- --------------------------------------------------------

--
-- Structure de la table `promotional_code_used_by_users`
--

CREATE TABLE `promotional_code_used_by_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `promotional_code_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `promotional_code_used_by_users`
--

INSERT INTO `promotional_code_used_by_users` (`id`, `created_at`, `updated_at`, `company_id`, `promotional_code_id`, `user_id`) VALUES
(6, '2025-04-08 11:39:39', '2025-04-08 11:39:39', 55, 1, 115),
(7, '2025-04-08 11:39:39', '2025-04-08 11:39:39', 43, 1, 72);

-- --------------------------------------------------------

--
-- Structure de la table `property_searchs`
--

CREATE TABLE `property_searchs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `wording` varchar(255) NOT NULL,
  `condition_id` bigint(20) UNSIGNED NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL,
  `citie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `municipalitie_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `budget` varchar(225) NOT NULL,
  `currency` varchar(20) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `categorie_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `property_searchs`
--

INSERT INTO `property_searchs` (`id`, `created_at`, `updated_at`, `wording`, `condition_id`, `type_id`, `countrie_id`, `citie_id`, `municipalitie_id`, `user_id`, `budget`, `currency`, `status`, `categorie_id`) VALUES
(76, '2025-04-11 10:11:34', '2025-06-08 12:19:15', 'dssds', 2, 1, 24, 1, 1, 72, '2323232', 'FCFA', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `pub_images`
--

CREATE TABLE `pub_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `page` varchar(255) NOT NULL,
  `order` varchar(255) NOT NULL,
  `inline` tinyint(1) NOT NULL DEFAULT 0,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pub_images`
--

INSERT INTO `pub_images` (`id`, `created_at`, `updated_at`, `page`, `order`, `inline`, `path`) VALUES
(2, '2025-04-26 01:35:37', '2025-04-27 00:11:05', 'page_1', 'pub_1', 1, 'medias/pub/1745713189264-freelancer.png'),
(3, '2025-04-26 01:37:54', NULL, 'page_1', 'pub_2', 1, 'medias/pub/1745631532379-th-32314010.jpg'),
(4, '2025-04-26 01:37:54', NULL, 'page_1', 'pub_3', 1, 'medias/pub/1745631555093-th-1454940118.jpg'),
(5, '2025-04-27 00:11:05', NULL, 'page_2', 'pub_1', 1, 'medias/pub/1745712953762-nav-logo.png'),
(6, '2025-04-27 00:11:05', NULL, 'page_2', 'pub_2', 1, 'medias/pub/1745712973397-freelancer.png'),
(7, '2025-04-27 00:11:05', NULL, 'page_2', 'pub_3', 1, 'medias/pub/1745712993531-th-113087520.jpg'),
(8, '2025-04-27 00:11:05', NULL, 'page_3', 'pub_1', 1, 'medias/pub/1745713016096-flutter.jpeg'),
(9, '2025-04-27 00:11:05', NULL, 'page_3', 'pub_2', 1, 'medias/pub/1745713039450-banner-909710_1920.jpg'),
(10, '2025-04-27 00:11:05', NULL, 'page_3', 'pub_3', 1, 'medias/pub/1745713059560-th-1284730766.jpg'),
(11, '2025-04-27 00:11:05', NULL, 'page_4', 'pub_1', 1, 'medias/pub/1745713088341-freelancer.png'),
(12, '2025-04-27 00:11:05', NULL, 'page_4', 'pub_2', 1, 'medias/pub/1745713103534-th-32314010.jpg'),
(13, '2025-04-27 00:11:05', NULL, 'page_4', 'pub_3', 1, 'medias/pub/1745713120103-th-1727811168.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `reports`
--

CREATE TABLE `reports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `res_phone1` varchar(20) NOT NULL,
  `res_phone2` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  `slog` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('SfzxVILc3rywSLqXejxpWUvqHhxjBEHUzsYR8RCM', NULL, '127.0.0.1', 'Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieU9pYzlrYTJLdVpDMTBSdE5UTVpjTURUS1UxSGN5RzA0bFFzQzlaUyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fX0=', 1746919850);

-- --------------------------------------------------------

--
-- Structure de la table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `subscription_price` int(11) DEFAULT NULL,
  `subscription_start` datetime NOT NULL,
  `subscription_deadline` int(11) DEFAULT NULL,
  `s_number_of_properties` int(11) DEFAULT NULL,
  `s_pack_type` varchar(255) NOT NULL,
  `subscription_status` tinyint(1) NOT NULL,
  `deadline_editable` int(11) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `companie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `countrie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pack_subscription_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `created_at`, `updated_at`, `subscription_price`, `subscription_start`, `subscription_deadline`, `s_number_of_properties`, `s_pack_type`, `subscription_status`, `deadline_editable`, `user_id`, `companie_id`, `product_id`, `countrie_id`, `pack_subscription_id`) VALUES
(29, '2024-10-30 16:30:13', '2025-05-03 23:41:08', 0, '2024-10-30 16:30:13', 15, 71, '', 1, 1, 72, 43, NULL, 1, 2),
(33, '2025-03-06 13:18:30', '2025-03-06 13:18:30', 0, '2025-03-06 13:18:30', 15, 15, '', 1, 1, 82, 47, NULL, 24, 2),
(34, '2025-03-12 07:20:49', '2025-03-14 09:23:04', 0, '2025-03-12 07:20:49', 15, 4, '', 1, 1, 83, 48, NULL, 24, 2),
(35, '2025-03-20 23:36:40', '2025-03-20 23:36:40', 0, '2025-03-20 23:36:40', 15, 15, '', 1, 1, 85, 49, NULL, 24, 2),
(36, '2025-03-25 01:11:44', '2025-03-25 01:11:44', 0, '2025-03-25 01:11:44', 15, 15, '', 1, 1, 105, 50, NULL, 24, 2),
(37, '2025-03-25 22:47:31', '2025-03-25 22:47:31', 0, '2025-03-25 22:47:31', 15, 15, '', 1, 1, 107, 51, NULL, 24, 2),
(38, '2025-03-26 08:48:31', '2025-03-26 08:48:31', 0, '2025-03-26 08:48:31', 15, 15, '', 1, 1, 108, 52, NULL, 24, 2),
(39, '2025-03-27 02:19:11', '2025-03-27 02:19:11', 0, '2025-03-27 02:19:11', 15, 15, '', 1, 1, 109, 53, NULL, 24, 2),
(40, '2025-04-03 12:33:34', '2025-04-04 21:56:12', 0, '2025-04-03 12:33:34', 15, 45, '', 1, 1, 112, 54, NULL, 24, 2),
(41, '2025-04-08 11:39:39', '2025-04-08 11:39:39', 0, '2025-04-08 11:39:39', 15, 45, '', 1, 1, 115, 55, NULL, 24, 2),
(42, '2025-04-20 10:04:12', '2025-04-20 10:04:12', 0, '2025-04-20 10:04:12', 15, 15, '', 1, 1, 117, 56, NULL, 24, 2),
(43, '2025-04-20 10:04:12', '2025-04-20 10:04:12', 0, '2025-04-20 10:04:12', 15, 15, '', 1, 1, 118, 57, NULL, 24, 2),
(44, '2025-04-20 10:04:12', '2025-04-20 10:04:12', 0, '2025-04-20 10:04:12', 15, 15, '', 1, 1, 119, 58, NULL, 24, 2),
(45, '2025-04-20 10:04:12', '2025-04-20 10:04:12', 0, '2025-04-20 10:04:12', 15, 15, '', 1, 1, 120, 59, NULL, 24, 2),
(46, '2025-04-20 15:38:40', '2025-04-20 15:38:40', 0, '2025-04-20 15:38:40', 15, 15, '', 1, 1, 121, 60, NULL, 24, 2),
(47, '2025-04-20 15:38:40', '2025-04-20 15:38:40', 0, '2025-04-20 15:38:40', 15, 15, '', 1, 1, 122, 61, NULL, 24, 2),
(48, '2025-04-20 15:38:40', '2025-04-20 15:38:40', 0, '2025-04-20 15:38:40', 15, 45, '', 1, 1, 123, 62, NULL, 24, 2),
(49, '2025-06-01 23:23:34', NULL, 0, '2025-06-01 23:23:34', 15, 15, '', 1, 1, 124, 63, NULL, 24, 2);

-- --------------------------------------------------------

--
-- Structure de la table `types`
--

CREATE TABLE `types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type_name` varchar(45) NOT NULL,
  `type_status` tinyint(1) NOT NULL,
  `type_image` longtext NOT NULL,
  `type_slog` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `types`
--

INSERT INTO `types` (`id`, `created_at`, `updated_at`, `type_name`, `type_status`, `type_image`, `type_slog`) VALUES
(1, '2024-09-22 19:13:33', '2024-09-22 19:13:33', 'Logement', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z\"/></svg>', 'house_type'),
(2, '2024-09-22 19:13:33', '2024-09-22 19:13:33', 'Terrain', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z\"/></svg>', 'area_type'),
(3, '2024-09-22 19:17:00', '2024-09-22 19:17:00', 'Véhicule', 1, '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#e3e3e3\"><path d=\"M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z\"/></svg>', 'car_type');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_enable` tinyint(1) NOT NULL,
  `confirm_token` varchar(225) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `identify` varchar(45) DEFAULT NULL,
  `role_slog` varchar(45) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_identity_card` varchar(225) DEFAULT NULL,
  `avatar` varchar(225) DEFAULT NULL,
  `countrie_id` bigint(20) UNSIGNED NOT NULL,
  `municipalitie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `district_id` bigint(20) UNSIGNED DEFAULT NULL,
  `citie_id` bigint(20) UNSIGNED DEFAULT NULL,
  `search_property` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `birth`, `email`, `user_enable`, `confirm_token`, `phone`, `identify`, `role_slog`, `email_verified_at`, `password`, `status`, `whatsapp`, `remember_token`, `created_at`, `updated_at`, `user_identity_card`, `avatar`, `countrie_id`, `municipalitie_id`, `district_id`, `citie_id`, `search_property`) VALUES
(72, 'Adou', 'Ange Anicet ', '1978-10-30 00:00:00.000', 'adou2@gmail.com', 1, NULL, '355024525662', NULL, 'agence', NULL, '$2b$05$SQ.sxCiZQcobtUb7V8JQR.jo88XY7nmeNAQCRLeUcs2DdCs2UX1X2', 1, '2250101848964', NULL, '2024-10-30 16:30:13', '2024-10-30 16:30:13', NULL, 'medias/user/1749208717830-IMG-20250604-WA0003.jpg', 24, NULL, NULL, NULL, 0),
(77, 'Paul', 'Bila comp', NULL, 'paul@gmail.com', 1, NULL, '+2250125478855', NULL, 'chercher', NULL, '$2b$10$6MiZUPIpCHAhMyILvI6xaeG1ijD6UeeGH9ZSF2we0NeuSkfCY86jO', 1, NULL, NULL, '2025-03-04 14:17:00', '2025-03-04 14:17:00', NULL, NULL, 24, NULL, NULL, NULL, 0),
(78, 'Yapo', 'Mairan Vilade', NULL, 'yapo@gmail.com', 1, NULL, '+2253251112252', NULL, 'chercher', NULL, '$2b$10$8JSbNXa4UTyvCSPyrAbf.ucL6FenB1JeecDx1qkzTgOvdEX6HcoF.', 1, NULL, NULL, '2025-03-04 14:17:00', '2025-03-04 14:17:00', NULL, NULL, 24, NULL, NULL, NULL, 0),
(79, 'Koussi', 'Roula Bil', NULL, 'raoul@gmail.com', 1, NULL, '+2250245255255', NULL, 'chercher', NULL, '$2b$10$ATfYLoKEyjaRgkKhodGNK.m6YEWmQTpN9YW2883tGxMCWxwWOXvN2', 1, NULL, NULL, '2025-03-04 14:17:00', '2025-03-04 14:17:00', NULL, NULL, 24, NULL, NULL, NULL, 0),
(82, 'Biloris', 'Angolibi fillof', '1999-03-06 00:00:00.000', 'boliroa@gmail.com', 1, NULL, '+2250212554552', NULL, 'agence', NULL, '$2b$10$uPqL/SNgQR7zB0iCVDpXTOW3MAJ3CC./4TCNGKqbMTyyjcfFQVz0q', 1, '22502455255225', NULL, '2025-03-06 13:18:30', '2025-03-06 13:18:30', NULL, NULL, 24, NULL, NULL, NULL, 0),
(83, 'Yepo', 'Angela Alvis', '1957-03-12 00:00:00.000', 'alvi@gmail.com', 1, NULL, '+2250535245254', NULL, 'agence', NULL, '$2b$10$zpTYsK8F.xM3wIxHweqppe.Ga.dhSJTbVqMbEcOJCY5etfTQi6S42', 1, '2250255665885', NULL, '2025-03-12 07:20:49', '2025-03-12 07:20:49', NULL, NULL, 24, NULL, NULL, NULL, 0),
(84, 'Piall', 'Poline', NULL, 'pial@gmaik.com', 1, NULL, '+2250562698898', NULL, 'chercher', NULL, '$2b$10$jmtg2oNbTgkBVN.Ar.z3rO/WOLX1RtfjWMlJKIm0niO6tkCH/yj06', 1, NULL, NULL, '2025-03-15 14:56:46', '2025-03-15 14:56:46', NULL, NULL, 24, NULL, NULL, NULL, 0),
(85, 'Vailj', 'Zngeli vilgf', '1996-02-19 00:00:00.000', 'vila@gmg.hhgg', 1, NULL, '+490545858895555', NULL, 'agence', NULL, '$2b$10$H863GrJuJfhIFRlL.qD1ju4VVOqa.ErmG7upu6I5pn01qTHo4VIIu', 1, '4908744895857', NULL, '2025-03-20 23:36:40', '2025-03-20 23:36:40', NULL, NULL, 30, NULL, NULL, NULL, 0),
(90, 'Yapo', 'Ange Yapo', NULL, 'adou3@gmail.com', 1, NULL, '+2250245522554', NULL, 'chercher', NULL, '$2b$10$fNkxdjuhmFXPanpm41jXLeKzyEEaKHIYwRNJZY0zdD74GZMq6JAkC', 1, NULL, NULL, '2025-03-21 22:57:01', '2025-03-21 22:57:01', NULL, NULL, 24, NULL, NULL, NULL, 0),
(91, 'Polisd', 'Abilier dsd ', NULL, 'vilajjds@gmail.com', 1, NULL, '+2250545255884', NULL, 'chercher', NULL, '$2b$10$el83dvSxlhRyCXjmt2TKKeM6cE9SJo8vg61StRwKPvxe8jVN8JP/u', 1, NULL, NULL, '2025-03-21 22:57:01', '2025-03-21 22:57:01', NULL, NULL, 24, NULL, NULL, NULL, 0),
(92, 'Pildlls', 'sdk dksdksd', NULL, 'dsdsknsd@dsdsd.ccxcx', 1, NULL, '+2250455255522', NULL, 'chercher', NULL, '$2b$10$YaVR59z4bS9U3V0T8sPfB.T5ZwqpFz0Gu6C0r2yGR.M3EeX2ed0FG', 1, NULL, NULL, '2025-03-21 22:57:01', '2025-03-21 22:57:01', NULL, NULL, 24, NULL, NULL, NULL, 0),
(103, 'kflive', 'valiskds sdsds', NULL, 'adou2@vvv.com', 1, NULL, '+2250245522551', NULL, 'chercher', NULL, '$2b$10$z/IphLLs7x1y6RisjFmqD.4gmlswzPS8fR8Tmq7tCg0kB1aGVqqKq', 1, NULL, NULL, '2025-03-23 09:23:23', '2025-03-23 09:23:23', NULL, NULL, 24, NULL, NULL, NULL, 0),
(104, 'avkksk', 'bskshjs dksjs', NULL, 'cali@gmail.com', 1, NULL, '+2250564867867', NULL, 'chercher', NULL, '$2b$10$miY./AkCDL5r1NEDJ1iqJu2yNekXFfxuDPeejytG799wbpI9mtLHO', 1, '2250556564466', NULL, '2025-03-23 18:14:22', '2025-03-23 18:14:22', NULL, NULL, 24, NULL, NULL, NULL, 0),
(105, 'Valida', 'Adsds ssds', '2000-03-25 00:00:00.000', 'sqdsdf@gmail.com', 1, NULL, '+2250564867868', NULL, 'agence', NULL, '$2b$10$WdxTqZs7rofip3OLeBDnIuKazEt6/8m2hUu77GyUXLZ9Ps3TsV5CS', 1, '2250245525254', NULL, '2025-03-25 01:11:44', '2025-03-25 01:11:44', NULL, NULL, 24, NULL, NULL, NULL, 0),
(106, 'sqsq', 'sqsqs', NULL, 'aaccssqs@ffdfd.coom', 1, NULL, '+27025445225', NULL, 'chercher', NULL, '$2b$10$aRpVXtxMPiBQesVkvUQife8sEnQYucMHNZijdbVtkayVD3XUr.ZGu', 1, NULL, NULL, '2025-03-25 01:11:44', '2025-03-25 01:11:44', NULL, NULL, 31, NULL, NULL, NULL, 0),
(107, 'Anicet', 'Avalide', '1981-03-25 00:00:00.000', 'xsb@gmail.com', 1, NULL, '+2256555884444', NULL, 'agence', NULL, '$2b$10$VxLv/YkibVRqNG0bqE.9OeQD2y2jVEFl.sNGOwMfMWNct4Unlmh8i', 1, '2258485566544', NULL, '2025-03-25 22:47:31', '2025-03-25 22:47:31', NULL, NULL, 24, NULL, NULL, NULL, 0),
(108, 'Michi', 'Apoliksh', '2000-03-26 00:00:00.000', 'michi@gmail.com', 1, NULL, '+2250568796878', NULL, 'agence', NULL, '$2b$10$Zr3ntvGbPQ.PXw1lHp1Rs.VYeL.E7p8011yMAkXjSfrydV.YuuRrC', 1, '22505678967', NULL, '2025-03-26 08:48:31', '2025-03-26 08:48:31', NULL, NULL, 24, NULL, NULL, NULL, 0),
(109, 'dffdtfg', 'etgdt', '2000-03-27 00:00:00.000', 'aedze@fwff.gggf', 1, NULL, '1585555555', NULL, 'agence', NULL, '$2b$10$QdTgoaWlGzs3.L8VU1d/..qqL7vb/gfA1RckoCsUPWNHAn5YdqesS', 1, '225858888888', NULL, '2025-03-27 02:19:11', '2025-03-27 02:19:11', NULL, NULL, 24, NULL, NULL, NULL, 0),
(110, 'Aviladd', 'dsds dsdsd', NULL, NULL, 1, NULL, '1002455255', NULL, 'chercher', NULL, '$2b$10$vHTLVQo5MZFXhZM2tB2LIufs3pV7.Rkrdpcx557ym/ySYANCXN9Si', 1, NULL, NULL, '2025-03-28 21:25:56', '2025-03-28 21:25:56', NULL, NULL, 24, NULL, NULL, NULL, 0),
(111, 'Pilobil', 'Aniceydsd sdnds', NULL, 'vailldsds@fdfd.cil', 1, NULL, '0245525545', NULL, 'chercher', NULL, '$2b$10$hvxkGzVPfQQ7PDjKRR44f./P.OLIg5YitNyPmxfcFyuNVk9L3Ecsa', 1, '2250212211225', NULL, '2025-03-31 21:37:31', '2025-03-31 21:37:31', NULL, NULL, 24, NULL, NULL, NULL, 0),
(112, 'Youpi', 'Aconbile VIllad', '1995-04-03 00:00:00.000', 'youpi@gmail.com', 1, NULL, '0145255452', NULL, 'agence', NULL, '$2b$10$39tX4DDWZND86iO1d3GQyuMy.OAmcsNUNrtW3w89e6xI4WMCkD.om', 1, '22501254485584', NULL, '2025-04-03 12:33:34', '2025-04-03 12:33:34', NULL, NULL, 24, NULL, NULL, NULL, 0),
(113, 'Billé', 'Apoli Valida', NULL, NULL, 1, NULL, '024525', NULL, 'chercher', NULL, '$2b$10$ScI45RdI9BUNfbZtyJMgE.P.P36odVmkgNJsID8DeC5XETu62V31i', 1, NULL, NULL, '2025-04-03 13:21:03', '2025-04-03 13:21:03', NULL, NULL, 33, NULL, NULL, NULL, 0),
(114, 'Molidade', 'Anicet Aboul', NULL, NULL, 1, NULL, '0124455444', NULL, 'chercher', NULL, '$2b$10$ikOg8.6OFCToGnr/YTNH4Ouhkg6ZpmBsX51zPUFeebXE7OHNfrose', 1, NULL, NULL, '2025-04-08 11:39:39', '2025-04-08 11:39:39', NULL, NULL, 24, NULL, NULL, NULL, 0),
(115, 'Vilz', 'dsdds', '1951-04-08 00:00:00.000', 'aedze@fwff.gg', 1, NULL, '0124588445', NULL, 'agence', NULL, '$2b$10$CvZh8i7rAYZIKjlchBvZdeGSzU35vJXnaQ1qD19N5V57sSChnW7ya', 1, '225022445525', NULL, '2025-04-08 11:39:39', '2025-04-08 11:39:39', NULL, NULL, 24, NULL, NULL, NULL, 0),
(116, 'Bilventedds', 'dssd sdsd', NULL, NULL, 1, NULL, '2250101848964', NULL, 'chercher', NULL, '$2b$10$XPFBRPecrG8VDFi8RE3aMO3LBM1mZcQrC5hZynyRErOnjLCCR4Kw2', 1, NULL, NULL, '2025-04-08 17:02:54', '2025-04-08 17:02:54', NULL, NULL, 24, NULL, NULL, NULL, 0),
(117, 'Validate ', 'Villa Billie', '1945-04-20 00:00:00.000', 'dsdsds@gmail.com', 1, NULL, '2250125544555', NULL, 'agence', NULL, '$2b$10$K63TjOhtDWZngWYnkaMUSu2AzWokO7gshZpsQFRdf2ds7ECwSs.3q', 1, '2250112255544', NULL, '2025-04-20 10:04:12', '2025-04-20 10:04:12', NULL, NULL, 24, NULL, NULL, NULL, 0),
(123, 'sqsqs', 'qsqsqs', '1978-04-20 00:00:00.000', 'vvddf@gmail.cdds', 1, NULL, '2250155455552', NULL, 'agence', NULL, '$2b$10$aTFVuwJrfCBkIXKKoi6L5u0uvyRbx4ooofkbm/1UOX3/4XAJMi6l6', 1, NULL, NULL, '2025-04-20 15:38:40', '2025-04-20 15:38:40', NULL, NULL, 24, NULL, NULL, NULL, 0),
(124, 'Valdi', 'Alami Paulo', '1990-06-30 00:00:00.000', 'anice@gmail.com', 1, NULL, '2250215485445', NULL, 'agence', NULL, '$2b$10$9AwZVTNsw.Ur0WQNp.uynuKxCrqINB0g5mSBP4PANoDUUrIcRpuwO', 1, '2250521232515', NULL, '2025-06-01 23:23:34', '2025-06-01 23:23:34', NULL, 'medias/user/1748953938797-th-2165888526.jpg', 24, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `validate_payments`
--

CREATE TABLE `validate_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `admin_id` bigint(20) UNSIGNED NOT NULL,
  `payment_request_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `validate_payments`
--

INSERT INTO `validate_payments` (`id`, `status`, `company_id`, `admin_id`, `payment_request_id`, `created_at`, `updated_at`) VALUES
(6, 1, 62, 1, 29, '2025-04-21 11:12:47', NULL),
(7, 1, 62, 1, 30, '2025-04-21 11:14:59', NULL),
(8, 1, 62, 1, 31, '2025-04-21 11:18:39', NULL),
(9, 0, 62, 1, 31, '2025-04-21 12:35:45', NULL),
(10, 0, 62, 1, 29, '2025-04-21 12:39:05', NULL),
(11, 0, 62, 1, 30, '2025-04-21 12:39:05', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `action_of_properties`
--
ALTER TABLE `action_of_properties`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_phone_unique` (`phone`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD KEY `admins_municipalitie_id_index` (`municipalitie_id`),
  ADD KEY `admins_district_id_index` (`district_id`),
  ADD KEY `admins_citie_id_index` (`citie_id`),
  ADD KEY `admins_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `app_versions`
--
ALTER TABLE `app_versions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `busies`
--
ALTER TABLE `busies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `busies_user_id_index` (`user_id`),
  ADD KEY `busies_product_id_index` (`product_id`);

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `c_name` (`c_name`),
  ADD KEY `cities_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `companies_identifier_uniquex` (`identifier`) USING BTREE,
  ADD KEY `companies_user_id_index` (`user_id`);

--
-- Index pour la table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `configurations`
--
ALTER TABLE `configurations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `debugs`
--
ALTER TABLE `debugs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `districts_citie_id_index` (`citie_id`),
  ADD KEY `districts_municipalitie_id_index` (`municipalitie_id`),
  ADD KEY `districts_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `email_verified_codes`
--
ALTER TABLE `email_verified_codes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_product_id_index` (`product_id`),
  ADD KEY `favorites_user_id_index` (`user_id`);

--
-- Index pour la table `folders`
--
ALTER TABLE `folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `folders_product_id_index` (`product_id`);

--
-- Index pour la table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_user_id_index` (`user_id`),
  ADD KEY `messages_admin_id_index` (`admin_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `municipalities`
--
ALTER TABLE `municipalities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mu_name` (`mu_name`),
  ADD KEY `municipalities_citie_id_index` (`citie_id`),
  ADD KEY `municipalities_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_index` (`user_id`),
  ADD KEY `notifications_admin_id_index` (`admin_id`);

--
-- Index pour la table `pack_subscriptions`
--
ALTER TABLE `pack_subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pack_subscriptions_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `pack_subscription_histories`
--
ALTER TABLE `pack_subscription_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pack_subscription_histories_user_id_index` (`user_id`);

--
-- Index pour la table `paiement_operators`
--
ALTER TABLE `paiement_operators`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paiement_operators_countrie_id_index` (`countrie_id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payment_requests`
--
ALTER TABLE `payment_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_requests_countries_id_index` (`countries_id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_categorie_id_index` (`categorie_id`),
  ADD KEY `products_type_id_index` (`type_id`),
  ADD KEY `products_municipalitie_id_index` (`municipalitie_id`),
  ADD KEY `products_district_id_index` (`district_id`),
  ADD KEY `products_citie_id_index` (`citie_id`),
  ADD KEY `products_user_id_index` (`user_id`),
  ADD KEY `products_companie_id_index` (`companie_id`),
  ADD KEY `products_countrie_id_index` (`countrie_id`),
  ADD KEY `products_condition_id_index` (`condition_id`);

--
-- Index pour la table `product_identifies`
--
ALTER TABLE `product_identifies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promotional_codes`
--
ALTER TABLE `promotional_codes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `promotional_code_used_by_users`
--
ALTER TABLE `promotional_code_used_by_users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `property_searchs`
--
ALTER TABLE `property_searchs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `property_searchs_countrie_id_index` (`countrie_id`),
  ADD KEY `property_searchs_citie_id_index` (`citie_id`),
  ADD KEY `property_searchs_user_id_index` (`user_id`),
  ADD KEY `property_searchs_budget_index` (`budget`);

--
-- Index pour la table `pub_images`
--
ALTER TABLE `pub_images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservations_user_id_index` (`user_id`),
  ADD KEY `reservations_product_id_index` (`product_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_index` (`user_id`),
  ADD KEY `subscriptions_companie_id_index` (`companie_id`),
  ADD KEY `subscriptions_product_id_index` (`product_id`),
  ADD KEY `subscriptions_countrie_id_index` (`countrie_id`),
  ADD KEY `subscriptions_pack_description_id_index` (`pack_subscription_id`);

--
-- Index pour la table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`),
  ADD KEY `users_countrie_id_index` (`countrie_id`),
  ADD KEY `users_municipalitie_id_index` (`municipalitie_id`),
  ADD KEY `users_district_id_index` (`district_id`),
  ADD KEY `users_citie_id_index` (`citie_id`);

--
-- Index pour la table `validate_payments`
--
ALTER TABLE `validate_payments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `action_of_properties`
--
ALTER TABLE `action_of_properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `app_versions`
--
ALTER TABLE `app_versions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `busies`
--
ALTER TABLE `busies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT pour la table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT pour la table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `configurations`
--
ALTER TABLE `configurations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `debugs`
--
ALTER TABLE `debugs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `email_verified_codes`
--
ALTER TABLE `email_verified_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;

--
-- AUTO_INCREMENT pour la table `folders`
--
ALTER TABLE `folders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=408;

--
-- AUTO_INCREMENT pour la table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `municipalities`
--
ALTER TABLE `municipalities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT pour la table `pack_subscriptions`
--
ALTER TABLE `pack_subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `pack_subscription_histories`
--
ALTER TABLE `pack_subscription_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT pour la table `paiement_operators`
--
ALTER TABLE `paiement_operators`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `payment_requests`
--
ALTER TABLE `payment_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `product_identifies`
--
ALTER TABLE `product_identifies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `promotional_codes`
--
ALTER TABLE `promotional_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `promotional_code_used_by_users`
--
ALTER TABLE `promotional_code_used_by_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `property_searchs`
--
ALTER TABLE `property_searchs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT pour la table `pub_images`
--
ALTER TABLE `pub_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT pour la table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `validate_payments`
--
ALTER TABLE `validate_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
