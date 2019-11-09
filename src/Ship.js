const Itinerary = require('../src/Itinerary.js');

class Ship {
    constructor(name, itin) {
        this.name = name;
        this.currentPort = itin.ports[0];
        this.atSea = false;
        this.previousPort = null;
        this.portsVisited = [];
        this.itinerary = itin;
        //this.port = port;
    }

    setSail() {
        this.atSea = true;
        this.portsVisited.push(this.currentPort);
        this.previousPort = this.portsVisited[this.portsVisited.length - 1];// this should help with refactoring if the itinerary ends up able to take an arbitrary number of ports
        this.currentPort = null;
    };

    dock() {
        this.atSea = false;
        this.currentPort = this.itinerary.ports[1];
    }
};

module.exports = Ship;