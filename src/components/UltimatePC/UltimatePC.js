import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './UltimatePC.css'

const UltimatePC = () => {
    const [workouts, setWorkout] = useState([]);
    useEffect(() => {
        fetch('workout-details.json')
            .then(res => res.json())
            .then(data => setWorkout(data));
    }, []);
    return (
        <div className='upc-container'>
            <div className="exercise-names-container">
                {
                    workouts.map(workout =>
                        <Workout key={workout.id}
                            workout={workout}
                        ></Workout>)
                }
            </div>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
            </div>
        </div>
    );
};

export default UltimatePC;