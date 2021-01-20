import { getValue, getSuit } from "../api";

/**
 * @param {any[]} arr
 * @return {any[]} A shuffled copy of the array.
 */
export const shuffle = (arr) => {
  let m = arr.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

/**
 * @param {string[]} suitOrder
 * @param {string[]} cardIds
 * @return {string[]} A reordered array of cardIds
 */
export const sortDeck = (suitOrder = ["s", "h", "c", "d"], cardIds) => {
  let sorted = getSortedSuits(cardIds);
  return mergeSortedDeck(sorted, suitOrder);
};

const getSortedSuits = (deck) => {
  let sorted = deck.reduce((acc, curr) => {
    let suit = getSuit(curr);
    if (!acc[suit]) acc[suit] = [];
    acc[suit].push(curr);
    return acc;
  }, {});
  for (let key in sorted) {
    sorted[key] = sorted[key].sort((a, b) => getValue(a) - getValue(b));
  }
  return sorted;
};

const mergeSortedDeck = (sorted, suitOrder) => {
  let deck = [];
  suitOrder.forEach((suit) => {
    if (sorted[suit]) deck.push(...sorted[suit]);
  });
  return deck;
};
