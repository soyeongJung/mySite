// process.js

(function($) {

  // resumeBtn
  var resumeBtn = $('.resume_btn');
  var openBtn = $('.open_btn');
  var resumeBox = $('.resume_box');
  var resume = $('.resume');
  // var headBox = $('#headBox');
  // var headStyleAttr = headStyle.attr('style');
  var bodyW = $('body').width();
  var bodyH = $('body').height();
  var timed = 3000;

  $('head').append('<style></style>');
  $('head>style').text('.resume_box{transform:translateX(' + bodyW + 'px)}');

  resumeBox.css({ transition:'all ' + timed/3 + 'ms ease' , width:bodyW, height:bodyH, position:'fixed', zIndex:2000, overflowY:'auto', top:'70px', left:0, backgroundColor:'#fff', display:'block'});

  var resumeBoxW = resumeBox.width();

  resume.css({width:resumeBoxW, height:resumeBoxW/4*3}); // 1200*900

  var active = function() { $('.avtive').css({transform:'translate(0)'}); };

  openBtn.on('click', function(e) {
    e.preventDefault();
    
    var cnbtr = resumeBox.hasClass('active');
    // console.log(cnbtr);
    if(!cnbtr) {
      resumeBox.addClass('active');
      // footBox.addClass('active');
      openBtn.addClass('active');
      resumeBox.css({transform:'translate(0)'});
      active();
    }else {
      resumeBox.removeClass('active');
      // footBox.removeClass('active');
      openBtn.removeClass('active');
      resumeBox.css({transform:'translateX(' + bodyW + 'px)'});
    }
  }); // openBtn.on('click');

  var gnbLiA = $('li').find('a');
  // var myFocus = 'focus';
  gnbLiA.on('focus', function(e) {
    e.preventDefault();
    $(this).addClass('focus');
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:400});
    $(this).siblings('div').css({width:130+'%', zIndex:600, left:-15+'%'});
  });

  gnbLiA.parent().siblings('li').eq(0).children('a').on('focus', function(e) {
    e.preventDefault();
    $(this).addClass('focus');
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:400});
    $(this).siblings('div').css({width:130+'%', zIndex:500, left:0});
  });

  gnbLiA.parent().siblings('li').eq(2).children('a').on('focus', function(e) {
    e.preventDefault();
    $(this).addClass('focus');
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:400});
    $(this).siblings('div').css({width:130+'%', zIndex:700, left:-30+'%'});
  });

  gnbLiA.on('blur', function() {
    $(this).removeClass('focus');
    $(this).parent().removeAttr('style');
    $(this).siblings('div').removeAttr('style');
  });  // bulr : 포커스가 없는것

  gnbLiA.on('mouseenter', function() {
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:400});
    $(this).siblings('div').css({width:130+'%', zIndex:500, left:-15+'%'});
  });

  gnbLiA.parent().siblings('li').eq(0).children('a').on('mouseenter', function() {
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:300});
    $(this).siblings('div').css({width:130+'%', zIndex:400, left:0});
  });

  gnbLiA.parent().siblings('li').eq(2).children('a').on('mouseenter', function() {
    $(this).parent().css({zIndex:800});
    $(this).parent().siblings().css({zIndex:400});
    $(this).siblings('div').css({width:130+'%', zIndex:600, left:-30+'%'});
  });

  gnbLiA.on('mouseleave', function() {
    $(this).siblings('div').removeAttr('style');
  });

  $(window).on('resize',function(e) {
      location.reload();
    });

})(this.jQuery);




























