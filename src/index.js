const packageJson = require('./../package.json');

const hour = require('./hour');
const addinfokey = require('./addinfokey');
const helpinfo = require('./helpinfo');
const getinfo = require('./getinfo');
const delinfokey = require('./delinfokey');
const listinfo = require('./listinfo');




module.exports = function (ai) {
    ai.addModule({
        id: packageJson.name,
        commands: [].concat(hour(ai)).concat(addinfokey(ai)).concat(helpinfo(ai)).concat(getinfo(ai)).concat(delinfokey(ai)).concat(listinfo(ai))


    });
};
