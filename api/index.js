export const SEPERATOR = "|";

const split = (cardId) => cardId.split(SEPERATOR);

/**
 * @param { string } cardId
 * @return { number } A card value
 */
export const getValue = (cardId) => parseInt(split(cardId)[0], 10);

/**
 * @param { string } cardId
 * @return { string } A card suit
 */
export const getSuit = (cardId) => split(cardId)[1];

/**
 * @param { string } cardId
 * @return { [number, string] } A [value, suit] tuple
 */
export const getTuple = (cardId) => [getValue(cardId), getSuit(cardId)];
