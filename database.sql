CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
  regno INT(11) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  vaccinated ENUM('Yes', 'No') NOT NULL
);

INSERT INTO students (regno, name, vaccinated) VALUES
(123, 'John', 'Yes'),
(456, 'Jane', 'No'),
(789, 'Bob', 'Yes'),
(741, 'Sam', 'Yes'),
(189, 'Javed', 'No'),
(795, 'Archis', 'Yes'),
(480, 'Omkar', 'Yes');
