// process.js

(function($) {

  var gnbLiA = $('li').find('a');
  // var myFocus = 'focus';
  gnbLiA.on('focus', function() {
    $(this).addClass('focus');
    $(this).parent().css({zIndex:300});
  });

  gnbLiA.on('blur', function() {
    $(this).removeClass('focus');
    $(this).parent().removeAttr('style');
  });  // bulr : 포커스가 없는것

})(this.jQuery);