CREATE USER 'devuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Devpass123!';
GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'localhost';
FLUSH PRIVILEGES;
