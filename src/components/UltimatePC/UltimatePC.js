import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './UltimatePC.css'

const UltimatePC = () => {
    const [workouts, setWorkout] = useState([]);
    const [workoutTime, setWorkoutTime] = useState();
    useEffect(() => {
        fetch('workout-details.json')
            .then(res => res.json())
            .then(data => setWorkout(data));
    }, []);

    const handleAddToList = (timeRequired) => {
        console.log(timeRequired);
        const newWorkoutTime = [workoutTime, timeRequired];
        setWorkoutTime(newWorkoutTime);

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
                <h3>Exercise Details</h3>
                <h5>Exercise time: {workoutTime}</h5>
            </div>
        </div>
    );
};

export default UltimatePC;