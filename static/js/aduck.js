$( document ).ready( function () {
  // document.getElementById("happy-img").style.visibility="hidden";
  // document.getElementById("angry-img").style.visibility="hidden";
  // document.getElementById("neu-img").style.visibility="hidden";
  var aduck = {};

  aduck.init = function () {
    aduck.createWebSocket();
    aduck.initRecordButton();
    aduck.initSentimentButtom();
  };

  aduck.getRecorder = function ( s ) {
    context = new AudioContext();
    source = context.createMediaStreamSource( s );
    recorder = new Recorder( source, {
      numChannels: 1,
    } );
    recorder.record();
    aduck.setInterval();
  };

  aduck.createWebSocket = function () {
    socket = io.connect( '//' + document.domain + ':' + location.port );
    socket.on( 'connect', function () {
      console.log( 'Connected!' );
    } );

    socket.on( 'transcript', function ( data ) {
      console.log('data: ', data);
      $( '.recognized-text' ).append( ' ' + data );
    } );
  };

  aduck.setInterval = function () {
    if ( 'undefined' !== typeof recorder ) {
      exportInterval = setInterval( function () {
        recorder.exportWAV( function ( blob ) {
          recorder.clear();
          if ( 'undefined' !== typeof socket ) {
            console.log("blob: ", blob);
            socket.emit( 'stream', blob );
          }
        } );
      }, 5000 );
    }
  };

  aduck.clearInterval = function () {
    clearInterval( exportInterval );
  };

  aduck.initRecorder = function () {
    if ( 'undefined' === typeof recorder ) {
      navigator.mediaDevices.getUserMedia( {
        audio: true,
        video: false
      } ).then( aduck.getRecorder );
    }
  };

  aduck.initRecordButton = function () {
    $( '.recorder' ).click( function ( e ) {
      e.preventDefault();

      if ( $( this ).hasClass( 'is-recording' ) ) { // Stop Recording
        $( this ).removeClass( 'active is-recording btn-danger' ).text( 'Start Recording' );
        if ( 'undefined' !== typeof recorder ) {
          recorder.stop();
        }
        aduck.clearInterval();
      }
      else { // Start Recording
        $( this ).addClass( 'active is-recording btn-danger' ).text( 'Stop Recording' );
        if ( 'undefined' !== typeof recorder ) {
          recorder.record();
          aduck.setInterval();
        }
        else {
          aduck.initRecorder();
        }
      }
    } );
  };

  aduck.initSentimentButtom = function(){
    $( '.sentiment' ).click( function ( e ) {
      e.preventDefault();
      //log
      console.log($(this))
      var reconginized_text =  $( '.recognized-text' ).val();
      var xhr = new XMLHttpRequest();
      //log
      console.log( $( '.recognized-text' ).val());
      // xhr.open("POST", '/sentiment?data=' + reconginized_text, true);
      // xhr.send().then(function() {
      //   console.log('sentiment1: ', xhr.response);
      // });
      // console.log('sentiment: ', xhr.response)
      const url = "/sentiment?data=" + reconginized_text;
      fetch(url, {method: 'POST'})
        .then( response => response.json())
        .then( function(res) {
          console.log(typeof res);
          if (parseFloat(res.score) > 0.0) {
            document.getElementById("duck-img").src="./static/images/happy.png";
            // document.getElementById("angry-img").style.visibility="hidden";
            // document.getElementById("neu-img").style.visibility="hidden";
          } else if (parseFloat(res.score) < 0.0) {
            document.getElementById("duck-img").src="./static/images/angry.png";
            // document.getElementById("happy-img").style.visibility="hidden";
            // document.getElementById("neu-img").style.visibility="hidden";
          } else if (parseFloat(res.score) == 0.0) {
            // document.getElementById("angry-img").style.visibility="hidden";
            // document.getElementById("happy-img").style.visibility="hidden";
            document.getElementById("duck-img").src="./static/images/neu.png";
          }
        });
    });
  };

  $( aduck.init() );
} );


