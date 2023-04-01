//modal
$(function(){
	　　　$('.menu-trigger').on("click", function(){
	　　　　if ($('.menu-trigger').hasClass('active')) {
	　　　　　$('.menu-trigger').removeClass('active');
	　　　　} else {
	　　　　　$('.menu-trigger').addClass('active');
	　　　　}
	　　　});
	　　});		


$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('.gnav').hasClass('active')) {
　　　　　$('.gnav').removeClass('active');
　　　　} else {
　　　　　$('.gnav').addClass('active');
　　　　}
　　　});
　　});
		
$(function(){
　　　$('.menu-trigger').on("click", function(){
　　　　if ($('body').hasClass('open')) {
　　　　　$('body').removeClass('open');
　　　　} else {
　　　　　$('body').addClass('open');
　　　　}
　　　});
　　});

$(function(){
	$('.hambtn').click(function(){
		$(this).toggleClass('open');
		$(this).next('.hamd').slideToggle();
	});
	});


//slider
$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 800,
	dots: true,
	arrows: true,
	infinite: true,
	pauseOnHover: false,
	centerMode:true,
	centerPadding:"20%",
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  dots: false,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  dots: false,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 1
		}
	  }
	]
  });

  $('.slider2').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 800,
	infinite: true,
	pauseOnHover: false,
	centerMode:true,
	slidesToShow: 3,
	centerPadding:"15%",
	responsive: [
		{
			breakpoint: 1000,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '1%',
			  slidesToShow: 3
			}
		  },
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '15%',
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '12%',
		  slidesToShow: 1
		}
	  }
	]
  });



	$(".faq01 dd").hide();
$(".faq01 dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});
//LODINGここから--------------

window.onload = function() {
	const spinner = document.getElementById('loading');
	spinner.classList.add('loaded');
  }



//TOPアニメーションここから--------------


//MV
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
	triggerElement: ".cover-item",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".cover-item .left,.cover-item .right").addClass("active");
})
.addTo(controller);
});

$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".data-item.ratio01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
$(".data-item.ratio01 li").addClass("active");
})
.addTo(controller);
});

//1
$(function() {
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({ 
triggerElement: ".content01",  // Sceneの指定 })
})
scene.on("enter", function(event) {
	$(".content01 dt,.content01 dd").addClass("active");
  })
  .addTo(controller);
});

//2
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content02",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content02 dt,.content02 dd").addClass("active");
	})
	.addTo(controller);
	});

//3	
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content04",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content04 li").addClass("active");
	})
	.addTo(controller);
	});


//4
$(function() {
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({ 
		triggerElement: ".content05",  // Sceneの指定 })
	})
	scene.on("enter", function(event) {
		$(".content05 div").addClass("active");
	})
	.addTo(controller);
	});



//TOPアニメーションここまで--------------





//ラジオボタン切り替え自動読み込み
$(function(){
  
	var switchBtn = $('input[name=taku1]');
	var switchItems1 = $('.cond1');
	var inputField = 'input, textarea';
	
	switchBtn.on('load change', function(){
	  
	  var inputValue = $(this).val();
	  
	  if(inputValue === '宅配セットを取り寄せる'){
		switchItems1.show();
	  }else{
		switchItems1.hide();
	  }
	});
  });
    $(function(){
	
	var switchItems1 = $('.cond1');
	var inputField = 'input, textarea';
	var inputValue = $('input[name=taku1]:checked').val();
	
	if(inputValue === '宅配セットを取り寄せる'){
		switchItems1.show();
	}else{
		switchItems1.hide();
	}
  });

$(function(){
	// 郵便番号
	$('#zip').jpostal({
		postcode : [
			'input[name="zip[data][0]"]', //郵便番号上3ケタ
			'input[name="zip[data][1]"]'  //郵便番号下4ケタ
		],
		address : {
			'#prefecture'  : '%3%4%5%6', //都道府県
		}
	});
});



	
// toptab
$('.contab .ctab').click(function() {
	var index = $('.contab .ctab').index(this);
	$('.contab .ctab, .co10ul .co10li').removeClass('active');
	$(this).addClass('active');
	$('.co10li').eq(index).addClass('active');
});

// areatab
$('.contab .ctab').click(function() {
	var index = $('.contab .ctab').index(this);
	$('.contab .ctab, .artab1 .artab2').removeClass('active');
	$(this).addClass('active');
	$('.artab2').eq(index).addClass('active');
});


// tab
$(function() {
	if (window.matchMedia("(max-width: 768px)").matches) {
	$(".co6main").hide();
	$(".co6d").on("click", function(e){
		$('.co6main',this).slideToggle('fast');
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
		}
	});
};
});

window.onload = ()=> {
	// URLの取得
	let url = location.href;
	if (url == "http://hoge.com/") {
	} 
  }

// function isCheck() {

// 	var str = window.location.href.split('/').pop();
// 	if(str=="first.php"){
// 		let arr_checkBoxes = document.getElementsByClassName("chebo1");
// 		let arr_checkBoxes2 = document.getElementsByClassName("chebo2");
// 		let count = 0;
// 		let count2 = 0;
// 		for (let i = 0; i < arr_checkBoxes.length; i++) {
// 			if (arr_checkBoxes[i].checked) {
// 				count++;
// 			}
// 		}
// 		for (let i = 0; i < arr_checkBoxes2.length; i++) {
// 			if (arr_checkBoxes2[i].checked) {
// 				count2++;
// 			}
// 		}
// 		if (count > 0) {
// 			if (count2 > 0) {
// 			return true;
// 			}else{
// 				window.alert("希望プランを1つ以上選択してください。");
// 				return false;
// 			}
// 		} else {
// 			window.alert("種類を1つ以上選択してください。");
// 			return false;
// 		};
// 	}else{
// 		let arr_checkBoxes = document.getElementsByClassName("chebo3");
// 		let count = 0;
// 		for (let i = 0; i < arr_checkBoxes.length; i++) {
// 			if (arr_checkBoxes[i].checked) {
// 				count++;
// 			}
// 		}
// 		if (count > 0) {
// 			return true;
// 		} else {
// 			window.alert("折り返し希望連絡方法を1つ以上選択してください。");
// 			return false;
// 		};
// 	}
 
// }
$(function() {
 
  //a要素のhrefを変更する
  $('.ez-toc-toggle').attr('href', 'javascript:void(0)');
 
});

$(function() {
     $('[name="key"]:radio').change( function() {
         var result = $("input[name='key']:checked").val(); 
         if(result === '直接手渡し'){ //希望するを選んだ場合
                $('.open-area').css('display','block');
         } else{
                $('.open-area').css('display','none');
         }
     }).trigger('change');
  });