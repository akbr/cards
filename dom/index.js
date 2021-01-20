import "./styles.css";

import html from "./html";
import appendSvg from "./appendSvg";
import { cardView, backView, faceView } from "./templates";
import getSpec from "./specs";

function createCardEl(id) {
  let info = id ? getSpec(id) : false;
  return info ? html(cardView(faceView(info))) : html(cardView(backView()));
}

export default function createElFactory() {
  appendSvg();

  let faces = {};

  function addCardEl(id) {
    let cardEl = createCardEl(id);
    if (id && id !== false) {
      cardEl.id = id;
      faces[id] = cardEl;
    }
    return cardEl;
  }

  function getCardEl(id) {
    return faces[id] ? faces[id] : addCardEl(id);
  }

  /**
   * Returns a card element.
   * @param { string[] | string } cardIds
   * @return { HTMLElement[] }
   */
  function getEl(cardIds) {
    cardIds = Array.isArray(cardIds) ? cardIds : [cardIds];
    return cardIds.map(getCardEl);
  }

  return getEl;
}
