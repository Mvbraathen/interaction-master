import React from "react";
/* Environmental impacts */
import AcidificationMobile from "./environmental/AcidificationMobile";
import BiodiversityMobile from "./environmental/BiodiversityMobile";
import Co2Mobile from "./environmental/Co2Mobile";
import DeforestationMobile from "./environmental/DeforestationMobile";
import EutrophicationMobile from "./environmental/EutrophicationMobile";
import ExcessiveWaterUseMobile from "./environmental/ExcessiveWaterUseMobile";
import EcotoxicityMobile from "./environmental/EcotoxicityMobile";
import OzoneDepletionMobile from "./environmental/OzoneDepletionMobile";
import ParticulateMatterMobile from "./environmental/ParticulateMatterMobile";

class Environmental extends React.Component {

  render() {
    let info;
   
    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div>
         <AcidificationMobile />
         <BiodiversityMobile />
         <Co2Mobile />
         <DeforestationMobile />
         <EutrophicationMobile />
         <ExcessiveWaterUseMobile />
         <EcotoxicityMobile />
         <OzoneDepletionMobile />
         <ParticulateMatterMobile />
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      info = (
        <div>
          <AcidificationMobile />
          <BiodiversityMobile />
          <Co2Mobile />
          <EutrophicationMobile />
          <ExcessiveWaterUseMobile />
          <EcotoxicityMobile />
          <OzoneDepletionMobile />
          <ParticulateMatterMobile />
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      info = (
        <div>
          <AcidificationMobile />
          <Co2Mobile />
          <EutrophicationMobile />
          <EcotoxicityMobile />
          <ParticulateMatterMobile />
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      info = (
        <div>
          <AcidificationMobile />
          <Co2Mobile />
          <EutrophicationMobile />
          <EcotoxicityMobile />
          <ParticulateMatterMobile />
        </div>
      );
    }

    if (this.props.fromPage === "endOfLife") {
      info = (
        <div>
          <BiodiversityMobile />
          <Co2Mobile />
          <EcotoxicityMobile />
          <ParticulateMatterMobile />
        </div>
      );
    }
    return <div>{info}</div>;
  }
}

export default Environmental;
