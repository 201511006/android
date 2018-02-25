function onMapLoad(){
	if(isConnected){

		var fileref = document.createElement('script');

		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", "http://maps.googleapis.com/maps/api/js?sensor=true&callback="+"getGeolocation");
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}else{
		alert("Must be connected to Internet!");
	}
}

function getGeolocation(){
	var options = {
		maximumAge : 3000,
		timeout : 5000,
		enableHighAccuracy : true
	};
	navigator.geolocation.getCurrentPosition(loadMap, geoError, options);
}

function loadMap(postion){
	var latlng = new google.maps.LaLng(position.coords.latitude, position.coords.longitude);
	var myOptions = {
		zoom : 8,
		center : lating,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	var mapObj = document.getElementById("geomap");
	var map = new google.maps.Map(mapObj, myOptions);
	var marker = new google.maps.Marker({
		position : latlng,
		map : map,
		title : "You"
	});
}
function geoError(error){
	alert('code: '+error.code+' '+ 'message: '+error.message + ' ');
}