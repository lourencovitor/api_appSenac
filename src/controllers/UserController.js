const User = require('../models/User');
const md5 = require('crypto-md5');

module.exports = {
    async store(req, res){
        const { name, email, password } = req.body;
        const hash = md5(password, 'hex');
        
        try
        {
            const user = await User.create({
                name, 
                email, 
                password:hash,
            });

            return res.json(user).status(200)
        }
        catch(error)
        {
           console.log(error);
           return;
        }
    },
    async index(req, res)
    {
        try{
            const user = await User.findAll();
            res.status(200).json(user);
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    },
    async show(req, res)
    {
        const { id } = req.params;
        try
        {
            const exibeRes = await User.findOne({
                where: {
                    id
                }
            })
    
            res.status(200).json(exibeRes);
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    },
    async update(req, res)
    {
        const dados = req.body;
        const { id } = req.params;
        try
        {
            const exibeRes = await User.update(dados, {
                where: { id }
            });

            if(!exibeRes ===0){
                res.status(200).json(exibeRes);
            }else{
                res.status(400).send("Dados não atualizados");
            }
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        try
        {
            const exibeRes = await User.destroy({
                where: { id }
            })
    
            if(!exibeRes === 0){
                res.status(200).json(exibeRes);
            }else{
                res.status(400).send("Usuário não existe");
            }
        }
        catch(error)
        {
            console.log(error);
            return;
        }

    }
}