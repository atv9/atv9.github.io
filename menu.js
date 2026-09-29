/* Кнопка YouTube */
(function () {
    'use strict';

		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'YouTube',
				type: 'trigger',
				default: true
			}
		});
			var YouTubeSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="256px" height="256px" viewBox="0 0 256 256"><path class="st0" d="M250.8,66.3c-3-11.1-11.6-19.7-22.7-22.7C208.3,38.4,128,38.4,128,38.4s-80.3,0-100.1,5.2 c-11.1,3-19.7,11.6-22.7,22.7C0,86.1,0,128,0,128s0,41.9,5.2,61.7c3,11.1,11.6,19.7,22.7,22.7c19.8,5.2,100.1,5.2,100.1,5.2 s80.3,0,100.1-5.2c11.1-3,19.7-11.6,22.7-22.7C256,169.9,256,128,256,128S256,86.1,250.8,66.3z M102,166.4V89.6l66.3,38.4 L102,166.4z" fill="currentColor"/></svg>'
			var YouTubemenu = $('<li class="menu__item selector"><div class="menu__ico">' + YouTubeSVG + '</div><div class="menu__text" >YouTube</div></li>');
			$('.menu .menu__list').eq(0).append(YouTubemenu)
			YouTubemenu.on('hover:enter', function() {
			window.location.href = 'https://youtube.com/tv'
			})
 })();
/* End Кнопка YouTube */


/* Кнопка HDRezka */
(function () {
    'use strict';

		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'HDRezka',
				type: 'trigger',
				default: true
			}
		});
			var HDRezkaSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="512px" height="512px" viewBox="0 0 512 512"><path class="st0" d="M482.9,67.2H29.1C13,67.2,0,80.3,0,96.3v319.4c0,16,13,29.1,29.1,29.1h453.8c16,0,29.1-13,29.1-29.1V96.3 C512,80.3,499,67.2,482.9,67.2z M477.1,184.1h-91.9v-82h91.9V184.1z M126.8,292.4H34.9v-73.3h91.9V292.4z M161.7,102.1h188.5v307.8 H161.7V102.1z M385.2,219.1h91.9v73.3h-91.9V219.1z M126.8,102.1v82H34.9v-82H126.8z M34.9,327.3h91.9v82.6H34.9V327.3z M385.2,409.9v-82.6h91.9v82.6H385.2z" fill="currentColor"/></svg>'
			var hdrezkamenu = $('<li class="menu__item selector"><div class="menu__ico">' + HDRezkaSVG + '</div><div class="menu__text" >HDRezka</div></li>');
			$('.menu .menu__list').eq(0).append(hdrezkamenu)
			hdrezkamenu.on('hover:enter', function() {
			window.location.href = 'https://rezka.ag/country/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/?filter=last&genre=2'
			})
 })();
/* End Кнопка HDRezka */



/* Кнопка TV */
(function () {
    'use strict';

		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'TV',
				type: 'trigger',
				default: true
			}
		});
			var TVSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="512px" height="512px" viewBox="0 0 512 512"><path class="st0" d="M482.9,67.2H29.1C13,67.2,0,80.3,0,96.3v319.4c0,16,13,29.1,29.1,29.1h453.8c16,0,29.1-13,29.1-29.1V96.3 C512,80.3,499,67.2,482.9,67.2z M477.1,184.1h-91.9v-82h91.9V184.1z M126.8,292.4H34.9v-73.3h91.9V292.4z M161.7,102.1h188.5v307.8 H161.7V102.1z M385.2,219.1h91.9v73.3h-91.9V219.1z M126.8,102.1v82H34.9v-82H126.8z M34.9,327.3h91.9v82.6H34.9V327.3z M385.2,409.9v-82.6h91.9v82.6H385.2z" fill="currentColor"/></svg>'
			var tvmenu = $('<li class="menu__item selector"><div class="menu__ico">' + TVSVG + '</div><div class="menu__text" >Online TV</div></li>');
			$('.menu .menu__list').eq(0).append(tvmenu)
			tvmenu.on('hover:enter', function() {
			window.location.href = 'https://smotret.tv/'
			})
 })();
/* End Кнопка TV */


/* Кнопка APPS */
(function () {
    'use strict';

		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'APPS',
				type: 'trigger',
				default: true
			}
		});
			var APPSSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="512px" height="512px" viewBox="0 0 512 512"><path class="st0" d="M482.9,67.2H29.1C13,67.2,0,80.3,0,96.3v319.4c0,16,13,29.1,29.1,29.1h453.8c16,0,29.1-13,29.1-29.1V96.3 C512,80.3,499,67.2,482.9,67.2z M477.1,184.1h-91.9v-82h91.9V184.1z M126.8,292.4H34.9v-73.3h91.9V292.4z M161.7,102.1h188.5v307.8 H161.7V102.1z M385.2,219.1h91.9v73.3h-91.9V219.1z M126.8,102.1v82H34.9v-82H126.8z M34.9,327.3h91.9v82.6H34.9V327.3z M385.2,409.9v-82.6h91.9v82.6H385.2z" fill="currentColor"/></svg>'
			var appsmenu = $('<li class="menu__item selector"><div class="menu__ico">' + APPSSVG + '</div><div class="menu__text" >APPS</div></li>');
			$('.menu .menu__list').eq(0).append(appsmenu)
			appsmenu.on('hover:enter', function() {
			window.location.href = 'https://atv9.github.io/apps'
			})
 })();
/* End Кнопка APPS */


/* Кнопка Soc */
(function () {
    'use strict';

		Lampa.SettingsApi.addParam({
			component: 'Multi_Menu_Component',
			param: {
				name: 'S',
				type: 'trigger',
				default: true
			}
		});
			var SSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="512px" height="512px" viewBox="0 0 512 512"><path class="st0" d="M482.9,67.2H29.1C13,67.2,0,80.3,0,96.3v319.4c0,16,13,29.1,29.1,29.1h453.8c16,0,29.1-13,29.1-29.1V96.3 C512,80.3,499,67.2,482.9,67.2z M477.1,184.1h-91.9v-82h91.9V184.1z M126.8,292.4H34.9v-73.3h91.9V292.4z M161.7,102.1h188.5v307.8 H161.7V102.1z M385.2,219.1h91.9v73.3h-91.9V219.1z M126.8,102.1v82H34.9v-82H126.8z M34.9,327.3h91.9v82.6H34.9V327.3z M385.2,409.9v-82.6h91.9v82.6H385.2z" fill="currentColor"/></svg>'
			var smenu = $('<li class="menu__item selector"><div class="menu__ico">' + SSVG + '</div><div class="menu__text" >Social</div></li>');
			$('.menu .menu__list').eq(0).append(smenu)
			smenu.on('hover:enter', function() {
			window.location.href = 'https://atv9.github.io/apps/s.html'
			})
 })();
/* End Кнопка Soc */


