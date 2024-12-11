CREATE DATABASE studentdb

\c studentdb;

CREATE TABLE Students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    parent_id INT DEFAULT NULL
);


CREATE TABLE Marks (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    mark INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);


-- inserting dummy Marks
-- INSERT INTO "Marks" (student_id, mark, "createdAt" , "updatedAt")
-- VALUES
--   (1, 85, NOW(),NOW()),
--   (1, 90, NOW(),NOW()),
--   (1, 78, NOW(),NOW()),
--   (1, 92, NOW(),NOW());