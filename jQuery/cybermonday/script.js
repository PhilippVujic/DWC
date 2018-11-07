var categories = ["Theater", "Cinema", "Sports", "Esports"];
var products = [{
    codi: "0",
    product: "Bridge to Terabithia",
    preu: "33,99",
    categoria: "Theater"
}, {
    codi: "1",
    product: "Silent Hill",
    preu: "4,99",
    categoria: "Cinema"
}]
$(function () {
    $("#tabs").tabs();
    updateCategories();
    updateProducts();

    $("#pb1").click(function () {
        addProducts();
        updateProducts();
    })

    $("#cb1").click(function () {
        addCategories();
        updateCategories();
    });

    $("#cb2").click(function () {
        saveCategories();
    })

    $("#cb3").click(function () {
        deleteCategories();
    })

    function deleteCategories() {
        categories.splice([$("#cs1").children("option:selected").val()], 1);
        updateCategories();
    }

    function saveCategories() {
        categories[$("#cs1").children("option:selected").val()] = $("#ct1").val();
        updateCategories();
    }

    function updateCategories() {
        let output = [];
        $.each(categories, function (key, value) {
            output.push('<option value="' + key + '">' + value + '</option>');
        });
        $('#cs1').html(output.join(''));
        $('#ps1').html(output.join(''));
        $('#bs0').html(output.join(''));


        $("#catlist").empty();
        for (i = 0; i < categories.length; i++) {
            item = $("<li>" + categories[i] + "</li>");
            $("#catlist").append(item);
        }
    }

    function addCategories() {
        categories.push($("#ct1").val());
    }

    function addProducts() {
        products.push({
            codi: $("#pt1").val(),
            product: $("#pt2").val(),
            preu: $("#pt3").val(),
            categoria: $("#ps1").children("option:selected").text()
        });
    }

    function updateProducts() {
        let output = [];
        $.each(products, function (key, value) {
            output.push('<option value="' + key + '">' + value.product + '</option>');
        });
        $('#ps2').html(output.join(''));
        $('#bs1').html(output.join(''));

        $("#tbprods").empty();
        for (i = 0; i < products.length; i++) {
            let pr = products[i];
            item = $("<tr><td>" + pr.codi + "</td>" +
                "<td>" + pr.product + "</td>" +
                "<td>" + pr.preu + "</td>" +
                "<td>" + pr.categoria + "</td></tr>");
            $("#tbprods").append(item);
        }
    }
});