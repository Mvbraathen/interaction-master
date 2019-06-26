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

/* Package to add fade inn effect to environmental impact elements */
import Fade from "react-reveal/Fade";

class Environmental extends React.Component {

  render() {
    let info;
    let resourceExtractionArray = [
      "Acidification",
      "Biodiversity",
      "Co2",
      "Deforestation",
      "Eutrophication",
      "ExcessiveWaterUse",
      "Ecotoxicity",
      "OzoneDepletion",
      "ParticulateMatter"
    ];
    /*let manufacturingArray = [
      "Acidification",
      "Biodiversity",
      "Co2",
      "Eutrophication",
      "ExcessiveWaterUse",
      "Ecotoxicity",
      "OzoneDepletion",
      "ParticulateMatter"
    ];
    let transportArray = [
      "Acidification",
      "Co2",
      "Eutrophication",
      "Ecotoxicity",
      "ParticulateMatter"
    ];
    let useArray = [
      "Acidification",
      "Co2",
      "Eutrophication",
      "Ecotoxicity",
      "ParticulateMatter"
    ];
    let endOfLifeArray = [
      "Biodiversity",
      "Co2",
      "Ecotoxicity",
      "ParticulateMatter"
    ];*/

    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div>
          {resourceExtractionArray.map((value, index) => {
            if(value === 'Acidification') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ocean acidification </h1>
                    <Acidification />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Biodiversity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Biodiversity loss </h1>
                    <Biodiversity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Co2') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 emissions </h1>
                    <Co2 />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Deforestation') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Deforestation </h1>
                    <Deforestation />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Eutrophication') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Eutrophication </h1>
                    <Eutrophication />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ExcessiveWaterUse') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Excessive water use </h1>
                    <ExcessiveWaterUse />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Ecotoxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <Ecotoxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'OzoneDepletion') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ozone depletion </h1>
                    <OzoneDepletion />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ParticulateMatter') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Particulate matter </h1>
                    <ParticulateMatter />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
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
          {resourceExtractionArray.map((value, index) => {
            if(value === 'Acidification') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ocean acidification </h1>
                    <Acidification />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Biodiversity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Biodiversity </h1>
                    <Biodiversity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Co2') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 emissions </h1>
                    <Co2 />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Eutrophication') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Eutrophication </h1>
                    <Eutrophication />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ExcessiveWaterUse') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Excessive water use </h1>
                    <ExcessiveWaterUse />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Ecotoxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <Ecotoxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'OzoneDepletion') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ozone depletion </h1>
                    <OzoneDepletion />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ParticulateMatter') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Particulate matter </h1>
                    <ParticulateMatter />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
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
          {resourceExtractionArray.map((value, index) => {
            if(value === 'Acidification') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ocean acidification </h1>
                    <Acidification />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Co2') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 emissions </h1>
                    <Co2 />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Eutrophication') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Eutrophication </h1>
                    <Eutrophication />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Ecotoxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <Ecotoxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ParticulateMatter') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Particulate matter </h1>
                    <ParticulateMatter />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
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
          {resourceExtractionArray.map((value, index) => {
            if(value === 'Acidification') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ocean acidification </h1>
                    <Acidification />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Co2') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 emissions </h1>
                    <Co2 />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Eutrophication') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Eutrophication </h1>
                    <Eutrophication />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Ecotoxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <Ecotoxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ParticulateMatter') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Particulate matter </h1>
                    <ParticulateMatter />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }
          })}
        </div>
      );
    }





    if (this.props.fromPage === "endOfLife") {
      info = (
        <div>
          {resourceExtractionArray.map((value, index) => {
            if(value === 'Biodiversity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Biodiversity </h1>
                    <Biodiversity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Co2') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 emissions </h1>
                    <Co2 />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Read more </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'Ecotoxicity') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <Ecotoxicity />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
                    </a>
                  </div>
                </Fade>
              );
            }

            if(value === 'ParticulateMatter') {
              return (
                <Fade duration={1000} key={value}>
                  <div className="page-one">
                    <h1 className="info-header"> Particulate matter </h1>
                    <ParticulateMatter />
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                      <button className="page-one-button"> Go to SMART's resarch </button>
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
