const UpdatePass = require('../models/UpdatePassword');
const User = require('../models/User');
const uuid = require('uuid-random');
const nodemailer = require('nodemailer');
const email = require('../utils/estruturaDeEmail');

module.exports = {
    async store(req, res){

        const { user } = req.body;

        if(!user){
            return res.json({messahe:"Usuário não encontrado"}).status(400)
        }

        const emailConsultado = await User.findOne({
            where: {
                email:user
            }
        })

        if(emailConsultado === null){
            return res.json({mensagem:"Usuário não encontrado"}).status(400)
        }

        const creationDate = new Date();

        try
        {
            const updatePass = await UpdatePass.create({
                creationDate,
                key:uuid(),
                user:emailConsultado.dataValues.email,
            });

            const userConsultation = await UpdatePass.findOne({
                where: {
                    user:emailConsultado.dataValues.email
                }
            })
            
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com ",
                port: 465 ,
                secure: true, // true for 465, false for other ports
                service: 'Gmail',
                auth: {
                    user: "vitor.brother17@gmail.com",
                    pass: "positivo20"
                },
                tls: { rejectUnauthorized: false }
              });
              
                const mailOptions = {
                  from: 'vitor@gmail.com',
                  to: userConsultation.dataValues.user,
                  subject: 'AppSenac',
                  text: `O seu codigo de segurança é ${userConsultation.dataValues.key}`,
                //   html: email
                };
              
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email enviado: ' + info.response);
                  }
                });

            return res.json(updatePass).status(200);
        }
        catch(error)
        {
           console.log(error);
           return;
        }
    }
}