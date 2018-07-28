
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function (table) {
            table.increments();
            table.string('name');
            table.string('last_name');
            table.string('email');
            table.integer('birthday');
            table.string('phone');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex('user').schema.truncate()
    ])
};
