const awesomeFunction = (req, res, next) => {
        res.json('Aurelia Gasmen');
};

const returnAnotherPerson = (req, res, next) => {
        res.json('Super Awesome Person');
};

module.exports = { awesomeFunction, returnAnotherPerson };