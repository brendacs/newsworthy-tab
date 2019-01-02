$(document).ready(function loadStoredList() {
	if (localStorage.getItem('todo-list')) {
		$('#todo-list ul').html(localStorage.getItem('todo-list'));
	}
});

function addItem(e) {
	var newItem = $('#todo-new').val();
	$('#todo-list ul').prepend('<li class="todo-item"><p>' + newItem + '</p><button class="remove">✗</button></li>');
	$('#todo-new').val('');

	// store data
	var todoList = $('#todo-list ul').html();
	localStorage.setItem('todo-list', todoList);
	return false;
}

$('#todo-list ul').on('click', '.remove', function removeItem() {
	$(this).closest('li').remove();

	// store data
	var todoList = $('#todo-list ul').html();
	localStorage.setItem('todo-list', todoList);
	return false;
});

$('#todo-new').on('keydown', function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});
