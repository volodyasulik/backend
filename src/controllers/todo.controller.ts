import { Response, Request, NextFunction } from "express";
import TodoService from "../services/todo.service";
import { AppError } from "../utils/appError";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodos(_: Request, res: Response) {
    const todos = await this.todoService.getAllTodos();
    if (todos && todos.length > 0) {
      res.status(200).json({
        todos,
      });
    } else {
      throw new Error("Opssss...");
    }
  }
  async getTodoById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    const todo = await this.todoService.getTodoById(req.params.id);
    if (!todo) {
      return next(new AppError("Can't be find tour with this ID", 404));
    }
    res.status(200).json({ todo });
  }
  async createTodo(req: Request, res: Response, next: NextFunction) {
    await this.todoService.createTodo(req.body);
    res.status(201).json({ message: "success!" });
  }
  async updateTodo(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    await this.todoService.updateTodo(req.params.id, req.body);
    res.status(201).json({ message: "success!" });
  }
  async removeTodo(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    await this.todoService.removeTodo(req.params.id);
    res.status(201).json({ message: "success!" });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
