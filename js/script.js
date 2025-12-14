
document.addEventListener('click', function(e){
  const link = e.target.closest('a[href="#"]');
  if (link) e.preventDefault();
});

function fix(){
   if (window.matchMedia("(max-width: 1400px)").matches) return;
  const scrollPos = window.scrollY;
  const bgBoxes = document.querySelectorAll(".content .inner .list li p");

  if (!bgBoxes.length) return;

  bgBoxes.forEach(box => box.classList.remove('on'));

  if (scrollPos > 2800) {
    bgBoxes[3]?.classList.add('on');
  } else if (scrollPos > 2300) {
    bgBoxes[2]?.classList.add('on');
  } else if (scrollPos > 1787) {
    bgBoxes[1]?.classList.add('on');
  } else if (scrollPos > 1180) {
    bgBoxes[0]?.classList.add('on');
  }
}


window.addEventListener('scroll', () => {
  // console.log(window.scrollY); // 스크롤값 확인용
  fix();                       // 동시에 fix 실행
});



gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".profile",
  start: "top top",
  end: "bottom top",
  toggleClass: {
    targets: ".header, .header .header-inner .logo img, .header .header-inner .open-icon",
    className: "black-header"
  }
});

ScrollTrigger.create({
  trigger: ".favorites",
  start: "top top",
  end: "bottom",
  toggleClass: {
    targets: ".header, .header .header-inner .logo img,  .header-inner .open-icon",
    className: "black-header",
    
  }
});
ScrollTrigger.create({
  trigger: ".community",
  start: "top top",
  end: "bottom",
  toggleClass: {
    targets: ".header,.header .header-inner .logo img, .header .header-inner .open-icon",
    className: "black-header"
  }
});



ScrollTrigger.create({
  trigger: ".profile",
  start: "top 80%",
  end: "bottom 30%",
  toggleClass: {
    targets: ".profile .textBox, .profile .btn",
    className: "motion"
  }
});

ScrollTrigger.create({
  trigger: ".content",
  start: "top 70%",
  end: "bottom 30%",
  toggleClass: {
    targets: ".content .textBox, .content .btn",
    className: "motion"
  }
});


ScrollTrigger.create({
  trigger: ".favorites",
  start: "top 80%",
  end: "bottom 30%",  
  toggleClass: {
    targets: ".favorites .inner .imgBox .img, .favorites .inner .textBox, .favorites .inner .textBox .btn",
    className: "motion"
  }
});

ScrollTrigger.create({
  trigger: ".community-sub",
  start: "top 50%",
  end: "bottom 10%",   
  toggleClass: {
    targets: ".community-sub .inner .imgBox, .community-sub .inner .textBox, .community-sub .inner .textBox .btn",
    className: "motion"
  }
});

$(function(){
      Splitting();  
    });

const openBtn = document.getElementById('openBtn');
const closeBtn = document.querySelector('#closeBtn a');  
const gnb = document.querySelector('.header .header-inner .gnb');


openBtn.addEventListener("click", function(e){
  e.preventDefault(); 
  gnb.classList.add('on');
});


closeBtn.addEventListener("click", function(e){
  e.preventDefault();  
  gnb.classList.remove('on');
});




$(document).ready(function(){
  $('.main-item').click(function(e){
    
    e.stopPropagation();
  
    const isOpen = $(this).find('.sub-item').hasClass('on');

    $('.sub-item').removeClass('on');

    if(!isOpen){
      $(this).find('.sub-item').addClass('on');
    }

  });
  $('.mainMenu').click(function(e){
    e.preventDefault();
});
});