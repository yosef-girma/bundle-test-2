
var ajaxHandler = require('bundle-test/server_js/ajax_handler.js');

exports.process = function(context, options) {
    var x = ajaxHandler.process();
    return "users response from referencing "+x;
}
