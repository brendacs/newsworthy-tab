function addItem(e) {
	var newItem = $('#todo-new').val();
	$('#todo-list ul').prepend('<li><p>' + newItem + '</p><button onclick="removeItem();">X</button></li>');
	$('#todo-new').val('');
}

function removeItem() {
	$(this).parent().remove();
}

$('#todo-new').on('keydown', function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});
