<?php

header("Content-Type: application/json");
require_once ("../conn.php");

$statement = "SELECT vivienda.nombre casa, tipo_vivienda_has_idioma.nombre tipo, persona.nombre propietario FROM vivienda, tipo_vivienda_has_idioma, tipo_vivienda, 						 persona, vendedor_vivienda where 
vivienda.idTipoVivienda = tipo_vivienda.id and 
tipo_vivienda.id = tipo_vivienda_has_idioma.idTipo_vivienda and	
vivienda.idVendedor = vendedor_vivienda.idPersona and
vendedor_vivienda.idPersona = persona.id";

$res = $conn->prepare($statement);
$res->execute();
$rows = $res->fetchAll(PDO::FETCH_ASSOC);
print json_encode($rows, JSON_PRETTY_PRINT); 