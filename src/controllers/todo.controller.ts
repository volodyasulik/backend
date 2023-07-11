import { Response, Request } from "express";
import TodoService from "../services/todo.service";
import { User } from "../entities/User";
import { getRepository, Repository, getConnection } from "typeorm";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async create(
    req: Request<{
      body: {
        email: string;
      };
    }>,
    res: Response
  ) {
    // TODO: Write your implementation here
    const todos = await this.todoService.create(req.body.email);
    res.send(todos);
  }
}

// const userRepository: Repository<User> = getRepository(User);
const todoController = new TodoController(new TodoService());
export default todoController;
