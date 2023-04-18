const awesomeFunction = (req, res, next) => {
        res.json('Aurelia Gasmen');
};

const returnAnotherPerson = (req, res, next) => {
        res.json('Therese Lee Gasmen');
};

module.exports = { awesomeFunction, returnAnotherPerson };