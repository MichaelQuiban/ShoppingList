function addShoppingItem() {
    var item = $("#item-text").val();
    var price = $("#price-text").val();
    var quantity = $("#quantity-text").val();
    var location = $("#location-text").val();
    $("#todolist").append('<li>' + item + ',' + price + ',' + quantity +
        ',' + location + ' <button>X</button></li>');
    $("#item-text").val("");
    $("#price-text").val("");
    $("#quantity-text").val("");
    $("#location-text").val("");
}
$("#submit-btn").on('click', addShoppingItem)