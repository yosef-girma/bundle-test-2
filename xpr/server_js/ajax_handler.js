
// require('/xpr/utilities');
var utils = require('/xpr/utilities');

exports.process = function(context, options) {
      //  PHP.XprConsole("test logging");
        utils.XprConsole.log('Testing from console log');
        utils.server_log("server log testing");
        utils.__errlog("legacy tests");
        return "Testing Log Updated here again ";
}





