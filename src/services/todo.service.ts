import { ITodo } from "../types/todos.type";
import { Todo } from "../entities/Todo";

export default class TodoService {
  async getAllTodos() {
    const todos: ITodo[] = await Todo.find();
    return todos;
  }
  async getTodoById(id: string) {
    const todo = await Todo.find({ where: { id } });

    return todo;
  }
  async createTodo(todoData: Todo) {
    const todo = await Todo.create(todoData);
    return todo.save();
  }
  async updateTodo(id: string, newBody: Todo) {
    const findTodo = await Todo.find({ where: { id } });
    if (!findTodo) {
      throw new Error("todo not found");
    }
    Object.assign(findTodo, newBody);
    return Todo.save(findTodo);
  }
  async removeTodo(id: string) {
    const todo = await Todo.find({ where: { id } });
    if (!todo) {
      throw new Error("todo not found");
    }
    return Todo.remove(todo);
  }
}
