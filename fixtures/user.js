/**
 * Faker file
 */

exports.fake = function (faker) {
    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone: faker.phone.phoneNumber('+998(9#) ###-##-##'),
        email: faker.internet.email(),
        birthday: parseInt(faker.date.past(20).getTime() / 1000),
    };
};

exports.load = function (name) {
    const modelClass = require(`../models/${name}`);
    const data = require(`./data/${name}`);
    let count = 0;
    data.forEach((el) => {
        const model = new modelClass(el);
        model.save();
        count++;
    });
    return count;
};