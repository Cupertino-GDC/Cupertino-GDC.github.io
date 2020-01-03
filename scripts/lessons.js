$(document).ready(function() {
  $(".lesson-category").hide(0);
});



function goToSection(category)
{
  $(".lesson-category").hide();
  $(category).show();
}
