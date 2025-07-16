const pool = require('../Database/db');
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) {
        return res.status(400).json({ error: "id and name are required" });
    }

    try {
        const result = await pool.query(
            'INSERT INTO users (id, name) VALUES ($1, $2) RETURNING *',
            [id, name]
        );
        // res.status(201).json(result.rows[0]);

        res.status(201).send({
            success: true,
            message: "Add User successfully",
            user: result.rows[0]
        });


    } catch (err) {
        console.error('Insert USER error:', err.message);
        res.status(500).json({ error: err.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        // res.status(200).json(result.rows);
        res.status(200).send({
            success: true,
            message: "Get All Users successfully",
            user: result.rows
        });
    } catch (err) {
        console.error('Get USERS error:', err.message);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // res.status(200).json(result.rows[0]);
        res.status(200).send({
            success: true,
            message: "Get Users by ID successfully",
            user: result.rows
        });
    } catch (err) {
        console.error('Get USER by ID error:', err.message);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};


// Update user by ID
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required to update' });
    }

    try {
        const result = await pool.query(
            'UPDATE users SET name = $1 WHERE id = $2 RETURNING *',
            [name, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // res.status(200).json(result.rows[0]);
        res.status(200).send({
            success: true,
            message: "Update Users by ID successfully",
            user: result.rows[0]
        });
    } catch (err) {
        console.error('Update USER error:', err.message);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // res.status(200).json({ message: 'User deleted successfully', user: result.rows[0] });
        res.status(200).send({
            success: true,
            message: "delete User by ID successfully",
            user: result.rows[0]
        });
    } catch (err) {
        console.error('Delete USER error:', err.message);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};


// Delete all users
exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM users RETURNING *');

        if (result.rows.length === 0) {
            return res.status(200).json({ message: 'No users found to delete' });
        }

        // res.status(200).json({ message: 'All users deleted successfully', deleted: result.rows });
        res.status(200).send({
            success: true,
            message: "All users deleted successfully",
            user: result.rows
        });

    } catch (err) {
        console.error('Delete ALL USERS error:', err.message);
        res.status(500).json({ error: 'Failed to delete all users' });
    }
};




exports.signUp = async (req, res) => {
    const { name, dob, gender, skills, email, password } = req.body;
    // console.log("req.body= ", req.body)
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await pool.query(
            'INSERT INTO users (name, dob, gender, skills, email, password) VALUES ($1, $2, $3, $4, $5, $6)',
            [name, dob, gender, skills, email, hashedPassword]
        );
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating user' });
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body;
    // console.log("req.body= ", req.body)
    const result = await pool.query('SELECT * FROM users WHERE email=$1', [email]);

    if (result.rows.length === 0) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Optional: issue JWT here
    // res.json({ id: user.id, name: user.name, email: user.email });
    res.status(200).send({
        success: true,
        message: "Login successfully",
        user: { id: user.id, name: user.name, email: user.email }
    });
}










// //export All functions from "Controller"
// module.exports = {
//     createUser, getAllUsers
// }
