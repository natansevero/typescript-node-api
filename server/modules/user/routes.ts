import UserController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = (res, statusCode, data) => {
  res.status(statusCode).json({ 'result': data });
}

class UserRoutes {
  constructor() {

  }

  getAll(req, res) {
    UserController
      .getAll()
      .then(users => sendResponse(res, httpStatus.OK, users))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }

  getById(req, res) {
    const id = { _id: req.params.id };
    if(!id) {
      sendResponse(res, httpStatus.OK, 'Usuário não foi encontrado')
    }

    UserController
      .getById(id)
      .then( user => sendResponse(res, httpStatus.OK, user) )
      .catch( err => console.log.bind(console, `Erro: ${ err }`) )
  }

  create(req, res) {
    const user = req.body;
    UserController
      .create(user)
      .then(user => sendResponse(res, httpStatus.CREATED, "Usuário criado com sucesso!" ))
      .catch(err => console.log.bind(console, `Erro: ${ err }`) )
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const user = req.body;
    UserController
      .update(id, user)
      .then(user => sendResponse(res, httpStatus.OK, 'Usuário atualizado!'))
      .catch(err => console.log.bind(console, `Erro: ${ err }`) )
  }

  delete(req, res) {
    const id = { _id: req.params.id };
    UserController
      .delete(id)
      .then(result => sendResponse(res, httpStatus.OK, result))
      .catch(err => console.log.bind(console, `Erro: ${ err }`))
  }
}

export default new UserRoutes();
