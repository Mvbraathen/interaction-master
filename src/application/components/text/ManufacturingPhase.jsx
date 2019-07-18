import React from 'react';

class ManufacturingPhase extends React.Component {
	render() {
        return (
            <div>
                <p>
                    Manufacturing is the phase in which the different components of the mobile 
                    phone are produced and put together to become the finished product. The 
                    main components of a mobile phone are the circuit board (PCB), battery, 
                    LCD screen, antenna, microphone, speaker, camera(s), and shell. Each of 
                    these large components consists of several smaller components.
                </p>
                <p>
                    Manufacturing takes place in factories, with the largest factory, in Shenzen, 
                    China, housing up to 450.000 workers. Workers’ salaries are very low. When 
                    you buy a new mobile phone, only about 0.5 % of the retail price is used on 
                    labour costs (read more about
                    {' '}
                    <a 
                        className="inline-link-style" 
                        title="link to publication on labour costs"  
                        href="https://www.somo.nl/dragging-out-the-best-deal/">
                        labour costs
                    </a>).
                </p>
            </div>
        );
	}
}

export default ManufacturingPhase;