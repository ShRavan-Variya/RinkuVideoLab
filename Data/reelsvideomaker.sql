-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2023 at 04:42 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reelsvideomaker`
--

-- --------------------------------------------------------

--
-- Table structure for table `dashimages`
--

CREATE TABLE `dashimages` (
  `id` varchar(255) NOT NULL,
  `imageName` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashimages`
--

INSERT INTO `dashimages` (`id`, `imageName`, `image`, `created_at`, `updated_at`) VALUES
('0b454d8c90e01501ef5e1f1f89187e8c', 'dash_top_1', 'https://images.pexels.com/photos/11670564/pexels-photo-11670564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('1a0272ddd6cb4a68c875f65f8c727abe', 'dash_contact_3', 'https://images.pexels.com/photos/4674342/pexels-photo-4674342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('35f6187bf684ba718dc32f522bed6784', 'dash_contact_2', 'https://images.pexels.com/photos/3889866/pexels-photo-3889866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('5cd4707f8c1c5017f09e1698dd278812', 'dash_top_2', 'https://images.pexels.com/photos/8859190/pexels-photo-8859190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('8bd1fcc433f6dfaad32574ba445e9a39', 'dash_top_3', 'https://images.pexels.com/photos/14652203/pexels-photo-14652203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('cc6c7e3b1ba0e22187e0e20787077dae', 'dash_top_4', 'https://images.pexels.com/photos/14854471/pexels-photo-14854471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('d70781c9551d9da01960aab9b40e254f', 'dash_contact_1', 'https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-01-25 00:12:53', '2023-01-25 00:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `dashprojects`
--

CREATE TABLE `dashprojects` (
  `id` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashprojects`
--

INSERT INTO `dashprojects` (`id`, `image`, `title`, `subtitle`, `created_at`, `updated_at`) VALUES
('0b454d8c90e01501ef5e1f1f89187e8c', 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('1a0272ddd6cb4a68c875f65f8c727abe', 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('35f6187bf684ba718dc32f522bed6784', 'https://images.pexels.com/photos/6033609/pexels-photo-6033609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('35f6187bf684ba718dc32f522bed9999', 'https://images.pexels.com/photos/6983438/pexels-photo-6983438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('5cd4707f8c1c5017f09e1698dd278812', 'https://images.pexels.com/photos/6405724/pexels-photo-6405724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('5cd4707f8c1c5017f09e1698dd278888', 'https://images.pexels.com/photos/6047880/pexels-photo-6047880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('8bd1fcc433f6dfaad32574ba445e9339', 'https://images.pexels.com/photos/6747393/pexels-photo-6747393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('8bd1fcc433f6dfaad32574ba445e9a39', 'https://images.pexels.com/photos/5957118/pexels-photo-5957118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('cc6c7e3b1ba0e22187e0e20787077d7r', 'https://images.pexels.com/photos/11070632/pexels-photo-11070632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('cc6c7e3b1ba0e22187e0e20787077dae', 'https://images.pexels.com/photos/4055337/pexels-photo-4055337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-01-25 00:12:53', '2023-01-25 00:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` varchar(256) NOT NULL,
  `order_id` varchar(256) NOT NULL,
  `user_id` varchar(256) NOT NULL,
  `user_name` varchar(256) NOT NULL,
  `payment` int(255) NOT NULL,
  `status` int(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userorder`
--

CREATE TABLE `userorder` (
  `order_id` varchar(255) NOT NULL,
  `proj_name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `song` varchar(255) NOT NULL,
  `data_list` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymentId` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `downloadLink` varchar(255) NOT NULL,
  `downloadTime` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userorder`
--

INSERT INTO `userorder` (`order_id`, `proj_name`, `title`, `notes`, `song`, `data_list`, `user_id`, `user_name`, `amount`, `paymentId`, `image`, `downloadLink`, `downloadTime`, `created_at`, `updated_at`) VALUES
('0b454d8c90e01501ef5e1f1f89187e8c', 'aaa', 'aaa', 'aaa', 'aaa', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg', '', '', '2023-01-25 00:12:53', '2023-01-25 00:12:53'),
('2b911f8b84cd6c4f10714e0dfc0f1944', 'check date time', 'check', 'check', 'check', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', '', '', '2023-01-27 00:04:59', '2023-01-27 00:04:59'),
('5cd4707f8c1c5017f09e1698dd278812', 'bdcvb', 'zdfvb', 'dzxfvb', 'dzxfvb', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-25 00:12:21', '2023-01-25 00:12:21'),
('5d389dfcbd1ab72aeca95f43a12907d0', 'check new', 'check new', 'check new', 'check new', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/6033609/pexels-photo-6033609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-26 23:06:59', '2023-01-26 23:06:59'),
('6a0a4b27763f6a04ea661d9a06eb9dd8', 'yo yo', 'yo yo ', 'chcekc', 'wdv', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', '', '', '2023-01-27 00:06:29', '2023-01-27 00:06:29'),
('7398137a4aaf3a7525cc7840492d1569', 'yo yo', 'yo yo ', 'chcekc', 'wdv', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', '', '2023-01-27 02:07:31', '2023-01-27 00:07:31', '2023-01-27 00:07:31'),
('8bd1fcc433f6dfaad32574ba445e9a39', 'sd', 'sd', 'sd', 'sd', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/6983438/pexels-photo-6983438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-25 00:14:18', '2023-01-25 00:14:18'),
('99a98b09006b9b7183d1a3a7b067a080', 'gj', 'ghj', 'tgjk', 'dgyj', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', '', '2023-01-27 02:10:15', '2023-01-27 00:10:15', '2023-01-27 00:10:15'),
('b4763d740fdfaf7e1fee04447f6870bd', 'Jon Snow', 'Jon Snow', 'Jon Snow', 'Jon Snow', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/6405724/pexels-photo-6405724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-26 01:30:08', '2023-01-26 01:30:08'),
('cc6c7e3b1ba0e22187e0e20787077dae', 'aaa', 'aaa', 'aaa', 'aaa', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/6047880/pexels-photo-6047880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-25 00:12:41', '2023-01-25 00:12:41'),
('ce8b70c56291fecf9427023b50df9278', 'Jimmy', 'Jimmy', 'Jimmy', 'Jimmy', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/6747393/pexels-photo-6747393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Jon Snow', '', '2023-01-26 01:30:58', '2023-01-26 01:30:58'),
('e962eb830b5de8acb09038bbcc96144f', '123', '123', '123', '123', '[\"abc\",\"def\",\"ghi\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', 'https://images.pexels.com/photos/5957118/pexels-photo-5957118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '', '', '2023-01-25 00:09:32', '2023-01-25 00:09:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `full_name`, `user_name`, `email`, `mobile`, `password`, `created_at`, `updated_at`) VALUES
('1a0272ddd6cb4a68c875f65f8c727abe', 'Shravan3', 'Variya3', 'shravanvariya3@gmail.com', '9510437332', '$2y$10$gARvjrlzFA4YB8wlMDg6HuN1W9SUJscbUSqV8YQHtrADxDo6DYjyy', '2023-01-23 23:05:18', '2023-01-23 23:05:18'),
('35f6187bf684ba718dc32f522bed6784', 'Shravan2', 'Variya2', 'shravanvariya2@gmail.com', '9510437332', '$2y$10$szxKydIo.keq42vYTYezAeV5ilohbGWbbdK9VNpdwxHEmPm1B.Zfq', '2023-01-23 23:00:34', '2023-01-23 23:00:34'),
('d70781c9551d9da01960aab9b40e254f', 'Shravan', 'Variya', 'shravanvariya@gmail.com', '9510437332', '$2y$10$e.5kku7OkhWS3vfui/nMsO5VQpjq0yJOVXyKamGtkrp.Oo2yxkSUG', '2022-11-17 00:43:16', '2022-11-17 00:43:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dashimages`
--
ALTER TABLE `dashimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dashprojects`
--
ALTER TABLE `dashprojects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `userorder`
--
ALTER TABLE `userorder`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
