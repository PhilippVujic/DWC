var books = new Array(4);
for (let index = 0; index < books.length; index++) {
    books[index] = new Array(4);
}

$(document).ready(function () {


    $("#b1").click(addBook);
    $("#b2").click(removeBook);
    $("#b3").click(printBooks);
    $("#b4").click(printTable);
    $("#b5").click(countBooks);
});


function printTable() {
    let x = "<table>";
    for (let n = 0; n < books.length; n++) {
        x += "<tr>"
        for (let m = 0; m < books[n].length; m++) {
            b = books[n][m];
            x += "<td>";
            if (books[n][m] !== undefined) {
                x += b.title + "<br>" + b.pages + "<br>" + b.category;
            }
            x += "</td>";
        }
        x += "</tr>";
    }
    x += "</table>"
    $("#printer").html(x);
};

function countBooks() {
    var numcount = 0;

    for (x = 0; x < books.length; x++) {
        for (let n = 0; n < books[x].length; n++) {
            if (typeof books[x][n] != 'undefined') {
                if (books[x][n].title.length > 0) {
                    numcount++;
                }
            }
        }
        $("#printer").html("<p>" + numcount + "</p>");
    }
}

function removeBook() {
    tc = $("#col").val();
    tr = $("#row").val();
    books[tc][tr] = undefined;

}

function addBook() {
    let push = true;
    let title = $("#title").val();
    let pages = $("#pages").val();
    let category = $("#cats").val();
    let col = $("#col").val();
    let row = $("#row").val();

    for (let index = 0; index < books.length; index++) {
        if (books[index].col == col && books[index].row == row) {
            push = false;
        }
    }

    if (push) {
        let book = new Book(title, pages, category, col, row);
        books[col][row] = book;
    }
};

function printBooks() {
    let x = "<ul>";
    for (let n = 0; n < books.length; n++) {
        for (let m = 0; m < books[n].length; m++) {
            b = books[n][m];
            if (books[n][m] !== undefined) {
                x += "<li>" + b.title + ", " + b.pages + ", " + b.category + ", " + b.col + ", " + b.row + "</li>";
            }
        }
    }
    x += "</ul>"
    $("#printer").html(x);
};



class Book {
    constructor(title, pages, category, col, row) {
        this.title = title;
        this.pages = pages;
        this.category = category;
        this.col = col;
        this.row = row;
    };
};