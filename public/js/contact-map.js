$(document).ready(function() {
  function initialize() {
    var map_canvas = document.getElementById('map');

    var latlng = new google.maps.LatLng(51.2374507,-0.5300000);

    var map_options = {
      zoom: 15,
      center: latlng,
      scrollwheel: false,
      scaleControl: false,
      streetViewControl: false,
      draggable: true,
      mapTypeControl: false,
      zoomControl: false,
      panControl: false
    };

    var map = new google.maps.Map(map_canvas, map_options);

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: 'public/images/marker.png'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});