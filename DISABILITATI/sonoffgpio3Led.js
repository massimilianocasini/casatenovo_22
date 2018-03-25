(function(json) {
	var data = JSON.parse(json);
	return data.gpio3Led === "1" ? "ON" : "OFF";
})(input);