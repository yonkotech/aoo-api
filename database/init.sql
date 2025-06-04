CREATE DATABASE IF NOT EXISTS aoo2025;
USE aoo2025;

CREATE TABLE groupe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE membre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

CREATE TABLE appartenance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_membre INT,
    id_groupe INT,
    id_role INT,
    FOREIGN KEY (id_membre) REFERENCES membre(id),
    FOREIGN KEY (id_groupe) REFERENCES groupe(id),
    FOREIGN KEY (id_role) REFERENCES role(id)
);

CREATE TABLE activite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    date DATE,
    id_groupe INT,
    FOREIGN KEY (id_groupe) REFERENCES groupe(id)
);

CREATE TABLE participation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_membre INT,
    id_activite INT,
    FOREIGN KEY (id_membre) REFERENCES membre(id),
    FOREIGN KEY (id_activite) REFERENCES activite(id)
);
