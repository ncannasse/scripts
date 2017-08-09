function setHandlers() {
  if( typeof($) == undefined ) return;
  var it =$('.pulse_item').not(".setup");
  it.addClass("setup");
  it.contextmenu(function(e) {
        e.preventDefault();
        $(this).find('.pulse_menu_btn').click();
  });
};
setInterval(setHandlers,500);

