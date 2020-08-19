$(document).ready(function() {
  $("header").load("html-snippets/navbar.html", function() {
    $("a[href='" + location.pathname.substring(1) + "']").addClass("current");

    var navHeight = document.getElementById("navbar").offsetHeight;
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
          $("#page-depressant").css("height", "" + navHeight);
      }
  }, 300);
});
