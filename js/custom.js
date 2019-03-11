$(document).ready(function(){
  $('.about-link').click(function(){
    $('.about-link').fadeOut(200);
    $('.title').fadeOut(200);    
    $('.close-link').fadeIn(200); 
    $('#responsive').fadeIn(1000);
    console.log('eee');
  });

  $('.close-link').click(function(){
    $('.close-link').fadeOut(200);
    $('#responsive').fadeOut(200);    
    $('.about-link').fadeIn(200);
    $('.title').fadeIn(1000);

  });
  
    $('.rsvp-link').click(function(){
    $('.rsvp-link').fadeOut(200);
    $('.title').fadeOut(200);    
    $('.rsvpclose-link').fadeIn(200); 
    $('#responsive').fadeIn(1000);
    console.log('eee');
  });

  $('.rsvpclose-link').click(function(){
    $('.rsvpclose-link').fadeOut(200);
    $('#responsive').fadeOut(200);    
    $('.rsvp-link').fadeIn(200);
    $('.title').fadeIn(1000);

  });

  var fadeShow = $(".background").fadeShow({
    correctRatio: true,
    shuffle: false,
    speed: 6000,
    images: ['img/slider-background-1.jpg',
            'img/slider-background-2.jpg',
            'img/slider-background-3.jpg',
            'img/slider-background-4.jpg']
  }); 
});    
