var exec = require('cordova/exec');

const Geodetic = {
    coolMethod = function (arg0, success, error) {
        exec(success, error, 'Geodetic', 'coolMethod', [arg0]);
    }
}

module.exports = Geodetic;
