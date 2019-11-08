const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

const testPort1 = new Port("testPort1");
const testPort2 = new Port("testPort2");
const testItin = new Itinerary([testPort1, testPort2])

describe("ship is created", () => {
    //beforeEach(() => {
    it("creates an object", () => {
        const hmsGoodTimes = new Ship('Good Times', testItin);
        expect(hmsGoodTimes).toBeInstanceOf(Object);
    });

    it("has a starting point for a ship", () => {
        const hmsGoodTimes = new Ship('Good Times', testItin);
        expect(hmsGoodTimes.currentPort).toBeTruthy();
    });
});

describe("ship has a Port object", () => {
    it("has a starting point for a ship", () => {
        const ports = new Itinerary([new Port('Moscow')]);
        const hmsGoodTimes = new Ship('Good Times', ports);
        expect(hmsGoodTimes.currentPort).toBeInstanceOf(Object);
    });
});

describe("Checks ports status", () => {
    it("Ports are logged to portsVisited", () => {
        const ports = new Itinerary([new Port('Moscow')]);
        const hmsGoodTimes = new Ship('Good Times', ports);
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.portsVisited.length).toBeGreaterThan(0);
    })
    it("Current port empty when at sea", () => {
        const ports = new Itinerary([new Port('Moscow')]);
        const hmsGoodTimes = new Ship('Good Times', ports);
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.currentPort).toBe('');
    })
});

describe("ship sets sail", () => {
    it("it is at sea after setSail", () => {
        const ports = new Itinerary([new Port('UAE')]);
        const hmsGoodTimes = new Ship('Good Times', ports);
        expect(hmsGoodTimes.setSail).toBeTruthy();
    })
    it("at sea", () => {
        const ports = new Itinerary([new Port('Andorra')]);
        const hmsGoodTimes = new Ship('Good Times', ports)
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.atSea).toBe(true);
    })
    it("added port to ports visited", () => {
        const ports = new Itinerary([new Port('ShenZen'), new Port('Montenegro')]);
        const hmsGoodTimes = new Ship('Good Times', ports)
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.portsVisited[0]).toStrictEqual(new Port('ShenZen'));
    })

    describe("Checks dock function", () => {
        it("dock attempt", () => {
            const ports = new Itinerary([new Port('Andorra'), new Port('Ulaanbaatar')])
            const hmsGoodTimes = new Ship('Good Times', ports)
            hmsGoodTimes.setSail();
            hmsGoodTimes.dock();
            expect(hmsGoodTimes.atSea).toBe(false);
        })
        it("Current port is docked port", () => {
            const ports = new Itinerary([new Port('Andorra'), new Port('Ulaanbaatar')])
            const hmsGoodTimes = new Ship('Good Times', ports);
            hmsGoodTimes.setSail();
            hmsGoodTimes.dock();
            expect(hmsGoodTimes.currentPort).toStrictEqual(new Port('Ulaanbaatar'));
        })
    })
});