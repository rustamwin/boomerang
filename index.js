/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
const methods = require('require-dir')('./methods', { recurse: true });
const _ = require('lodash');
const jayson = require("jayson/promise");

function normalizeMethods(sub, glue) {
    return function(map, value, key) {
        let wildcard = sub ? sub + glue + key : key;
        if(_.isFunction(value)) map[wildcard] = value;
        else if(_.isObject(value)) map = _.reduce(value, normalizeMethods(wildcard, glue), map);
        return map;
    }
}
const normalizedMethods = _.reduce(methods, normalizeMethods('', '.'), {});

const server = jayson.Server(normalizedMethods);

server.http().listen(3000);
console.log("server is running on port 3000");