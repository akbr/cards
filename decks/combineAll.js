import { SEPERATOR } from "../api/";

const flatten = (array) =>
  Array.isArray(array) ? [].concat(...array.map(flatten)) : array;

export default (suits, values, seperator = SEPERATOR) =>
  flatten(suits.map((s) => values.map((v) => [v, s].join(SEPERATOR))));
