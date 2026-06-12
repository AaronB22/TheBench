import db from '../db/db.js';
import bcrypt from 'bcrypt';

// Create user
export const createUser = async (username, plainPassword) => {
    // Encrypt
    if (!username) throw new Error("Username is required");
    if (!plainPassword) throw new Error("Password is required");
    
    const password = await hashPassword(plainPassword);

    const [result] = await db.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password]
    );

    return { 
        userId: result.insertId,
        username,
    }
}

export const hashPassword = async (plainPassword) => {
    const saltRounds = 10;
    return await bcrypt.hash(plainPassword, saltRounds);
}

// Get User
export const findUserByUsername = async (username) => {
    // code
    const [results] = await db.query(
        "SELECT id, username, password FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    return results[0];
}

// Validate user
export const validatePassword = async (plainPassword,storedHash) => await bcrypt.compare(plainPassword,storedHash);