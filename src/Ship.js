const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");
class Ship {
  constructor(name, itin) {
    this.name = name;
    this.currentPort = itin.ports[0];
    this.atSea = false;
    this.previousPort = null;
    this.portsVisited = [];
    this.itinerary = itin;
    this.currentPort.addShip(this);
  }
  setSail() {
    this.atSea = true;
    this.portsVisited.push(this.currentPort);
    this.previousPort = this.portsVisited[this.portsVisited.length - 1]; // this should help with refactoring if the itinerary ends up able to take an arbitrary number of ports
    this.currentPort.removeShip(this);
    this.currentPort = null;
  }

  dock() {
    this.atSea = false;
    this.currentPort = this.itinerary.ports[1];
    this.currentPort.addShip(this);
  }
}

module.exports = Ship;
