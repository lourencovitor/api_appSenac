const User = require('../models/User');
const UpdatePass = require('../models/UpdatePassword');
const md5 = require('crypto-md5');

module.exports = {
    async store(req, res){
        const {name, email, password, code} = req.body;
        
        const validateEmail = await User.findOne({
            where: {
                email
            }
        })


        if(validateEmail.dataValues === "" || null || ''){
            return
        }

        const validaCodigo = await  UpdatePass.findOne({
            where:{
                user: validateEmail.dataValues.email
            }
        })

        if(validaCodigo.dataValues.key !== code){
            return
        }

        if(validaCodigo.dataValues.useDate){
            return res.json({message:"Codigo já usado"}).status(200)
        }

        await UpdatePass.update({useDate:new Date()},{
            where:{
                user:email
            }
        });

        const newPass = md5(password, 'hex');

        await User.update({password:newPass},{
            where:{
                email
            }
        });

        return 

    }
}