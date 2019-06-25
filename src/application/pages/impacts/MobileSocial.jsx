import React from "react";
/* Environmental impacts */
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

/* Package to add fade inn effect to environmental impact elements */
import Fade from "react-reveal/Fade";

class Environmental extends React.Component {

  render() {
    let info;
    let resourceExtractionArray = [
      "ChildLabour",
      "Discrimination",
      "FoodInsecurity",
      "GenderInequality",
      "HumanToxicity",
      "LackOfCleanEnergy",
      "LivingInSlums",
      "Marginalisation",
      "PollutedDrinkingWater",
      "PrecariousWork",
      "ViolentConflict"
    ];
    let manufacturingArray = [
      "ChildLabour",
      "Discrimination",
      "FoodInsecurity",
      "GenderInequality",
      "HumanToxicity",
      "LackOfCleanEnergy",
      "PollutedDrinkingWater",
      "PrecariousWork"
    ];
    let transportArray = ["HumanToxicity"];
    let useArray = ["HumanToxicity"];
    let endOfLifeArray = [
      "ChildLabour",
      "FoodInsecurity",
      "HumanToxicity",
      "LackOfCleanEnergy",
      "LivingInSlums",
      "PollutedDrinkingWater",
      "PrecariousWork",
      "ViolentConflict"
    ];

    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div>
          {resourceExtractionArray.map((value, index) => {
            if(value === 'ChildLabour') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Child labour </h1>
                    <ChildLabour />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Discrimination') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Discrimination</h1>
                    <Discrimination />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'FoodInsecurity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Food insecurity</h1>
                    <FoodInsecurity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'GenderInequality') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Gender inequality</h1>
                    <GenderInequality />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'HumanToxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Human toxicity</h1>
                    <HumanToxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'LackOfCleanEnergy') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Lack of clean energy</h1>
                    <LackOfCleanEnergy />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'LivingInSlums') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Living in slums </h1>
                    <LivingInSlums />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Marginalisation') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Marginalisation </h1>
                    <Marginalisation />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'PollutedDrinkingWater') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Polluted drinking eater </h1>
                    <PollutedDrinkingWater />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'PrecariousWork') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Precarious work </h1>
                    <PrecariousWork />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ViolentConflict') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Violent conflict </h1>
                    <ViolentConflict />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      info = (
        <div>
          {manufacturingArray.map((value, index) => {
            if(value === 'ChildLabour') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Child labour </h1>
                    <ChildLabour />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Discrimination') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Discrimination</h1>
                    <Discrimination />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'FoodInsecurity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Food insecurity</h1>
                    <FoodInsecurity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'GenderInequality') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Gender inequality</h1>
                    <GenderInequality />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'HumanToxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Human toxicity</h1>
                    <HumanToxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'LackOfCleanEnergy') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Lack of clean energy</h1>
                    <LackOfCleanEnergy />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'PollutedDrinkingWater') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Polluted drinking eater </h1>
                    <PollutedDrinkingWater />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'PrecariousWork') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Precarious work </h1>
                    <PrecariousWork />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      info = (
        <div>
          {transportArray.map((value, index) => {
            if(value === 'HumanToxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Human toxicity</h1>
                    <HumanToxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      info = (
        <div>
          {useArray.map((value, index) => {
            if(value === 'HumanToxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Human toxicity</h1>
                    <HumanToxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      );
    }

    return <div>{info}</div>;
  }
}

export default Environmental;
