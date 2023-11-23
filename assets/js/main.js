$(function () {


  $(window).scroll(function(){
    curr = $(this).scrollTop()
    target = $('.top-menu').offset().top
      html = `현재스크롤값: ${curr} <br>타겟의 스크롤값: ${target}`
      console.log(html);
    if(curr >= 1){
      $('.top-banner').addClass('on')
      $('.top-menu').addClass('on')
      $('.header').css({
        "background-color": "#fff",
        top: 0,
        height: "auto",
        overflow: "auto"
      })
    }else{
      $('.top-banner').removeClass('on')
      $('.top-menu').removeClass('on')
      $('.header').css({
        "background-color": "transparent",
        top: "40px",
        height: "50px",
        overflow: "hidden"
      })
    }
  })


  $('.top-menu .menu').click(function(){
    $('.gnb').addClass('isAct')
    $('.dimmed').show()
    // 왜 이러는걸까...
    $('.dimmed').on('scroll touchmove mousewheel', e => {
        e.preventDefault();
        e.stopPropagation();
    });
  })
  $('.top-menu .search').click(function (params) {
    $('.back-modal').show()
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

  $('.best-menu').click(function (params) {
    const allMenu = 
    `<li>
      <a href="">테니스</a>
    </li>
    <li>
      <a href="">A.R.M</a>
    </li>
    <li>
      <a href="">요기니 요가복</a>
    </li>
    <li>
      <a href="">홈트용품&액세서리</a>
    </li>
    <li>
      <a href="">서스테이너블</a>
    </li>`
    if($(this).hasClass('on')){
      $('.best-menu').removeClass('on').children('.all-menu').stop().slideUp()
    }else{
        $('.best-menu').removeClass('on').children('.all-menu').stop().slideUp()
      $(this).addClass('on').children('.all-menu').stop().slideDown()
      $('.menu-list').append(allMenu)
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
    navigation : {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination :{
      el: '.pagination',
    },
    // autoplay:{
    // delay: 3000,
    // },
    // loop: true,
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




