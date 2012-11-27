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
  $('.js-actions-slide').scrollable({
      next:'.next_action',
      prev:'.prev_action'
  });
  $('.js-slider-cont').cycle({ 
      fx:     'fade',
      timeout: 2000,
      speed: 1000,
      pager:  '.js-main-nav'
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
   // play video
   $(".video__play").click(function(){
      $(this).prev().hide();
      $(this).next().show();
      $(this).hide();
   });

   // show-hide subnav
   $(".menu-key").click(function(){
     if ($(".menu-key").hasClass("menu-key_act")) {
          $(this).removeClass("menu-key_act");
          $(".menu ul").hide();
          $(".menu").removeClass("menu_act");
      }
     else {
          $(this).addClass("menu-key_act");
          $(".menu ul").show();
          $(".menu").addClass("menu_act");
      }
   });

  // select
  $(".select select").change(function(){
     var select_val = $(this).val();
     $(this).prev().html(select_val);
  });

  // tabs
  $(".tab-cont").hide();
  $(".tab1").show();
  $(".tab ul li:first").addClass("tab__active");
  $(".tab li").click(function(){
    $(".tab li").removeClass("tab__active");
    $(this).addClass("tab__active");
    var act_tab = $(this).attr("data-tab");
    $(".tab-cont").hide();
    $(act_tab).show();
  });

  // fancybox gallery
  var width_test = $(".fancybox-test").width();
  if (width_test == 0) {}
  else {
    $('.js-fancy a').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',

          closeBtn  : true,
          padding: [30,40,30,40],
          helpers : {
            title : {
              type : 'inside'
            },
            buttons : {}
          },

          afterLoad : function() {
            this.title = '<span class="fancy-counter">' + '<b>' + (this.index + 1) + '</b>' + ' / ' + '<span>' + this.group.length + '</span>' + '</span>' + (this.title ? '' + '<strong>' + this.title : '' + '</strong>');
          }
    });
  }
  // get title
  $(".cont-gallery img").each(function(){
    var title = $(this).parent().attr("title") || $(this).attr("title");
    $(this).next().text(title);
  });
  var img_caption = $(".cont-gallery a:first").attr("title");
  $(".cont-gallery span:first").text(img_caption);

});