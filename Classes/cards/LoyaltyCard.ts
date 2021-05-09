class LoyaltyCard implements Card {
  private static currentId = 2000;
  memberCardId: number;
  private loyaltyPoints: number;

  constructor(
    private memberName: string,
    private rating: number,
    private cardCredits: number

  ) {
    this.memberName = memberName;
    this.rating = rating;
    this.cardCredits = cardCredits;
    this.memberCardId = LoyaltyCard.currentId++;
    this.loyaltyPoints = 20;

  }
  public getMemberCardId = (): number => this.memberCardId;

  public getMemberName = (): string => this.memberName;

  public changeRating = (rating: number): void => {
    this.rating = rating;
  };

  public getCardRating = (): number => this.rating;

  public addCredits = (credits: number): void => {
    this.cardCredits += credits;
  };

  public hasEnoughCreditsToEnterZone = (): boolean => this.cardCredits >= 4;

  public creditsToUseZone = (): void => {
    this.cardCredits -= 4;
    this.loyaltyPoints += 2;
  };

  public getCredits = (): number => this.cardCredits;

  public toString = (): string =>
    "***Member Card***" +
    "\nCard No: " +
    this.memberCardId +
    "\nName: " +
    this.memberName +
    "\nRating: " +
    this.rating +
    "\nCredits: " +
    this.cardCredits +
    "\nLoyalty Points: " +
    this.loyaltyPoints +
    "\n";
}