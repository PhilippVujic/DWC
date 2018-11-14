<?php
header("Content-Type: application/json; charset=UTF-8");
require_once("../conn.php");

$statement = "SELECT tipo_vivienda.id, tipo_vivienda_has_idioma.nombre 
from tipo_vivienda, tipo_vivienda_has_idioma 
where tipo_vivienda_has_idioma.idTipo_vivienda = tipo_vivienda.id";

$res = $conn->prepare($statement);
$res->execute();
$rows = $res->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
