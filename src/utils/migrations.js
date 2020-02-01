const User  = require('../models/User');
const UpdatePassword = require('../models/UpdatePassword');

const exec = async () => {
    await User.sync({ force: true });
    await UpdatePassword.sync({ force: true });
}

exec();



