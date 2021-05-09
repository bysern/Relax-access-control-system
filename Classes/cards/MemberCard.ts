class MemberCard implements Card {
  private static currentId = 1000;
  cardId: number;

  constructor(
    private memberName: string,
    private rating: number,
    private credits: number,
    private centre: string
  ) {
    this.rating = rating;
    this.credits = credits;
    this.cardId = MemberCard.currentId++;
    this.centre = centre;
  }
  memberCardId: number;

  public getMemberName = (): string => this.memberName;
  public getMemberCardId = (): number => this.cardId;
  public getCardRating = (): number => this.rating;

  public creditsToUseZone = (): number => this.rating;

  public addCredits = (credits: number): void => {
    this.credits += credits;
  };

  public useZone = (): void => {
    this.credits -= 4;
  };

  public getCredits = (): number => this.credits;

  public hasEnoughCreditsToEnterZone = (): boolean => this.credits >= 4;


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
    "\nRelax Centre : " +
    this.centre +
    "\n";
}