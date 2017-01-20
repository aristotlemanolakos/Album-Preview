SC.get('/user/183/tracks').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});