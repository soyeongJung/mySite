// main.js

// slide_banner_02.js

(function($) {

// step_01 ======================================================= 
// 변수지정
var bannerBox = $('#bannerBox');
// banner 이미지 영역
var bannerWrap = bannerBox.find('.banner_wrap');
var bannerLi = bannerWrap.find('li');
// 인디케이터 이미지 영역터
var indi = bannerBox.find('.indicator');
var indiLi = indi.find('li');
var indiA = indiLi.find('a');
var indiSpan = indiA.find('span');
var indiP = indi.find('p');
var indiNow = indiP.find('.now');
var indiTotal = indiP.find('.total');
// 좌, 우 버튼영역
var btn = $('.btn');
var lbtn = $('.lbtn');
var rbtn = $('.rbtn');
// 자동슬라이드에 대한 변수 지정
var myAutoSlide, startSlide, stopSlide;
var timed = 3000;

// ------------------------------------------------------------------
var myTab = function(i) {
bannerLi.find('a').attr('tabindex', '-1');
bannerLi.eq(i).find('a').attr('tabindex', '0');
};
myTab(0);
var bannerSlideI = function(i) {
  if(i < 0){
    // myIndex = 0; // 
    i = bannerLi.length-1; // 무한으로 돌기
  }
  // if(myIndex > bannerLi.length-1){
  if(i >= bannerLi.length){
    i = 0;
  }
  console.log(i);

  indiLi.removeClass('focus');
  indiSpan.removeClass('selector');
  indiLi.eq(i).addClass('focus');
  indiLi.eq(i).find('span').addClass('selector');

  bannerLi.eq(i).prevAll().fadeOut();
  bannerLi.eq(i).fadeIn();
  bannerLi.eq(i).nextAll().fadeIn();
  indiLi.eq(i).find('span').prevAll().fadeOut();
  indiLi.eq(i).find('span').fadeIn();
  indiLi.eq(i).find('span').nextAll().fadeIn();

  myTab(i);
  indiNow.text(i+1);

  myIndex = i;
  return myIndex;
}; // bannerSlideI();

// indicator 배너갯수 파악(배너 숫자표기)
indiTotal.text('1');
indiTotal.text(bannerLi.length);

// - 1. 인디케이터 클릭시 fade효과
// .첫인디케이트, (.focus)
indiLi.eq(0).addClass('focus');

var myIndex = 0;

indiLi.on('click', ['a'], function(e) {
  e.preventDefault();
  var _this = $(this);
  myIndex = _this.index();

bannerSlideI(myIndex);
});

btn.find('button').on('click', function(e) {
  e.preventDefault();
  var _this = $(this);

  if(_this[0] == lbtn[0]){
    // 왼쪽 버튼 클릭시 이전 이미지 나타내게 만들기
    myIndex--;
  }else/*(_this[0] == rbtn[0])*/{
    // 왼쪽 버튼 클릭시 이전 이미지 나타내게 만들기
    myIndex++;
  }
  
  console.log(myIndex);

  bannerSlideI(myIndex);
});

startSlide = function() {
  myAutoSlide = setInterval(function() { 
    rbtn.trigger('click'); 
  }, timed); 
};
stopSlide = function() { clearInterval(myAutoSlide); };

startSlide();

bannerBox.on({'mouseenter':stopSlide, 'mouseleave': startSlide});

bannerBox.find('a').on('focus', function() { stopSlide() });
bannerBox.find('button').on('focus', function() { stopSlide() });

bannerBox.find('a').eq(-1).on('blur', function() { startSlide() });

// resumeBtn
  var resumeBtn = $('.resume_btn');
  var openBtn = $('.open_btn');
  var resumeBox = $('.resume_box');
  var resume = $('.resume');
  // var headBox = $('#headBox');
  // var headStyleAttr = headStyle.attr('style');
  var bodyW = $('body').width();
  var bodyH = $('body').height();

  $('head').append('<style></style>');
  $('head>style').text('.resume_box{transform:translateX(' + bodyW + 'px)}');

  resumeBox.css({ transition:'all ' + timed/5 + 'ms ease' , width:bodyW, height:bodyH, position:'fixed', zIndex:2000, overflowY:'auto', top:'70px', left:0, backgroundColor:'#fff', display:'block'});

  var resumeBoxW = resumeBox.width();

  resume.css({width:resumeBoxW, height:resumeBoxW/4*3}); // 1200*900

  var active = function() { $('.avtive').css({transform:'translate(0)'}); };

  openBtn.on('click', function(e) {
    e.preventDefault();
    
    var cnbtr = resumeBox.hasClass('active');
    // console.log(cnbtr);
    if(!cnbtr) {
      resumeBox.addClass('active');
      openBtn.addClass('active');
      resumeBox.css({transform:'translate(0)'});
      active();
    }else {
      resumeBox.removeClass('active');
      openBtn.removeClass('active');
      resumeBox.css({transform:'translateX(' + bodyW + 'px)'});
    }
  }); // openBtn.on('click');

    $(window).on('resize',function(e) {
      location.reload();
    });
    
})(this.jQuery);






































