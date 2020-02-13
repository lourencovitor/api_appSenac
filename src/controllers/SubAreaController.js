const SubArea = require("../models/SubArea");

module.exports = {
  async store(req, res) {
    const { description, active, area} = req.body;

    try{
        const createSub = await SubArea.create({
            description, 
            active, 
            area
        })

        return res.status(200).json(createSub);
    }
    catch(error){
        console.log(error);
        return
    }

   
  },
  async index(req, res) {
    try {
      const consult = await SubArea.findAll();
      res.status(200).json(consult);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo deu errado" });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;

      const consult = await SubArea.findOne({
        where: {
          id
        }
      });

      if (consult) {
        return res.status(200).json(consult);
      }

      return res.status(400).json({ message: "Nenhuma Area encontrada" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo deu errado" });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const consult = await SubArea.update(dados, {
        where: {
          id
        }
      });

      if (consult === 1) {
        return res
          .status(200)
          .json({ message: "Dados Atualizados com sucesso" });
      }

      return res.status(400).json({ message: "Dados Não podem ser alterados" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo deu errado" });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;

      const consult = await SubArea.destroy({
        where: {
          id
        }
      });

      if (consult) {
        res.status(200).json({ message: "Dados deletados com sucesso" });
      }

      res.status(200).json({ message: "Dados não deletados" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Algo deu errado" });
    }
  }
};
