const visuals = {
  suitColors: {
    c: "black",
    h: "#DC143C",
    s: "black",
    d: "#DC143C"
  },
  valueGlyphs: {
    11: "J",
    12: "Q",
    13: "K",
    14: "A"
  }
};

export default function getStandardSpec(value, suit) {
  return {
    suitGlyph: suit,
    valueGlyph: visuals.valueGlyphs[value] || value,
    color: visuals.suitColors[suit]
  };
}
