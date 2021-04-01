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
