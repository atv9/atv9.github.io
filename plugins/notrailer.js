(function () {
    'use strict';	
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            e.object.activity.render().find('.view--trailer').remove();
        }
    });
})();
(function () {
    'use strict';	
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            e.object.activity.render().find('.button--options').remove();
        }
    });
})();


(function () {
    'use strict';

/* Кнопка YouTube */
			var TubeSVG = '<svg width="256px" height="256px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00048000000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube</title> <g id="Layer_2" data-name="Layer 2">  <g id="icons_Q2" data-name="icons Q2"> <path d="M45.1,12.8a5.5,5.5,0,0,0-3.9-3.9C37.8,8,24,8,24,8S10.2,8,6.8,8.9a5.5,5.5,0,0,0-3.9,3.9C2,16.2,2,23.4,2,23.4s0,7.2.9,10.6a5.5,5.5,0,0,0,3.9,3.9c3.4.9,17.2.9,17.2.9s13.8,0,17.2-.9A5.5,5.5,0,0,0,45.1,34c.9-3.4.9-10.6.9-10.6S46,16.2,45.1,12.8ZM19.6,30V16.8L31,23.4Z" fill="currentColor"></path> </g> </g> </g></svg>'
			var tubemenu = $('<li id="YouTubeButton"  class="menu__item selector hide"><div class="menu__ico">' + TubeSVG + '</div><div class="menu__text" >YouTube</div></li>');
			$('.menu .menu__list').eq(0).append(tubemenu)
			if(Lampa.Storage.field('YouTube') == true) {
				$('#YouTubeButton').removeClass('hide');
			}

			tubemenu.on('hover:enter', function() {
					if (Lampa.Platform.is('webos')) {
						webOS.service.request("luna://com.webos.applicationManager", {
						   method: "launch",
						   parameters: { "id": "youtube.leanback.v4"},
						   onSuccess: function (inResponse) {
							   console.log("The app is launched");
						   },
						   onFailure: function (inError) {
							   console.log("Failed to launch the app");
							   console.log("[" + inError.errorCode + "]: " + inError.errorText);
							   return;
						   }
					   });
					}
					if (Lampa.Platform.is('android')) {
						Lampa.Android.openYoutube('TeUQrJrfrkk');
					} 
					else window.location.href = 'https://youtube.com/tv' //Android.openYoutube(a.id) else YouTube.play(a.id)
			})
/* End Кнопка YouTube */


/* Кнопка rezka */
			var rezkaSVG = '<svg width="256px" height="256px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00048000000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube</title> <g id="Layer_2" data-name="Layer 2">  <g id="icons_Q2" data-name="icons Q2"> <path d="M45.1,12.8a5.5,5.5,0,0,0-3.9-3.9C37.8,8,24,8,24,8S10.2,8,6.8,8.9a5.5,5.5,0,0,0-3.9,3.9C2,16.2,2,23.4,2,23.4s0,7.2.9,10.6a5.5,5.5,0,0,0,3.9,3.9c3.4.9,17.2.9,17.2.9s13.8,0,17.2-.9A5.5,5.5,0,0,0,45.1,34c.9-3.4.9-10.6.9-10.6S46,16.2,45.1,12.8ZM19.6,30V16.8L31,23.4Z" fill="currentColor"></path> </g> </g> </g></svg>'
			var rezkamenu = $('<li id="rezkaButton"  class="menu__item selector hide"><div class="menu__ico">' + rezkaSVG + '</div><div class="menu__text" >rezka</div></li>');
			$('.menu .menu__list').eq(0).append(rezkamenu)
			if(Lampa.Storage.field('rezka') == true) {
				$('#rezkaButton').removeClass('hide');
			}

			rezkamenu.on('hover:enter', function() {
					if (Lampa.Platform.is('webos')) {
						webOS.service.request("luna://com.webos.applicationManager", {
						   method: "launch",
						   parameters: { "id": "youtube.leanback.v4"},
						   onSuccess: function (inResponse) {
							   console.log("The app is launched");
						   },
						   onFailure: function (inError) {
							   console.log("Failed to launch the app");
							   console.log("[" + inError.errorCode + "]: " + inError.errorText);
							   return;
						   }
					   });
					}
					if (Lampa.Platform.is('android')) {
						Lampa.Android.openYoutube('TeUQrJrfrkk');
					} 
					else window.location.href = 'https://rezka.ag/films'
			})
/* End Кнопка rezka */

 })();
