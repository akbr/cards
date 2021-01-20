export const cardView = (template = "") =>
  `<div class="card">${template}</div>`;

export const backView = () => `<div class="back"></div>`;

export const faceView = ({ valueGlyph, suitGlyph, color }) => `
<div class="face" style="fill: ${color}">
  <div class="corner">
    ${
      valueGlyph
        ? `<svg class="icon value">
      <use href="#card-${valueGlyph}">
        </use>
    </svg>`
        : ``
    }
    <svg class="icon suit">
      <use href="#card-${suitGlyph}">
        </use>
    </svg>
  </div>
  <div class="main ${suitGlyph}">
    <svg class="icon">
      <use href="#card-${suitGlyph}" </use>
    </svg>
  </div>
</div>
`;
