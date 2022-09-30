import React from 'react';
import './SideInfo.css'

const SideInfo = (props) => {
    const { sideInfo } = props;
    console.log(sideInfo);

    let exerciseTime = 0;
    for (let item of sideInfo) {
        exerciseTime = (exerciseTime + item.timeRequired);
    }

    const BreakTime = () => {
        const [breakTime, setBreakTime] = useState([]);
        const [activeButton, setActiveButton] = useState("");
        const handleClick = (e) => {
            const { name } = e.target;
            const buttonValue = e.target.innerHTML;
            const numButtonValue = parseInt(buttonValue.slice(0, -1));
            setBreakTime(numButtonValue)
            setActiveButton(name)
        }
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
                <button name="1st" onClick={handleClick}>30s</button>
                <button name="2nd" onClick={handleClick}>20s</button>
                <button name="3rd" onClick={handleClick}>25s</button>
                <button name="4th" onClick={handleClick}>15s</button>

            </div>
            <h2>Exercise Details</h2>
            <h5>Exercise time: {exerciseTime}</h5>
            <h5>Break Time:25 S</h5>
            <button className='btn-activity'>Activity Completed</button>


        </div>
    );
};

export default SideInfo;