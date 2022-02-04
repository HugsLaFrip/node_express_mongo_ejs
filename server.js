/**
 * General imports
 */
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
import dbConnect from "./config/db";

/**
 * Route imports
 */

import home from './routes/home.route';
import auth from './routes/auth.route';

/**
 * Instanciation
 */
const app = express();

/**
 * Set static path
 * Recup data
 * Flash data logic
 * Set template engine and path
 */
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/**
 * Route instance
 */
app.use('/', home);
app.use('/auth', auth);

/**
 * Server listening
 */
app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
})