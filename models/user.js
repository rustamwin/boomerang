/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
const BaseModel = require('./base');

class User extends BaseModel {
    attributes() {
        return [
            'id',
            'name',
            'last_name',
            'email',
            'phone',
            'birthday'
        ];
    }
}

module.exports = User;