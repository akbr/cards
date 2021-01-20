import combineAll from "./combineAll";

/**
 * Create an array representing a standard deck.
 * @return { string[] } array of cardIds
 */
export function standard() {
  const suits = ["c", "h", "s", "d"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return combineAll(suits, values);
}

/**
 * Create an array representing add-ins for a Wizard deck.
 * @return { string[] } array of cardIds
 */
export function wizardAddIn() {
  const suits = ["w", "j"];
  const values = [1, 2, 3, 4];
  return combineAll(suits, values);
}

/**
 * Create an array representing a full Wizard deck.
 * @return { string[] } array of cardIds
 */
export function wizard() {
  return [...standard(), ...wizardAddIn()];
}
