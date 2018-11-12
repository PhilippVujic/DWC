<?php
$hostname='localhost';
$username='phil';
$password='ifc21B17*';
$dsn = "mysql:host=$hostname;dbname=travellocal";
try {
	$conn = new PDO($dsn, $username, $password);
}
catch(PDOException $e)
{
	echo "Connection failed: " . $e->getMessage();
}