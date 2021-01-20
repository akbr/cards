import { getTuple } from "../../api";
import getStandardSpec from "./standard";
import getWizardSpec from "./wizard";

export default function getSpec(id) {
  let [value, suit] = getTuple(id);
  let spec =
    ["c", "h", "s", "d"].indexOf(suit) > -1
      ? getStandardSpec(value, suit)
      : getWizardSpec(value, suit);

  return {
    id,
    ...spec
  };
}
