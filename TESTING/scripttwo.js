/*
 Aristotle Manolakos
 hi@stotle.me
 */
 
// Init

var tag_name;
var url;
var ul;
var n = 0;
var tracks;
var user_id = '582092';
var thumb_dimension = 300;
var div_to_add_pics = '#ri-grid';
var include_caption = false;
var include_username = false;
var include_location = false;
var batch = 0;
var currentTrack;
var playlistBuffer;
var currentSoundID;
var playlist;
var paused = false;
var playing = false;
var timerOne;
var timerTwo;
var client_id;
var access_token;
var sc_client_id;
var sc_redirect_uri;
var autohashtag = false;

if ( window.location.hostname == 'greatwhitefrog.com' ) {
	
	client_id = '19d670c7fcd046599d6c80bcd9adef17'; // Instagram
	access_token = '582092.19d670c.cf0c98e34992447989afa64b28379c48'; // Instagram Access Token
	sc_client_id = 'a34e32a49873a7059800c463e06c9819'; // Soundcloud
	sc_redirect_uri = 'http://'+ window.location.hostname; // Soundcloud redirect
	
} else {
	
	client_id = '19d670c7fcd046599d6c80bcd9adef17'; // Instagram
	access_token = '582092.19d670c.cf0c98e34992447989afa64b28379c48'; // Instagram Access Token
	sc_client_id = '22c748b444da1fc195479bc2f54cbdc6'; // Soundcloud
	sc_redirect_uri = 'http://'+ window.location.hostname; // Soundcloud redirect
	
	// Test query
	// https://api.instagram.com/v1/tags/sunset/media/recent?access_token=582092.19d670c.cf0c98e34992447989afa64b28379c48
	
	// scope change
	// https://www.instagram.com/oauth/authorize?client_id=19d670c7fcd046599d6c80bcd9adef17&redirect_uri=http://soundgram.co&response_type=token&scope=public_content
	
	// Get token
	// https://instagram.com/oauth/authorize/?client_id=19d670c7fcd046599d6c80bcd9adef17&redirect_uri=http://soundgram.co&response_type=token
	

	
}


$(document).ready(function(){
	
	// Do stuff before window loads
	
	$.getScript('js/soundmanager/script/soundmanager2-nodebug-jsmin.js'); // Load soundmanager 2 directly.
	
	initializeSC();
	getSoundCloudTracks();

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
		ismobile = true;
		
		$('#play').hide();
		$('#skip').hide();
		$('#loader').hide();
		$('#igloader').hide();
		
		$('#mobilestart').click( function(e) {
			e.preventDefault();
			
			$(this).hide();
			$('#mobileloader').hide();
			$('#loader').fadeIn('fast');
			$('#igloader').fadeIn('slow');
			$('#play').fadeIn('fast');
			$('#skip').fadeIn('slow');
						
		});
	 
	} else {
		
		ismobile = false;
		$('#mobileloader').hide();
		$('#mobilestart').hide(); // hide mobile start button
	
	}
	
	$('#play').click( function(e) {
		e.preventDefault();
	});
	$('#skip').click( function(e) {
		e.preventDefault();
	});
	
	$('#about').click( function(e) {
		e.preventDefault();
		$('#colophon').slideToggle('fast');
	});
	$('#close').click( function(e) {
		e.preventDefault();
		$('#colophon').slideToggle('fast');
	});
	
	$(div_to_add_pics+' ul li a').click( function(e) {
		e.preventDefault();
	});
	$(div_to_add_pics).css('height', window.innerHeight);
	$(window).resize(function() {
		$(div_to_add_pics).css('height', window.innerHeight);
	});
	    
});


/* Initialize
 ***************/
 
function initializeSC() {
	SC.initialize({
		client_id: sc_client_id
	});
}


/* Get Tracks
 ***************/
 
function getSoundCloudTracks() {
	
	SC.get('/playlists/76409343', function(playlist) { // My playlist: 76409343
		
		playlistDuration = playlist.duration;
		trackcount = playlist.track_count;
		playlistBuffer = playlist;
		
		shuffle(playlistBuffer.tracks);
		
		if (ismobile) {
			playTrack(n); // without this hack, the first track will not play on iOS.
		} else {
			currentTrack = playlistBuffer.tracks[n];
			playTrack(currentTrack);
		}
    
    });
    
}


/* Play
 ***************/
 
function playTrack(currentTrack) {
			
	SC.stream( '/tracks/'+ currentTrack.id, function(sound) {

	    currentSoundID = sound.sID;
		
	    sound.play({
		    
		    onfinish: function() {
    			nextTrack();
  			},
  			onplay: function() {
  			},
  			onsuspend: function() {
	  			if (playing) {
	  				updateScreen(currentTrack); // added for iOS, needs testing.
	  			}
  			},
	  		onload: function() {
		  		if (!ismobile) {
					if (this.readyState == 2) {
						nextTrack();
					} else {
						updateScreen(currentTrack);
					}
				}
	  		}
	  		
		});

	});
	
}


/* Play / Pause
 ***************/
function playPause() {
	 		    
    soundManager.togglePause(currentSoundID);
    $('#play').toggleText('<i class="fa fa-play"></i>', '<i class="fa fa-pause"></i>');
    
    if ( paused == true ) { // Resume
    	$('#bars').fadeIn('slow'); // Show the sound bars
    	paused = false;
    	loadNext();
    } else { // Pause
	    $('#bars').fadeOut(300); // Hide the sound bars
	    paused = true;
	    clearTimeout(timerOne);
		clearTimeout(timerTwo);
    }
    	
 }


/* Mobile Start
 ***************/
function mobileStart() {
	playing = true;
	currentTrack = playlistBuffer.tracks[n];
	playTrack(currentTrack);
}


/* Skip Track
 ***************/
function nextTrack() {
	
	soundManager.stop(currentSoundID);
	clearTimeout(timerOne);
	clearTimeout(timerTwo);
	
	window.clearTimeout(timerOne);
	window.clearTimeout(timerTwo);
	
	$('#play').html('<i class="fa fa-pause"></i>'); // Reset the play/pause button
	$('#bars').fadeOut(300); // Hide the sound bars
	$('#masthead h2').hide(); // hide artist
	$('#masthead #tag').hide(); // hide track name
	$('#loader').fadeIn('fast'); // fade in loader
	$('#igloader').fadeIn('slow'); // fade in IG loader
	$(div_to_add_pics+' ul').fadeOut(300, function() { 
		$(div_to_add_pics+' ul').remove();
	}); // Clear IG images
	
	batch = 0;
	
	// Check if we're at the end of the playlist
	a = trackcount-1;
	if (n == a) {
		n = 0; // Loop to the bottom of the list.
	} else {
		n++;
	}
	
	currentTrack = playlistBuffer.tracks[n];
	playTrack(currentTrack);
}


/* Update Screen
 ***************/
function updateScreen(currentTrack) {
	
	if ( autohashtag ) {
		tag_name = getHashtag(currentTrack.tag_list);
	} else {
		tag_name = giveHashtag(currentTrack.id);
	}

	// Construct the IG request URL
	url = 'https://api.instagram.com/v1/tags/'+ tag_name +'/media/recent?access_token='+ access_token;
	
	// Load Instagram pics
	LoadResults();

	// Hide the loaders
	$('#loader').fadeOut(0);
	$('#igloader').fadeOut(0);
	
	// Show the sound bars
	$('#bars').fadeIn('slow');
	
	// Set the artist & track name
	$('#artist').html( currentTrack.user.username );
	$('#track').html( currentTrack.title );
	$('title').html( 'Soundgram | '+ currentTrack.user.username +' - '+ currentTrack.title );
	$('#masthead h2').filter('#masthead h2').fadeIn('slow'); // fade in the track info
	
	// Set the hashtag
	$('#hashtag').html( '#'+tag_name );
	$('#masthead #tag').filter('#masthead #tag').fadeIn('slow'); // fade in hashtag

	// Set the permalink
	$('#masthead h2 a').attr( 'href', currentTrack.permalink_url );
	
	// Set the background image -- replace large with t500x500
	//$(div_to_add_pics).css('background-image', 'url(' + currentTrack.artwork_url + ')');
	
	console.log('Track: '+currentTrack.user.username+' : '+currentTrack.title);
	console.log('Tag: '+tag_name);
	
}


/* Utility
 ***************/
 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


$.fn.toggleText = function(t1, t2) {
	
	if (this.html() == t1) {
		this.html(t2);
	} else {
		this.html(t1);
	}
	return this;
	
};


/* 	Instagram tag grabber/infinite scroller
*   Just add "return LoadResults();" in a JS function on the 
*   webpage to get working
*	Written by Ryan Williams
*	Scroll thanks to Ali Ukani 
*	October 2012
*   --
	https://github.com/ryancw/instagram-scroll
	
	Modified by Sebastien Marchal / January 2015
*/

/************************
*   Load and Process    *
*************************/

// Grab JSON data from Instagram
function LoadResults(){
	jQuery.ajax({
		dataType:'jsonp',
		url:url,
		success:function(response){
			// Send data to be processed
			return ProcessData(response);
		}
	});
};

// Process JSON data by creating a <ul> and adding each image
// as a <li>
function ProcessData( response ){
	
	if( response != null ){
		
		if (batch < 1 ) {
			ul = $('<ul/>');
			ul.attr({});
		}
		
		//console.log(response.data);
		// obj.type = 'video';
		
		// Setup the list
		$(response.data).each(function(index,obj){
			if(index == 20)
				return response.pagination.next_url;
			link = $('<a/>'), image = $('<img/>'), li = $('<li/>');
			
			// Assign a unique class for this batch of li
			li.attr({'class': tag_name +' batch-'+ batch });
			
			// options: low_resolution (300 x 300) // standard_resolution (600 x 600) // thumbnail (150 x 150)
			var igsrc = obj.images.thumbnail.url; //obj.images.low_resolution.url
			igsrc = igsrc.replace('s150x150', 's320x320');
			image.attr({'src': igsrc,'width':thumb_dimension,'height': ''});
			
			link.attr({});//link.attr('href',obj.images.standard_resolution.url); // link to img on IG: obj.link
			image.appendTo(link);
			link.appendTo(li);
			
			if(include_username){
				
				if (include_location){
					// Location data
					if(obj.location != null && obj.location.name != null ){
						img_location = ', '+obj.location.name;
					}
				} else {
					img_location = '';
				}
			
				$('<div class="username">@'+obj.user.username+''+img_location+'</div>').appendTo(li);
			}
			if(include_caption){
				$('<div class="caption">'+obj.caption.text+'</div>').appendTo(li);
			}
			// Append the li (image and text) to the list
			if (batch < 1 ) {
				ul.append(li);
			} else {
				//$(div_to_add_pics+' ul').append(li);
				ul.append(li);
			}
		});
		
		// make url correlate to the next set of data
		url = response.pagination.next_url;
		
		if (batch < 1 ) {
			
			// Append the list to the given div
			$(div_to_add_pics).append(ul);
			timerOne = window.setTimeout( function() { loadNext(); }, 5000);
			
		} else {
			
			timerTwo = window.setTimeout( function() { loadNext(); }, 30000);
			
		}
		
		// Grid rotator
		$(div_to_add_pics).gridrotator({
			
			columns: 5,
			rows: 4,
			animType: 'fadeInOut',
			animSpeed: 1000,
			interval: 1000,
			maxStep: 1,
			nochange: [],
			preventClick : true,
			w1024: {
				rows: 4,
				columns: 3
			},
			w768: {
				rows: 4,
				columns: 3
			},
			w480: {
			    rows: 4,
			    columns: 3
			},
			 
			w320: {
			    rows: 4,
			    columns: 3
			},
			 
			w240: {
			    rows: 4,
			    columns: 3
			},
			
		});
		
		if (batch < 1 ) {
			
			// Background colours or Images
			//var colors = ['#1D0717','#F4E800','#EE3516', '#8EDCE6', '#561643', '#8BE8CB', '#7FB069', '#FFFBBD'];
			//var colors = ['#1D0717','#F4E800','#561643'];
			
			$(div_to_add_pics+' ul li').each(function(i) {
				//var rand = Math.floor(Math.random()*colors.length);
				//$(this).css('background-color', colors[rand]);
				image = $('img', this).attr('src');
				$(this).css('background-image', 'url(' + image + ')');
			});
		}
		
		// Increment for the next batch
		batch++;

	}
	
};

/*********
 * Setup *
 *********/

var nextLink = false;
var loadingImages = false;

/******************
 *     Scroll	 *
 ******************/

/* Loads the next set of images and appends them to #div_to_add_pics */
function loadNext() {
  	// Prevent (redundantly) loading images if we're already loading them,
  	// and prevent us from entering an infinite loop
  	if (loadingImages || nextLink == url) {
  	  return false;
  	}else{
	// We are now loading images!
	loadingImages = true;

	LoadResults();
	nextLink = url;

    // Aaaaaand we're done loading.
    loadingImages = false;
}
  
}

/* When the user scrolls to the bottom of the page, load the next set
 * of images */
$(window).scroll(function() {
  var offset = 150; // Change for distance to load
  if($(window).scrollTop() + $(window).height() > $(document).height() - offset) {
    //loadNext();
  }
});