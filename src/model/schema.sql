create database bench_dev;

use bench_dev;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15),
    password VARCHAR(20)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateTime VARCHAR(200),
    adress VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE products (
    ProductID int PRIMARY KEY,
    name varchar(255),
    price decimal(10, 2),
    type varchar(255)
);