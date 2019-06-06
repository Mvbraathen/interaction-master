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
  constructor() {
    super();
    this.state = {
      /* States to expand or collapse all Environmental info elements */
      Acidification: false,
      Biodiversityloss: false,
      CO2emissions: false,
      Deforestation: false,
      Eutrophication: false,
      Excessivewateruse: false,
      Ecotoxicity: false,
      Ozonedepletion: false,
      Particulatematter: false,
      /* expand text will change on hover */
      expandText: "+",
      changeTextStyle: "default-style"
    };
  }

  handleClick(event, value) {
    /* removes spaces from array values to correspond with state name */
    value = value.replace(/\s+/g, "");
    this.setState({
      [value]: true
    });
  }

  /* function that makes elements accessible through tab navigation  */
  keyPressed(event, value) {
    if (event.key === "Enter") {
      this.handleClick(event, value);
    }
  }

  //set the text
  onMouseover(e) {
    this.setState({
      expandText: "Explore",
      changeTextStyle: "not-default-style"
    });
  }
  //clear the text
  onMouseout(e) {
    this.setState({ expandText: "+", changeTextStyle: "default-style" });
  }

  render() {
    let info;
    let resourceExtractionArray = [
      "Acidification",
      "Biodiversity loss",
      "CO2 emissions",
      "Deforestation",
      "Eutrophication",
      "Excessive water use",
      "Ecotoxicity",
      "Ozone depletion",
      "Particulate matter"
    ];
    let manufacturingArray = [
      "Acidification",
      "Biodiversity loss",
      "CO2 emissions",
      "Eutrophication",
      "Excessive water use",
      "Ecotoxicity",
      "Ozone depletion",
      "Particulate matter"
    ];
    let transportArray = [
      "Acidification",
      "CO2 emissions",
      "Eutrophication",
      "Ecotoxicity",
      "Particulate matter"
    ];
    let useArray = [
      "Acidification",
      "CO2 emissions",
      "Eutrophication",
      "Ecotoxicity",
      "Particulate matter"
    ];
    let endOfLifeArray = [
      "Biodiversity loss",
      "CO2 emissions",
      "Ecotoxicity",
      "Particulate matter"
    ];

    const text = this.state.expandText;

    /* Determines which elements to render based on the fromPage prop from parent component */
    if (this.props.fromPage === "resourceExtraction") {
      info = (
        <div className="right-half-flex-container">
          {resourceExtractionArray.map((value, index) => {
            return (
              <Fade duration={1000} key={value}>
                <div
                  tabIndex="0"
                  onKeyPress={e => {
                    this.keyPressed(e, value);
                  }}
                  className="environmental-info-element"
                  onClick={e => {
                    this.handleClick(e, value);
                  }}
                >
                  <div className="info-box-content"> {value} </div>
                  <div
                    className={this.state.changeTextStyle}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}
                  >
                    {text}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      );
    }

    if (this.props.fromPage === "manufacturing") {
      info = (
        <div className="right-half-flex-container">
          {manufacturingArray.map((value, index) => {
            return (
              <Fade duration={1000} key={value}>
                <div
                  tabIndex="0"
                  onKeyPress={e => {
                    this.keyPressed(e, value);
                  }}
                  key={index}
                  className="environmental-info-element"
                  onClick={e => {
                    this.handleClick(e, value);
                  }}
                >
                  <div className="info-box-content"> {value} </div>
                  <div
                    className={this.state.changeTextStyle}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}
                  >
                    {text}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      );
    }

    if (this.props.fromPage === "transport") {
      info = (
        <div className="right-half-flex-container">
          {transportArray.map((value, index) => {
            return (
              <Fade duration={1000} key={value}>
                <div
                  tabIndex="0"
                  onKeyPress={e => {
                    this.keyPressed(e, value);
                  }}
                  key={index}
                  className="environmental-info-element"
                  onClick={e => {
                    this.handleClick(e, value);
                  }}
                >
                  <div className="info-box-content"> {value} </div>
                  <div
                    className={this.state.changeTextStyle}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}
                  >
                    {text}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      );
    }

    if (this.props.fromPage === "use") {
      info = (
        <div className="right-half-flex-container">
          {useArray.map((value, index) => {
            return (
              <Fade duration={1000} key={value}>
                <div
                  tabIndex="0"
                  onKeyPress={e => {
                    this.keyPressed(e, value);
                  }}
                  key={index}
                  className="environmental-info-element"
                  onClick={e => {
                    this.handleClick(e, value);
                  }}
                >
                  <div className="info-box-content"> {value} </div>
                  <div
                    className={this.state.changeTextStyle}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}
                  >
                    {text}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      );
    }

    if (this.props.fromPage === "endOfLife") {
      info = (
        <div className="right-half-flex-container">
          {endOfLifeArray.map((value, index) => {
            return (
              <Fade duration={1000} key={value}>
                <div
                  tabIndex="0"
                  onKeyPress={e => {
                    this.keyPressed(e, value);
                  }}
                  key={index}
                  className="environmental-info-element"
                  onClick={e => {
                    this.handleClick(e, value);
                  }}
                >
                  <div className="info-box-content"> {value} </div>
                  <div
                    className={this.state.changeTextStyle}
                    onMouseEnter={this.onMouseover.bind(this)}
                    onMouseLeave={this.onMouseout.bind(this)}
                  >
                    {text}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      );
    }

    /* All environmental impacts */
    if (this.state.Acidification === true) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Acidification: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Acidification />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Biodiversityloss) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Biodiversityloss: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Biodiversity />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.CO2emissions) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ CO2emissions: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Co2 />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Deforestation) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Deforestation: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Deforestation />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Ecotoxicity) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Ecotoxicity: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Ecotoxicity />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Eutrophication) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Eutrophication: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <Eutrophication />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Excessivewateruse) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Excessivewateruse: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <ExcessiveWaterUse />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Ozonedepletion) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Ozonedepletion: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <OzoneDepletion />{" "}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.Particulatematter) {
      info = (
        <div className="right-half-flex-container">
          <div
            className="active-environmental-info-element"
            onClick={() => this.setState({ Particulatematter: false })}
          >
            <div className="active-info-box-content">
              {" "}
              <ParticulateMatter />{" "}
            </div>
          </div>
        </div>
      );
    }

    return <div>{info}</div>;
  }
}

export default Environmental;
