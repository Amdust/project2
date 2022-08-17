new Swiper('.slider__container', {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  
  autoplay:{
    delay: 1500,
    stopOnLastSlide:false,
    disableOnIteraction:false,
  },
  speed:1500,
  breakpoints :{ 
    650:{
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
      speed:1500,
    },
    900:{
      slidesPerView:2.7,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
    }
  }
});

new Swiper('.slider__container-2', {
  slidesPerView: 1,
  loop: true,
  
  autoplay:{
    delay: 1500,
    stopOnLastSlide:false,
    disableOnIteraction:false,
  },
  speed:1500,
  breakpoints :{ 
    650:{
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
      speed:1500,
    },
    900:{
      slidesPerView:2.7,
      spaceBetween: 32,
      loop: true,
      
      autoplay:{
        delay: 1500,
        stopOnLastSlide:false,
        disableOnIteraction:false,
      },
    }
  }
});

new Swiper('.tabs__body__box', {
  slidesPerView:3,
  loop:false,
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  

  breakpoints:{
    850:{
      slidesPerView:3,
      loop:true,  
      autoplay:{
    delay: 1500,
    stopOnLastSlide:false,
    disableOnIteraction:false,
  },
  }
}
});


  const iconMenu = document.querySelector('.burger');
  const menuBody = document.querySelector('.menu__header');
  if(iconMenu){
  iconMenu.addEventListener("click", (e)=> {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('active'),
    menuBody.classList.toggle('menu__header--active')
  })
  }
const navLinks = document.querySelectorAll('.nav__link[data-goto]');
  if(navLinks.length > 0) {
      navLinks.forEach( navLink => {
          navLink.addEventListener("click", onNavLinkClick);
      });
  function onNavLinkClick(e) {
    const navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      if( iconMenu.classList.contains('active')){
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('menu__header--active')
      }

      window.scrollTo({
          left:0,
          top: gotoBlockValue,
          behavior: "smooth",
      });
          e.preventDefault();
    }
  }
  }

