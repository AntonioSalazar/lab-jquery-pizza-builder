// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  // $(".green-pepper").hide();
  // $(".mushroom").hide();
  // $(".pep").hide();

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").hide()
    $(".btn-green-peppers").removeClass("active");
    $("aside > ul > li:eq(2)").hide();
  })

  $(".btn-mushrooms").click(function(){
    $(".mushroom").hide()
    $(".btn-mushrooms").removeClass("active");
    $("aside > ul > li:eq(1)").hide();
  })

  $(".btn-pepperonni").click(function(){
    $(".pep").hide()
    $(".btn-pepperonni").removeClass("active");
    $("aside > ul > li:eq(0)").hide();
  })

  $(".btn-sauce").removeClass("active");

  $(".btn-crust").removeClass("active");

  $(".btn-sauce").click(function(){
    $(".btn-sauce").addClass("active")
  })

  $(".btn-crust").click(function(){
    $(".btn-crust").addClass("active")
  })

  $("aside > ul > li:gt(2)").hide();

});



