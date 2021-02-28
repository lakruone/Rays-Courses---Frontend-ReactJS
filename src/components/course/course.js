import React from 'react';

import './course.css';

const course = (props) => (
    <article className="Course">
        <h1>{props.name}</h1>
        <h5>{props.uni}</h5>

        <div className="Info">
            <div className="Description">{props.description}</div>
        </div>
    </article>
);

export default course;
