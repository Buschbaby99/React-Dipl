-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 12. Mrz 2023 um 16:03
-- Server-Version: 10.4.27-MariaDB
-- PHP-Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `dpl`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `area`
--

CREATE TABLE `area` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `manager_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `dep_area`
--

CREATE TABLE `dep_area` (
  `department_id` bigint(20) NOT NULL,
  `area_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `failed_jobs`
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
-- Tabellenstruktur für Tabelle `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_12_000000_create_adress_table', 1),
(6, '2023_02_12_000000_create_area_table', 1),
(7, '2023_02_12_000000_create_dep_area_table', 1),
(8, '2023_02_12_000000_create_department_table', 1),
(9, '2023_02_12_000000_create_projects_address_table', 1),
(10, '2023_02_12_000000_create_projects_table', 1),
(11, '2023_02_12_000000_create_staffing_table', 1),
(12, '2023_02_12_141158_create_persons', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `personaddresses`
--

CREATE TABLE `personaddresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country` varchar(255) NOT NULL,
  `ZIP` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `personaddresses`
--

INSERT INTO `personaddresses` (`id`, `country`, `ZIP`, `city`, `street`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', '2023-02-17 06:13:20', '2023-02-17 06:13:20'),
(2, 'AT', '7564', 'Dobersdorf', 'Gartengasse 1', '2023-02-17 06:21:38', '2023-02-17 06:21:38'),
(3, 'AT', '7564', 'Dobersdorf', 'Gartengasse 1', '2023-02-17 06:22:56', '2023-02-17 06:22:56'),
(4, 'AT', '7564', 'Dobersdorf', 'Gartengasse 1', '2023-02-17 06:23:49', '2023-02-17 06:23:49'),
(5, 'AT', '7564', 'Dobersdorfer', 'Gartengasse 1', '2023-02-17 06:25:16', '2023-03-12 13:13:39'),
(6, 'Manager', 'Manager', 'Manager', 'Manager', '2023-02-17 06:33:13', '2023-02-17 06:33:50'),
(7, 'Austria', '8041', 'Graz', 'Sternäckerweg', '2023-02-17 06:50:32', '2023-02-17 06:50:59'),
(8, 'sdd', '333', 'dfdf', 'dsdd', '2023-02-20 08:15:56', '2023-02-20 09:06:08'),
(9, 'dffd', '444', 'ffg', 'fgfg', '2023-02-20 08:51:11', '2023-02-20 09:14:43'),
(10, 'dsfd', '324', 'cv', 'ycyx', '2023-02-20 10:47:47', '2023-02-24 07:36:52'),
(11, 'Austria', '8041', 'Graz', 'Sternäckerweg', '2023-02-23 08:56:12', '2023-02-23 08:56:12'),
(12, 'aa', '22', 'ss', 'xx', '2023-02-24 08:12:59', '2023-03-12 13:41:15'),
(13, 'sacsac', '45', 'dvdf', 'vdv', '2023-02-24 08:54:58', '2023-02-24 08:54:58'),
(14, 'sss', 'sss', 'ss', 'ss', '2023-02-24 08:56:46', '2023-02-24 08:56:46');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `persons`
--

CREATE TABLE `persons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `TelNr1` varchar(255) NOT NULL,
  `TelNr2` varchar(255) DEFAULT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `department` varchar(20) NOT NULL,
  `personAddress_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `persons`
--

INSERT INTO `persons` (`id`, `firstname`, `lastname`, `TelNr1`, `TelNr2`, `rank`, `user_id`, `department`, `personAddress_id`, `created_at`, `updated_at`) VALUES
(1, 'Alexander', 'Kainz', '06641509102', '06641509102', NULL, 9, 'Rechtschutz', 5, '2023-02-17 06:25:16', '2023-02-17 06:25:16'),
(2, 'Manager', 'Manager', 'Manager', 'Manager', NULL, 10, 'Manager', 6, '2023-02-17 06:33:13', '2023-02-17 06:33:13'),
(4, 'Test', 'Test', '12211', '211', NULL, 12, 'sdsd', 8, '2023-02-20 08:15:56', '2023-02-20 08:15:56'),
(5, 'zzzzsdsd', 'zz', '222', '222', NULL, 13, 'zz', 9, '2023-02-20 08:51:11', '2023-02-20 09:06:47'),
(6, 'sdcsdc', 'sdcsdc', '324234', '23423', NULL, 14, 'dscsd', 10, '2023-02-20 10:47:47', '2023-02-20 10:47:47'),
(7, 'Mario', 'Pilz', '0', '0', NULL, 15, 'Programmierer', 11, '2023-02-23 08:56:12', '2023-02-23 08:56:12'),
(8, 'Dominik', 'Kosednar', '22', '22', NULL, 16, 'aa', 12, '2023-02-24 08:12:59', '2023-03-12 13:41:15'),
(9, 'assaa', 'asas', 'saas', 'assas', NULL, 17, 'asas', 13, '2023-02-24 08:54:58', '2023-02-24 08:54:58');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `project_number` int(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `projectAddress_Id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `projects`
--

INSERT INTO `projects` (`id`, `name`, `project_number`, `description`, `startDate`, `endDate`, `projectAddress_Id`, `created_at`, `updated_at`) VALUES
(6, 'Magna Halle 12', 1, '<x<yx<', '2023-03-02', '2023-04-29', 6, '2023-02-24 07:02:09', '2023-03-12 13:11:52'),
(7, 'ACC IBN Kompressor', 2, 'hhh', '2023-03-07', '2023-04-27', 7, '2023-02-24 08:58:20', '2023-03-12 13:12:56'),
(8, 'Testprojekt', 3, 'Test 33', '2023-03-17', '2023-04-09', 8, '2023-03-04 06:07:39', '2023-03-12 13:13:04');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `project_addresses`
--

CREATE TABLE `project_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country` varchar(255) NOT NULL,
  `ZIP` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `project_addresses`
--

INSERT INTO `project_addresses` (`id`, `country`, `ZIP`, `city`, `street`, `created_at`, `updated_at`) VALUES
(6, 'Austria', '1000', 'kksksk', 'kskkssk', '2023-02-24 07:02:09', '2023-02-24 07:31:30'),
(7, 'zzz', '77', 'hhh', 'hhhh', '2023-02-24 08:58:20', '2023-02-24 08:58:20'),
(8, 'Austria', '7564', 'Dobersdorf', 'Gartengasse 1', '2023-03-04 06:07:39', '2023-03-04 06:07:39');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `staffings`
--

CREATE TABLE `staffings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `person_Id` bigint(20) NOT NULL,
  `project_Id` bigint(20) NOT NULL,
  `startDate` timestamp NULL DEFAULT NULL,
  `endDate` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `staffings`
--

INSERT INTO `staffings` (`id`, `person_Id`, `project_Id`, `startDate`, `endDate`, `created_at`, `updated_at`) VALUES
(1, 1, 6, '2023-03-12 23:00:00', '2023-03-16 09:46:14', NULL, NULL),
(2, 1, 7, '2023-03-18 23:00:00', '2023-03-22 23:00:00', NULL, NULL),
(3, 7, 8, '2023-03-13 12:18:23', '2023-03-17 12:19:01', NULL, NULL),
(4, 8, 8, '2023-03-01 14:15:39', '2023-03-03 14:15:39', NULL, NULL),
(5, 8, 8, '2023-03-06 14:16:03', '2023-03-10 14:16:03', NULL, NULL),
(6, 1, 8, '2023-04-03 13:58:04', '2023-04-07 13:58:04', NULL, NULL);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` bigint(20) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(9, 'Admin', 'admin@gmx.at', NULL, '$2y$10$PwZ.hLuEkhOoC4.kjZRFoO2dSePCpsXUGpmfl6rM61aid5/2AFeay', 1, NULL, '2023-02-17 06:25:16', '2023-03-12 13:13:39'),
(10, 'Manager', 'manager@gmx.at', NULL, '$2y$10$tYqaknEPBAs1tjRly.jNzueCKwSJtdB7dJKudP1skRwLRM7rhlQoe', 2, NULL, '2023-02-17 06:33:13', '2023-02-23 08:01:32'),
(12, 'Test212ssxxx', 'test@gmx.at', NULL, '$2y$10$d3jMlxXRhJlv5EowJJXYG.waO9lpyRyFuYR.xo0VGAY4sECXOT2iu', 1, NULL, '2023-02-20 08:15:56', '2023-02-20 09:06:08'),
(13, 'zzaa', 'zzz@tt.at', NULL, '$2y$10$r1jmstsFlfwFH9ZN/KbLeu.9Xc8vh2K6GVhrg.fwXX37IFf366tmq', 1, NULL, '2023-02-20 08:51:11', '2023-02-20 09:14:43'),
(14, 'aaaa', 'dasdasda@sdcsd.at', NULL, '$2y$10$fPzMZCV3ZMvq0OnUWUVPZe/yOGTtm6tJkWlEYZwbfjdyXbUIpOiTC', 1, NULL, '2023-02-20 10:47:47', '2023-02-24 07:36:52'),
(15, 'Mario', 'mario.pilz0601@gmail.com', NULL, '$2y$10$RqHTxmSZnJHGeVi.tNT8legJFzQnBm4C6Asn7mt8WqrUq.QnbFfE6', 0, NULL, '2023-02-23 08:56:12', '2023-02-23 08:56:12'),
(16, 'User', 'user@gmx.at', NULL, '$2y$10$qkk5mYt9fUv4UywXunhlwervz/L/MZQ.hyTwjsDlEZ5GZ0.5o.tHG', 0, NULL, '2023-02-24 08:12:59', '2023-03-12 13:14:10'),
(17, 'vsdvsd', 'sdvsdv@scsc.at', NULL, '$2y$10$rVGaksZ0w5nQ1TU0AfiR5OKecyYr5TVqDqp1dgh1ZIkZVauN9TwCK', 1, NULL, '2023-02-24 08:54:58', '2023-02-24 08:54:58');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indizes für die Tabelle `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indizes für die Tabelle `personaddresses`
--
ALTER TABLE `personaddresses`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indizes für die Tabelle `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `project_addresses`
--
ALTER TABLE `project_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `staffings`
--
ALTER TABLE `staffings`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `area`
--
ALTER TABLE `area`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT für Tabelle `personaddresses`
--
ALTER TABLE `personaddresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT für Tabelle `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `persons`
--
ALTER TABLE `persons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `project_addresses`
--
ALTER TABLE `project_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `staffings`
--
ALTER TABLE `staffings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
