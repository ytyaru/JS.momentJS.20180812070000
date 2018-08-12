require.config({
    paths: {
        "require": "js/lib/require/require.min",
        "require.domReady": "js/lib/require/plugin/domReady",
        "moment": "js/lib/moment/moment-with-locales.min",
    }
});
require(['require.domReady'], function(domReady) {
    domReady(function () {
        require(['js/app/main']);
    });
});
