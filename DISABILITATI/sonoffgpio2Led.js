(function(json) {
	var data = JSON.parse(json);
	return data.gpio2Led === "1" ? "ON" : "OFF";
})(input);