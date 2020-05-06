var uppercase = function () { };

uppercase.register = function (Handlebars) {
    Handlebars.registerHelper('uppercase', function (aString) {
        return aString.toUpperCase()
    })
};

module.exports = uppercase;