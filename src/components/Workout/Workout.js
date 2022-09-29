import React from 'react';
import './Workout.css'
const Workout = (props) => {
    const { workout, handleAddToList } = props;
    const { img, name, description, ageRange, timeRequired, perDay } = workout;
    return (
        <div className='workout'>
            <img src={img} alt="" />
            <div className='workout-info'>
                <p className='product-name'>{name}</p>
                <p className='product-description'>{description}</p>
                <p className='age-range'><strong>Age Range: </strong>{ageRange}</p>
                <p><strong>Time Required: </strong>{timeRequired}</p>
                <p><strong>Per Day: </strong>{perDay}</p>
            </div>
            <button onClick={() => handleAddToList(workout)} className='btn-cart'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Workout;