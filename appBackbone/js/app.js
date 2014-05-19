

//YOUR CODE HERE!!


_.extend(Backbone.Validation.callbacks, {
	valid: function (view, attr, selector) {
		var $el = view.$('[name=' + attr + ']'),
			$group = $el.closest('.form-group');

		$group.removeClass('has-error');
		$group.find('.help-block').html('').addClass('hidden');
	},
	invalid: function (view, attr, error, selector) {
		var $el = view.$('[name=' + attr + ']'),
			$group = $el.closest('.form-group');

		$group.addClass('has-error');
		$group.find('.help-block').html(error).removeClass('hidden');
	}
});

//cargamos los html de las vistas
utils.loadTemplate(['UserListView', 'UserListItemView', 'UserEditView', 'UserDetailModal'], function() {
	window.app = new AppRouter();
	Backbone.history.start();

});
