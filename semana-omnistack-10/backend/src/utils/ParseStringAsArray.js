module.exports = function (ParseStringAsArray) {
    return techs.split(',').map(tech => tech.trim());
}