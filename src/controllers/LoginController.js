const User = require('../models/User');
const md5 = require('crypto-md5');

module.exports = {
    async show(req, res)
    {
        const { name, password } = req.body;
        const hash = md5(password, 'hex');
        try
        {
            const exibeRes = await User.findOne({
                where: {
                    name,
                    password:hash
                }
            })

            if(exibeRes === null){
                return res.status(400).json({message:'Usuario não encontrado'});
            }
            res.status(200).json(exibeRes);
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    }
}