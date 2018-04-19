/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */

module.exports = async params => {
    try {
        return '2.0';
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};