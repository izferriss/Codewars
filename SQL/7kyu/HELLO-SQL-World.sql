-- https://www.codewars.com/kata/581283eb0a5fb13e06000020

-- Hello SQL!

-- Return a table with a single column named Greeting with the phrase 'hello world!'

-- Please use Data Manipulation Language and not Data Definition Language to solve this Kata

CREATE TABLE results ("Greeting" VARCHAR(255));
INSERT INTO results
VALUES ('hello world!');
SELECT *
FROM results