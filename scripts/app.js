function addListItem(){
	var text = $("#option-text").val();
	alert(text);

}

$(function(){
 $("#add").on('click', addListItem);
});