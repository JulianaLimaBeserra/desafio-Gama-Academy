const Usuario = require('../models/usuario.model');

module.exports = {
  async index(req, res) {
    const user = await Usuario.find();

    res.json(user);
  },
  async create(req, res) {
    const {
      nome_usuario,
      dataNascimento_usuario,
      telefone_usuario,
      email_usuario,
      profissao_usuario,
      estadoCivil_usuario,
      genero_usuario,
      cpf_usuario,
      tipo_usuario,
      endereco_usuario,
      senha_usuario,
    } = req.body;

    let data = {};

    let user = await Usuario.findOne({ cpf_usuario });

    if (!user) {
      data = {
        nome_usuario,
        dataNascimento_usuario,
        telefone_usuario,
        email_usuario,
        profissao_usuario,
        estadoCivil_usuario,
        genero_usuario,
        cpf_usuario,
        tipo_usuario,
        endereco_usuario,
        senha_usuario,
      };

      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
   async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    res.json(user);
  },
};
