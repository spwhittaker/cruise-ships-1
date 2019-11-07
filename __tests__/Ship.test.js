const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');



describe("ship is created", () => {
    //beforeEach(() => {
    it("creates an object", () => {
        const hmsGoodTimes = new Ship('Good Times', 'Berlin');
        expect(hmsGoodTimes).toBeInstanceOf(Object);
    });

    it("has a starting point for a ship", () => {
        const hmsGoodTimes = new Ship('Good Times', 'Berlin');
        expect(hmsGoodTimes.currentPort).toBeTruthy();
    });
});

describe("ship has a Port object", () => {
    it("has a starting point for a ship", () => {
        const moscowPort = new Port('Moscow');
        const hmsGoodTimes = new Ship('Good Times', moscowPort);
        expect(hmsGoodTimes.currentPort).toBeInstanceOf(Object);
    });
});

describe("Checks ports status", () => {
    it("Ports are logged to portsVisited", () => {
        const moscowPort = new Port('Moscow');
        const hmsGoodTimes = new Ship('Good Times', moscowPort);
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.portsVisited.length).toBeGreaterThan(0);
    })
    it("Current port empty when at sea", () => {
        const moscowPort = new Port('Moscow');
        const hmsGoodTimes = new Ship('Good Times', moscowPort);
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.currentPort).toBe('');
    })
});

describe("ship sets sail", () => {
    it("it is at sea after setSail", () => {
        const hmsGoodTimes = new Ship('Good Times', 'UAE');
        expect(hmsGoodTimes.setSail).toBeTruthy();
    })
    it("at sea", () => {
        const hmsGoodTimes = new Ship('Good Times', 'Andorra')
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.atSea).toBe(true);
    })
    it("added port to ports visited", ()  => {
        const hmsGoodTimes = new Ship('Good Times', )

    })

describe("Checks dock function", () => {
    it("at sea", () => {
        const ulaanbaatarPort = new Port('Ulaanbaatar')
        const hmsGoodTimes = new Ship('Good Times', ulaanbaatarPort)
        const moscowPort = new Port('Moscow');
        hmsGoodTimes.setSail();
        hmsGoodTimes.dock(moscowPort);
        expect(hmsGoodTimes.atSea).toBe(false);
    })
    it("Current port is docked port", () => {
        const ulaanbaatarPort = new Port('Ulaanbaatar')
        const hmsGoodTimes = new Ship('Good Times', ulaanbaatarPort)
        const moscowPort = new Port('Moscow');
        hmsGoodTimes.setSail();
        hmsGoodTimes.dock(moscowPort);
        expect(hmsGoodTimes.currentPort).toBe(moscowPort);
    })
    
})
});



/*describe("ship is launched", () => {
    it("creates an object", () => {
        const hmsGoodTimes = new Ship;
        expect(hmsGoodTimes).toBeInstanceOf(Object);
    });

    it("has a starting port for a ship", () => {
        const moscow = new Port;
        const hmsGoodTimes = new Ship(port);
        expect(hmsGoodTimes.currentPort).toBe(port);
    });
});

describe("ship sets sail", () => {
    it("it is at sea after setSail", () => {
        const hmsGoodTimes = new Port('Good Times', 'UAE');
        expect(hmsGoodTimes.setSail).toBeTruthy();
    });
    it("at sea", () => {
        const hmsGoodTimes = new Ship('Good Times', 'Andorra')
        hmsGoodTimes.setSail();
        expect(hmsGoodTimes.atSea).toBe(true);
    });
});*/



