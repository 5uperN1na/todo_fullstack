use todo;

create table categories (
id int(11) not null auto_increment,
name varchar(50) not null,
primary key (id)
);

create table todo (
id int(11) auto_increment,
categoryid int(11) not null,
task varchar (100) not null,
created_at timestamp default current_timestamp,
primary key(id),
foreign key (categoryid) references categories(id)
);

select * from todo;
select * from categories;
select * from users;

u

create table users (
id int(11) auto_increment,
email varchar (60) not null,
password varchar (60) not null,
role varchar(25) default 'admin',
name varchar(60) not null,
created_at timestamp default now(),
primary key(id)
);

insert into users (email, password, name) values
("julien@test.com", "abc", "Julien");

insert into categories (name) values
('bathroom'),
('kitchen');

insert into todo (categoryid, task) values
(1, "Sweep the floor"),
(2, "Mop the floor");

delete from users where id = 3;

delete from todo where id = 4;

select * from users;
select * from todo;

delete from users where id = 7;

SELECT todo.*, users.first, users.last, users.email 
FROM todo
JOIN users on users.id=todo.userid 
ORDER BY todo.created_at DESC;

SELECT todo.*, users.first, users.last, users.email 
FROM todo
JOIN users on users.id = todo.userid 
WHERE todo.id = 1;

DELETE FROM todo WHERE id = 1;

INSERT INTO todo (task, completed, userid) VALUE 
("Clean the master bathroom", "n", 1);

UPDATE todo
SET task = 'Mop kitchen', completed = 'n' 
WHERE id = 2;

SELECT id, users.first, users.last, users.email 
FROM users;

INSERT INTO users (first, last, email, password) value
("Hernan", "Suarez", "hernan@test.com", "abc");

 DELETE FROM users WHERE id = 2;
 
 SELECT users.first, users.last, users.email FROM users;
 
 INSERT INTO todo (task, userid) VALUE 
 ("Mow the lawn", 2);
 
 SELECT todo.*, categories.name 
 from todo 
 JOIN categories 
 on categories.id=todo.categoryid 
 ORDER BY todo.created_at DESC;
 
 SELECT * FROM users WHERE id = 1;
 
 UPDATE todo 
 SET categoryid = 2, 
 task = "Clean show"
 WHERE id = 1;
 
 SELECT todo.*, categories.name from todo JOIN categories on categories.id=todo.categoryid WHERE todo.id = 1;
 
 SELECT categories.id, categories.name FROM categories;
 
 SELECT * FROM categories WHERE id = 1;

INSERT INTO categories (id, name) VALUE 
(4, "Garage");