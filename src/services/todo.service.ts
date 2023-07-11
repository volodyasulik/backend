import { User } from "../entities/User";
import { Repository } from "typeorm";

export default class TodoService {
  constructor(private repo: Repository<User>) {}
  async create(email: string) {
    const user = this.repo.create({ email });

    return this.repo.save(user);
  }
}
