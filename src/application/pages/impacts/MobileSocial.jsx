import React from "react";
/* Social impacts */
import ChildLabourMobile from "./social/ChildLabourMobile";
import DiscriminationMobile from "./social/DiscriminationMobile";
import FoodInsecurityMobile from "./social/FoodInsecurityMobile";
import GenderInequalityMobile from "./social/GenderInequalityMobile";
import HumanToxicityMobile from "./social/HumanToxicityMobile";
import LackOfCleanEnergyMobile from "./social/LackOfCleanEnergyMobile";
import LivingInSlumsMobile from "./social/LivingInSlumsMobile";
import MarginalisationMobile from "./social/MarginalisationMobile";
import PollutedDrinkingWaterMobile from "./social/PollutedDrinkingWaterMobile";
import PrecariousWorkMobile from "./social/PrecariousWorkMobile";
import ViolentConflictMobile from "./social/ViolentConflictMobile";

class Environmental extends React.Component {

  render() {
    let info;

    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div>
          <ChildLabourMobile />
          <DiscriminationMobile />
          <FoodInsecurityMobile />
          <GenderInequalityMobile />
          <HumanToxicityMobile />
          <LackOfCleanEnergyMobile />
          <LivingInSlumsMobile />
          <MarginalisationMobile />
          <PollutedDrinkingWaterMobile />
          <PrecariousWorkMobile />
          <ViolentConflictMobile />
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      info = (
        <div>
          <ChildLabourMobile />
          <DiscriminationMobile />
          <FoodInsecurityMobile />
          <GenderInequalityMobile />
          <HumanToxicityMobile />
          <LackOfCleanEnergyMobile />
          <PollutedDrinkingWaterMobile />
          <PrecariousWorkMobile />
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      info = (
        <div>
          <HumanToxicityMobile />
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      info = (
        <div>
          <HumanToxicityMobile />
        </div>
      );
    }

    if (this.props.fromPage === "endOfLife") {
      info = (
        <div>
          <ChildLabourMobile />
          <FoodInsecurityMobile />
          <HumanToxicityMobile />
          <LackOfCleanEnergyMobile />
          <LivingInSlumsMobile />
          <PollutedDrinkingWaterMobile />
          <PrecariousWorkMobile />
          <ViolentConflictMobile />
        </div>
      );
    }

    return <div>{info}</div>;
  }
}

export default Environmental;
