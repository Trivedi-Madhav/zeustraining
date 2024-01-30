START TRANSACTION;
SET @user_id = 3;
INSERT INTO `quantum`.`userselectedwalkindetails` (user_id, walkInId, timeSlotID) VALUES (@user_id, 1, 1);
INSERT INTO `quantum`.`userselectedpreferences` (walkInRoleID, walkInId, user_id) VALUES (1, 1, @user_id);
COMMIT;
