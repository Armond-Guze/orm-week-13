-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category {
    ID INT NOT NULL AUTO_INCREMENT,
    Category_name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
};

CREATE TABLE Product (
    ID INT NOT NULL AUTO_INCREMENT,
    Product_name VARCHAR(45) NOT NULL,
    Price DECIMAL(15,5) NOT NULL,
    Stock INT(10) NOT NULL,
    Category_id INT,
    FOREIGN KEY (Category_id) REFERENCES Category(id),
    PRIMARY KEY(id)
);

CREATE TABLE Tag (
    ID INT NOT NULL AUTO_INCREMENT,
    Product_id INT,
    FOREIGNKEY(Product_id) REFERENCES Product(id),
    Tag_id INT,
    FOREIGN KEY(Tag_id) REFERENCES Tag(id),
    PRIMARY KEY(id)
);

