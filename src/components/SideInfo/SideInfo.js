import React from 'react';
import './SideInfo.css'

const SideInfo = (props) => {
    const { sideInfo } = props;
    console.log(sideInfo);

    let exerciseTime = 0;
    for (let item of sideInfo) {
        exerciseTime = (exerciseTime + item.timeRequired);
    }

    const notify = () => toast("Wow so easy !");
    function handleBreakTime() {

    };


    return (
        <div className='side-info'>

            <div>
                <img src='../../images/Iqbal.jpg' alt="" />
            </div>
            <h4>Iqbal Hossain</h4>
            <strong>Oxygen, Chattogram.</strong>
            <h2>Add a Break</h2>
            <div className='btn-break'>
                <button onClick={() => handleBreakTime()}>30<strong>S</strong></button>
                <button onClick={() => handleBreakTime()}>25<strong>S</strong></button>
                <button onClick={() => handleBreakTime()}>40<strong>S</strong></button>
                <button onClick={() => handleBreakTime()}>50<strong>S</strong></button>
            </div>
            <h2>Exercise Details</h2>
            <h5>Exercise time: {exerciseTime}</h5>
            <h5>Break Time:25 S</h5>
            <button className='btn-activity'>Activity Completed</button>


        </div>
    );
};

export default SideInfo;