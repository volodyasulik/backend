import { Router } from "express";

import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.post("/create", todoController.create.bind(todoController));

export default todosRouter;
