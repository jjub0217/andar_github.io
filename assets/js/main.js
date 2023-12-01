$(function () {


  $(window).scroll(function(){
    curr = $(this).scrollTop()
    if(curr > 0){
      $(".header").addClass("scrollTop")
    }else{
      $(".header").removeClass('scrollTop')
    }
  })


  // 어떠한 이벤트가 발생했을때 새로고침시, 해당 이벤트가 그대로 발생되어있게끔 강제로 해주는 기능이 trigger
  $(window).trigger("scroll")


  $(".header .bottom .all-btn").click(function(){
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
    console.log(tabId);

    $(this).addClass('on').siblings().removeClass('on');
    $(tabId).addClass('on').siblings().removeClass('on');
  })


  /**
   * @gnb영역내에서서브리스트보여지는기능
   * 
   */
  $('.nav-item .title').click(function () {
    $(this).toggleClass("on").siblings('.sub-list').stop().slideToggle()
  })


  $(".review").click(function(){
    console.log("리뷰");
  })



  const adSlide = new Swiper('.section-ad .swiper',{
    effect: "fade",
    autoplay:{
      delay: 4000,
    },
    loop: true,
  })
  
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

  const regginsSlide = new Swiper('.section-reggings .swiper',{
      slidesPerView: "auto",
      spaceBetween: 10,
  })
  const bratopSlide = new Swiper('.section-bratop .swiper',{
      slidesPerView: "auto",
      spaceBetween: 10,
  })
  const setSlide = new Swiper('.section-set .swiper',{
    slidesPerView: "auto",
    spaceBetween: 10,
  })

})




