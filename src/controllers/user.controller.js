import { } from '../services/user.service.js';

const register = async (req, res) => {
    // Create a new user account
    // Redirect to /login
}

const login = async (req, res) => {
    // Validate credentials

    // Create a new session
    // Redirect to /products
};

const logout = (req, res) => {
    // Destroy the session
    // Redirect to /login
};

export default { register, login, logout };