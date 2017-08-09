function setHandlers() {
  if( typeof($) == undefined ) return;
  
  
  // right click to open popup menu
  var it =$('.pulse_item').not(".setup");
  it.addClass("setup");  
  it.contextmenu(function(e) {
        e.preventDefault();
        $(this).find('.pulse_menu_btn').click();
  });
  
  // disable overlay gray when over right menu
  $(".pulse-overlay").css("background","transparent");
  
};
setInterval(setHandlers,500);

