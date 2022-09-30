import React from 'react';
import './InfoSection.css'

const InfoSection = () => {
    return (
        <div className='questions'>
            <div>
                <h3>How does React works?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h3>Difference between props and state</h3>
                <p>Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.
                    The this.setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h3>Uses of "useEffect" without API calling</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default InfoSection;