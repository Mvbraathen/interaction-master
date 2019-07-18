import React from 'react';

class ResourcePhase extends React.Component {
	render() {
        return (
            <div>
                <p>
                    Resource Extraction is the phase covering activities resulting in materials that
                    will be used in the manufacturing phase, such as the extraction and processing of
                    oil to make plastics, the mining and processing of cobalt and lithium to make
                    materials for the battery, and the mining and processing of tungsten to make the
                    mobile phone vibrate. Mobile phones can contain as many as 62 different metals,
                    including 16 of the 17 rare earth metals (
                    <a 
                        className="inline-link-style" 
                        title="link to smartphone materials statistics"  
                        href="https://www.statista.com/statistics/270454/top-10-materials-in-a-smartphone/">
                        Smartphone - Materials
                    </a>
                    ).
                </p>
                <p>
                    The most known social impact in this phase is conflict and associated illicit trade.
                    Some of the minerals mined for mobile phones and other electronics, gold, tin,
                    tantalum, and tungsten, are considered conflict minerals, because their
                    extraction is associated with armed groups that control the mining and trade of
                    the minerals. International regulation in the USA and the EU restricts the use of
                    conflict minerals. There are several international initiatives focusing on
                    improving the supply chain of minerals, such as the {' '} 
                    <a 
                        className="inline-link-style" 
                        title="link to responsible minerals initiative website"  
                        href="http://www.responsiblemineralsinitiative.org/">
                        Responsible Minerals Initiative
                    </a>
                    , the {' '} 
                    <a 
                        className="inline-link-style" 
                        title="link to responsible sourcing network website"  
                        href="https://www.sourcingnetwork.org/">
                        Responsible Sourcing Network
                    </a>       
                    , and the {' '}
                    <a 
                        className="inline-link-style" 
                        title="link to Enough Project website"  
                        href="https://enoughproject.org/">
                        Enough Project
                    </a>.
                </p>
                <p>
                    A large part of the materials of the mobile phone are extracted in artisanal and
                    small-scale mining operations (ASM) in many African countries as well as in
                    countries in Asia and South-America. Both the industrial mining and ASM mining
                    of minerals are associated with a variety of environmental and social impacts (
                    <a 
                        className="inline-link-style" 
                        title="link to mapping mining to the sustainable development goals"  
                        href="http://unsdsn.org/resources/publications/mapping-mining-to-the-sustainable-development-goals-an-atlas/">
                        Mapping Mining to the Sustainable Development Goals: An Atlas
                    </a>).
                </p>
            </div>
        );
	}
}

export default ResourcePhase;