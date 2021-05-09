class Tester {
    public relaxSite: RelaxSite;

    testCentre = (): void => {
        const templateZones = [
            new Zone("Sun Bed", 1, 1),
            new Zone("Pool", 3, 10),
            new Zone("Sauna", 5, 2)
        ];

        const templateDoors = [
            new Door(0, this.relaxSite.findZone("Outside"), this.relaxSite.findZone("Reception")),
            new Door(2, this.relaxSite.findZone("Reception"), this.relaxSite.findZone("Pool")),
            new Door(3, this.relaxSite.findZone("Pool"), this.relaxSite.findZone("Reception")),
            new Door(4, this.relaxSite.findZone("Sauna"), this.relaxSite.findZone("Reception")),
            new Door(5, this.relaxSite.findZone("Reception"), this.relaxSite.findZone("Sun Bed")),
            new Door(6, this.relaxSite.findZone("Sun Bed"), this.relaxSite.findZone("Reception")),
            new Door(7, this.relaxSite.findZone("Pool"), this.relaxSite.findZone("Sauna")),
        ];

        for (let zone of templateZones) {
            this.relaxSite.addZone(zone);
        }
        for (let door of templateDoors) {
            this.relaxSite.addDoor(door);
        }
    }
}