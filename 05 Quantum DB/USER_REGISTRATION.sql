START TRANSACTION;
INSERT INTO `quantum`.`user_profiles`(`firstName`,`lastName`,`userEmail`,`resumeLink`,`userPhoneNumber`,`userPortfolioLink`,`userPreferredJob_id`,`sendMeJobRelatedMail`,`profilePicUrl`)
VALUES
('Madhav','Trivedi','madhav.trivedi@zeuslearning.com','resumeLink',7434857037,'portfolioLink',1,true,'profilePic');
SET @last_user_id = LAST_INSERT_ID();

INSERT INTO education (user_id, aggregatePercentage, yearOfPassing, qualification_id, streamid, college_id) VALUES (@last_user_id, '84', '2024', '1', '1', '1');
INSERT INTO userselectedpreferredjobs (userId, preferredjobid) VALUES (@last_user_id, 1);
Insert Into user_credentials(user_id,password) values(@last_user_id,'ZEUS@123');
INSERT INTO `quantum`.`professionalqualifications`
(`applicantType`,`yearsofexperience`,`user_id`,`currentCTC`,`expectedCTC`,`areYouOnNoticePeriod`,`ifYesWhenNoticePeriodEnd`,`howLongIsNoticePeriod`,`haveYouAppearedForAnyTest`,`ifYesWhichRole`)
VALUES('fresher',0,@last_user_id,NULL,NULL,NULL,null,NULL,0,NULL);
COMMIT;