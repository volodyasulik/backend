import { User } from "../entities/User";
import { Repository } from "typeorm";
import AppDataSource from "../config/database";

export default class TodoService {
  constructor(private repo: typeof AppDataSource) {}
  async create(email: string) {
    // const user = this.repo.manager.create({ email });
    const user = new User();
    user.email = email;
    return this.repo.manager.save(user);
  }
}
