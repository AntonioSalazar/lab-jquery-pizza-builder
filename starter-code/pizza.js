// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  
  // $(".green-pepper").hide();
  // $(".mushroom").hide();
  // $(".pep").hide();

  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    $(".btn-green-peppers").toggleClass("active");
    $("aside > ul > li:eq(2)").toggle();
  })

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    $(".btn-mushrooms").toggleClass("active");
    $("aside > ul > li:eq(1)").toggle();
  })

  $(".btn-pepperonni").click(function(){
    $(".pep").toggle()
    $(".btn-pepperonni").toggleClass("active");
    $("aside > ul > li:eq(0)").toggle();
  })


  $(".btn-sauce").click(function(){
    $(".btn-sauce").toggleClass("active")
    $(".sauce").toggle()
    $("aside > ul > li:eq(3)").toggle();

  })

  $(".btn-crust").click(function(){
    $(".btn-crust").toggleClass("active")
    $(".cheese").toggle()
    $("aside > ul > li:eq(4)").toggle();
  })



   $(".btn-green-peppers").toggleClass("active");
   $(".green-pepper").hide()
   $(".btn-mushrooms").removeClass("active");
   $(".mushroom").toggle()
   $(".btn-pepperonni").removeClass("active");
   $(".pep").toggle()


     
  $("aside > ul > li:lt(3)").hide();

}); 


