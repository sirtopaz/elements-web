// JavaScript Document
  $(document).foundation();
  
  $(document).ready( function () {
    $("#screen").on("click", function() { $("body").removeClass("screened"); });
    $("#elementsLogo").on("click", function() {window.location = "index.html";});
    $(".products-link").on("click" , function() { window.location ="product-gin.html";});
    $(".cocktails-link").on("click", function() { window.location = "cocktails.html";});
  });