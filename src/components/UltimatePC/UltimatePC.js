import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './UltimatePC.css'
import SideInfo from '../SideInfo/SideInfo';

const UltimatePC = () => {
    const [workouts, setWorkout] = useState([]);
    const [sideInfo, setsideInfo] = useState([]);
    useEffect(() => {
        fetch('workout-details.json')
            .then(res => res.json())
            .then(data => setWorkout(data));
    }, []);

    const handleAddToList = (workout) => {
        const newsideInfo = [sideInfo, workout];
        setsideInfo(newsideInfo);

    }

    return (
        <div className='upc-container'>
            <div className="exercise-names-container">
                {
                    workouts.map(workout =>
                        <Workout key={workout.id}
                            workout={workout}
                            handleAddToList={handleAddToList}
                        ></Workout>)
                }
            </div>
            <div className="exercise-details">
                <SideInfo sideInfo={sideInfo}></SideInfo>
            </div>
        </div>
    );
};

export default UltimatePC;