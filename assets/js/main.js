$(function () {

  /**
   * @스크롤조금내리면bestmenu가나타나게하는기능
   * 
   */
  $(window).scroll(function(){
    curr = $(this).scrollTop()
    if(curr > 0){
      $(".header").addClass("scrollTop")
    }else{
      $(".header").removeClass('scrollTop')
    }
  })


  /**
   * @스크롤트리거
   * 어떠한 이벤트가 발생했을때 새로고침시, 해당 이벤트가 그대로 발생되어있게끔 강제로 해주는 기능이 trigger
   */
  // 
  $(window).trigger("scroll")


  /**
   * @스크롤조금내리면나타나는bestmenu에서전체menu를보기위한화살표버튼눌렀을때전체메뉴가나타나는기능
   * 
   */
  $(".header .bottom .all-btn").click(function(){
    $(this).toggleClass("on")
    $(".header .bottom").toggleClass("show")
    $(".header .bottom .all-menu").stop().slideToggle()
  })


  /**
   * @검색팝업
   * 
   */
  $('.header .top .search').click(function () {
    $('.back-modal').addClass("on")
  })
  $(".close_search").click(function(){
    $('.back-modal').removeClass("on")
  })



  /**
   * @gnb메뉴열기
   * 
   */
  $('.header .top .burgerBtn').click(function(){
    $('.gnb').addClass('isAct')
    $('.dimmed').show()
    $("body").addClass("scroll-hide")
  })
  /**
   * @gnb메뉴닫기
   * 
   */
  $('.menu-close-btn, .dimmed').click(function(){
    $('.gnb').removeClass('isAct')
    $('.dimmed').hide()
    $("body").removeClass("scroll-hide")
  })

  
  /**
   * @best섹션내의tab이동으로보여지는리스트다르게
   * 
   */
  $(".section-best .tab-area .tab-item").click(function(e){
    e.preventDefault()
    tabId = $(this).data('tab');

    $(this).addClass('on').siblings().removeClass('on');
    $(tabId).addClass('on').siblings().removeClass('on');
  })



  /**
   * @gnb영역내에서서브리스트보여지는기능
   * 
   */
  $('.nav-item .title').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on").siblings('.sub-list').stop().slideToggle()
  })


  /**
   * @swiper기능
   * 
   */
  const adSlide = new Swiper('.section-ad .swiper',{
    effect: "fade",
    autoplay:{
      delay: 4000,
    },
    loop: true,
  })
  

  /**
   * @swiper기능
   * 
   */
  const mainSlide = new Swiper('.section-visual .swiper',{
    effect: "fade",
    navigation : {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination :{
      el: '.pagination',
    },
    autoplay:{
      delay: 5000,
    },
    loop: true,
  } )


  /**
   * @swiper기능
   * 
   */
  const bannerSlide = new Swiper('.section-banner .swiper',{
    pagination: {
      el: ".pagination",
      type: "fraction",
    },
    autoplay:{
      delay: 4000,
    },
    loop: true,
  })
  

  /**
   * @swiper기능
   * 
   */
  const bestCateSlide = new Swiper('.section-bestCate .swiper',{
      slidesPerView: 2.2,
      spaceBetween: 10,
  })

})




