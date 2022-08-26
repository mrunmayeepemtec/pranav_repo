-- create 'student_db' database
-- create following tables in database with proper data types
-- student: id (PK), name, address, phone, email, age, schoolId (FK)
-- school: id (PK), name, address, principal, phone
-- create relationship as shown in the table schema
-- add some dummy data

-- use student_db;

-- create table school
    -- (
    -- id int primary key,
    -- name varchar(20),
    -- Address varchar(100),
    -- principal varchar(20),
    -- phone int
    -- );

-- create table student
--(
--     id int primary key identity(1,1),
-- name varchar(20),
-- address varchar(100),
-- phone int,
-- email varchar(30),
-- schoolid int,
-- foreign key(schoolid) references school(id));
--select * from student;

--insert into school VALUES(2,'bbb','mumbai','smita",1234567891),(3,'ccc','nagar','smita",9234567891),;

-- insert into student (name,address,phone,email,schoolId) values ('aaa','pune',443434343,'abc@gmail.com',1);

-- SELECT * from student;