class MemberCard {
  private static currentId = 1000;
  private cardId: number;

  /**
   * Constructor for a Member's card
   * @param {string} memberName - member's name
   * @param {number} rating - member's rating
   * @param {number} credits - inital number of credits
   * @param {string} centre - centre at which a member is registered
   */
  constructor(
    private memberName: string,
    private rating: number,
    private credits: number,
    private centre: string
  ) {
    this.cardId = MemberCard.currentId++;
  }

  /**
   * @return {string} member's name
   */
  public getName = (): string => this.memberName;

  /**
   * @return {number} member's id
   */
  public getId = (): number => this.cardId;

  /**
   * changes a member's rating
   * @param {number} rating - new rating
   */
  public changeRating = (rating: number): void => {
    this.rating = rating;
  };

  /**
   * @return {number} member's rating
   */
  public getRating = (): number => this.rating;

  /**
   * adds credits to the member's card
   * @param {number} credits number of credits to be added
   */
  public addCredits = (credits: number): void => {
    this.credits += credits;
  };

  /**
   * decrements the credits to show that a zone has been use
   */
  public useZone = (): void => {
    this.credits -= 4;
  };

  /**
   * @return {number} number of credits on the card
   */
  public getCredits = (): number => this.credits;

  /**
   * @return {boolean} true if a card has enough credits to enter a zone,
   * else false
   */
  public hasEnoughCredits = (): boolean => this.credits >= 4;

  /**
   * @return {string} a String representation of the member card details
   */
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
