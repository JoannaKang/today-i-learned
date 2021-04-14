# 0. Data types

1 ) Number types
| Name | Storage Size | Description | Range |
| :--------------: | :----------: | :------------------------------------------: | :--------------------------------------------------------------------------------------: |
| smallint | 2 bytes | small-range integer | -32768 to +32768 |
| integer | 4 byes | typical choice for integer (without decimal) | -2147483648 to +2147483647 |
| bigint | 8 bytes | large-range integer | -9223372036854775808 to +9223372036854775807(64 bit integer) |
| decimal | variable | user-specified precision, exact | up to 131072 digits before the decimal point; up to 16383 digits after the decimal point |
| real | 4 bytes | variable-precision, inexact | 6 decimal digits precision |
| double precision | 8 bytes | 15 decimal digits precision |
| smallserial | 2 bytes | small autoincrementing integer | 1 to 32767 |
| serial | 4 bytes | autoincrementing integer | 1 to 2147483647 (32 bit integer) |
| bigserial | 8 bytes | large autoincrementing integer | 1 to 9223372036854775807 | 2) Text

2 ) types
| Character types | Description |
| :-------------: | :---------: |
| CHARACTER VARYING(n), VARCHAR(n) | variable-length with length limit |
| CHARACTER(n), CHAR(n) | fixed-length, blank padded |
| TEXT, VARCHAR | variable unlimited length |

- VARCHAR vs TEXT
  - VARCHAR: can limit the maximum length of string
  - text: unlimited length?

# 1. How to define primary key

- When create table

```
CREATE TABLE po_headers (
	po_no INTEGER PRIMARY KEY,
	vendor_no INTEGER,
	description TEXT,
	shipping_address TEXT
);
-- or define multiple primary key
CREATE TABLE TABLE (
	column_1 data_type,
	column_2 data_type,
	…
        PRIMARY KEY (column_1, column_2)
);
```

- When changing the exisiting table structure

```
ALTER TABLE table_name
ADD PRIMARY KEY (column_1, column_2);
```

# 2. Primary key vs Foreign key

- A foreign key is a column or a group of columns in a table that reference the primary key of another table.
- Foreign ke constraint syntax

```
[CONSTRAINT fk_name] // optional
   FOREIGN KEY(fk_columns) // foreign key column name
   REFERENCES parent_table(parent_key_columns)
   [ON DELETE delete_action]
```

- on delete actions
  - SET NULL: automatically sets NULL to the foreign key columns in the referencing rows of the child table when the referenced rows in the parent table are deleted.
  - CASCADE: automatically deletes all the referencing rows in the child table when the referenced rows in the parent table are deleted
  - SET DEFAULT
  - RESTRICT
  - NO ACTION

# 3. How to create function statement

- Basic syntax

```
CREATE [or REPLACE] FUNCTION functin_name(param_list)
-- REPLACE: when replace the existing function
  RETURNS return_type
  language plpsql
  AS
$$
DECLARE
  -- return variable declaration;
BEGIN
  -- logic
END;
$$
```

- Example

```
CREATE FUNCTION get_film_count (len_from int, len_to int)
RETURN int
LANGUAGE plpsql
AS
$$
DECLARE
  film_count integer;
BEGIN
  SELECT count(*)
  INTO film_count // return value
  FROM film
  WHERE length between len_From and len_to;

  RETURN film_count;
END;
$$;
```
