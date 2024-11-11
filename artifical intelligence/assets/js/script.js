const navbarBtn = document.querySelector(".header .fa-bars-staggered") 
const mobilMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function()  {
 mobilMenyu.classList.add("mobil-menyunu-acan")


})


closeIcon.addEventListener("click",function()  {

    mobilMenyu.classList.remove("mobil-menyunu-acan")
})

// *********************************************************
// bura swiper js codlari gelecek
const karusel = new Swiper(".menimKaruselim", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// awards section start
const swiperkarusel = new Swiper(".awardsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


      // ***************************************
    // modal qutu  ARROW  
    const modalQutununButonu = document.querySelector("#watch-video-btn")
    
    const modaliBaglaIconu = document.querySelector(".modal-boxes .fa-xmark")

    const modalDivi = document.querySelector(".modal-boxes")
      
  

    const modaliAc = ( ) => {
    

     modalDivi.classList.add("aktiv")
    }

      const modaliBagla = () => { 

      
       modalDivi.classList.remove("aktiv")
      }

    modalQutununButonu.addEventListener("click", modaliAc)

    modaliBaglaIconu.addEventListener("click", modaliBagla)


// *********** Accordion********
new Accordion('.accordion-left');
new Accordion('.accordion-right');