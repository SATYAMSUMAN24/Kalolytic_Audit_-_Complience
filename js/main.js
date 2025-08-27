(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
// Contact Form Handling
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var form = this;
        var isValid = form.checkValidity();
        
        if (!isValid) {
            e.stopPropagation();
            $(form).addClass('was-validated');
            return;
        }
        
        var submitBtn = $('#submitBtn');
        var btnText = submitBtn.find('.btn-text');
        var spinner = submitBtn.find('.spinner-border');
        
        // Show loading state
        btnText.text('Submitting...');
        spinner.removeClass('d-none');
        submitBtn.prop('disabled', true);
        
        // Simulate form submission
        setTimeout(function() {
            // Hide form and show success message
            $('#contactForm').addClass('d-none');
            $('#successMessage').removeClass('d-none');
            
            // Scroll to success message
            $('html, body').animate({
                scrollTop: $('#successMessage').offset().top - 100
            }, 500);
            
            // Reset form for future use
            form.reset();
            $(form).removeClass('was-validated');
            
            // Reset button state
            btnText.text('Schedule Demo Now');
            spinner.addClass('d-none');
            submitBtn.prop('disabled', false);
        }, 2000);
    });
    
    // Newsletter Form Handling
   setTimeout(function() {
    $('#newsletterForm')[0].reset();

    // Sweet message
    Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: '🎉 Thank you for joining our newsletter!',
        showConfirmButton: false,
        timer: 4000
    });

    // Reset button state
    btnText.text('Subscribe');
    spinner.addClass('d-none');
    submitBtn.prop('disabled', false);
}, 1500);


    // Demo Modal Form Handling (if exists)
    $('#demoModal form').on('submit', function(e) {
        e.preventDefault();
        
        // Show success and close modal
        alert('Demo request submitted successfully! We will contact you within 24 hours.');
        $('#demoModal').modal('hide');
        this.reset();
    });
    
})(jQuery);

