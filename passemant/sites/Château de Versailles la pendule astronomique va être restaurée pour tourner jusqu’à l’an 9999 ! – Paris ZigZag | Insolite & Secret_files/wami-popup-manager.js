/**
 * Manage Popup
 * (use object 'options' binded by Wp in Wami_popup.php)
 * @param  {Jquery} $
 */
(function($){

	/**
	 * Append Close action in the element
	 * @param  {$object} elem
	 * @return {void}
	 */
	appendTemplateAction = function(elem){
		elem.addClass('close');
		var close = '<a id="close-popup" class="action flaticon-cross37"></a>';
		//var definitlyClose = '<a id="definitly-close-popup" class="action">Fermer définitivement</a>';
		elem.append(close); 

	}

	/**
	 * add class open to a element
	 * @param  {$object} elem
	 * @return {void}
	 */
	showElem = function(elem, animateIn, animateOut){
		if(elem.hasClass('close')){
			elem.removeClass('close');
			elem.removeClass('animated-pop ' + animateIn);
		}
		if(!elem.hasClass('open')){
			elem.addClass('open');
			elem.show().addClass('animated-pop ' + animateOut);
		}
	}

	/**
	 * remove class open to a element
	 * @param  {$object} elem
	 * @return {void}
	 */
	hideElem = function(elem, animateIn, animateOut){
		if(elem.hasClass('open')){
			elem.removeClass('open');
			elem.removeClass('animated-pop ' + animateIn);
		}
		if(!elem.hasClass('close')){
			elem.addClass('close');
			elem.addClass('animated-pop ' + animateOut);
/*			setTimeout(function(){elem.hide()}, 400);*/
		}
	}

	/**
	 * Set Cookie
	 * (use Jquery Cookie)
	 */
	setCookie = function(cookieName, cookieValue, cookieExpire){
		$.cookie( cookieName, cookieValue, { expires: parseInt(cookieExpire) , path: '/' } );
	}

	/**
	 * Set Cookie
	 * (use Jquery Cookie)
	 */
	getCookie = function(cookieName){
		return $.cookie(cookieName);
	}

	/**
	 * Main
	 * @return {void}
	 */
	$(window).load(function(){


		/******************************
		*
		*	Petite Popup
		*
		*******************************/

		var $popup = $('#popup');
		var show = true;
		var cookie = getCookie(options.cookieName);
		var documentHeight = $( document ).height();

		var bigCookie = getCookie(options.bigCookieName);

		// append close action
		appendTemplateAction($popup);

		// If cookie is undefined or false
		// And debug is true
		// Check the popup
		if(!cookie || options.debug){

			$(window).on('CLOSE_BIG_POPUP', function(){

				setTimeout(function(){
					showElem($popup, 'bounceOutRight', 'bounceInRight');
				}, 20000);

			})

			if(!options.activeBig || bigCookie == 1){

				setTimeout(function(){
					showElem($popup, 'bounceOutRight', 'bounceInRight');
				}, 20000);
				
			}

			/*$(window).scroll(function(e){
				
				// if the popup is in the middle of the sreen
				// and the user don't close on the current page
				// Show popup
				if(documentHeight / 3 < $(this).scrollTop() && show){
					if(!$popup.hasClass('open')){
						showElem($popup);
					}
				}else{
					if(!$popup.hasClass('close')){
						hideElem($popup);
					}
					
				}

			});*/

		}

		/**
		 * Close the panel for the current page
		 * @param  {event} e
		 * @return {void}
		 */
		$popup.on('click', '#close-popup', function(e){
			e.preventDefault();
			show = false;
			hideElem($popup, 'bounceInRight', 'bounceOutRight');
			setCookie(options.cookieName, options.cookieValue, options.cookieExpire)
		});

		/**
		 * Close the panel for session cookie time
		 * @param  {event} e
		 * @return {void}
		 */
		$popup.on('click', '#definitly-close-popup', function(e){
			e.preventDefault();
			show = false;
			hideElem($popup, 'bounceInRight', 'bounceOutRight');
			setCookie(options.cookieName, options.cookieValue, options.cookieExpire)
		});

		/******************************
		*
		*	Grande Popup
		*
		*******************************/
		var showBig = true;
		var bigCookieDebug = options.bigCookieDebug;

		var bigPopup = '';
			bigPopup+= '<div id="bloc-big-popup" class="open">';
			bigPopup+= '<div class="inner-big-popup">';
			bigPopup+= '<a id="close-big-popup" class="action flaticon-cross37"></a>';
			bigPopup+= options.contentBig_echo;
			bigPopup+= '</div>'
			bigPopup+= '</div>'
			bigPopup+= '<div id="big-popup">';
			bigPopup+= '</div>'

		/*if(options.activeBig && !bigCookie || bigCookieDebug){
			$('body').append(bigPopup);
		}*/
		
		
		/*if(options.activeBig && !bigCookie || bigCookieDebug){
      setTimeout(function(){
        $('body').append(bigPopup);
			}, 10000);
		}*/

    if(options.activeBig && !$(".visites").length && options.activeBig && !bigCookie || bigCookieDebug){
      setTimeout(function(){
        $('body').append(bigPopup);
			}, 10000);
		}
		
		$('body').on('click', '#close-big-popup', function(e){
			closeBigPopup();
		});

		$('body').on('click', '#bloc-big-popup', function(e){
			//e.stopPropagation();
			//console.log(e);
			//alert('lala');
			//e.preventDefault();
			closeBigPopup();
		});

		$('body').on('click', '.inner-big-popup', function(e) {
			e.stopPropagation();
		});

		$('body').on('click', '#big-popup', function(e){
			closeBigPopup();
		});

		$('.panel-newsletter form').submit(function(){
			closeBigPopup();
		});


		function closeBigPopup(){
			$('#big-popup').fadeOut('300');
			hideElem($('#bloc-big-popup'), '', 'bounceOutUp');
			showBig = false;
			setCookie(options.bigCookieName, options.cookieValue, options.bigCookieExpire);
			$(window).trigger('CLOSE_BIG_POPUP');
		}



	});

})(jQuery);