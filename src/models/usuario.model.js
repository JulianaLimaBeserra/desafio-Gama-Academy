const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema(
  {
    nome_usuario: String,
    dataNascimento_usuario: String,
    telefone_usuario: String,
    email_usuario: String,
    profissao_usuario: String,
    estadoCivil_usuario: String,
    genero_usuario: String,
    cpf_usuario: { type: String, unique: true },
    tipo_usuario: { type: Number, default: 1 },
    endereco_usuario: {
      type: Object,
    },
    senha_usuario: String,
  },
  {
    timestamps: true,
  }
);

DataSchema.pre('save', function (next) {
  if (!this.isModified('senha_usuario')) {
    return next();
  }
  this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
  next();
});

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;
