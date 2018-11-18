$(function () {
    function loadReservas() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var reserves = JSON.parse(this.responseText);

                for (reserva in reserves) {
                    var idReserva = reserves[reserva].id;
                    var nomVivenda = reserves[reserva].vivienda;
                    var nomVivenda = reserves[reserva].vivienda;
                    var nomVivenda = reserves[reserva].vivienda;
                    var nomVivenda = reserves[reserva].vivienda;
                    var nomVivenda = reserves[reserva].vivienda;

                    var url = "reserva.php?id=" + idReserva;
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action active', text:idReserva}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action', text:nomVivenda}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action', text:nomVivenda}));
                    appendToLlista($("<a/>", {href:url,class:'list-group-item list-group-item-action', text:nomVivenda}));

                }
            }
        };
        xhttp.open("GET", "selectReserva.php", true);
        xhttp.send();
    }

    function appendToLlista(item){
        $("#llistaReserves").append(item);
    }

    loadReservas();
});
