const User = require('../models/User');
const UpdatePass = require('../models/UpdatePassword');
const md5 = require('crypto-md5');

module.exports = {
    async store(req, res){
        const {email, password, code} = req.body;
        
        try{
            const validateEmail = await User.findOne({
                where: {
                    email
                },
                limit: 10
            })

            if(validateEmail.dataValues === "" || null || ''){
                return res.json({message:"Email invalido"}).status(401)
            }
    
            const validaCodigo = await  UpdatePass.findOne({
                where:{
                    user: validateEmail.dataValues.email
                },
                order: [
                    ['creationDate', 'DESC'],
                ],
                limit: 10
            })

            if(validaCodigo.dataValues.key !== code){
                return res.json({message:"Codigo invalido"}).status(401);
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
    
            return res.status(200).json({message:"Senha alterada com sucesso."});
        }
        catch(error){
            console.log(error);
        }

    }
}