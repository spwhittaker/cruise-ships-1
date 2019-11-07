const Port  = require("../src/Port.js")

describe("Port", () => {
    it('creates a port', () => {
        const moscow = new Port('Moscow');
        expect(moscow).toBeInstanceOf(Object);
    })
});