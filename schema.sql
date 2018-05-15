-- -- create database
-- DROP DATABASE IF EXISTS `JSJswim_db`;
-- CREATE DATABASE `JSJswim_db`;

-- USE JSJswim_db;
-- -- create tables
-- CREATE TABLE user_ID (
--     user_id VARCHAR(40) NOT NULL,
--     name VARCHAR(40),
--     family_code VARCHAR(40),
--     -- family code UUID
--     type VARCHAçR(40) DEFAULT 'Parent',
--     PRIMARY KEY (user_id)
--     -- type will be either parent or child.  This way you can have one family ID for either a parent, or a child.  
--     -- family code will be a unique ID that can match multiple children
-- );

-- CREATE TABLE class_participant (
--     class_participant_Id VARCHAR(40), 
--     class_instance_ID VARCHAR(40),
--     participant_ID VARCHAR(40), 
--     -- above user id
--     registration_date DATETIME, 
--     active TINYINT DEFAULT 0,
--     withdrawal_date DATETIME,
--     parent_id VARCHAR(40) NULL,
--     PRIMARY KEY (class_participant_id)
-- );

-- CREATE TABLE class_description (
--     class_description_id INT(10),
--     class_name VARCHAR(40) NOT NULL,
--     age_min VARCHAR(40) NOT NULL,
--     age_max VARCHAR(40) NOT NULL,
--     length of time
--     PRIMARY KEY (class_description_id)
--     -- add more here.  seats total may go in the other area?

-- );

-- CREATE TABLE class_instances (
--     class_instance_id VARCHAR(40) NOT NULL,
--     class_ID VARCHAR(40) NOT NULL,
--     week_day VARCHAR(40),
--     start_date DATETIME(6),
--     end_date DATETIME(6),
--     length VARCHAR(10),
--     seats_available INT(10) DEFAULT 0, 
--     seats_total INT(10) NOT NULL, 
--     seats_filled INT(10) NULL,
--     PRIMARY KEY (class_instance_id)
-- );

-- -- the UUID side of itwill be on the .js file as   id: uuid()

-- -- adding the data for the swim lesson registration
-- INSERT INTO 
--     class_description (class_name, age_min, age_max, seats_total)
-- VALUES 
-- -- i might want to change these to INT. later and use a function to add in months/years if i need to calculate the age of the child for signups. 
--     ('Parent with child', '6 months', '3 years', 10),
--     ('Leap Frog', '2.5 years', '4 years', 10),
--     ('Pre-School Parrotfish', '3 years', '4 years', 5),
--     ('Goldfish', '5 years', '10 years', 3),
--     ('clownfishes', '5 years', '10 years', 4),
--     ('Tortoises', '5 years', '10 years', 5),
--     ('Dolphins', '6 years', '10 years', 6),
--     ('Pre-competitive', '8 years', '14 years', 10),
--     ('Masters Swim', '18 Years', '98 Years', 24);

-- -- INSERT INTO
-- -- where does TIMESTAMP? go.
--     class_instances (class_ID, start_date, end_date, length, seats_available, seats_total, seats_filled)

-- VALUES
-- ask about space holders for the uuid and seats avail
-- first group is for parent child- figure how to indicate that, just the uuid matching?




-- --              Monday, sept 10th- nov 12th 3:30PM -  parent child class
--     ('uuid', '201809101530', '201811121530', '30 minutes', '10', '0', '0'),

--                 -- tuesday, sept 11 - nov 13  10AM
--     ('uuid', '201809111000', '201311131000',), 

--     --          weds, sept 12 - nov 14 - 4:00PM 
--     ('uuid', '201809121600', '201811141600'),

--     --          thurs, sept 13 - nov 15 - 10:30AM
--     ('uuid', '201809131030', '201811151030'),

--     --          friday, sept 14 - nov 16 - 2:00PM
--     ('uuid', '201809141400', '201811161400'),
--     --          Sat, sept 15 - nov 17






