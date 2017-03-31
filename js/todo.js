function addItem(e) {
	var newItem = $('#todo-new').val();
	$('#todo-list ul').prepend('<li class="todo-item"><p>' + newItem + '</p><button class="remove">X</button></li>');
	$('#todo-new').val('');
}

$('#todo-list ul').on('click', '.remove', function removeItem() {
	$(this).closest('li').remove();
});

$('#todo-new').on('keydown', function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});
