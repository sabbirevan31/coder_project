$("#slider").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

$("#slider2").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });
  

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  }); 
  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar-nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    console.log(sec)

    if(top >= offset && top < offset + height) {
      	navLinks.forEach(links => {
          console.log(links)
          links.classList.remove('active');
          document.querySelector('.navbar-nav a[href*=' + id + ']').classList.add('active');
      }); 
    };
  }); 
  let navegation = document.querySelector('#navegation');
  navegation.classList.toggle('sticky', window.scroll > 100);
};


ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration:2000,
  delay: 200
});

ScrollReveal().reveal('.hero_contain .heading', { origin: 'top' });

ScrollReveal().reveal('.hero_img .about-img .services_card', { origin: 'bottom' });
