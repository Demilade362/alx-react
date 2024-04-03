import React from 'react';
import closeIcon from './close-icon.png';

function Notifications() {
    // Function to handle button click event
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={handleButtonClick}
            >
                <img src={closeIcon} alt="Close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;
