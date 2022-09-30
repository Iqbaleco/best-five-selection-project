import React from 'react';

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
    return (
        <div>
            <h2 className='text-2xl capitalize mt-5'>Add a Break</h2>
            <div className='mt-5 p-4 grid font-semibold text-xl grid-cols-5 justify-items-center rounded-2xl bg-grey-100'>
                <button name="1st" onClick={handleClick} className={`${activeButton === "1st" ? "bg-indego-600 text-white" : "bg-white"} rounded-full p-2`}
                >
                    20s</button>
                <button name="2nd" onClick={handleClick} className={`${activeButton === "2nd" ? "bg-indego-600 text-white" : "bg-white"} rounded-full p-2`}
                >
                    40s</button>
                <button name="3rd" onClick={handleClick} className={`${activeButton === "3rd" ? "bg-indego-600 text-white" : "bg-white"} rounded-full p-2`}
                >
                    25s</button>
                <button name="4th" onClick={handleClick} className={`${activeButton === "4th" ? "bg-indego-600 text-white" : "bg-white"} rounded-full p-2`}
                >
                    30s</button>
                <button name="5th" onClick={handleClick} className={`${activeButton === "5th" ? "bg-indego-600 text-white" : "bg-white"} rounded-full p-2`}
                >
                    15s</button>

            </div>
            <h5>Break Time: {breakTime}</h5>
        </div>
    );
};

export default BreakTime;