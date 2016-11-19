// Hamburger:

var hamburger = $('.hamburger')

hamburger.click(function(){
  hamburger.toggleClass('is-active');
  nav.toggleClass('nav-active');
});


// Audio:
var audioSource = $('#audio');
var playButton = $('#playButton');
var pauseButton = $('#pauseButton');
var record = $('.record')

$(document).ready(function(){
  pauseButton.hide();
});

playButton.click(function(){
  document.getElementById('audio').play();
  record.addClass('playing');
  playButton.hide();
  pauseButton.show();
});

pauseButton.click(function(){
  document.getElementById('audio').pause();
  record.removeClass('playing');
  playButton.show();
  pauseButton.hide();
});
