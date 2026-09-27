$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b1_end,#b2_end,#b3_end,#b4_end,#b5_end,#b6_end,#b7_end,#b8_end,#b9_end,#b10_end,#b11_end,#b12_end').stop();
			var totalBalloons = 12;
			var spacing = Math.min(65, ($(window).width() - 40) / totalBalloons);
			var startX = vw - (((totalBalloons - 1) * spacing + 100) / 2);
			for(var k = 1; k <= totalBalloons; k++){
				$('#b' + k + '_end').animate({top:240, left: startX + (k - 1) * spacing}, 500);
			}
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function makeLoop(id) {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$(id).animate({left: randleft, bottom: randtop}, 10000, function(){
			makeLoop(id);
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b9,#b11').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8,#b10,#b12').addClass('balloons-rotate-behaviour-two');
		
		for(var i = 1; i <= 12; i++){
			makeLoop('#b' + i);
		}
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12').stop();
		
		// Collect elements first before renaming to avoid ID collisions
		var balloonElements = [];
		for(var i = 1; i <= 12; i++){
			balloonElements.push($('#b' + i));
		}
		for(var i = 0; i < 12; i++){
			balloonElements[i].attr('id', 'b' + (i + 1) + '_end');
		}

		var totalBalloons = 12;
		var spacing = Math.min(65, ($(window).width() - 40) / totalBalloons);
		var startX = vw - (((totalBalloons - 1) * spacing + 100) / 2);

		for(var j = 1; j <= totalBalloons; j++){
			$('#b' + j + '_end').animate({top:240, left: startX + (j - 1) * spacing}, 500);
		}

		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
		}
		
		msgLoop(0);
		
	});
});





//alert('hello');