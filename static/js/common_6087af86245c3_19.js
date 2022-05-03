
// 字体初始化
function windowResize() {
      let width = $(window).width()
      $('html').css('font-size', width/2560*100)
  }
  
  $(window).resize(function(){
      windowResize()
  })
  
  windowResize()
  
  $(function(){

	$("a").click(function(e){
    if($(this).attr('href').match(/#/g)){
      e.preventDefault()
      var url = location.href
      if (url.indexOf('#') > -1) {
        url = url.substring(0, url.indexOf('#'))
      }
      location.href = url + $(this).attr('href')
    }
  })
  if(/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
    $('.header .first').removeClass('pcLink')
    
} else {
    $('.header .first').addClass('pcLink')
}
    $('.header .pcLink').hover(function(){
          $(this).find('.mask').stop().slideDown()
      
          if($(this).find('.mask').length>0) {
			$('.header').removeClass('noactive').addClass('active')
          }
      	  
      }, function(){
          $(this).find('.mask').stop().slideUp()
         if($(this).find('.mask').length>0) {
			$('.header').removeClass('active').addClass('noactive')
          }
      })
      $('.footer .location').click(function(){
          $('.mask-dialoge').css('display','flex')
      })
      $('.mask-dialoge .close').click(function(){
          $('.mask-dialoge').css('display','none')
      })
      $('.header .menu').click(function(){
          $(this).hide()
          $('.menuClose').show()
          $('.nav').animate({"left": '0'}, 'slow')
          $('.wrapper').addClass('noScroll')
      })
      $('.header .menuClose').click(function(){
          $(this).hide()
          $('.menu').show()
          $('.nav').animate({"left": '-100%'}, 'slow')
          $('.wrapper').removeClass('noScroll')
      })
      $('.footer .line .jia').click(function(){
          $(this).parent().siblings().slideDown()
          $(this).siblings('.jiaClose').show()
          $(this).hide()
      })
      $('.footer .line .jiaClose').click(function(){
          $(this).parent().siblings().slideUp()
          $(this).siblings('.jia').show()
          $(this).hide()
      })
      $('[data-bg]').each(function(i, e){
        $(e).css({'background-image': 'url('+$(e).attr('data-bg')+')'})
      })
  })
  