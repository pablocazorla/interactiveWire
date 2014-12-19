// Projects
;
(function(App) {

	var jason = {
		"id": 0,
		"name": "Primer Projecto",
		"views": [{
			"id": 0,
			"liquid": true,
			"screenSize": "desktop",
			"images": [{
				"image": "home1.jpg",
				"fixed": null,
				"areas": [{
					"x": 10,
					"y": 5,
					"width": 25,
					"height": 10,
					"url": 1
				}, {
					"x": 10,
					"y": 20,
					"width": 25,
					"height": 10,
					"url": "http://www.twitter.com"
				}]
			}]
		}]
	};

	App.projects = {
		init: function() {
			App.init();


			var self = this;

			$('.write-btn').click(function(e) {
				e.preventDefault();
				self.write();
			});


		}
		
	};

	$('document').ready(function() {
		App.projects.init();
	});
})(Interactive);