const Itinerary = require('../src/Itinerary.js');

class Ship {
    constructor(name, itin) {
        this.name = name;
        this.currentPort = itin.ports[0];
        this.atSea = false;
        this.portsVisited = [];
        this.itinerary = itin;
        //this.port = port;
    }

    setSail() {
        this.atSea = true;
        this.portsVisited.push(this.currentPort);
        this.currentPort = '';
    };

    dock() {
        this.atSea = false;
        this.currentPort = this.itinerary.ports[1];
    }
};

module.exports = Ship;