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



  $('.nav-item .title').click(function (params) {
    if($(this).hasClass('on')){
      $(this).removeClass('on').siblings('.sub-list').stop().slideUp()
    }else{
      $(this).addClass('on').siblings('.sub-list').stop().slideDown()
    }
  })

  $('.service-item .title').click(function (params) {
    if($(this).hasClass('on')){
      $(this).removeClass('on').siblings('.sub-list').stop().slideUp()
    }else{
      $(this).addClass('on').siblings('.sub-list').stop().slideDown()
    }
  })




  const iceItem = `<img src="./assets/images/ice-item.png" class="ice" alt="여름용 쿨상품">`
  $('.best-item.ice-item .link-item.item').prepend(iceItem)

  const newItem = `<img src="./assets/images/ice-new-item.png" class="new">`
  $('.best-item.new-ice-item .link-item.item').prepend(newItem)





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




