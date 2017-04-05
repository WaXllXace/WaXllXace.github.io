/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */



        jQuery(window).on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            $(window).scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top button--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        $(window).on("scroll", function() {
            var top2 = $(window).scrollTop();
            if (top2 < 150) {
                $("#scroll-top-area").css('display', 'none');
            } else if (top2 >= 150) {
                $("#scroll-top-area").css('display', 'block');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");

        skillBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: ($("#portfolio").offset().top) - 60
            }, 2000);
        });
        var hireBtn = $(".hire-btn");

        hireBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: ($("#contact").offset().top) - 60
            }, 2000);
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------Typed.js----------------------------
         * -----------------------------------------------------------------
         */



        var element = $(".element");

        $(function() {
            element.typed({
                strings: ["I'm a Designer.", "I'm a Front-end developer.", "I come from Taiwan.", "I study at HKU."],
                typeSpeed: 100,
                loop: true,
            });
        });



        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function() {
            var animation = $(this.element).attr('data-animation');
            $(this.element).css('opacity', '1');
            $(this.element).addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });




        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();



        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------projects progressbar----------------------
         * -----------------------------------------------------------------
         */



        var skill = jQuery('.projects');
        var prog75 = $('.prog-75');
        var prog95 = $('.prog-95');
        var prog40 = $('.prog-40');
        var prog50 = $('.prog-50');
        skill.waypoint(function() {

            prog75.css({
                "width": "75%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '75%'
        });
        skill.waypoint(function() {

            prog95.css({
                "width": "95%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '95%'
        });
        skill.waypoint(function() {

            prog40.css({
                "width": "40%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '40%'
        });
        skill.waypoint(function() {

            prog50.css({
                "width": "50%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '50%'
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        $(window).stellar();


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function(e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function(data) {
                $('#contact .result').html(data);

                $(".contact-form-area")[0].reset();

            });

        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 2, //1 item above 1000px browser width
            itemsDesktop: [1000, 2], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

    });

})(jQuery);
