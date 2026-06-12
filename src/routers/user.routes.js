import Router from 'express';
import { register, login, logout } from '../controllers/user.controllers.js';

const router = new Router();

// Register
router.get("/register");
router.post("/register", register);

// Login
router.get("/login");
router.post("/login", login);

// Logout
router.post("/logout", logout);

