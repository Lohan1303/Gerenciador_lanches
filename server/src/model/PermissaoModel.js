const mongoose = require('mongoose');

const PermissaoLancheSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true, // A data é obrigatória
  },
  lanches: [
    {
      alunoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno', // Referência ao modelo de Aluno (você precisará de um modelo Aluno separado)
        required: true, // O aluno é obrigatório
      },
      quantidade: {
        type: Number,
        default: 3, // Por padrão, cada aluno terá direito a 3 lanches
        required: true, // A quantidade de lanches também é obrigatória
      },
    },
  ],
});

const PermissaoLanche = mongoose.model('PermissaoLanche', PermissaoLancheSchema);
module.exports = PermissaoLanche;
