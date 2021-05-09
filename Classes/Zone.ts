/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

class Zone {
    private cards: Array<Card> = new Array<Card>();

    public constructor(
        private zoneName: String,
        private zoneCapacity: number,
        private zoneRating: number
    ) {
        this.zoneName = zoneName;
        this.zoneCapacity = zoneCapacity;
        this.zoneRating = zoneRating;
    }

    getNumberOfCards = (): number => this.cards.length;

    addCard = (card: Card): void => {
        this.cards.push(card);
    }

    removeCard = (card: Card): void => {
        const index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }

    getZoneName(): String {
        return this.zoneName;
    }

    getZoneCapacity(): Number {
        return this.zoneCapacity;
    }
    getZoneRating(): Number {
        return this.zoneRating;
    }

    getCards(): Array<Card> {
        return this.cards;
    }

    isCardInside = (card: Card): boolean => this.cards.includes(card);
}
