const express = require('express');
const user_router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    deleteAllUsers
} = require('../Controllers/user');




// Add user
user_router.post('/add', createUser);

// GET all users
user_router.get('/get', getAllUsers);

// GET a user by ID
user_router.get('/:id', getUserById);

user_router.put('/:id', updateUser);


user_router.delete('/delete_all', deleteAllUsers); // DELETE all users

user_router.delete('/:id', deleteUser);





module.exports = user_router;
