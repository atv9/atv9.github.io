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
