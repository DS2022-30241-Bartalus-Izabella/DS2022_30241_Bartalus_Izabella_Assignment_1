CREATE TYPE role_type AS ENUM
    (
        'CLIENT',
        'ADMIN'
    );

CREATE TABLE IF NOT EXISTS user_role
(
    id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    role_type role_type not null
);

CREATE TABLE IF NOT EXISTS device
(
    id serial primary key,
    description varchar(5000) not null,
    address varchar(255) not null,
    max_hourly_energy_consumption double not null,
    user_id int references user_role (id) not null
);

CREATE TABLE IF NOT EXISTS energy_consumption
(
    id serial primary key,
    time_stamp timestamp not null,
    energy_consumption_per_hour double not null,
    device_id int references device (id) not null
);