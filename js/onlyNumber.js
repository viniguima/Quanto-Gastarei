function onlynumber(e) {
    var Event = e || window.event; //
    var key = Event.keyCode || Event.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       Event.returnValue = false;
       if(Event.preventDefault) Event.preventDefault();
    }
 }
 