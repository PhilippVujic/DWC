$(function () {
    function loadReservas() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var reserves = JSON.parse(this.responseText);

                for (reserva in reserves) {
                    var idReserva = reserves[reserva].id;
                    var nomVivenda = reserves[reserva].vivienda;
                    var tipoVivienda = reserves[reserva].tipo;
                    var ciudadVivienda = reserves[reserva].ciudad;

                    var url = "reserva.php?id=" + idReserva;
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action active', text:idReserva}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action', text:nomVivenda}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action', text:tipoVivienda}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action mb-3', text:ciudadVivienda}));

                }
            }
        };
        xhttp.open("GET", "selectViviendaLista.php", true);
        xhttp.send();
    }

    function appendToLlista(item){
        $("#llistaReserves").append(item);
    }

    loadReservas();
});
