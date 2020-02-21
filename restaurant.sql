CREATE TABLE restaurant(
    id SERIAL PRIMARY KEY,
    name text,
    distance int,
    stars int,
    category text,
    favorite_dish text,
    takeout text,
    last_visit date);

INSERT INTO restaurant VALUES (1, 'Farm Burger', 0.3, 5, 'American', 'Farm-burger','Yes','02-21-2020');
INSERT INTO restaurant VALUES (2, 'Chick-flia', 0.5, 4, 'Fast-Food', 'Chicken-sandwhich', 'Yes', '02-07-2020');
