-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2022 at 07:37 PM
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
-- Table structure for table `downloads`
--

CREATE TABLE `downloads` (
  `download_id` varchar(256) NOT NULL,
  `payment_id` varchar(256) NOT NULL,
  `order_id` varchar(256) NOT NULL,
  `user_id` varchar(256) NOT NULL,
  `user_name` varchar(256) NOT NULL,
  `download_data` varchar(256) NOT NULL,
  `download_time` datetime NOT NULL,
  `status` int(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `order_id` varchar(256) NOT NULL,
  `proj_name` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `notes` varchar(256) NOT NULL,
  `song` varchar(256) NOT NULL,
  `data_list` varchar(256) NOT NULL,
  `user_id` varchar(256) NOT NULL,
  `user_name` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userorder`
--

INSERT INTO `userorder` (`order_id`, `proj_name`, `title`, `notes`, `song`, `data_list`, `user_id`, `user_name`, `created_at`, `updated_at`) VALUES
('74243d0e9316c97fc3a67e2c136cbf9e', '', '', '', '', '[\"abc\",\"def\",\"ghi\"]', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '2022-11-24 23:19:50', '2022-11-24 23:19:50'),
('b95f637f280f1fc6432b9d14c41b9648', '', '', '', '', '[\"abc\",\"def\",\"ghi\"]', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '2022-11-24 23:44:06', '2022-11-24 23:44:06'),
('bfbb96f4290c86c6f67729c92a974086', '', '', '', '', '[\"abc\",\"def\",\"ghi\"]', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '2022-11-24 23:19:52', '2022-11-24 23:19:52');

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
('d70781c9551d9da01960aab9b40e254f', 'Shravan', 'Variya', 'shravanvariya@gmail.com', '9510437332', '$2y$10$e.5kku7OkhWS3vfui/nMsO5VQpjq0yJOVXyKamGtkrp.Oo2yxkSUG', '2022-11-17 00:43:16', '2022-11-17 00:43:16');

--
-- Indexes for dumped tables
--

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
