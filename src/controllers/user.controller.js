import { createUser, findUserByUsername, validatePassword } from '../services/user.service.js';

export const register = async (req, res) => {
    const { username, password, confirm } = req.body;
    // Validate inputs
    // All fields required
    if (!username || !password || !confirm) {
        return res.redirect("/register");
    }

    // Passwords dont' match
    if (password !== confirm) {
        return res.redirect("/register");
    }

    // Create a new user account
    await createUser(username, password);
    // Redirect to /login
    return res.redirect("/login");
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    // Validate Credentials
    
    // All fields required
    if (!username || !password) {
        res.redirect("/login");
    }

    const user = await findUserByUsername(username);
    // Account does not exist
    if (!user) {
        return res.redirect("/login");
    }

    // Invalid password 
    if (!await validatePassword(password, user.password)) {
        return res.redirect("/login");
    }

    // Create a new session
    req.session.user = {
        userId: user.id,
        username: user.username
    }

    // Redirect to /products
    return res.redirect("/products")
};

export const logout = (req, res) => {
    // Destroy the session
    console.log(req.session);
    // Redirect to /login
    req.session.destroy(() => res.redirect("/login"));
};

// Authorization Middleware

export const isLoggedIn = (req, res, next) => {
if (!req.user) {
    if (req.originalUrl.startsWith('/api/'))  {
        return res.status(401).json({ message: 'Unauthorized' });
    }
        return res.redirect("/login"); 
     next();
    }
};