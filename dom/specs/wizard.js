export default function getWizardSpec(_, suit) {
  return {
    suitGlyph: suit === "w" ? "W" : "E",
    valueGlyph: false,
    color: "blue"
  };
}
