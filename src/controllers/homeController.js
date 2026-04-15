const connection = require('../config/database')

const getHomePage = (req, res) => {
    //process data
    //call model
    //res.send('Hello World!')

    let user = [];
    connection.query(
        'Select * from Users u',
        (err, results, fields) => {
            if (err) {
                console.log(">>> err:", err);
                return;
            }
            user = results;
            console.log(">>> results:", results); // results contains rows returned by server

           res.send(JSON.stringify(user));
        }
    );
}

const getABC = (req, res) => {
    res.send('check abc')
}

const getFrog = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getFrog
}