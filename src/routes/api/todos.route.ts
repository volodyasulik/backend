import { Router } from "express";

import todoController from "../../controllers/todo.controller";
import { tryCatch } from "../../middlewares/tryCatch.middleware";
import { validateBody } from "../../middlewares/validator.middlewares";

const todosRouter: Router = Router();

todosRouter
  .route("/")
  .get(tryCatch(todoController.getAllTodos.bind(todoController)))
  .post(validateBody, tryCatch(todoController.createTodo.bind(todoController)));
todosRouter
  .route("/:id")
  .get(tryCatch(todoController.getTodoById.bind(todoController)))
  .delete(tryCatch(todoController.removeTodo.bind(todoController)))
  .patch(
    validateBody,
    tryCatch(todoController.updateTodo.bind(todoController))
  );

export default todosRouter;
