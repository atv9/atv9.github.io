// Main Menu Exit
(function () {
    "use strict";

    Lampa.Lang.add({
        exit_menu: {
            en: "Exit"
        }
    });

    function add() {
        var ico =
            '<svg version="1.1" id="exit" color="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"></svg>';
        var menu_items = $(
            '<li class="menu__item selector" data-action="exit_r"><div class="menu__ico">' +
            ico +
            '</div><div class="menu__text">' +
            Lampa.Lang.translate("exit_menu") +
            "</div></li>"
        );
        menu_items.on("hover:enter", function () {

        });
        $(".menu .menu__list").eq(0).append(menu_items);
			window.location.href = 'https://rezka.ag/country/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/?filter=last&genre=2'
			})
    }

    function createExitMenu() {
        window.plugin_exit_m_ready = true;
        Lampa.Component.add("exit_m", exit_m);
        if (window.appready) add();
        else {
            Lampa.Listener.follow("app", function (e) {
                if (e.type == "ready") add();
            });
        }
    }
    if (!window.plugin_exit_m_ready) createExitMenu();
})();
