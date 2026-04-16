const connection = require('../config/database');

const getAllUsers = async (req, res) => {
    const [rows, fields] = await connection.query('Select * from Users')
    return rows;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (userId, email, name, city) => {
    let [rows, fields] = await connection.query(`update Users set email = ?, name = ?, city = ? where id = ?`, [email, name, city, userId]);
    return rows;
}

const deleteUserById = async (userId) => {
    let [rows, fields] = await connection.query(`delete from Users where id = ?`, [userId]);
    return rows;
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}