
'use strict';
var punica_variable = {
    'contact': {
        'address': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'marker': '/url image'
    },
    'i18n': {
        'VIEW': 'View',
        'VIEWS': 'Views',
        'validate': {
            'form': {
                'SUBMIT': 'Submit',
                'SENDING': 'Sending...'
            },
            'name': {
                'REQUIRED': 'Please enter your name',
                'MINLENGTH': 'At least {0} characters required'
            },
            'email': {
                'REQUIRED': 'Please enter your email',
                'EMAIL': 'Please enter a valid email'
            },
            'url': {
                'REQUIRED': 'Please enter your url',
                'URL': 'Please enter a valid url'
            },
            'message': {
                'REQUIRED': 'Please enter a message',
                'MINLENGTH': 'At least {0} characters required'
            }
        }
    }
};
var map;

/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([
  {
    load: 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('#main-menu').superfish({
            delay: 400,
            speed: 'fast',
            cssArrows: false
        });

    }
  }
]);


/* =========================================================
2. Mobile Menu
============================================================ */
Modernizr.load([
  {
    load: 'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#mobile-menu').navgoco({accordion: true});
        jQuery( '#main-nav i' ).click(function(){
            jQuery( '#mobile-menu' ).slideToggle( 'slow' );
        });


        jQuery('#secondary-mobile-menu').navgoco({accordion: true});
        jQuery( '#secondary-nav .secondary-mobile-label' ).click(function(){
            jQuery( '#secondary-mobile-menu' ).slideToggle( 'slow' );
        });
    }
  }
]);

/* =========================================================
3. Breadking News
============================================================ */

if (jQuery('.ticker-1').length > 0) {
    Modernizr.load([{
        load: 'js/jquery.carouFredSel-6.2.1.js',
        complete: function () {
            var _scroll = {
                delay: 1000,
                easing: 'linear',
                items: 1,
                duration: 0.05,
                timeoutDuration: 0,
                pauseOnHover: 'immediate'
            };
            jQuery('.ticker-1').carouFredSel({
                width: 1045,
                align: false,
                items: {
                    width: 'variable',
                    height: 25,
                    visible: 1
                },
                scroll: _scroll
            });
        }
    }]);
}


/* =========================================================
4. Owl Carousel
============================================================ */
if (jQuery('.punica-carousel-1').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-1').owlCarousel({
                items : 5,
                itemsDesktop : [979,3],
                itemsDesktopSmall : [767,2],
                itemsTablet : [639,2],
                itemsMobile : [479,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-2').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-2').owlCarousel({
                items : 4,
                itemsDesktop : [979,3],
                itemsDesktopSmall : [799,2],
                itemsTablet : [639,1],
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-3').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-3').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-4').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-4').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-5').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-5').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-6').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-6').owlCarousel({
                items : 3,
                itemsDesktop : [979,2],
                itemsDesktopSmall : [799,2],
                itemsTablet : [639,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-carousel-7').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-7').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-carousel-8').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-8').owlCarousel({
                items : 2,
                itemsDesktop : [1024,2],
                itemsDesktopSmall : [979,2],
                itemsTablet : [799,2],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-home-slider-4').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
          var sync1 = $('.sync1');
          var sync2 = $('.sync2');
           
          sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: true,
            pagination:false,
            navigationText : false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
          });
           
          sync2.owlCarousel({
            items : 4,
            itemsDesktop : [1120,4],
            itemsDesktopSmall : [979,4],
            itemsTablet : [639,4],
            itemsMobile : [479,3],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
              el.find('.owl-item').eq(0).addClass('synced');
            }
          });
           
          function syncPosition(el){
            var current = this.currentItem;
            $('.sync2')
            .find('.owl-item')
            .removeClass('synced')
            .eq(current)
            .addClass('synced')
            if($('.sync2').data('owlCarousel') !== undefined){
              center(current)
            }
          }
           
          $('.sync2').on('click', '.owl-item', function(e){
            e.preventDefault();
            var number = $(this).data('owlItem');
            sync1.trigger('owl.goTo',number);
          });
           
          function center(number){
            var sync2visible = sync2.data('owlCarousel').owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
            if(num === sync2visible[i]){
              var found = true;
            }
          } 
        }
      }
    }
  ]);
};


if (jQuery('.punica-carousel-9').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-9').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-10').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-10').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-carousel-product').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-product').owlCarousel({
                items : 4,
                itemsDesktop : [1024,4],
                itemsDesktopSmall : [767,3],
                itemsTablet : [639,2],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-carousel-11').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-11').owlCarousel({
                items : 3,
                itemsDesktop : [1024,3],
                itemsDesktopSmall : [979,3],
                itemsTablet : [767,2],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-carousel-12').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-12').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.punica-single-post-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-single-post-carousel').owlCarousel({
                items : 1,
                itemsDesktop : [1024,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


/* =========================================================
5. Flex slider
============================================================ */
if (jQuery('.punica-flex-1-widget').length > 0) {

    Modernizr.load([
      {
        load: 'js/jquery.flexslider-min.js',
        complete: function () {
            jQuery('.punica-flex-carousel-1').flexslider({
                animation: 'slide',
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                direction: 'vertical',
                itemWidth: 100,
                itemMargin: 0,
                asNavFor: '.punica-flexslider-1'
            });

            jQuery('.punica-flexslider-1').flexslider({
                animation: 'slide',
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                direction: 'vertical',
                prevText: '',
                nextText: '',
                sync: '.punica-flex-carousel-1',
                start: function(slider){
                  jQuery('body').removeClass('loading');
                }
            });
        }
      }
    ]);
};

/* =========================================================
6. Back to top
============================================================ */
jQuery('.back-to-top').hide();
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.back-to-top').fadeIn();
    } else {
        jQuery('.back-to-top').fadeOut();
    }
});

jQuery('.back-to-top').click(function (event) {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 800);
    event.preventDefault();
})

/* =========================================================
7. Video wrapper
============================================================ */
if (jQuery('.video-wrapper').length > 0) {
	Modernizr.load([{
		load: 'js/fitvids.js',
		complete: function () {
			jQuery('.video-wrapper').fitVids();
		}
	}]);
};


/* =========================================================
8. Accordion
========================================================= */
jQuery(document).ready(function() {
    var acc_wrapper=jQuery('.acc-wrapper');
    if (acc_wrapper.length >0) 
    {
        
        jQuery('.acc-wrapper .accordion-container').hide();
        jQuery.each(acc_wrapper, function(index, item){
            jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
            
        });
        
        jQuery('.accordion-title').on('click', function(e) {
            punica_accordion_click(jQuery(this));
            e.preventDefault();
        });
        
        var titles = jQuery('.accordion-title');
        
        jQuery.each(titles,function(){
            punica_accordion_click(jQuery(this));
        });
    }        
});

function punica_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    if (obj.hasClass('active')) {
        obj.find('span').removeClass('fa-chevron-down');
        obj.find('span').addClass('fa-chevron-up');             
    }
}


/* =========================================================
9. Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
  jQuery('.toggle-view li').click(function (event) {
      
      var text = jQuery(this).children('.punica-panel');

      if (text.is(':hidden')) {
          jQuery(this).addClass('active');
          text.slideDown('300');
          jQuery(this).children('span').removeClass('fa-chevron-down');
          jQuery(this).children('span').addClass('fa-chevron-up');                 
      } else {
          jQuery(this).removeClass('active');
          text.slideUp('300');
          jQuery(this).children('span').removeClass('fa-chevron-up');
          jQuery(this).children('span').addClass('fa-chevron-down');               
      }
       
  });
 
});



/* =========================================================
10. Masonry
============================================================ */
Modernizr.load([{
    load: ['js/masonry.pkgd.js', 'js/imagesloaded.js'],
    complete: function () {
        var $masonry1 = jQuery('.masonry-list');
        imagesLoaded($masonry1, function () {
            $masonry1.masonry({
                columnWidth: 1,
                itemSelector: '.masonry-item'
            });
            $masonry1.masonry('bindResize')
        });
    }
}]);



/* =========================================================
11. Validate form
============================================================ */

if (jQuery('.comments-form,.contact-form').length > 0) {
    Modernizr.load([{
        load: ['js/jquery.form.js', 'js/jquery.validate.js'],
        complete: function () {
            jQuery('.comments-form,.contact-form').validate({
                // Add requirements to each of the fields
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                // Specify what error messages to display
                // when the user does something horrid
                messages: {
                    name: {
                        required: punica_variable.i18n.validate.name.REQUIRED,
                        minlength: jQuery.format(punica_variable.i18n.validate.name.MINLENGTH)
                    },
                    email: {
                        required: punica_variable.i18n.validate.email.REQUIRED,
                        email: punica_variable.i18n.validate.email.EMAIL
                    },
                    message: {
                        required: punica_variable.i18n.validate.message.REQUIRED,
                        minlength: jQuery.format(punica_variable.i18n.validate.message.MINLENGTH)
                    }
                },
                // Use Ajax to send everything to processForm.php
                submitHandler: function (form) {
                    jQuery('.comments-form .input-submit,.contact-form .input-submit').attr('value', punica_variable.i18n.validate.form.SENDING);
                    jQuery(form).ajaxSubmit({
                        success: function (responseText, statusText, xhr, $form) {
                            jQuery('#response').html(responseText).hide().slideDown('fast');
                            jQuery('.comments-form .input-submit,.contact-form .input-submit').attr('value', punica_variable.i18n.validate.form.SUBMIT);
                        }
                    });
                    return false;
                }
            });
        }
    }]);
}



/* =========================================================
12. Google Map
============================================================ */
var map;

if (jQuery('.punica-map').length > 0) {
      var id_map = jQuery('.punica-map').attr('id');
      var lat = parseFloat(jQuery('.punica-map').attr('data-latitude'));
      var lng = parseFloat(jQuery('.punica-map').attr('data-longitude'));
      var place = jQuery('.punica-map').attr('data-place');

  map = new GMaps({
      el: '#'+id_map,
      lat: lat,
      lng: lng,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    map.addMarker({
      lat: lat,
        lng: lng,
      title: place
    });
};

/* =========================================================
13. Create secondary mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery('<select />').appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr('id',mobile_menu_id);

    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {
        var el = jQuery(this);

        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = 'selected=\'selected\'';
        }

        var depth = el.parents('ul').size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }

        jQuery('<option '+selected+' value=\''+el.attr('href')+'\'>'+space+el.text()+'</option>').appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find('option:selected').val();
    });
}

jQuery(document).ready(function(){
    if(jQuery('#secondary-nav').length > 0){
        createMobileMenu('#secondary-nav','secondary-responsive-menu');
    }
});


/* =========================================================
14. Create top mobile menu
============================================================ */
function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery('<select />').appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr('id',mobile_menu_id);

    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {
        var el = jQuery(this);

        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = 'selected=\'selected\'';
        }

        var depth = el.parents('ul').size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }

        jQuery('<option '+selected+' value=\''+el.attr('href')+'\'>'+space+el.text()+'</option>').appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find('option:selected').val();
    });
}

jQuery(document).ready(function(){
    if(jQuery('#top-nav').length > 0){
        createMobileMenu('#top-nav','top-responsive-menu');
    }
});
//# sourceMappingURL=script.js.map
