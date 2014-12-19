// Viewer
;
(function(App) {

	App.viewer = {
		rendered: false,
		init: function() {
			App.init();

			this.$viewer = $('#viewer');

			var idProject = App.parseSearch()['projectId'];

			

			//this.loadProject(idProject);

		},
		loadProject: function(idProject) {
			var self = this,
				$loading = $('<div class="loading">Loading Proyect</div>');


			this.$viewer.html('').append($loading);








			$.ajax({
				url: App.pathProjects + 'project' + idProject + '.json',
				success: function(data) {
					self.render(data);
				},
				error: function(){
					$loading.text('Error loading');
				}
			});
		},
		render: function(data) {
			if (data.liquid) {
				this.$viewer.addClass('liquid');
			}







			this.$container = $('<div class="image-container"><img src="' + App.pathImages + data.image + '"/></div>').appendTo(this.$viewer);

			// Areas
			var length = data.areas.length;
			for (var i = 0; i < length; i++) {
				var area = data.areas[i];

				var $a = $('<a href="' + area.url + '"></a>').css({
					'left': area.x + '%',
					'top': area.y + '%',
					'width': area.width + '%',
					'height': area.height + '%'
				});

				this.$container.append($a);
			}



		}



	};

	$('document').ready(function() {
		App.viewer.init();
	});
})(Interactive);