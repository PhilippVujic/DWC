$(function () {
    $("#b1").click(function(){
        $("#myDiv").append("<div><input type='text'><button class='itemremove' type='button'>Remove</button><br></div>");
    })
    $(document).on("click", ".itemremove", function(){
        $(this).parent().remove();
    })

    $(document).on("click", "#b2", function(){
        $("#myDiv").empty();
    })

})