const User  = require('../models/User');
const UpdatePassword = require('../models/UpdatePassword');
const Area = require('../models/Area');
const SubArea = require('../models/SubArea');
const Curso = require('../models/Curso');

const exec = async () => {
    await User.sync({ force: true });
    await UpdatePassword.sync({ force: true });
    await Area.sync({ force: true });
    await SubArea.sync({ force: true });
    await Curso.sync({ force: true });
}

exec();



