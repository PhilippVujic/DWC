<?php
require_once ("../conn.php");

$statement = "SELECT id, idTipoVivienda, idCiudad, idVendedor FROM vivienda";
$res = $conn->query($statement);
$rows = [];
foreach ($res as $row){
	$rows[] = $row;
} 

print json_encode($rows, JSON_PRETTY_PRINT); 