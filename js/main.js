$(function faqStyles() {
  $("#accordion").accordion();
  $(".accordion-header")
    .css("background-color", " #fffcf7")
    .css("color", " #141a01")
    .css("border-color", " #141a01")
    .css("font-weight", "600")
    .css("font-style", "normal")
    .css("font-size", "1.2rem")
    .css("padding", "1.25rem")
    .css("border-bottom", "1px solid #141a01")
    .css("border-radius", "0px")
    .css("border-top", "0px")
    .css("border-left", "0px")
    .css("border-right", "0px");

  $(".ui-icon").css("background-image", "none").css("text-indent", "0px");

  $(".ui-accordion-header-icon")
    .html("♥︎")
    .css("height", "auto")
    .css("width", "auto");

  $(".p-accordion")
    .css("font-family", "Nunito, sans-serif")
    .css("font-style", "normal")
    .css("font-size", "1.2rem");

  $(".ui-widget-content")
    .css("background-color", " #fffcf7")
    .css("color", " #141a01")
    .css("border-color", " #fffcf7")
    .css("font-weight", "600")
    .css("font-style", "normal");
});
