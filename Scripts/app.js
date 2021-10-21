$(function(){

    $window = $(window);
    $window.scroll(function() {
      $scroll_position = $window.scrollTop();
        if ($scroll_position > 70) { // if body is scrolled down by 300 pixels
            $('.header-fixed').addClass('sticky');
    
            // to get rid of jerk
            header_height = $('.header-fixed').innerHeight();
            $('body').css('padding-top' , 0);
        } else {
            $('body').css('padding-top' , '0');
            $('.header-fixed').removeClass('sticky');
        }
     });


    // Product dropdown
    
    $(".product__dropdown").click(()=>{
        $(".products-dropdown").toggleClass("dropdown-active");
        let solution = $(".solution-dropdown")
        if(solution.hasClass("dropdown-active")){
            solution.removeClass("dropdown-active")
        }

        $(".product__dropdown").toggleClass("menu__link-active");
        let solution__link = $(".solution__dropdown")
        if(solution__link.hasClass("menu__link-active")){
            solution__link.removeClass("menu__link-active")
        }
    });

    // Solution dropdown
    $(".solution__dropdown").click(()=>{
        $(".solution-dropdown").toggleClass("dropdown-active");
        let product = $(".products-dropdown")
        if(product.hasClass("dropdown-active")){
            product.removeClass("dropdown-active")
        }

        $(".solution__dropdown").toggleClass("menu__link-active");
        let product__link = $(".product__dropdown")
        if(product__link.hasClass("menu__link-active")){
            product__link.removeClass("menu__link-active")
        }
    });

    // Hamburger
    $('.hamburger').click(()=>{
        $('.hamburger-menu').css({"left": "0"})
        document.body.style.overflow = 'hidden';
    })

    $('.hamburger-close').click(()=>{
        $('.hamburger-menu').css({"left": "-100%"})
        document.body.style.overflow = 'visible';
    })
})

// Accordion
var acc = document.getElementsByClassName("header-accordion");
var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion-active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }