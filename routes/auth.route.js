import express from "express";
import { loginGet, loginPost, logout, registerGet, registerPost } from "../controllers/auth.controller";

const router = express.Router();

router.route('/login')
    .get(loginGet)
    .post(loginPost);

router.get('/logout', logout);

router.route('/register')
    .get(registerGet)
    .post(registerPost);

export default router;