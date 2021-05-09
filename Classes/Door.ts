/**
 * A door provides a one-way connection between two zones. It
 * has a door number and information about both the source and
 * the destination zone
 *
 */
class Door {
    constructor(
        private doorNumber: number,
        private sourceZone: Zone,
        private destinationZone: Zone
    ) {
        this.doorNumber = doorNumber;
        this.sourceZone = sourceZone;
        this.destinationZone = destinationZone;
    }

    getDoorNumber(): number {
        return this.doorNumber;
    }

    getSourceZone(): Zone {
        return this.sourceZone;
    }

    getDesitantionZone(): Zone {
        return this.destinationZone;
    }
}


