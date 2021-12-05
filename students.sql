CREATE TABLE students (
    ID SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    group_name VARCHAR(10),
    created_at timestamp default NULL,
    updated_at timestamp default NULL
);