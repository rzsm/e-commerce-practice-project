// Set the date we're counting down to
var countDownDate = new Date("January 19, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML ='<div class="time-left"> <div id="day">'+ days + '</div>' +  '<div id="hours">'+ hours + '</div>'
  // + '<div id="minutes">'+ minutes + '</div>' + '<div id="seconds">'+ seconds + '</div> </div> <div class="written-time-left"> <div>روز</div> <div>ساعت</div> <div>دقیقه</div> <div>ثانیه</div></div>';
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
    '<div class="time-left"> <div id="day">'+ days + '</div>' +  '<div id="hours">'+ hours + '</div>'
    + '<div id="minutes">'+ minutes + '</div>' + '<div id="seconds">'+ seconds + '</div> </div> <div class="written-time-left"> <div>روز</div> <div>ساعت</div> <div>دقیقه</div> <div>ثانیه</div></div>';
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    // var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      z[i].innerHTML = "";
    }

    // document.getElementById("after-expire").setAttribute("id","offer-expire-text");
    // var g = document.getElementsByClassName("after-expire");
    // for (var i = 0; i < z.length; i++) {
    //   g[i].classList.add("offer-expire-text");
    // }

    // document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    var d = document.getElementsByClassName("offer-expire-text");
    for (var i = 0; i < d.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    }

    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
     }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl:true,
    items: 5,
    loop: true,
    margin: 0,
    nav:true,
    dots:false,
    center: true,
    // autoplay: true,
    slideBy:3,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:3,
            nav:true,
            center: false,
        },
        1200:{
          items:5,
          nav:true,
        
      }
    }
  });
});


