import express from 'express';
import session from 'express-session';
import renderRouter from './routers/render.routes.js';
import productsRouter from './routers/products.routes.js';
import userRouter from './routers/user.routes.js';

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

/** Middleware **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

// Attach session.user to user
app.use((req, res, next ) => {
    if (req.session.user) {
        req.user = req.session.user;
    } else {
        req.user = null;
    }
    next();
});

// Makes user accessible in all rendered pages
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

/** Routers **/
// Front-End Routes
app.use("/", renderRouter);
app.use("/", userRouter);

// Back-End Routes
app.use("/api/", productsRouter);

export default app;