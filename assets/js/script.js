



$(function(){
  'use strict';
// Sticky Menu Start===========================
$(window).scroll(function(){
  var sticky = $(this).scrollTop();
  if(sticky > 100){
    $("#navbar, .sm_menu").addClass("nav_sticky");
    $(".back_to_top").addClass("back_btn_show");
  }
  else{
    $("#navbar, .sm_menu").removeClass("nav_sticky");
    $(".back_to_top").removeClass("back_btn_show");
  }
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling>1145){
      $('.pg_wait_wrap').addClass('pg_wait_sticky')
  }
  else{
      $('.pg_wait_wrap').removeClass('pg_wait_sticky')
  }
})

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()
    if (scrolling > 400) {
      $('.sticky_adder_single').addClass('category-content_sticky')
    }
    else {
      $('.sticky_adder_single').removeClass('category-content_sticky')
    }
  });
  $(window).scroll(function () {
  var scrolling = $(this).scrollTop()
  if(scrolling>1270){
      $('.sticky_adder_latest').addClass('category-content_sticky')
  }
  else{
      $('.sticky_adder_latest').removeClass('category-content_sticky')
  }
})

// Sticky Menu End===============================

// OffCanvas Menu=================================
var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
// OffCanvas Menu=================================


// Common Menu Slider Start======================
$(".menu_slider").slick({
  dots:false,
  arrows:false,
  autoplay:false,
  focusOnSelect:true,
  slidesToShow:2,
  slidesToScroll:1,
  centerMode: true,
  centerPaddingRight: '38px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
})
$(".course_menu_slider").slick({
  dots:false,
  arrows:false,
  autoplay:false,
  focusOnSelect:true,
  slidesToShow:2,
  slidesToScroll:1,
  centerMode: true,
  centerPaddingRight: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})
// Common Menu Slider End===============================


// Banner Video Start===================================
$('.venobox').venobox();

// Banner Video End=====================================


// Course top Slider Start==============================
    $('.course_slider_top').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:'<i class="fa fa-angle-left topPrevarrow"></i>',
        nextArrow:'<i class="fa fa-angle-right topNextarrow"></i>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
// Course top Slider End=================================


// Alamin Popular Courses Slider Start===================
$(".course_mix_btn").slick({
  autoplay:false,
  focusOnSelect: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',

  asNavFor:".course_body_slider",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
      }
    },
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
      }
    }
  ]
});

$(".course_body_slider").slick({
  centerMode:false,
  centerPadding:"0",
  draggable: false,
  fade: true,
  cssEase: 'linear',
  autoplay:false,
  focusOnSelect: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  asNavFor:".course_mix_btn",
})


$(".course_category_slider").slick({
  centerMode: false,
  autoplay:false,
  focusOnSelect:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows:true,
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },

    {
      breakpoint: 576,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    },
  ]
});
// only For Instructor and Teacher Page Course Slider Start
$(".instructor_teacher_page_course_slide").slick({
  autoplay:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical:true,
        draggable:false,
        slidesToShow: "all"
      }
    }
  ]
});
// only For Instructor and Teacher Page Course Slider End
// Alamin Popular Courses Slider End===================



// Story Slider Start==================================
$(".story_text_slider").slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        // arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
// Story Slider End===================================



// Feedback_1 Slider Start=============================
$(".feedback_1_slider").slick({
  autoplay:false,
  slidesToShow:2,
  slidesToScroll:1,
  arrows:true,
  dots:false,
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// Feedback_1 Slider End=============================


// Feedback_2 Slider Start===========================
$(".feedback_2_slider").slick({
  autoplay:false,
  slidesToShow:2,
  slidesToScroll:1,
  arrows:true,
  dots:false,
  prevArrow:'<i class="fa fa-angle-left studentPrevArrow"></i>',
  nextArrow:'<i class="fa fa-angle-right studentNextArrow"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// Feedback_2 Slider End===========================


// Blog Slider Start=============================
$(".blog_slider").slick({
  autoplay:false,
  slidesToShow:3,
  slidesToScroll:1,
  arrows:true,
  dots:false,
  prevArrow:'<i class="fa fa-angle-left blogPrevArrow"></i>',
  nextArrow:'<i class="fa fa-angle-right blogNextArrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})
// Blog Slider End=============================



// pg-Project Slider Start========================
$(".pgp_slider").slick({
  autoplay:true,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:false,
  dots:true,
})
// pg-Project Slider End=========================

$(".milestone_slider").slick({
  centerMode: true,
  centerPadding: '0px',
  autoplay:false,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:true,
  dots:false,
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow"></i>',
})


// pg-Project Slider Start========================
$(".pg_succsess_img_slider").slick({
  autoplay:false,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:true,
  dots:true,
  prevArrow:'<i class="fa fa-angle-left angle-left"></i>',
  nextArrow:'<i class="fa fa-angle-right angle-right"></i>',
})
// pg-Project Slider End========================
});

$(document).ready(function(){
  $(".course_single_btn").click(function(){
    $(".course_single_btn").addClass("active");
  });
});



// Company Area Strat ============
function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();
// Company Area End ============


// Success Page Area Strat==================
function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[success-data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[success-data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('success-data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('success-data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();
// Success Page Area End=============

// Office and Training Area Start=========
$(".office_and_traning_slider_for").slick({
  autoplay:false,
  slidesToShow:1,
  slidesToScroll:1,
  // fade:true,
  arrows:false,
  dots:false,
  asNavFor:".office_and_traning_slider"
})
$(".office_and_traning_slider").slick({
  autoplay:false,
  slidesToShow:9,
  slidesToScroll:1,
  // fade:true,
  focusOnSelect:true,
  arrows:true,
  dots:false,
  asNavFor:".office_and_traning_slider_for",
  prevArrow:'<i class="fa fa-angle-left trainingPrevArrow"></i>',
  nextArrow:'<i class="fa fa-angle-right trainingNextArrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }
  ]
})
// Office and Training Area Start=========

// Lelest Post JS
$(".letest_post_slider").slick({
  slidesToShow:3,
  slidesToscroll:1,
  autoplay:false,
  arrows:true,
  dots:false,
  infinite: true,
  speed: 300,
  centerMode:true,
  centerPadding: "0",
  prevArrow:'<i class="fa fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa fa-angle-right nextarrow "></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });



  });

//Bangla Counter Up Start================================
// (function ($) {
//   var banglaNumbers = {
//     0: "০",
//     1: "১",
//     2: "২",
//     3: "৩",
//     4: "৪",
//     5: "৫",
//     6: "৬",
//     7: "৭",
//     8: "৮",
//     9: "৯"
//   };

//   String.prototype.conveterEngToBng = function () {
//     let retStr = this;
//     for (let x in banglaNumbers) {
//       retStr = retStr.replace(new RegExp(x, "g"), banglaNumbers[x]);
//     }
//     return retStr;
//   };
//   $.fn.counterUp = function (options) {
//     var settings = $.extend(
//       {
//         time: 400,
//         delay: 10
//       },
//       options
//     );

//     return this.each(function () {
//       var $this = $(this);
//       var $settings = settings;

//       var counterUpper = function () {
//         var nums = [];
//         var divisions = $settings.time / $settings.delay;
//         var num = $this.text();
//         for (var i = divisions; i >= 1; i--) {
//           var newNum = parseInt((num / divisions) * i);
//           nums.unshift(newNum.toString().conveterEngToBng());
//         }

//         $this.data("counterup-nums", nums);
//         $this.text("0");
//         var f = function () {
//           $this.text($this.data("counterup-nums").shift());
//           if ($this.data("counterup-nums").length) {
//             setTimeout($this.data("counterup-func"), $settings.delay);
//           } else {
//             delete $this.data("counterup-nums");
//             $this.data("counterup-nums", null);
//             $this.data("counterup-func", null);
//           }
//         };
//         $this.data("counterup-func", f);
//         setTimeout($this.data("counterup-func"), $settings.delay);
//       };
//       $this.waypoint(counterUpper, { offset: "100%", triggerOnce: true });
//     });
//   };
// })(jQuery);
// $(".counter").counterUp({
//   delay: 10,
//   time: 2000
// });
// Bangla Counter Up End================================

// Bangla Counter Down Start============================
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
// var banglaNumbers = {
//     0: "০",
//     1: "১",
//     2: "২",
//     3: "৩",
//     4: "৪",
//     5: "৫",
//     6: "৬",
//     7: "৭",
//     8: "৮",
//     9: "৯"
//   };

//   String.prototype.conveterEngToBng = function () {
//     let retStr = this;
//     for (let x in banglaNumbers) {
//       retStr = retStr.replace(new RegExp(x, "g"), banglaNumbers[x]);
//     }
//     return retStr;
//   };
// var x = setInterval(function() {

//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// edit here for render
  // document.getElementById("day").innerHTML = days.toString().conveterEngToBng() + " দিন "

  // document.getElementById("hour").innerHTML = hours.toString().conveterEngToBng() + " ঘণ্টা "

  // document.getElementById("min").innerHTML = minutes.toString().conveterEngToBng() + " মিনিট "

  // document.getElementById("sec").innerHTML = seconds.toString().conveterEngToBng() + " সেকেন্ড "

// ends of render eidit
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("expiremsg").innerHTML = "EXPIRED";
  // }
//}, 1000);
// Bangla Counter Down End=====================
