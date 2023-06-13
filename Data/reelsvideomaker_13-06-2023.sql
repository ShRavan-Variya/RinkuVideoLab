-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2023 at 05:43 PM
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
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashimages`
--

INSERT INTO `dashimages` (`id`, `imageName`, `image`, `created_at`, `updated_at`) VALUES
('dashImage1', 'dashTop1', 'dashTop1.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:36:43.000000'),
('dashImage2', 'dashTop2', 'dashTop2.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:36:48.000000'),
('dashImage3', 'dashTop3', 'dashTop3.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:26:18.000000'),
('dashImage4', 'dashTop4', 'dashTop4.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:25:28.000000'),
('dashImage5', 'dashContact1', 'dashContact1.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 15:51:30.000000'),
('dashImage6', 'dashContact2', 'dashContact2.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:10:03.000000'),
('dashImage7', 'dashContact3', 'dashContact3.jpg', '2023-02-16 00:17:27.000000', '2023-06-06 16:42:45.000000');

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
('dashProject1', '001.JPG', '001', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject2', '002.JPG', '002', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject3', '003.JPG', '003', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject4', '004.JPG', '004', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject5', '005.JPG', '005', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject6', '006.JPG', '006', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-05 19:15:01.000000'),
('dashProject7', '007.JPG', '007', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('dashProject8', '008.JPG', '008', 'Be Wild', 'Incididunt elit officia sunt amet nisi nisi occaecat incididunt Lorem qui. Ex ut esse aliqua elit. Dolor sit occaecat deserunt nostrud dolore.', '2023-02-16 00:17:27.000000', '2023-06-05 19:15:14.000000');

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
('0ef91942871b70a29b61f0cfbbeac357', 'reels-video-maker_0ef91942871b70a29b61f0cfbbeac357_11_18_47.zip', '../Reels/Row/reels-video-maker_0ef91942871b70a29b61f0cfbbeac357_11_18_47.zip', '2023-06-06 23:18:47.000000', '2023-06-06 23:18:47.000000'),
('182ff22aef672569408e31935fac9a51', 'reels-video-maker_182ff22aef672569408e31935fac9a51_08_14_19.zip', '../Reels/Row/reels-video-maker_182ff22aef672569408e31935fac9a51_08_14_19.zip', '2023-06-12 20:14:19.000000', '2023-06-12 20:14:19.000000'),
('5753b1d00d624ba43fd8c83f08d7850b', 'reels-video-maker_5753b1d00d624ba43fd8c83f08d7850b_08_44_31.zip', '../Reels/Row/reels-video-maker_5753b1d00d624ba43fd8c83f08d7850b_08_44_31.zip', '2023-06-12 20:44:31.000000', '2023-06-12 20:44:31.000000'),
('643a1831bbe45fa7f2ae71c3baf5899b', 'reels-video-maker_643a1831bbe45fa7f2ae71c3baf5899b_07_58_14.zip', '../Reels/Row/reels-video-maker_643a1831bbe45fa7f2ae71c3baf5899b_07_58_14.zip', '2023-06-11 19:58:14.000000', '2023-06-11 19:58:14.000000'),
('909fcce9435d3098c664720a4fcb188b', 'reels-video-maker_909fcce9435d3098c664720a4fcb188b_07_19_29.zip', '../Reels/Row/reels-video-maker_909fcce9435d3098c664720a4fcb188b_07_19_29.zip', '2023-06-12 19:19:29.000000', '2023-06-12 19:19:29.000000'),
('b8faca11370411be55417143ad90e9ac', 'reels-video-maker_b8faca11370411be55417143ad90e9ac_02_24_43.zip', '../Reels/Row/reels-video-maker_b8faca11370411be55417143ad90e9ac_02_24_43.zip', '2023-06-11 14:24:43.000000', '2023-06-11 14:24:43.000000'),
('ce2259a06bb3714828864a4c9f7ad65c', 'reels-video-maker_ce2259a06bb3714828864a4c9f7ad65c_07_46_45.zip', '../Reels/Row/reels-video-maker_ce2259a06bb3714828864a4c9f7ad65c_07_46_45.zip', '2023-06-12 19:46:45.000000', '2023-06-12 19:46:45.000000');

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
('2845dbf3f7eba3e88fc4ef7e8bcae0a8', '45345324', '45364532', '45345354', '453453', '182ff22aef672569408e31935fac9a51', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-12 22:14:19.000000', '2023-06-12 20:14:19.000000', '2023-06-12 20:14:19.000000'),
('3010498bf626cc3a2f2466434608a470', '0101', '0101', '0101', '0101', '909fcce9435d3098c664720a4fcb188b', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-12 21:19:29.000000', '2023-06-12 19:19:29.000000', '2023-06-12 19:19:29.000000'),
('328cf0b910b59d58ceacfb9d5329af36', '0101', '0101', '0101', '0101', '0ef91942871b70a29b61f0cfbbeac357', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-07 01:18:47.000000', '2023-06-06 23:18:47.000000', '2023-06-06 23:18:47.000000'),
('7511dcb6af5dcfcb18c5411c73ae836b', 'pre wedding shoot', 'Ankita Weds Shravan', 'I need clear 4k video.', 'Closer', 'b8faca11370411be55417143ad90e9ac', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-11 16:24:43.000000', '2023-06-11 14:24:43.000000', '2023-06-11 14:24:43.000000'),
('96dcff2e94bb7baef0dc6185a0d2cdb6', '56345', '4563583', '4863843', '486384693', '5753b1d00d624ba43fd8c83f08d7850b', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-12 22:44:31.000000', '2023-06-12 20:44:31.000000', '2023-06-12 20:44:31.000000'),
('c4850f6aa6a14c7777b693295a17c861', '020202', '00202202', '202020202002', '02202020', 'ce2259a06bb3714828864a4c9f7ad65c', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-12 21:46:45.000000', '2023-06-12 19:46:45.000000', '2023-06-12 19:46:45.000000'),
('c5e5707299cf01473cc1ccd53c24eef6', '01110', '10101', '10101', '101011', '643a1831bbe45fa7f2ae71c3baf5899b', 'd70781c9551d9da01960aab9b40e254f', 'Variya', '100', '', '', 1, '', '2023-06-11 21:58:14.000000', '2023-06-11 19:58:14.000000', '2023-06-11 19:58:14.000000');

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
('1a0272ddd6cb4a68c875f65f8c727abe', 'Shravan3', 'Variya3', 'shravanvariya3@gmail.com', '9510437332', '$2y$10$gARvjrlzFA4YB8wlMDg6HuN1W9SUJscbUSqV8YQHtrADxDo6DYjyy', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
('35f6187bf684ba718dc32f522bed6784', 'Shravan2', 'Variya2', 'shravanvariya2@gmail.com', '9510437332', '$2y$10$szxKydIo.keq42vYTYezAeV5ilohbGWbbdK9VNpdwxHEmPm1B.Zfq', '2023-02-16 00:17:27.000000', '2023-02-16 00:17:27.000000'),
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
