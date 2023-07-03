-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2023 at 06:13 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userId`, `password`) VALUES
(1, 'jonsnow@yopmail.com', 'P@ssw0rd');

-- --------------------------------------------------------

--
-- Table structure for table `dashimages`
--

CREATE TABLE `dashimages` (
  `id` varchar(255) NOT NULL,
  `imageName` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `size` varchar(266) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashimages`
--

INSERT INTO `dashimages` (`id`, `imageName`, `image`, `size`, `created_at`, `updated_at`) VALUES
('dashImage1', 'dashTop1', 'dashTop1.jpg', '285 X 406', '2023-02-16 00:17:27.000000', '2023-06-24 10:57:03.000000'),
('dashImage2', 'dashTop2', 'dashTop2.jpg', '197 X 333', '2023-02-16 00:17:27.000000', '2023-06-24 10:56:59.000000'),
('dashImage3', 'dashTop3', 'dashTop3.jpg', '112 X 125', '2023-02-16 00:17:27.000000', '2023-06-24 10:56:57.000000'),
('dashImage4', 'dashTop4', 'dashTop4.jpg', '197 X 224', '2023-02-16 00:17:27.000000', '2023-06-24 10:56:52.000000'),
('dashImage5', 'dashContact1', 'dashContact1.jpg', '180 X 204', '2023-02-16 00:17:27.000000', '2023-06-24 10:57:10.000000'),
('dashImage6', 'dashContact2', 'dashContact2.jpg', '180 X 295', '2023-02-16 00:17:27.000000', '2023-06-24 10:57:08.000000'),
('dashImage7', 'dashContact3', 'dashContact3.jpg', '278 X 330', '2023-02-16 00:17:27.000000', '2023-06-24 10:57:06.000000');

-- --------------------------------------------------------

--
-- Table structure for table `dashprojects`
--

CREATE TABLE `dashprojects` (
  `id` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `imageName` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashprojects`
--

INSERT INTO `dashprojects` (`id`, `image`, `imageName`, `title`, `subtitle`, `created_at`, `updated_at`) VALUES
('dashProject1', '001.jpg', '001', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:27.000000'),
('dashProject2', '002.jpg', '002', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:30.000000'),
('dashProject3', '003.jpg', '003', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:32.000000'),
('dashProject4', '004.jpg', '004', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:35.000000'),
('dashProject5', '005.jpg', '005', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:38.000000'),
('dashProject6', '006.jpg', '006', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:41.000000'),
('dashProject7', '007.jpg', '007', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:44.000000'),
('dashProject8', '008.jpg', '008', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-24 10:58:47.000000');

-- --------------------------------------------------------

--
-- Table structure for table `datatable`
--

CREATE TABLE `datatable` (
  `data_id` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `folder` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datatable`
--

INSERT INTO `datatable` (`data_id`, `filename`, `folder`, `created_at`, `updated_at`) VALUES
('cf0c9a6cbe31461f407ab9ce24da99f6', 'reels-video-maker_cf0c9a6cbe31461f407ab9ce24da99f6_09_41_06.zip', '../Reels/Row/reels-video-maker_cf0c9a6cbe31461f407ab9ce24da99f6_09_41_06.zip', '2023-07-03 21:41:06.000000', '2023-07-03 21:41:06.000000');

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
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
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
  `zipId` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymentId` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `downloadLink` varchar(255) NOT NULL,
  `downloadTime` datetime(6) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userorder`
--

INSERT INTO `userorder` (`order_id`, `proj_name`, `title`, `notes`, `song`, `zipId`, `user_id`, `user_name`, `amount`, `paymentId`, `image`, `status`, `downloadLink`, `downloadTime`, `created_at`, `updated_at`) VALUES
('0b1e3a03f2aea2829dac02a0c577b045', '01', '01', '01', '01', 'cf0c9a6cbe31461f407ab9ce24da99f6', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '200', '', '', 1, '', '2023-07-03 23:41:06.000000', '2023-07-03 21:41:06.000000', '2023-07-03 21:41:06.000000');

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
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `full_name`, `user_name`, `email`, `mobile`, `password`, `created_at`, `updated_at`) VALUES
('d70781c9551d9da01960aab9b40e254f', 'Shravan', 'Variya', 'shravanvariya@gmail.com', '9510437332', '$2y$10$e.5kku7OkhWS3vfui/nMsO5VQpjq0yJOVXyKamGtkrp.Oo2yxkSUG', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `datatable`
--
ALTER TABLE `datatable`
  ADD PRIMARY KEY (`data_id`);

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

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
