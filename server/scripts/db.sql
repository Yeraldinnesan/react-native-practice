CREATE DATABASE IF NOT EXISTS projectmanagerdb;

USE projectmanagerdb;

-- PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
);

-- TASKS TABLE
CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (project_id) REFERENCES projects(id)

);

-- Inserting projects
INSERT INTO projects (name, description, start_date, end_date)
VALUES
  ('Project 1', 'Description for Project 1', '2023-05-01', '2023-05-31'),
  ('Project 2', 'Description for Project 2', '2023-06-01', '2023-06-30');

-- Get the last inserted project IDs
SET @project1_id = LAST_INSERT_ID();
SET @project2_id = LAST_INSERT_ID() + 1;

-- Inserting tasks for Project 1
INSERT INTO tasks (project_id, name, description, due_date, status)
VALUES
  (@project1_id, 'Task 1 for Project 1', 'Description for Task 1', '2023-05-10', 'Pending'),
  (@project1_id, 'Task 2 for Project 1', 'Description for Task 2', '2023-05-20', 'In Progress');

-- Inserting tasks for Project 2
INSERT INTO tasks (project_id, name, description, due_date, status)
VALUES
  (@project2_id, 'Task 1 for Project 2', 'Description for Task 1', '2023-06-05', 'Pending'),
  (@project2_id, 'Task 2 for Project 2', 'Description for Task 2', '2023-06-15', 'In Progress');


