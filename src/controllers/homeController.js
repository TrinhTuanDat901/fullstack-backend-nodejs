const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('Hello World!')
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