const connection = require('../config/database');

const getAllUsers = async (req, res) => {
    const [rows, fields] = await connection.query('Select * from Users')
    return rows;
}

module.exports = {
    getAllUsers
}