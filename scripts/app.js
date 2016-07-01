function addShoppingItem() {
	var item = $("#option-text1").val();
	var price = $("#option-text2").val();
	var quantity = $("#option-text3").val();
	var location = $("#option-text4").val();
	$("#todolist").append('<li>'+item+','+price+','+quantity+','+location+' <button>X</button></li>');
}

$(function() {
 $("#submit-btn").on('click', addShoppingItem);
});