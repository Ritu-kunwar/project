$(document).ready(function() {

   var toggleAffix = function(affixElement, scrollElement, wrapper) {
   
     var height = affixElement.outerHeight(),
        top = wrapper.offset().top;
     
     if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
     }
     else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
     }
      
   };
   
  
   $('[data-toggle="affix"]').each(function() {
     var ele = $(this),
        wrapper = $('<div></div>');
     
     ele.before(wrapper);
     $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
     });
     
     // init
     toggleAffix(ele, $(window), wrapper);
   });
   
  });

// magnific popup

  $('.view').magnificPopup({
       type: 'image'
   });

  // Magnific popup
//-----------------------------------------------
if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
  $(".popup-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    }
  });
  $(".popup-img-single").magnificPopup({
    type: "image",
    gallery: {
      enabled: false,
    }
  });
  $('.popup-iframe').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    preloader: false,
    fixedContentPos: false
  });
}


// owl


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
