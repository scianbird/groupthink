
CREATE TABLE groupthink_category_table (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_title VARCHAR(255),
    category_description TEXT,    
    category_type TEXT
);

CREATE TABLE groupthink_suggestion_table (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_id INT,  
    suggestion_description TEXT,
    suggestion_score INT    
);


-- used the below queries to reset the tables

TRUNCATE TABLE groupthink_category_table;
ALTER SEQUENCE groupthink_category_table_id_seq RESTART WITH 1;

TRUNCATE TABLE groupthink_suggestion_table;
ALTER SEQUENCE groupthink_suggestion_table_id_seq RESTART WITH 1;