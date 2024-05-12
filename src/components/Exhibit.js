import React from 'react';
import './Exhibit.css';

const Exhibit = ({ name, children }) => {
    return (
        <div className="real">
            <div className="Exhibit">
                <h2 className="ExhibitHeading">{name}</h2>
                <div className="ExhibitContent">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Exhibit;
