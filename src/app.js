import express from 'express';
import session from 'express-session';
import defaultRouter from './routers/render.routes.js';
import productsRouter from './routers/products.routes.js';
import testRouter from './routers/test.routes.js';

//configure Express.js app
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next ) => {
    if (req.session.user) {
        req.user = req.session.user;
    } else {
        req.user = null;
    }
    next();
});

//routers
app.use("/", defaultRouter);
app.use("/api/", productsRouter )
//test routes
app.use('/test/',testRouter)
export default app;