<?php
header("Content-Type: application/json; charset=UTF-8");
require_once("../conn.php");

$statement ="select v.id, v.nombre, tv.nombre, c.nombre
from vivienda v, persona p, ciudad_has_idioma c, ciudad, tipo_vivienda_has_idioma tv,  tipo_vivienda t
where v.idTipoVivienda = t.id and t.id = tv.idTipo_vivienda AND
c.idCiudad = ciudad.id and v.idCiudad = ciudad.id";

$res = $conn->prepare($statement);
$res->execute();
$rows = $res->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows, JSON_PRETTY_PRINT);
