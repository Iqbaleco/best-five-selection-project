import React from 'react';
import './SideInfo.css'

const SideInfo = (props) => {
    const { sideInfo } = props;
    console.log(sideInfo);

    let exerciseTime = 0;
    for (const item of sideInfo) {
        exerciseTime = (exerciseTime + item.timeRequired);
    }

    return (
        <div className='side-info'>
            <h3>Exercise Details</h3>
            <h5>Exercise time: {exerciseTime}</h5>
        </div>
    );
};

export default SideInfo;