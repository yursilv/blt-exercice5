const bcrypt = require('bcrypt');
const saltRounds = 10;

/*
    hashing the password for database storage
*/
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}

module.exports = {
    bcrypt,
    hashPassword
};
