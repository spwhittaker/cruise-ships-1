
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

<<<<<<< HEAD
dock(newPort) {
this.atSea = false;
this.currentPort = newPort;
}};

=======
//test
>>>>>>> d8d5826117a0a2342b860e247c0581d561801ee0

module.exports = Ship;