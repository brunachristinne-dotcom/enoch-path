CREATE TABLE `feedback` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`email` varchar(320),
	`message` text NOT NULL,
	`rating` int,
	`submittedAt` timestamp NOT NULL DEFAULT (now()),
	`userId` int,
	CONSTRAINT `feedback_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `newsletter` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(255),
	`subscribedAt` timestamp NOT NULL DEFAULT (now()),
	`isActive` int NOT NULL DEFAULT 1,
	CONSTRAINT `newsletter_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletter_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `pageVisits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`page` varchar(255) NOT NULL,
	`userAgent` text,
	`referrer` text,
	`visitedAt` timestamp NOT NULL DEFAULT (now()),
	`userId` int,
	CONSTRAINT `pageVisits_id` PRIMARY KEY(`id`)
);
