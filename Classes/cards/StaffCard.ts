class StaffCard implements Card {
    private static currentId = 50000;
    cardId: number;
    private fitnessScore = 0;

    constructor(
        private memberName: string,
        private rating: number,
        private credits: number,

    ) {
        this.rating = rating;
        this.credits = credits;
        this.cardId = StaffCard.currentId++;
    }
    memberCardId: number;

    public getMemberName = (): string => this.memberName;


    public getMemberCardId = (): number => this.cardId;

    public getCardRating = (): number => this.rating;

    public creditsToUseZone = (): void => {
        this.fitnessScore += 1;
    };

    public hasEnoughCreditsToEnterZone = (): boolean => true;


    public toString = (): string =>
        "***Member Card***" +
        "\nCard No: " +
        this.cardId +
        "\nName: " +
        this.memberName +
        "\nRating: " +
        this.rating +
        "\nCredits: " +
        this.credits +
        "\nFitness score: " +
        this.fitnessScore +
        "\n";
}