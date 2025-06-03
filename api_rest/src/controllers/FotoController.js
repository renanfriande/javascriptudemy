// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const aluno = await Aluno.findByPk(aluno_id);

        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno nao existe.'],
          });
        }

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Ocorreu um erro ao salvar a foto.'],
        });
      }
    });
  }
}

export default new FotoController();
