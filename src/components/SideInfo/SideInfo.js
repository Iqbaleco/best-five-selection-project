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
            <h2>Add a Break</h2>
            <div className='btn-break'>
                <button onClick={() => handleAddToBreak}>30<strong>S</strong></button>
                <button>25<strong>S</strong></button>
                <button>40<strong>S</strong></button>
                <button>50<strong>S</strong></button>
            </div>
            <h2>Exercise Details</h2>
            <h5>Exercise time: {exerciseTime}</h5>
            <h5>Break time: {breakTime}</h5>


        </div>
    );
};

export default SideInfo;