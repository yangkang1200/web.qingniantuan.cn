var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay : 2000,
        effect: 'fade'
    });
    $(function(){
    	$('.click').click(function(){
    		$('.show').toggle()
    	})
    })
    $('.ldjh_change li').click(function(){
    	var i = $(this).index()
    	$(this).addClass('tmd').siblings().removeClass('tmd')
    	$('.qiehuan ul').eq(i).addClass('tab_show').siblings().removeClass('tab_show')
    })
