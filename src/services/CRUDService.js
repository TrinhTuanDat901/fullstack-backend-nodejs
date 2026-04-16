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

module.exports = {
    getAllUsers,
    getUserById
}