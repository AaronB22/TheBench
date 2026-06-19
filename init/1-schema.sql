CREATE DATABASE IF NOT EXISTS bench_dev;
use bench_dev;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15),
    password VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateTime VARCHAR(200),
    address VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS products (
    ProductID int PRIMARY KEY,
    name varchar(255),
    price decimal(10, 2),
    type varchar(255),
    description varchar(255)
);