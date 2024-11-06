<?php
$user='estacio';
$pass='senha';
$conn = new PDO('mysql:host=localhost;dbname=estacio', $user, $pass);
$query = $conn->query('SELECT * FROM usuarios');

var_dump($query);
