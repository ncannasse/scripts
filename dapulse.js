function setHandlers() {
  var it =$('.pulse_item').not(".setup");
  it.addClass("setup");
  it.contextmenu(function(e) {
        e.preventDefault();
        $(this).find('.pulse_menu_btn').click();
  });
};
setTimeout(setHandlers,1000);

