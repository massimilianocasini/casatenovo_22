(function(json) {
	var data = JSON.parse(json);
	return data.gpio4Led === "1" ? "ON" : "OFF";
})(input);