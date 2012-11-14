$(document).ready(function() {
    $('.js-slider').cycle({ 
        fx:     'fade',
        timeout: 2000,
        speed: 1000,
        pager:  '.js-main-nav'
    });
    $('.js-slider-comp').cycle({ 
        fx:     'fade',
        timeout: 2000,
        speed: 1000,
        pager:  '.js-our-comp-nav'
    });
    $('.js-scroll-shop').scrollable({
        next:'.next_shop',
        prev:'.prev_shop'
    });
     if ($(".js-scroll-shop").length>0) {
       // Get the Scrollable control
       var scrollable_list_1 = $(".js-scroll-shop").data("scrollable");
       // Set to the number of visible items
       var number_list = 5;
       // Handle the Scrollable control's onSeek event
       scrollable_list_1.onSeek(function(event, index) {
         // Check to see if we're at the end
         if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
           $(".next_shop").addClass("disabled");
         }
       });
       // Handle the Scrollable control's onBeforeSeek event
       scrollable_list_1.onBeforeSeek(function(event, index) {
         // Check to see if we're at the end
         if (this.getIndex() >= this.getSize() - number_list) { 
           // Check to see if we're trying to move forward
           if (index > this.getIndex()) {
             // Cancel navigation
             return false;
           }
         }
       });
     }
});