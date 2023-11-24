$(function () {


  $(window).scroll(function(){
    curr = $(this).scrollTop()
    target = $('.header .top').offset().top
      html = `현재스크롤값: ${curr} <br>타겟의 스크롤값: ${target}`
    if(curr >= 1){
      $('.top-banner').addClass('on')
      $('.header .top').addClass('on')
      $('.header').css({
        "background-color": "#fff",
        top: 0,
        height: "auto",
        overflow: "auto"
      })
    }else{
      $('.top-banner').removeClass('on')
      $('.header .top').removeClass('on')
      $('.header').css({
        "background-color": "transparent",
        top: "40px",
        height: "50px",
        overflow: "hidden"
      })
    }
  })


  $('.header .top .burgerBtn').click(function(){
    $('.gnb').addClass('isAct')
    $('.dimmed').show()

    // 왜 이러는걸까...
    $('.dimmed').on('scroll touchmove mousewheel', e => {
        e.preventDefault();
        e.stopPropagation();
    });
  })


  $('.header .top .search').click(function () {
    $('.back-modal').addClass("on")
  })

  $(".close_search").click(function(){
     $('.back-modal').removeClass("on")
  })

  $(document).click(function(e){
    if($('.gnb').has(e.target).length === 0 &&e.target.className === 'dimmed'){
      $('.gnb').removeClass('isAct')
      $('.dimmed').hide()
    } 
  })
  $('.menu-close-btn').click(function(){
    $('.gnb').removeClass('isAct')
    $('.dimmed').hide()
  })


  $(".header .bottom .all-btn").click(function(){
    if($(this).hasClass('on')){
      $(this).removeClass('on').siblings('.all-title').removeClass("on")
      $(".all-menu").stop().slideUp()
      $(".best-menu-list").removeClass("fade")
    }else{
      $(this).addClass('on').siblings('.all-title').addClass("on")
      $(".all-menu").stop().slideDown()
      $(".best-menu-list").addClass("fade")
    }
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




