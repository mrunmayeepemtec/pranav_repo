-----------------------------problem statement-----------------------------------------------
-- Write a query that produces all rows from the Customers table for which the salesperson’s number
-- is 1001
-- Write a select command that produces the rating followed
 --by the name of each customer in San Jose
-- Write a query that will produce the snum values of all salespeople from the Orders table (with the
-- duplicate values suppressed)
-- Write a query that will give you all orders for more than Rs. 1,000
-- Write a query that will give you the names and cities of all salespeople in London with a
-- commission above 0.10
-- Write a query on the Customers table whose output will exclude all customers with a rating <=
-- 100, unless they are located in Rome
---------------------------------output-------------------------------------------------------
-- create database sales;
-- use sales;

--CREATE TABLE salespeople(snum int, sname varchar(10), city varchar(10), comm decimal(3,2));
-- INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
-- INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
-- INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
-- INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
-- INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

--SELECT * from salespeople;

-- CREATE TABLE customers(cnum int, cname varchar(10), city varchar(10), rating int, snum int);
-- INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
-- INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
-- INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
-- INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
-- INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
-- INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
-- INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);

--SELECT * from customers;

-- CREATE TABLE orders(onum int, amt decimal(7,2), odate date, cnum int, snum int)
-- INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
-- INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
-- INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
-- INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
-- INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
-- INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
-- INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
-- INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
-- INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
-- INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);

-- SELECT * from orders;
-----------------------------------------queries--------------------------------------
--1)select * from orders where snum=101;

--2)select rating,cname from customers where city='San Jose';

--3)select distinct snum from orders; 

--4)select * from orders where amt >1000;

--5)select snum,city from salespeople where comm>0.10;

--6)select * from customers where rating<=100 and city='rome';

--7)  Select * from Orders
-- where amt < 1000 OR
-- NOT odate = '1990-10-03'
-- AND cnum > 2003;

-- 8)Select * from Orders
-- where NOT (odate = '1990-10-03' OR snum >1006) AND amt >= 1500;

--9) select * from orders where amt <> 0 or amt <> null; 
---------------------------------------------------------------------------------