-- CREATE TABLE restaurant(
--     id SERIAL PRIMARY KEY,
--     name text,
--     distance int,
--     stars int,
--     category text,
--     favorite_dish text,
--     takeout text,
--     last_visit date);

-- INSERT INTO restaurant VALUES (1, 'Farm Burger', 0.3, 5, 'American', 'Farm-burger','Yes','02-21-2020');
-- INSERT INTO restaurant VALUES (2, 'Chick-flia', 0.5, 4, 'Fast-Food', 'Chicken-sandwhich', 'Yes', '02-07-2020');

CREATE TABLE restaurant(
    id SERIAL PRIMARY KEY,
    name text,
    address text,
    category text
);

CREATE TABLE reviewer(
    id SERIAL PRIMARY KEY,
    name text,
    email text,
    karma numeric CHECK (karma <= 7 and karma >= 0)
);

CREATE TABLE review(
    id SERIAL PRIMARY KEY,
    reviewerid INT REFERENCES review(id),
    -- REVIEWER ID USING A FOREIGN KEY CONSTRAINT
    stars numeric CHECK (stars >= 1 and stars <= 5),
    title text,
    review text,
    restaurantid INT REFERENCES restaurant(id)
);