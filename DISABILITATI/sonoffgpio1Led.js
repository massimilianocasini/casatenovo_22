(function(json) {
	var data = JSON.parse(json);
	return data.gpio1Led === "1" ? "ON" : "OFF";
})(input);