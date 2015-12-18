window.onload = function() { 
        document.body.className = "show-overflow";
        document.getElementById('page-load-overlay').className = "hide";
}
 
jQuery(document).ready(function(){ 
   if (typeof(window.prices) !== 'undefined'){
        $.each( window.prices, function( key, value ) {
             $('.'+key).html(value);
        });
   }
  
    $('.plan1').colorbox({rel:'plan1',width:"75%", height:"75%"});
    $('.plan2').colorbox({rel:'plan2',width:"75%", height:"75%"});
    $('.plane').colorbox({rel:'plane',width:"130%", height:"130%"});
    $('#main_menu').children().click(function(){
        scrollToPlace($(this).children().first().attr('href'));
        return false;
    });
     $('.btn-success, .take-call').click(function(){
        scrollToPlace($(this).attr('href'));
        return false;
    });
    bindSiders();

});

function bindSiders() {
    $('.bxslider').bxSlider({
        auto: true,
        adaptiveHeight: true,
        pager:true,
        easing: 'ease-in-out',
        mode: 'fade'
    });
}
function  scrollToPlace(name) {

    console.log('#'+name);
    var h = $('header').height();
    if (name > 201){
        name = name-1;
    }
    $('html,body').animate({
        'scrollTop': $(name).offset().top -  h - 80
    }, 900);
    return false;
}

