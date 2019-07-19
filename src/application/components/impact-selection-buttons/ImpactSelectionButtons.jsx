import React from "react";

class ImpactSelectionButtons extends React.Component {
    constructor() {
        super();
    }
    render() {
        let content;

        if (this.props.fromPage === "manufacturing") {
            content = (
                <div>
                    <p style={{ height: "30px" }} />
                    <div
                        style={{ marginTop: "-15px", marginBottom: "-6px" }}
                        className="selected-info"
                    >
                        Select impact
                    </div>
                    <div
                        style={{
                            fontFamilty: "Avenir Next",
                            textAlign: "center"
                        }}
                    >
                        <button
                            onClick={this.handleEnvironmentalClicked}
                            style={{
                                position: "relative",
                                left: "0",
                                marginLeft: "2.5%",
                                marginRight: "2.5%",
                                width: "45%",
                                marginTop: "20px",
                                marginBottom: "20px",
                                border: "solid 2px #BD2EC2",
                                color: "#BD2EC2",
                                borderRadius: "5px",
                                padding: "18px 0px",
                                fontWeight: "500",
                                cursor: "pointer",
                                letterSpacing: "2px",
                                fontFamilty: "Open sans",
                                fontSize: "1.1em"
                            }}
                        >
                            Environmental
                        </button>
                        <button
                            onClick={this.handleSocialClicked}
                            style={{
                                position: "relative",
                                right: "0",
                                marginLeft: "2.5%",
                                marginRight: "2.5%",
                                width: "45%",
                                marginTop: "20px",
                                marginBottom: "20px",
                                border: "solid 2px #BD2EC2",
                                color: "#BD2EC2",
                                borderRadius: "5px",
                                padding: "18px 0px",
                                fontWeight: "500",
                                cursor: "pointer",
                                letterSpacing: "2px",
                                fontFamilty: "Open sans",
                                fontSize: "1.1em"
                            }}
                        >
                            Social
                        </button>
                    </div>
                </div>
            );
        }
        return <div>{content}</div>;
    }
}

export default ImpactSelectionButtons;
