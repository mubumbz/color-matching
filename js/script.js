function make() {
	var col = createColor();
	$('#req').css("background-color", col);
}

function random() {
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	var a = arr[Math.floor(Math.random() * 16)];
	return a;
}

function createColor() {
	var col = '#';
	for(i = 0; i < 6; i++) {
		col = col + random();
	}
	return col;
}

function hexValue(i) {
	if(i == '0') {
		return 0;
	}
	else if(i == '1') {
		return 1;
	}
	else if(i == '2') {
		return 2;
	}
	else if(i == '3') {
		return 3;
	}
	else if(i == '4') {
		return 4;
	}
	else if(i == '5') {
		return 5;
	}
	else if(i == '6') {
		return 6;
	}
	else if(i == '7') {
		return 7;
	}
	else if(i == '8') {
		return 8;
	}
	else if(i == '9') {
		return 9;
	}
	else if(i == 'a') {
		return 10;
	}
	else if(i == 'b') {
		return 11;
	}
	else if(i == 'c') {
		return 12;
	}
	else if(i == 'd') {
		return 13;
	}
	else if(i == 'e') {
		return 14;
	}
	else if(i == 'f') {
		return 15;
	}
}

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

$(document).ready(function() {
	$("#bt1").click(function() {
		var col1 = createColor();
		$('#you').css("background-color", col1);
		var col2 = rgb2hex($("#req").css("background-color"));
		var red1 = col1.slice(1, 3);
		var red2 = col2.slice(1, 3);
		var gre1 = col1.slice(3, 5);
		var gre2 = col1.slice(3, 5);
		var blu1 = col1.slice(5, 7);
		var blu2 = col2.slice(5, 7);
		var r1 = (16 * hexValue(red1[0]) + hexValue(red1[1]));
		var r2 = (16 * hexValue(red2[0]) + hexValue(red2[1]));
		var g1 = (16 * hexValue(gre1[0]) + hexValue(gre1[1]));
		var g2 = (16 * hexValue(gre2[0]) + hexValue(gre2[1]));
		var b1 = (16 * hexValue(blu1[0]) + hexValue(blu1[1]));
		var b2 = (16 * hexValue(blu2[0]) + hexValue(blu2[1]));
		var r = Math.abs(r2 - r1);
		var g = Math.abs(g2 - g1);
		var b = Math.abs(b2 - b1);
		var dif = Math.sqrt(((r * r) + (g * g) + (b * b))) / 255;
		var per = (1 - dif) * 100;
		per = per.toFixed(2);
		var percenatge = "Color Similarity = " + per + "%";
		console.log(per);
		if(per > 95) {
			alert("You Won");
		}
		document.getElementById("perc").innerHTML = percenatge;
	});
});