// burger menu mobile version
let mobileMenu = document.querySelector(".menu-mobile-burger");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu")
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})

// Add slider slick
$(".slider-block").slick({
    // autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
})