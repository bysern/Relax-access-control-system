/**
 * A card is used to move through a door.
 */

interface Card {
    memberCardId: number;
    getMemberCardId(): number;
    getMemberName(): string;
    hasEnoughCreditsToEnterZone(): boolean;
    creditsToUseZone(): void; //how many credits to be deducted when entering zone
    getCardRating(): number;
    getCredits?(): number;
    toString?(): string;
}
