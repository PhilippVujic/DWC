let array = ["Platano", "Manzana"];

showProducts();

function showProducts() {
    let txt = "<ul>";
    for (x = 0 ; x < array.length ; x++) {
        txt +=`<li> ${array[x]} </li>`;
    }
    txt += "</ul>";
    document.getElementById("container").innerHTML = txt;
}

function objShift() {
    array.shift();
    showProducts();
}

function objPush(value) {
    let x = document.getElementById('inputArray').value;
    array.push(x);
    showProducts();
}

function objUnshift() {
    let x = document.getElementById('inputArray').value;
    array.unshift(x);
    showProducts();
}

function objPop() {
    array.pop();
    showProducts();
}

function objSort() {
    array.sort();
    showProducts();
}