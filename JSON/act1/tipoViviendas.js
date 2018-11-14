$(function() {
	function loadTipoViviendas() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var tipoViviendas = JSON.parse(this.responseText);
				for (tipos in tipoViviendas) {
					var idVivienda = tipoViviendas[tipos].id; 
					var nombreVivienda = tipoViviendas[tipos].nombre; 

					var item = $("<option/>", {value:idVivienda, text:nombreVivienda});
					$("#tipoCasas").append(item);
				}
			}
		};
		xhttp.open("GET", "tipoViviendas.php", true);
		xhttp.send();
	}
	loadTipoViviendas();
})