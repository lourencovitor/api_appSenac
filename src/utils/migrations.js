const User  = require('../models/User');
const UpdatePassword = require('../models/UpdatePassword');
const Area = require('../models/Area');

const exec = async () => {
    await User.sync({ force: true });
    await UpdatePassword.sync({ force: true });
    await Area.sync({ force: true });
}

exec();



