$(document).ready(function() {
  $("header").load("html-snippets/navbar.html", function() {
    var navHeight = document.getElementById("navbar").offsetHeight;
    console.log("Nav: " + navHeight);
    $("#page-depressant").css("height", "" + (navHeight + 22));
  });


  var $window = $(window);
  var width = $window.width();
  var height = $window.height();

  setInterval(function () {
      if ((width != $window.width()) || (height != $window.height())) {
          width = $window.width();
          height = $window.height();

          var navHeight = document.getElementById("navbar").offsetHeight;
          console.log("Nav: " + navHeight);
          $("#page-depressant").css("height", "" + navHeight);
      }
  }, 300);
});
