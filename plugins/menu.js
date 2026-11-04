/* Кнопка WEB */
(function () {
    'use strict';
		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'WEB',
				type: 'trigger',
				default: true
			}
		});
			var WebSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="256px" height="256px" viewBox="0 0 256 256"><path class="st0" d="M250.8,66.3c-3-11.1-11.6-19.7-22.7-22.7C208.3,38.4,128,38.4,128,38.4s-80.3,0-100.1,5.2 c-11.1,3-19.7,11.6-22.7,22.7C0,86.1,0,128,0,128s0,41.9,5.2,61.7c3,11.1,11.6,19.7,22.7,22.7c19.8,5.2,100.1,5.2,100.1,5.2 s80.3,0,100.1-5.2c11.1-3,19.7-11.6,22.7-22.7C256,169.9,256,128,256,128S256,86.1,250.8,66.3z M102,166.4V89.6l66.3,38.4 L102,166.4z" fill="currentColor"/></svg>'
			var Webmenu = $('<li class="menu__item selector"><div class="menu__ico">' + WebSVG + '</div><div class="menu__text" >WEB</div></li>');
			$('.menu .menu__list').eq(0).append(Webmenu)
			Webmenu.on('hover:enter', function() {
			window.location.href = 'https://atv9.github.io/apps/web.html'
			})
 })();
/* End Кнопка WEB */