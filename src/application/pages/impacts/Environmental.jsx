import React from "react";
/* Environmental impacts */
import Acidification from "./environmental/Acidification";
import Biodiversity from "./environmental/Biodiversity";
import Co2 from "./environmental/Co2";
import Deforestation from "./environmental/Deforestation";
import Eutrophication from "./environmental/Eutrophication";
import ExcessiveWaterUse from "./environmental/ExcessiveWaterUse";
import Ecotoxicity from "./environmental/Ecotoxicity";
import OzoneDepletion from "./environmental/OzoneDepletion";
import ParticulateMatter from "./environmental/ParticulateMatter";

class Environmental extends React.Component {

  render() {
    let impacts;
   
    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      impacts = (
        <div>
         <Acidification />
         <Biodiversity />
         <Co2 />
         <Deforestation />
         <Eutrophication />
         <ExcessiveWaterUse />
         <Ecotoxicity />
         <OzoneDepletion />
         <ParticulateMatter />
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      impacts = (
        <div>
          <Acidification />
          <Biodiversity />
          <Co2 />
          <Eutrophication />
          <ExcessiveWaterUse />
          <Ecotoxicity />
          <OzoneDepletion />
          <ParticulateMatter />
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      impacts = (
        <div>
          <Acidification />
          <Co2 />
          <Eutrophication />
          <Ecotoxicity />
          <ParticulateMatter />
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      impacts = (
        <div>
          <Acidification />
          <Co2 />
          <Eutrophication />
          <Ecotoxicity />
          <ParticulateMatter />
        </div>
      );
    }

    if (this.props.fromPage === "endOfLife") {
      impacts = (
        <div>
          <Biodiversity />
          <Co2 />
          <Ecotoxicity />
          <ParticulateMatter />
        </div>
      );
    }
    return <div>{impacts}</div>;
  }
}

export default Environmental;
