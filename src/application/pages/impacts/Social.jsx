import React from "react";
/* Social impacts */
import ChildLabour from "./social/ChildLabour";
import Discrimination from "./social/Discrimination";
import FoodInsecurity from "./social/FoodInsecurity";
import GenderInequality from "./social/GenderInequality";
import HumanToxicity from "./social/HumanToxicity";
import LackOfCleanEnergy from "./social/LackOfCleanEnergy";
import LivingInSlums from "./social/LivingInSlums";
import Marginalisation from "./social/Marginalisation";
import PollutedDrinkingWater from "./social/PollutedDrinkingWater";
import PrecariousWork from "./social/PrecariousWork";
import ViolentConflict from "./social/ViolentConflict";

class Environmental extends React.Component {

  render() {
    let info;

    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div>
          <ChildLabour />
          <Discrimination />
          <FoodInsecurity />
          <GenderInequality />
          <HumanToxicity />
          <LackOfCleanEnergy />
          <LivingInSlums />
          <Marginalisation />
          <PollutedDrinkingWater />
          <PrecariousWork />
          <ViolentConflict />
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      info = (
        <div>
          <ChildLabour />
          <Discrimination />
          <FoodInsecurity />
          <GenderInequality />
          <HumanToxicity />
          <LackOfCleanEnergy />
          <PollutedDrinkingWater />
          <PrecariousWork />
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      info = (
        <div>
          <HumanToxicity />
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      info = (
        <div>
          <HumanToxicity />
        </div>
      );
    }

    if (this.props.fromPage === "endOfLife") {
      info = (
        <div>
          <ChildLabour />
          <FoodInsecurity />
          <HumanToxicity />
          <LackOfCleanEnergy />
          <LivingInSlums />
          <PollutedDrinkingWater />
          <PrecariousWork />
          <ViolentConflict />
        </div>
      );
    }

    return <div>{info}</div>;
  }
}

export default Environmental;
