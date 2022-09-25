CREATE DATABASE IF NOT EXISTS datadb;

USE datadb;

CREATE TABLE datos (

    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(11) DEFAULT NULL,
    info VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
);

--SHOW tables;

DESCRIBE datos;

--iNSERT;

INSERT INTO datos VALUES
(1,"Juan", "112000"),
(2,"Mary", "10300"),
(3,"ALbert", "13000"),
(4,"Jason", "100"),
(5,"Perez", "2000");