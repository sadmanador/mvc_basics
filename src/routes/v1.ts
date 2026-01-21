import { Router } from "express";
import { userController } from "../controllers";

const router = Router();

router.get("/users", (req, res) =>
    userController.getAllUsers(req, res)
);

router.get("/users/:id", (req, res) =>
    userController.getUserById(req, res)
);

// POST - Insert One User
router.post("/users", (req, res) =>
    userController.createUser(req, res)
);

// POST - Insert Many Users
router.post("/users/bulk", (req, res) =>
    userController.createManyUsers(req, res)
);

export default router;