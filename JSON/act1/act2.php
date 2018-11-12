<?php
require_once ("../conn.php");

$statement = "SELECT vivienda.nombre, tipo_vivienda_has_idioma.nombre, persona.nombre FROM vivienda, tipo_vivienda_has_idioma, tipo_vivienda, 						 persona, vendedor_vivienda where 
vivienda.idTipoVivienda = tipo_vivienda.id and 
tipo_vivienda.id = tipo_vivienda_has_idioma.idTipo_vivienda and	
vivienda.idVendedor = vendedor_vivienda.idPersona and
vendedor_vivienda.idPersona = persona.id";

$res = $conn->query($statement);
$rows = [];
foreach ($res as $row){
	$rows[] = $row;
} 

print json_encode($rows, JSON_PRETTY_PRINT); 