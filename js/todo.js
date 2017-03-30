function addItem(e) {
	var newItem = $('#todo-new').val();
	$('#todo-list ul').prepend('<li class="todo-item"><p>' + newItem + '</p><button class="remove">X</button></li>');
	$('#todo-new').val('');
}

$('.remove').on('click', function removeItem() {
	$(this).closest('.todo-item').remove();
});

$('#todo-new').on('keydown', function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});
