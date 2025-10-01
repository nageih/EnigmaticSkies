//priority: 1005
function getID(name) {
    return name
        .toLowerCase()
        .replace(/'/, '')
        .replace(/[^a-z]+/g, '_');
}
