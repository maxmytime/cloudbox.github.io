$(function() {

    $('.top-line').after('<div class="mobile-menu d-lg-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu').stop().slideToggle();
    });

    $(document).ready(function(){

        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true
        });

    });

    $(window).on("load",function(){

        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:"#navigation-menu a"
        });

    });

    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });

    (function($) {
        // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

        $('.accordion a').click(function(j) {
            var dropDown = $(this).closest('li').find('p');

            $(this).closest('.accordion').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);


    feather.replace()


});
