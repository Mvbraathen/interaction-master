import React from 'react';
import Fade from "react-reveal/Fade";

class ChildLabourMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 
                        className="impact-box-header">
                        Child labour
                    </h2>
                    <div>
                        <div className="image-container">
                            <img alt="children" width="100%" src={require('./images/ChildLabour.jpg')} />
                            <a 
                                className="image-credit" 
                                href="https://unsplash.com/@sethdoylee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Seth Doyle
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Many children work (e.g. in the home or on family farms). Whether or not particular 
                                forms of “work” can be called “child labour” depends on the child’s age, the type and 
                                hours of work performed, the conditions under which it is performed and may vary from 
                                country to country, as well as among sectors within countries.
                            </p> 
                            <p> 
                                The term <a className="inline-link-style" href="http://www.ilo.org/ipec/facts/lang--en/index.htm?fbclid=IwAR0ObZaw8wLLUnMhkfIl5jj6WdRASZUv1g6XKPNXTbvmO3ZoqKFXmUkl4OE">
                                child labour</a> is often defined as work that deprives children of their childhood, 
                                their potential and their dignity, and that is harmful to physical and mental development. 
                                It refers to work that: is mentally, physically, socially or morally dangerous and 
                                harmful to children; and interferes with their schooling by: depriving them of the 
                                opportunity to attend school; obliging them to leave school prematurely; or requiring 
                                them to attempt to combine school attendance with excessively long and heavy work. In 
                                its most extreme forms (worst forms), child labour involves children being enslaved, 
                                separated from their families, exposed to serious hazards and illnesses and/or left to 
                                fend for themselves on the streets of large cities – often at a very early age. Child 
                                labour has been found in connection with the production of minerals, in factory labour 
                                and in the informal work involved in disposal of e-waste.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default ChildLabourMobile;