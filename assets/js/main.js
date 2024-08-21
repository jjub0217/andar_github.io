function andarUI(){

  window.addEventListener("scroll", () => {
    document
      .querySelector(".header")
      .classList.toggle("scrollTop", window.scrollY > 0);
  });

  window.dispatchEvent(new Event("scroll"));

  const allMenuBtn = document.querySelector(".all_menu_btn");
  const menuWrap = document.querySelector(".menu_wrap");
  const allMenuArea = document.querySelector(".all_menu_area");
  const searchBtn = document.querySelector(".search_btn");
  const body = document.querySelector("body");
  const navItemTitles = document.querySelectorAll(".nav_item_title");
  const burgerBtn = document.querySelector(".burger_btn");
  const dimmed = document.querySelector(".dimmed");
  const tabItems = document.querySelectorAll(".tab_item_title");
  const tabContents = document.querySelectorAll(".section_best .product_list");
  const linkItem = document.querySelectorAll(".link_item");
  const menuCloseButtons = document.querySelectorAll(".gnb_close_btn, .dimmed");

  allMenuBtn.onclick = (e) => {
    const isPressed = e.target.getAttribute("aria-pressed") === "true";
    e.target.setAttribute("aria-pressed", isPressed ? "false" : "true");
    e.target.setAttribute("aria-expanded", isPressed ? "false" : "true");
    menuWrap.classList.toggle("is_show", !isPressed);
    allMenuArea.style.height = isPressed
      ? "0"
      : `${allMenuArea.scrollHeight}px`;
  };

  searchBtn.onclick = (e) => {
    const targetExpanded = e.currentTarget.ariaExpanded === "true";
    e.currentTarget.ariaExpanded = !targetExpanded;
    e.currentTarget.ariaPressed = !targetExpanded;
    body.classList.toggle("scroll_hide");
    const searchAreaId = e.currentTarget.getAttribute("aria-controls");
    searchAreaControl(searchAreaId);
  };


  const searchAreaControl = (id) => {
    const searchArea = document.getElementById(id);
    searchArea.classList.toggle("is_show");
  };


  navItemTitles.forEach((button) => {
    button.onclick = (e) => {
      console.log(e);
      const isPressed = e.target.getAttribute("aria-pressed") === "true";
      const targetSubList = e.target.nextElementSibling;
      e.target.setAttribute("aria-pressed", isPressed ? "false" : "true");
      e.target.setAttribute("aria-expanded", isPressed ? "false" : "true");
      targetSubList.style.height = isPressed
        ? "0"
        // : `${targetSubList.clientY}px`;
        : `${targetSubList.scrollHeight}px`;
    };
  });


  burgerBtn.onclick = () => toggleGnb(true);

  menuCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleGnb(false);
    });
  });


  const toggleGnb = (expand) => {
    const gnbId = burgerBtn.getAttribute("aria-controls");
    const gnb = document.getElementById(gnbId);
    document.body.classList.toggle("scroll_hide", expand);
    burgerBtn.setAttribute("aria-expanded", expand);
    dimmed.classList.toggle("is_active", expand);
    gnb.classList.toggle("is_show", expand);
  };


  tabItems.forEach((tabItem) => {
    tabItem.onclick = (e) => {
      [...tabItems].forEach((button) => {
        const isTarget = e.target === button;
        const targetControlId = e.target.getAttribute("aria-controls");
        if (isTarget) {
          tabContentMove(targetControlId);
          e.target.setAttribute("aria-selected", "true");
        } else {
          button.setAttribute("aria-selected", "false");
        }
      });
    };
  });


  const tabContentMove = (id) => {
    [...tabContents].forEach((tabContent) => {
      const targetTabItemCardContent = document.getElementById(id);
      const isTarget = targetTabItemCardContent === tabContent;
      isTarget
        ? targetTabItemCardContent.classList.add("is_show")
        : tabContent.classList.remove("is_show");
    });
  };



  linkItem.forEach((item) => {
    item.onclick = (e) => {
      e.preventDefault();
      console.log(e.target);
    };
  });


  const createSwiper = (selector, options) => new Swiper(selector, options);

  createSwiper(".ad_area .swiper", {
    effect: "fade",
    autoplay: { delay: 4000 },
    loop: true,
  });

  createSwiper(".section_visual .swiper", {
    effect: "fade",
    navigation: { nextEl: ".next", prevEl: ".prev" },
    pagination: { el: ".pagination" },
    autoplay: { delay: 5000 },
    loop: true,
  });

  createSwiper(".banner_area .swiper", {
    pagination: { el: ".pagination", type: "fraction" },
    autoplay: { delay: 4000 },
    loop: true,
  });

  createSwiper(".section_product .swiper", {
    slidesPerView: 2.2,
    spaceBetween: 10,
  });
}

window.addEventListener("DOMContentLoaded", andarUI);


