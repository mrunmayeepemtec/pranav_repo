----------------problem statements---------------------------------------------------------------------------------
---- 1)create 'product_db' databse
--create database product_db;
--use product_db;
-- 2)create following tables
-- categories: id (PK), title, description
-- products: id (PK), title, price, description, category (FK), company
-- orders: id (PK), total, date
-- order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
-- create relationship as shown in the table schema
-- add some dummy data

--------------------------------OUTPUT--------------------------------------------------------------------------------------

--   create table categories
--   (
--       id int primary key identity(1,1),
--       tital varchar(20),
--     description varchar(30));
 
--  insert into categories(tital,description) values
--  ('electronics','all electronics description'),
--  ('clothes','all clothes description'),
--  ('stationaries','all stationaries description'),
--  ('footwares','all footwares description');

--select * from categories;

-- create table products(
--     id int primary key identity(11,1),
--     tital varchar(20),
--     prise int,
--     company varchar(30),
--     categories_id int,
--     FOREIGN KEY(categories_id) REFERENCES categories(id)
-- );

-- insert into products(tital,prise,company,categories_id)
--  VALUES
--  ('laptop',50000,'dell',1),
--  ('shirts',500,'remond',2),
--  ('tshirts',400,'remond',2),
--  ('shoose',5000,'adidas',4);
--select * from products;

--create table orders(id int primary key identity(100,1),total_amount int,date date);
--  insert into orders(total_amount,date) values
--  (400,'2015-03-05'),
--  (500,'2018-09-07'),
--  (400,'2022-09-11');

 --select * from orders;

-- create table order_details(id int primary key identity(1000,1),
--  orderId int, 
--  productId int,
--  quantity int , 
--  price int , 
-- totalPrice int, 
--  discount int,
--  FOREIGN KEY(orderId) REFERENCES orders(id),
--  FOREIGN KEY(productId) REFERENCES products(id)
--  );

--  insert into order_details(orderId,productId,quantity,price,totalPrice,discount) values
--  (101,12,300,90,23868,20),
--  (102,13,800,90,23868,20),
--  (101,11,900,110,90868,90);

--SELECT * from order_details;

--------------------------------------------------------------------------