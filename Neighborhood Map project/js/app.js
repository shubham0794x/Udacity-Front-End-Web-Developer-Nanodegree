/* Initial Sample Data */

var locations =[ 
    {
        title: 'Eco Park',
        location: {
            lat: 22.6021,
            lng: 88.4658
  }
}, 
    {
  title: 'Aquatica',
   location: {
     lat: 22.5618,
     lng: 88.4649
  }
}, 
    {
  title: 'Nicco Park',
   location: {
    lat: 22.5712,
     lng: 88.422
  }
}, 
    {
  title: 'Victoria Memorial',
   location: {
    lat: 22.5448,
    lng: 88.3425
  }
}, 
    {
  title: 'Edens Garden',
   location: {
    lat: 22.5628,
     lng: 88.3421
  }
}, 
    {
  title: 'Belur Math',
   location: {
    lat: 22.6322,
     lng: 88.3559
  }
}, 
    {
  title: 'Diamond Harbour',
   location: {
    lat: 22.4693,
     lng: 88.3094
  }
}, 
    {
  title: 'Science City',
   location: {
    lat: 22.539,
     lng: 88.3958
  }
}, 
    {
  title: 'Birla Planeterium',
   location: {
    lat: 22.5455,
     lng: 88.3473
  }
}, 
    {
  title: 'Howrah Bridge',
   location: {
    lat: 22.5851,
     lng: 88.3468
  }
} 
];


// declaration of global variables
var map, infoWindow, bounds;

function errorHandling() {
  alert( 'An error occurred with Google Maps!' );
}
// Initialization of google maps
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
      zoom: 3,
       center: {
        lat: 22.5448,
         lng: 88.3425
      },
       mapTypeControl: !1
    } ), infoWindow = new google.maps.InfoWindow(), bounds = new google.maps.LatLngBounds(),
     ko.applyBindings( new ViewModel());
}


var LocationMarker = function( a ) {
    var b = this;
    this.title = a.title, this.position = a.location, this.street = '', this.city ='', this.phone = '', this.visible = ko.observable( !0 );
    var c = makeMarkerIcon( '0091ff' ),
       d = makeMarkerIcon( 'FFFF24' ),
       // getting JSON request of foursquare data
      g = 'https://api.foursquare.com/v2/venues/search?ll=' + this.position.lat +',' + this.position.lng + '&client_id=' +
      '5WBUCX0GYJPVUE2C5HUJFXIACLBKN3GOU2UP3ECYO2INBJCU' + '&client_secret=' +
      '4LQSACSID2FNDFD0Q2HMLE1XXZZORO2AAXLPD5EWXIRMNDD1' + '&v=20160118&query=' +
      this.title;
    $.getJSON( g ).done( function( h ) {
        var i = h.response.venues[ 0 ];
        b.street = i.location.formattedAddress[ 0 ] ? i.location.formattedAddress[
            0 ] : 'N/A', b.city = i.location.formattedAddress[ 1 ] ? i.location
          .formattedAddress[ 1 ] : 'N/A', b.phone = i.contact.formattedPhone ?
          i.contact.formattedPhone : 'N/A';
      } )
      .fail( function() {
        alert( 'Something went wrong with foursquare' );
          // Creating marker per location and putting into markers array
      } ), this.marker = new google.maps.Marker( {
        position: this.position,
         title: this.title,
         animation: google.maps.Animation.DROP,
         icon: c
      } ),
         b.filterMarkers = ko.computed(function () {
        // set marker and extend bounds (showListings)
        if(b.visible() === true) {
            b.marker.setMap(map);
            bounds.extend(b.marker.position);
            map.fitBounds(bounds);
        } else {
            b.marker.setMap(null);
        }
    }),
    
        
        this.marker.addListener( 'click', function() {
        populateInfoWindow( this, b.street, b.city, b.phone, infoWindow ),
           toggleBounce( this ), map.panTo( this.getPosition() );
      } ), this.marker.addListener( 'mouseover', function() {
        this.setIcon( d );
      } ), this.marker.addListener( 'mouseout', function() {
        this.setIcon( c );
      } ), this.show = function() {
        google.maps.event.trigger( b.marker, 'click' );
      }, this.bounce = function() {
        google.maps.event.trigger( b.marker, 'click' );
      };
  },
  // Each location is assigned to location markers
  ViewModel = function() {
    var a = this;
    this.searchItem = ko.observable( '' ), this.mapList = ko.observableArray( [] ),
       // Display of each location in the map
      locations.forEach( function( b ) {
        a.mapList.push( new LocationMarker( b ) );
      } ), this.locationList = ko.computed( function() {
        var b = a.searchItem()
          .toLowerCase();
        return b ? ko.utils.arrayFilter( a.mapList(), function( c ) {
          var d = c.title.toLowerCase(),
             e = d.includes( b );
          return c.visible( e ), e;
        } ) : ( a.mapList()
          .forEach( function( c ) {
            c.visible( !0 );
          } ), a.mapList() );
      }, a );
  };
// This function helps us to develop and display one particular functionality of 
//  each map view at a time
function populateInfoWindow( a, b, c, d, e ) {
  if ( e.marker != a ) {
    e.setContent( '' ), e.marker = a, e.addListener( 'closeclick', function() {
      e.marker = null;
    } );
    var f = new google.maps.StreetViewService(),
       h = '<h4>' + a.title + '</h4><p>' + b + '<br>' + c + '<br>' + d +
      '</p>',
       i = function( j, k ) {
        if ( k == google.maps.StreetViewStatus.OK ) {
          var l = j.location.latLng,
             m = google.maps.geometry.spherical.computeHeading( l, a.position );
          e.setContent( h + '<div id="pano"></div>' );
          new google.maps.StreetViewPanorama( document.getElementById( 'pano' ),
             {
              position: l,
               pov: {
                heading: m,
                 pitch: 20
              }
            } );
        } else e.setContent( h +
          '<div style="color: red">No Street View Found</div>' );
      };
    //Using street view location function to get the closest street view
    f.getPanoramaByLocation( a.position, 50, i ), e.open( map, a );
  }
}

function toggleBounce( a ) {
  null === a.getAnimation() ? ( a.setAnimation( google.maps.Animation.BOUNCE ),
     setTimeout( function() {
      a.setAnimation( null );
    }, 1400 ) ) : a.setAnimation( null );
}

function makeMarkerIcon( a ) {
  var b = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + a +
    '|40|_|%E2%80%A2', new google.maps.Size( 21, 34 ), new google.maps.Point(
      0, 0 ), new google.maps.Point( 10, 34 ), new google.maps.Size( 21, 34 )
  );
  return b;
}
