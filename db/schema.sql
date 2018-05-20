CREATE DATABASE animalData;

USE animalData;

CREATE TABLE animals (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  image text NOT NULL,
  description text,
  PRIMARY KEY(ID)
);

INSERT INTO animals(name, image, description) VALUES ('Cat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', 'Look at this beautiful beast!!' );

INSERT INTO animals(name, image, description) VALUES ('Dog', 'https://d2kwjcq8j5htsz.cloudfront.net/2017/02/14120521/valentine-dog-main.jpg', 'Mans best friend.' );

INSERT INTO animals(name, image, description) VALUES ('Pufferfish', 'http://tinyurl.com/kxd7cuu', 'Don\'t let them blow up or needles will go flying.' );

INSERT INTO animals(name, image, description) VALUES ('Tuna', 'http://tinyurl.com/zgs7z2s', 'Cats are crazy for them.' );

INSERT INTO animals(name, image, description) VALUES ('Monkey', 'https://i.pinimg.com/originals/9a/e8/83/9ae883649c19b0bfe3908fc286278471.jpg', 'Ain\'t no business like moneky business.' );
