import User from './repository';

class UserController {
  constructor() {

  }

  getAll() {
    return User.find({});
  }

  getById(id) {
    return User.findById(id);
  }

  create(user) {
    return User.create(user);
  }

  update(id, user) {
    const updatedUser = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    return User.findByIdAndUpdate(id, updatedUser);
  }

  delete(id) {
    return User.remove(id);
  }
}

export default new UserController();
