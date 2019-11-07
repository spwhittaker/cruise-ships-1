
class Ship {
    constructor(name, startingPort)
    {
    this.name = name;
    this.currentPort = startingPort;
    this.atSea = false;
    this.portsVisited = [];
    //this.port = port;
}

setSail() {
this.atSea = true;
this.portsVisited.push(this.currentPort);
this.currentPort = '';
};

dock(newPort) {
this.atSea = false;
this.currentPort = newPort;
}};


module.exports = Ship;