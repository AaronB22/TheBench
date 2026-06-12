DROP DATABASE IF EXISTS bench_dev;
create database bench_dev;

use bench_dev;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15),
    password VARCHAR(60)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dateTime VARCHAR(200),
    address VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ProductID should probably just be ID, I've messed up multiple queries due to this inconsistency
CREATE TABLE products (
    ProductID int PRIMARY KEY,
    name varchar(255),
    price decimal(10, 2),
    type varchar(255)
);