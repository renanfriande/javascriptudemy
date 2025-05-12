import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Maria',
        sobrenome: 'Friande',
        email: 'maria@gmail.com',
        idade: 23,
        peso: 57,
        altura: 1.6,
      });
      res.json(novoAluno);
    } catch (e) {
      console.error('ERRO AO CRIAR ALUNO:', e);
      res.status(400).json({ error: e.message });
    }
  }
}

export default new HomeController();
