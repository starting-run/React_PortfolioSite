(function($) {
	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');


		var typingBool = false;
		var typingIdx = 0;
		var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
		typingTxt = typingTxt.split(""); // 한글자씩 자른다.
		if (typingBool == false) {
		  // 타이핑이 진행되지 않았다면
		  typingBool = true;
	  
		  var tyInt = setInterval(typing, 100); // 반복동작
		}
	  
		function typing() {
		  if (typingIdx < typingTxt.length) {
			// 타이핑될 텍스트 길이만큼 반복
			$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
			typingIdx++;
		  } else {
			clearInterval(tyInt); //끝나면 반복종료
		  }
		}


	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});
	// Channel Talk	
		ChannelIO('boot', {
			"pluginKey": "cc156681-cec3-4b57-84d9-cbc688001283" // fill your plugin key
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 1);
		});

	// Top_Button
		$(function() { // 보이기 | 숨기기 
			$(window).scroll(function() { 
				if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
					$('#toTop').fadeIn(); 
					$('#toTop').css('left', $('#sidebar').offset().left); // #sidebar left:0 죄표 
				} else { 
					$('#toTop').fadeOut(); 
				} 
			}); 
			// 버튼 클릭시 
			$("#toTop").click(function() { 
				$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
				}, 300); // 속도 400 return false; 
			}); 
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);