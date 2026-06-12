import Router from 'express';
import { register, login, logout } from '../controllers/user.controller.js';

const router = new Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

export default router;