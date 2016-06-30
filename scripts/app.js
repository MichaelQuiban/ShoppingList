function addShoppingItem() {
	var text = $('input[name=option-text').val();
	$('#todolist').append('<li>'+text+' <button>X</button></li>');

}

$(function() {
 $("#submit-btn").on('click', addShoppingItem);
});