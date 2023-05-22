-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2023 at 09:21 PM
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
-- Table structure for table `datatable`
--

CREATE TABLE `datatable` (
  `data_id` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `folder` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datatable`
--

INSERT INTO `datatable` (`data_id`, `filename`, `folder`, `created_at`, `updated_at`) VALUES
('04d6609f618ebc1bb805d71ab89455c8', 'reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '../Reels/Row/reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '2023-02-10 23:37:29', '2023-02-10 23:37:29'),
('0b3823b65c11f4fb9d7ae063fd50f0bb', 'reels-video-maker_0b3823b65c11f4fb9d7ae063fd50f0bb_10_51_13.JPG', '../Reels/Row/reels-video-maker_0b3823b65c11f4fb9d7ae063fd50f0bb_10_51_13.JPG', '2023-02-09 22:51:13', '2023-02-09 22:51:13'),
('4fefafc6867bf34410878631feaa5120', 'reels-video-maker_4fefafc6867bf34410878631feaa5120_01_04_04.', '../Reels/Row/reels-video-maker_4fefafc6867bf34410878631feaa5120_01_04_04.', '2023-02-11 01:04:04', '2023-02-11 01:04:04'),
('6d2d131c416d2cc1812bae5c411ade1e', 'reels-video-maker_6d2d131c416d2cc1812bae5c411ade1e_01_04_34.', '../Reels/Row/reels-video-maker_6d2d131c416d2cc1812bae5c411ade1e_01_04_34.', '2023-02-11 01:04:34', '2023-02-11 01:04:34'),
('793725d87ccdfbb7008588d0bd8e8937', 'reels-video-maker_793725d87ccdfbb7008588d0bd8e8937_11_37_30.JPG', '../Reels/Row/reels-video-maker_793725d87ccdfbb7008588d0bd8e8937_11_37_30.JPG', '2023-02-10 23:37:30', '2023-02-10 23:37:30'),
('8ca0390546c4c857554306bfe254211a', 'reels-video-maker_8ca0390546c4c857554306bfe254211a_10_51_13.JPG', '../Reels/Row/reels-video-maker_8ca0390546c4c857554306bfe254211a_10_51_13.JPG', '2023-02-09 22:51:13', '2023-02-09 22:51:13'),
('92f5539c25ceac88017781dd519f78c2', 'reels-video-maker_92f5539c25ceac88017781dd519f78c2_12_19_44.mp4', '../Reels/Row/reels-video-maker_92f5539c25ceac88017781dd519f78c2_12_19_44.mp4', '2023-02-11 00:19:44', '2023-02-11 00:19:44'),
('949971c75abc065e8959431f85ca5ddb', 'reels-video-maker_949971c75abc065e8959431f85ca5ddb_01_03_09.', '../Reels/Row/reels-video-maker_949971c75abc065e8959431f85ca5ddb_01_03_09.', '2023-02-11 01:03:09', '2023-02-11 01:03:09'),
('b89dd725900e56f9e734bb04bcce0cff', 'reels-video-maker_b89dd725900e56f9e734bb04bcce0cff_12_22_22.mp4', '../Reels/Row/reels-video-maker_b89dd725900e56f9e734bb04bcce0cff_12_22_22.mp4', '2023-02-13 00:22:22', '2023-02-13 00:22:22'),
('de301241cb1d64ff7b3ddfba52331900', 'reels-video-maker_de301241cb1d64ff7b3ddfba52331900_10_51_13.JPG', '../Reels/Row/reels-video-maker_de301241cb1d64ff7b3ddfba52331900_10_51_13.JPG', '2023-02-09 22:51:13', '2023-02-09 22:51:13'),
('ff6053c20687d125cdad26230eb18b92', 'reels-video-maker_ff6053c20687d125cdad26230eb18b92_11_37_29.JPG', '../Reels/Row/reels-video-maker_ff6053c20687d125cdad26230eb18b92_11_37_29.JPG', '2023-02-10 23:37:29', '2023-02-10 23:37:29');

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
  `status` int(1) NOT NULL,
  `downloadLink` varchar(255) NOT NULL,
  `downloadTime` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userorder`
--

INSERT INTO `userorder` (`order_id`, `proj_name`, `title`, `notes`, `song`, `data_list`, `user_id`, `user_name`, `amount`, `paymentId`, `image`, `status`, `downloadLink`, `downloadTime`, `created_at`, `updated_at`) VALUES
('03d4adecf948bf65bff8accf0611f127', '02', '02', '02', '02', '[\"04d6609f618ebc1bb805d71ab89455c8\",\"ff6053c20687d125cdad26230eb18b92\",\"793725d87ccdfbb7008588d0bd8e8937\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', 1, 'http://localhost:80/reelsvideoapis/Reels/Row/reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '2023-02-11 01:37:30', '2023-02-10 23:37:30', '2023-02-10 23:37:30'),
('9701486ecb6c964041d6a5235b70444b', '0010', '010', '1', '01', '[\"de301241cb1d64ff7b3ddfba52331900\",\"8ca0390546c4c857554306bfe254211a\",\"0b3823b65c11f4fb9d7ae063fd50f0bb\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', 1, 'http://localhost:80/reelsvideoapis/Reels/Row/reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '2023-02-10 00:51:13', '2023-02-09 22:51:13', '2023-02-09 22:51:13'),
('afb6131e96a0133cc0fb999dbd6de917', '03', '03', '03', '03', '[\"92f5539c25ceac88017781dd519f78c2\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', 1, 'http://localhost:80/reelsvideoapis/Reels/Row/reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '2023-02-11 02:19:44', '2023-02-11 00:19:44', '2023-02-11 00:19:44'),
('e88d49d35a0cd3d892fe72aa84e992f7', '05', '05', '05', '05', '[\"b89dd725900e56f9e734bb04bcce0cff\"]', '1a0272ddd6cb4a68c875f65f8c727abe', 'Variya3', '100', '', '', 1, 'http://localhost:80/reelsvideoapis/Reels/Row/reels-video-maker_04d6609f618ebc1bb805d71ab89455c8_11_37_29.JPG', '2023-02-13 02:22:22', '2023-02-13 00:22:22', '2023-02-13 00:22:22');

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
