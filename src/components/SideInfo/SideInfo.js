import React from 'react';
import './SideInfo.css'

const SideInfo = (props) => {
    const { sideInfo } = props;
    console.log(sideInfo);

    let exerciseTime = 0;
    for (let item of sideInfo) {
        exerciseTime = (exerciseTime + item.timeRequired);
    }


    return (
        <div className='side-info'>

            <div>
                <img src='../../images/Iqbal.jpg' alt="" />
            </div>
            <h4>Iqbal Hossain</h4>
            <strong>Oxygen, Chattogram.</strong>

            <h2>Exercise Details</h2>
            <h5>Exercise time: {exerciseTime}</h5>

            <button className='btn-activity'>Activity Completed</button>


        </div>
    );
};

export default SideInfo;