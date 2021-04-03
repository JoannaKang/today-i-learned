https://www.youtube.com/watch?v=HXV3zeQKqGY

# 0. Basic data types

1. INT: whole numbers
2. DECIAML (M, N): decimal numbers (M digit, N digit after . -> e.g. DECIMAL (1, 4) === 1.0000)
3. VARCHAR (n): string of text of length n
4. BLOB: Binary large object, stores large data e.g)images/files
5. DATE: 'YYYY-MM-DD'
6. TIMESTAMP: 'YYYY-MM-DD HH:MM:SS' --> used for recording history

> VARCHAR vs TEXT?

1.  VARCHAR(m)

- varchar has max size of M characters
- Can be part of the index (can be ordered, searched by this attribute)

2. TEXT

- Can't specify length of text
- Cannot be fully part of an index

# 1. CRUD Commands

- Create this table = define schema

| student_id |  name  |  major  |
| :--------: | :----: | :-----: |
|     1      | chris  | Physics |
|     2      | Joanna |  B.A.   |

```
CREATE TABLE student ( // table name, attributes should be lower case
   student_id INT AUTO_INCREMENT, //-> primary key for table
   name VARCHAR(20) NOT NULL, // mandatory field
   major VARCHAR(20) UNIQUE, // can have duplicated entries
   study VARCHAR(20) DEFAULT 'undecided', // if input is null, set this as default value
   PRIMARY KEY (student_id) // -> another way of declaring primary key
);
```

- Check table info

```
DESCRIBE student ; -> check 'student' table information (to check null value)
SELECT * FROM student; -> see all columns and information in that table
```

- Delete table info

```
DROP student;  -> delet table
```

- Modify table

```
ALTER TABLE student ADD gpa DECIMAL(3); -> add new column
ALTER TABLE student DROP COLUMN gpa -> drop specific column
```

- Insert value into table

```
INSERT INTO student (student_id, name, major) // specify attribute name after table name
VALUES (
  1, 'Jack', 'Biology' //-> use single quote
);
```

- Update

```
UPDATE student
SET major = 'Bio' // update this value
WHERE major = 'Biology' // find this
WHERE student_id = 1;
// can combine condition
WHERE major = 'Bio' or major = 'Chemistry';
```

```
// can update multiple attributes at the same time
UPDATE student
SET name = 'Joanna', major = 'B.S.'
WHERE student_id = 1;
// -> update info for student_id = 1 as SET condition
```

- Delete

```
SELECT * FROM student
DELETE FROM student
WHERE student_id = 1;
// set multiple condition
DELETE FROM student
WHERE name = 'Tom' AND major = 'undecided';
```

# 2. How to query

```
SELECT name, major // can specify column that I want to select
|| SELECT student.name, student.major
FROM student // table
ORDER BY name DESC ; //-> order query outcome descending order (내림차순)
|| ORDER BY name, major ASC; // order query outcome by ascending order
LIMIT 2 ; // limit number of row of outcome
```

- How to filter

```
SELECT name major // select column
FROM student // select table
WHERE major = 'Bio'; // filter condition
```

- Type of selectors

  - less than <,
  - grater than >,
  - less than equal <=,
  - more than equal >=
  - equal =
  - not equal <>
  - AND , OR

- Can give variable as filter conditon

```
SELECT *
FROM student
WHERE name IN ('Clare', 'Kate', 'Mike')
```

# 3. Foreign key vs Primary key?

- A primary key is used to ensure data in the specific column is unique.
- A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.

# 4. More basic queries

```

-- Find all employees
SELECT *
FROM employee;

-- Find all clients
SELECT *
FROM clients;

-- Find all employees ordered by salary
SELECT *
from employee
ORDER BY salary ASC/DESC;

-- Find all employees ordered by sex then name
SELECT *
from employee
ORDER BY sex, name;

-- Find the first 5 employees in the table
SELECT *
from employee
LIMIT 5;

-- Find the first and last names of all employees
SELECT first_name, employee.last_name
FROM employee;

-- Find the forename and surnames names of all employees
SELECT first_name AS forename, employee.last_name AS surname
FROM employee;

-- Find out all the different genders
SELECT DISCINCT sex
FROM employee;

-- Find all male employees
SELECT *
FROM employee
WHERE sex = 'M';

-- Find all employees at branch 2
SELECT *
FROM employee
WHERE branch_id = 2;

-- Find all employee's id's and names who were born after 1969
SELECT emp_id, first_name, last_name
FROM employee
WHERE birth_day >= 1970-01-01;

-- Find all female employees at branch 2
SELECT *
FROM employee
WHERE branch_id = 2 AND sex = 'F';

-- Find all employees who are female & born after 1969 or who make over 80000
SELECT *
FROM employee
WHERE (birth_day >= '1970-01-01' AND sex = 'F') OR salary > 80000;

-- Find all employees born between 1970 and 1975
SELECT *
FROM employee
WHERE birth_day BETWEEN '1970-01-01' AND '1975-01-01';

-- Find all employees named Jim, Michael, Johnny or David
SELECT *
FROM employee
WHERE first_name IN ('Jim', 'Michael', 'Johnny', 'David');


```

# 5. Functions

```
-- Find the number of employees
SELECT COUNT (emp_id) // Count all entries selecte column
FROM employee; // from table
WHERE sex = 'F' AND birth_date > '1970-01-01' // filtering condition

-- Find the average of all employee's salaries
SELECT AVG(salary)
FROM employee;

-- Find the sum of all employee's salaries
SELECT SUM(salary)
FROM employee;

-- Find out how many males and females there are
SELECT COUNT(sex), sex
FROM employee
GROUP BY sex;

-- Find the total sales of each salesman
SELECT SUM(total_sales), emp_id
FROM works_with
GROUP BY client_id;

-- Find the total amount of money spent by each client
SELECT SUM(total_sales), client_id
FROM works_with
GROUP BY client_id;

```

# 6. Wildcard

- % = any # characters
- \_ = one character

```
-- Find any client's who are an LLC
SELECT *
FROM client
WHERE client_name LIKE '%LLC'; // % = find any column end character with 'LLC'

-- Find any branch suppliers who are in the label business
SELECT *
FROM branch_supplier
WHERE supplier_name LIKE '% Label%'; // % = find any column include character with 'Label'

-- Find any employee born on the 10th day of the month
SELECT *
FROM employee
WHERE birth_day LIKE '____-10%'; // _ = one character

-- Find any clients who are schools
SELECT *
FROM client
WHERE client_name LIKE '%Highschool%';
```

# 7. Union

- combine selected tables data
- combine data from different table in a same column

```
-- Find a list of employee and branch names
SELECT employee.first_name AS Employee_Branch_Names
FROM employee
UNION //
SELECT branch.branch_name
FROM branch;

-- Find a list of all clients & branch suppliers' names
SELECT client.client_name AS Non-Employee_Entities, client.branch_id AS Branch_ID
FROM client
UNION
SELECT branch_supplier.supplier_name, branch_supplier.branch_id
FROM branch_supplier;
```

# 8. Join

- Combine rows from different table using specific column
- types of join

1. LEFT JOIN: Include all data from left table(=from) in result
2. RIGHT JOIN: Include all data from right table(=join) in result
3. FULL JOIN: combine everthing from both table
4. INNER JOIN: combined only duplicated columns

```
-- Add the extra branch
INSERT INTO branch VALUES(4, "Buffalo", NULL, NULL);

SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
JOIN branch // Combine branch and empleyee table
ON employee.emp_id = branch.mgr_id; // column names from each tables
```

# 9. Nested Queries

- Use 'IN' keyword + () -> put nested codition inside of parenthesis

```
-- Find names of all employees who have sold over 50,000
SELECT employee.first_name, employee.last_name
FROM employee
WHERE employee.emp_id IN (SELECT works_with.emp_id
                          FROM works_with
                          WHERE works_with.total_sales > 50000);

-- Find all clients who are handles by the branch that Michael Scott manages
-- Assume you know Michael's ID
SELECT client.client_id, client.client_name
FROM client
WHERE client.branch_id = (SELECT branch.branch_id
                          FROM branch
                          WHERE branch.mgr_id = 102);

 -- Find all clients who are handles by the branch that Michael Scott manages
 -- Assume you DONT'T know Michael's ID
 SELECT client.client_id, client.client_name
 FROM client
 WHERE client.branch_id = (SELECT branch.branch_id
                           FROM branch
                           WHERE branch.mgr_id = (SELECT employee.emp_id
                                                  FROM employee
                                                  WHERE employee.first_name = 'Michael' AND employee.last_name ='Scott'
                                                  LIMIT 1));


-- Find the names of employees who work with clients handled by the scranton branch
SELECT employee.first_name, employee.last_name
FROM employee
WHERE employee.emp_id IN (
                         SELECT works_with.emp_id
                         FROM works_with
                         )
AND employee.branch_id = 2;

-- Find the names of all clients who have spent more than 100,000 dollars
SELECT client.client_name
FROM client
WHERE client.client_id IN (
                          SELECT client_id
                          FROM (
                                SELECT SUM(works_with.total_sales) AS totals, client_id
                                FROM works_with
                                GROUP BY client_id) AS total_client_sales
                          WHERE totals > 100000
);
```

# 10. Delete

- DELETE SET NULL: set related column as null when this foreign key is deleted
- DELETE CASCADE: delete related column from other table when this foreign key is deleted

```
// SET NULL
CREATE TABLE branch (
  branch_id INT PRIMARY KEY,
  branch_name VARCHAR(40),
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY (mgr_id) REFERENCE employee(emp_id) ON DELETE SET NULL
)
// CASCADE
CREATE TABLE branch (
  branch_id INT PRIMARY KEY,
  branch_name VARCHAR(40),
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY (mgr_id) REFERENCE employee(emp_id) ON DELETE CASCADE
)
```

# 11. Trigger

- Tell SQL to do something when certain event happen
- How to set trigger

```
-- CREATE
  TRIGGER `event_name` BEFORE/AFTER INSERT/UPDATE/DELETE
  ON `database`.`table`
  FOR EACH ROW BEGIN
-- trigger body
-- this code is applied to every
-- inserted/updated/deleted row
  END;
```

- trigger example

```
CREATE TABLE trigger_test (
     message VARCHAR(100)
);

DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
        INSERT INTO trigger_test VALUES('added new employee');
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(109, 'Oscar', 'Martinez', '1968-02-19', 'M', 69000, 106, 3);


DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
        INSERT INTO trigger_test VALUES(NEW.first_name);
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(110, 'Kevin', 'Malone', '1978-02-19', 'M', 69000, 106, 3);

DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
         IF NEW.sex = 'M' THEN
               INSERT INTO trigger_test VALUES('added male employee');
         ELSEIF NEW.sex = 'F' THEN
               INSERT INTO trigger_test VALUES('added female');
         ELSE
               INSERT INTO trigger_test VALUES('added other employee');
         END IF;
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(111, 'Pam', 'Beesly', '1988-02-19', 'F', 69000, 106, 3);


DROP TRIGGER my_trigger;

```

# 12. ER diagram

- Entity: An object we want to model & store informtion about
- Attributes: Specific pieces of information about an entity
- Primary key: An attributes that uniquely identify an entry in the database tble
- Composite attribute: An attribute that can be broken up into sub-attributes
- Multi-valued attribute: An attribute that can have more than one value
- Derived attribute: An attribute that can be derived from the other attributes
- Relationships: defines a relationship between two entities
  - Total participation: all memebers must participate in the relationship
  - Partial participation: Not all entitiy related to other entitiy
- Relationship attribute: An attribute about the relationship
- Relationship cardinality: the number of instances of an entity from a relation that can be associated with the relation
  - 1:1
  - 1:N
  - N:M
- Weak entity: An entity that cannot be uniquely identified by its attributes alone
- Identifying relationship: A relationship that serves to uniquly identify the weak entity

https://www.mikedane.com/databases/sql/er-diagrams-intro/
