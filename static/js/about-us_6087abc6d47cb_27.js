var scene;
function initLanding () {
      const controller = new ScrollMagic.Controller();
      const myTimeline = new TimelineLite()
      const s0 = TweenMax.to('.landing .tw img', 2, { opacity: 0, scale: 2 })
      const s1 = TweenMax.to('.landing .logo img', 2, { opacity: 1, scale: 10 })
      const s2 = TweenMax.fromTo('.landing .person', 1, { opacity: 0, x: 200 }, { opacity: 0.5, x: 0, delay: 2 })
      myTimeline.add([s0, s1, s2], 'normal')
       scene = new ScrollMagic.Scene({
            triggerElement: '.landing',
            duration: $('.landing').height(),
            offset: 0,
            triggerHook: 'onLeave',
            reverse: true
        })
        .on('leave', function(){
          $('.landing').hide()
          setTimeout(function(){
          	initFullPage()
            initNewSwiper()
          	initAboutSwiper()
          })
        })
        .setTween(myTimeline)
        .addTo(controller)
        .setPin('.landing .sm-controller')
    }
    
    function initAboutSwiper () {
      new Swiper('.about-swiper', {
        loop: true,
        // autoplay: {
        //  delay: 8000,
        //  disableOnInteraction: false
        //},
        autoplay: false,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination-about',
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1'
        }
      })
    }
    function initNewSwiper () {
      new Swiper('.news-swiper', {
          loop: false,
          slidesPerView: '4',
          observer: true,
          observeSlideChildren: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination-news'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        })
    }
    function initFullPage () {
      scene.removePin(true)
      console.log('初始化fullpage')
      $('#about').fullpage({
        navigation: true,
        navigationPosition: 'left',
        onLeave (index, nextIndex, direction) {
          if (nextIndex.index === 2 || nextIndex.index === 3) {
            $('.header').addClass('black')
            $('#fp-nav li a span').addClass('white')
          } else {
            $('#fp-nav li a span').removeClass('white')
            $('.header').removeClass('black')
          }
        }
      })
    }
    function initMbBannerSwiper () {
       new Swiper('.mb-banner-swiper', {
          loop: true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination-mb-banner'
          }
        })
    }
    function initMbNewsSwiper () {
      new Swiper('.mb-news-swiper', {
        loop: true,
        slidesPerView: 'auto',
        observer: true,
        observeSlideChildren: true,
        spaceBetween: 30,
        centeredSlides: true
      })
    }


$(function(){
  if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    initMbBannerSwiper ()
} else {
    initLanding()
  $('[data-bg]').each(function(i, e){
      $(e).css({'background-image': 'url(\''+$(e).attr('data-bg')+'\')', 'background-size': 'cover'});
  })
}
	
})