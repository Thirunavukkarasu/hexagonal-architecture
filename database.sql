CREATE TABLE authors (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL
);


CREATE TABLE posts (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    author_id BIGINT NOT NULL REFERENCES authors(id) ON DELETE CASCADE
);

INSERT INTO authors (name) VALUES ('John Doe');

INSERT INTO posts (title, content, author_id)
VALUES ('First Post', 'Hello World', 1);