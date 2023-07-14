
// require('/xpr/utilities');
var utils = require('/xpr/utilities');

exports.process = function(context, options) {
        PHP.XprConsole("test logging");
        utils.XprConsole.log('Testing from console log');
        return "Testing Log ";
}





