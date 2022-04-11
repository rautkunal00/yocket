CREATE TABLE `event` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(72) NOT NULL,
  `start_time` timestamp NOT NULL,
  `duration` time NOT NULL,
  PRIMARY KEY (`event_id`)
) 