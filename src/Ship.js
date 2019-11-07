//
class Ship {
    constructor(name, startingPort)
    {
    this.name = name;
    this.startingPort = startingPort;
    this.atSea = false;
}

setSail() {
this.atSea = true;
}
};

//test

module.exports = Ship;