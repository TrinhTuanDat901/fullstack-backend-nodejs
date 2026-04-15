const connection = require('../config/database');
const { get } = require('../routes/web');

const {getAllUsers} = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    //res.send('Hello World!')

    // let user = [];
    // connection.query(
    //     'Select * from Users u',
    //     (err, results, fields) => {
    //         user = results;
    //         console.log(">>> results:", results); // results contains rows returned by server
    //        res.send(JSON.stringify(user));
    //     }
    // );
    
    let rows = await getAllUsers()
    return res.render('home.ejs', {listUsers: rows});
}

const getABC = (req, res) => {
    res.send('check abc')
}

const getFrog = (req, res) => {
    res.render('sample.ejs')
}

// Create new user
const createNewUser = async (req, res) => {
    console.log('>>> check req.body:', req.body)

    // let email = req.body.email
    // let name = req.body.name
    // let city = req.body.city

    let { email, name, city } = req.body
    console.log('>>> check email:', email, '>>> check name:', name, '>>> check city:', city)

    // connection.query(
    //     'insert into Users (email, name, city) values (?, ?, ?)',
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(">>> results:", results); // results contains rows returned by server
    //         res.send('Create new user succeed!')
    //     }
    // );

    let [results, fields] = await connection.query('insert into Users (email, name, city) values (?, ?, ?)', [email, name, city])
    console.log(">>> rows:", results);
    res.send('Create new user succeed!')
}

// User redirect into create page
const getCreatePage = (req, res) => {
    return res.render('create.ejs');
}

module.exports = {
    getHomePage,
    getABC,
    getFrog,
    createNewUser,
    getCreatePage
}