DROP TABLE IF EXISTS users, contributions, yearly_goals;


CREATE TABLE users (
_id SERIAL UNIQUE PRIMARY KEY,
email varchar(255) NOT NULL,
password varchar(255),
oauth_id varchar(255)
);

CREATE TABLE contributions (
_id SERIAL UNIQUE PRIMARY KEY,
amount MONEY NOT NULL,
payee varchar(255) NOT NULL,
category varchar(255) NOT NULL,
memo varchar(255),
donated_at DATE DEFAULT CURRENT_DATE,
year INT DEFAULT DATE_PART('YEAR', CURRENT_DATE),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(_id)
);

CREATE TABLE yearly_goals (
_id SERIAL UNIQUE PRIMARY KEY,
year int DEFAULT DATE_PART('YEAR', CURRENT_DATE),
goal_amount MONEY,
current_amount MONEY,
user_id int NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(_id)
);


INSERT INTO users (email, password) VALUES ('user1@gmail.com', '1user');
INSERT INTO users (email, password) VALUES ('user2@gmail.com', '2user');
INSERT INTO users (email, password) VALUES ('user3@gmail.com', '3user');
INSERT INTO users (email, password) VALUES ('user4@gmail.com', '4user');
INSERT INTO users (email, password) VALUES ('user5@gmail.com', '5user');

INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'RedCross', 'Humanitarian', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'The Nature Conservancy', 'Wildlife', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Natural Resources Defense Council', 'Landscapes', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (500, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'World Wildlife Fund', 'Wildlife', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'UNICEF', 'Humanitarian', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Planned Parenthood', 'Healthcare', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (200, 'Disabled American Veterans', 'Veteran''s Healthcare', 1, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'SPCA', 'Animal Welfare', 1, 2021);

INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (500, 'RedCross', 'Humanitarian', 1, 2020, '2020-1-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 1, 2020, '2020-2-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (100, 'The Nature Conservancy', 'Wildlife', 1, 2020, '2020-3-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (800, 'Natural Resources Defense Council', 'Landscapes', 1, 2020, '2020-4-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (500, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 1, 2020, '2020-4-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (1500, 'World Wildlife Fund', 'Wildlife', 1, 2020, '2020-5-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (1000, 'UNICEF', 'Humanitarian', 1, 2020, '2020-6-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (100, 'Planned Parenthood', 'Healthcare', 1, 2020, '2020-7-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (300, 'Disabled American Veterans', 'Veteran''s Healthcare', 1, 2020, '2020-8-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (100, 'SPCA', 'Animal Welfare', 1, 2020, '2020-9-15');

INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (600, 'RedCross', 'Humanitarian', 1, 2019, '2019-1-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (200, 'Doctors Without Borders', 'Disaster Relief', 1, 2019, '2019-2-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (400, 'The Nature Conservancy', 'Wildlife', 1, 2019, '2019-3-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (200, 'Natural Resources Defense Council', 'Landscapes', 1, 2019, '2019-4-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (900, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 1, 2019, '2019-4-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (3500, 'World Wildlife Fund', 'Wildlife', 1, 2019, '2019-5-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (7000, 'UNICEF', 'Humanitarian', 1, 2019, '2019-6-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (500, 'Planned Parenthood', 'Healthcare', 1, 2019, '2019-7-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (100, 'Disabled American Veterans', 'Veteran''s Healthcare', 1, 2019, '2019-8-15');
INSERT INTO contributions (amount, payee, category, user_id, year, donated_at) VALUES (1300, 'SPCA', 'Animal Welfare', 1, 2019, '2019-9-15');

INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (500, 'RedCross', 'Humanitarian', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'The Nature Conservancy', 'Wildlife', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Natural Resources Defense Council', 'Landscapes', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (200, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'World Wildlife Fund', 'Wildlife', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'UNICEF', 'Humanitarian', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Planned Parenthood', 'Healthcare', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (400, 'Disabled American Veterans', 'Veteran''s Healthcare', 2, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'SPCA', 'Animal Welfare', 2, 2021);

INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'RedCross', 'Humanitarian', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'The Nature Conservancy', 'Wildlife', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Natural Resources Defense Council', 'Landscapes', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'World Wildlife Fund', 'Wildlife', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'UNICEF', 'Humanitarian', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Planned Parenthood', 'Healthcare', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Disabled American Veterans', 'Veteran''s Healthcare', 3, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'SPCA', 'Animal Welfare', 3, 2021);

INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (600, 'RedCross', 'Humanitarian', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'The Nature Conservancy', 'Wildlife', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Natural Resources Defense Council', 'Landscapes', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (200, 'World Wildlife Fund', 'Wildlife', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (200, 'UNICEF', 'Humanitarian', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Planned Parenthood', 'Healthcare', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Disabled American Veterans', 'Veteran''s Healthcare', 4, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (500, 'SPCA', 'Animal Welfare', 4, 2021);

INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (600, 'RedCross', 'Humanitarian', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'Doctors Without Borders', 'Disaster Relief', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'The Nature Conservancy', 'Wildlife', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Natural Resources Defense Council', 'Landscapes', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (500, 'St. Jude Children''s Research Hospital', 'Children''s Healthcare', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'World Wildlife Fund', 'Wildlife', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'UNICEF', 'Humanitarian', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (400, 'Planned Parenthood', 'Healthcare', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (100, 'Disabled American Veterans', 'Veteran''s Healthcare', 5, 2021);
INSERT INTO contributions (amount, payee, category, user_id, year) VALUES (300, 'SPCA', 'Animal Welfare', 5, 2021);

INSERT INTO yearly_goals (goal_amount, user_id) VALUES (1000, 1);
INSERT INTO yearly_goals (goal_amount, user_id) VALUES (2000, 2);
INSERT INTO yearly_goals (goal_amount, user_id) VALUES (3000, 3);
INSERT INTO yearly_goals (goal_amount, user_id) VALUES (4000, 4);
INSERT INTO yearly_goals (goal_amount, user_id) VALUES (5000, 5);


