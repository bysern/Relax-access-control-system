/*
RelaxSite is capable of storing:
- the name of the centre
- information about all the zones,
- information about doors 
- information about cards
It implements the enclosed RelaxCentre interface.
*/
class RelaxSite implements RelaxCentre {
    public centreName: string;
    public zoneName: string;
    public cardId: number;
    public doorNumber: number;
    public numberOfCardsInZone: string;
    public totalCards: string;

    constructor(centreName: string, zoneName: string, cardId: number, doorNumber: number,
        totalCards: string, numberOfCardsInZone: string, private zones: Array<Zone>,
        private cards: Array<Card>, private doors: Array<Door>) {
        this.centreName = centreName;
        this.zoneName = zoneName;
        this.cardId = cardId;
        this.doorNumber = doorNumber;
        this.totalCards = totalCards;
        this.numberOfCardsInZone = numberOfCardsInZone;
        this.zones = [new Zone("Outside", 1000, 0), new Zone("Reception", 100, 1),
        new Zone("Reception", 1, 1), new Zone("Sauna", 5, 2)];
        this.doors = [new Door(0, this.zones[0], this.zones[1])];
        this.cards = cards;
    }

    getCentreName = (): string => this.centreName;
    addZone = (zone: Zone): void => {
        this.zones.push(zone);
    }
    addCard = (card: Card): void => {
        this.cards.push(card);
    }

    addDoor = (door: Door): void => {
        this.doors.push(door);
    }

    findZone = (zoneName: string): Zone => this.zones.find(zone => zone.getZoneName() === zoneName)!;
    findCard = (cardId: number): Zone => {
        const card = this.cards.find(card => card.getMemberCardId() === cardId);

        for (let zone of this.zones) {
            if (zone.isCardInside(card)) {
                return zone;
            }
        }
        return this.zones[0];
    };
    move = (card: Card, doorNumber: number): string => {
        const door = this.doors.find(door => door.getDoorNumber() === doorNumber);
        const destinationZone = door.getDesitantionZone();
        const sourceZone = door.getSourceZone();

        if (!this.canMove) return "Sorry, you could not enter the zone";

        sourceZone.removeCard(card);
        destinationZone.addCard(card);

        return "You have entered this zone";
    }

    canMove = (card: Card, door: Door): boolean => {
        const destinationZone = door.getDesitantionZone();

        if (destinationZone.getNumberOfCards() >= destinationZone.getZoneCapacity()) return false;
        if (!card.hasEnoughCreditsToEnterZone()) return false;

        return true;
    };
    cardsInZone = (zone: Zone): string => {
        for (let card of zone.getCards()) {
            this.numberOfCardsInZone += card.toString()
        }
        return this.numberOfCardsInZone;
    };
    cardsInAllZones = (): string => {
        for (let zone of this.zones) {
            for (let card of zone.getCards()) {
                this.totalCards += card.toString();
            }
        }
        return this.totalCards;
    };
    moveToOutside = (card: Card): void => {
        this.move(card, 1);
    }
    moveAllToOutside = (): void => {
        for (let zone of this.zones) {
            for (let card of zone.getCards()) {
                this.moveToOutside(card);
            }
        }
    }
}