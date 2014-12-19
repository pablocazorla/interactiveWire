// Interactive
JSON.stringify = JSON.stringify || function(obj) {
	var t = typeof(obj);
	if (t != "object" || obj === null) {
		// simple data type
		if (t == "string") obj = '"' + obj + '"';
		return String(obj);
	} else {
		// recurse array or object
		var n, v, json = [],
			arr = (obj && obj.constructor == Array);
		for (n in obj) {
			v = obj[n];
			t = typeof(v);
			if (t == "string") v = '"' + v + '"';
			else if (t == "object" && v !== null) v = JSON.stringify(v);
			json.push((arr ? "" : '"' + n + '":') + String(v));
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};

var Interactive = {
	// Configuration
	pathProjects: 'projects/',
	pathImages: 'images/',

	init: function() {
		this.$window = $(window);
		return this;
	},

	parseSearch: function() {
		var str = window.location.search;
		var objURL = {};
		str.replace(
			new RegExp("([^?=&]+)(=([^&]*))?", "g"),
			function($0, $1, $2, $3) {
				objURL[$1] = $3;
			}
		);
		return objURL;
	},
	write: function(file, j) {
		$.ajax({
			global: false,
			type: "POST",
			cache: false,
			dataType: "json",
			data: ({
				archive: file + '.json',
				config: JSON.stringify(j)
			}),
			url: 'writer.php'
		});
	},
	read: function(url, os, oe) {
		var onSuc = os || function() {},
			onErr = oe || function() {};
		$.ajax({
			url: url,
			success: onSuc,
			error: onErr
		});
	},
	saveProject: function(j) {
		this.write(this.pathProjects + 'project' + j.id, j);
	},
	saveProjectList: function(j) {
		this.write(this.pathProjects + 'projectList', j);
	},
	loadProjectList: function(os, oe) {
		this.read(this.pathProjects + 'projectList.json', os, oe);
	},
	loadProject: function(id, os, oe) {
		this.read(this.pathProjects + 'project' + id + '.json', os, oe);
	},
	log: function(str) {
		console.log(str);
		return this;
	}
};