CREATE TABLE `adminLogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`adminId` int NOT NULL,
	`action` varchar(100) NOT NULL,
	`resourceType` varchar(50),
	`resourceId` int,
	`details` text,
	`ipAddress` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `adminLogs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `files` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`fileUrl` text NOT NULL,
	`mimeType` varchar(100) NOT NULL,
	`fileSize` int,
	`fileType` enum('worksheet','image','video','document','other') NOT NULL,
	`uploadedBy` int NOT NULL,
	`downloadCount` int DEFAULT 0,
	`isPublic` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `files_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `games` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`subject` enum('German','Maths') NOT NULL,
	`grade` int NOT NULL,
	`gameType` enum('vocabulary_match','spelling_bee','hangman','quiz','mental_math','puzzle','race','fraction_master','geometry') NOT NULL,
	`difficulty` enum('Easy','Medium','Hard') NOT NULL,
	`gameUrl` text,
	`isEmbedded` int DEFAULT 0,
	`uploadedBy` int NOT NULL,
	`playCount` int DEFAULT 0,
	`averageScore` int,
	`isPublished` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `games_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `studentProgress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`worksheetId` int,
	`gameId` int,
	`videoId` int,
	`completionStatus` enum('started','in_progress','completed') NOT NULL,
	`score` int,
	`timeSpentSeconds` int,
	`completedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `studentProgress_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `videos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`subject` enum('German','Maths') NOT NULL,
	`grade` int NOT NULL,
	`difficulty` enum('Easy','Medium','Hard') NOT NULL,
	`videoType` enum('youtube','s3','external') NOT NULL,
	`videoUrl` text NOT NULL,
	`youtubeId` varchar(100),
	`thumbnailUrl` text,
	`durationSeconds` int,
	`uploadedBy` int NOT NULL,
	`viewCount` int DEFAULT 0,
	`isPublished` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `videos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `worksheets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`subject` enum('German','Maths') NOT NULL,
	`grade` int NOT NULL,
	`difficulty` enum('Easy','Medium','Hard') NOT NULL,
	`fileKey` varchar(512) NOT NULL,
	`fileUrl` text NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`mimeType` varchar(100) DEFAULT 'application/pdf',
	`fileSize` int,
	`uploadedBy` int NOT NULL,
	`downloadCount` int DEFAULT 0,
	`isPublished` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `worksheets_id` PRIMARY KEY(`id`)
);
