
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './PublishEvent.css'; 

const PublishEvent = () => {
    const [eventDetails, setEventDetails] = useState({
        name: '',
        date: '',
        time: '',
        location: '',
        description: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({ ...eventDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Event Published:", eventDetails);
       
        setEventDetails({
            name: '',
            date: '',
            time: '',
            location: '',
            description: '',
            notes: ''
        });
        alert("Event Published Successfully!");
    };

    return (
        <div className="containerEvent my-5">
            <h2 className="text-center mb-4">Publish Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="eventName" className="form-label">Event Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventName"
                        name="name"
                        value={eventDetails.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDate" className="form-label">Event Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="eventDate"
                        name="date"
                        value={eventDetails.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventTime" className="form-label">Event Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="eventTime"
                        name="time"
                        value={eventDetails.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventLocation" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="eventLocation"
                        name="location"
                        value={eventDetails.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventDescription" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="eventDescription"
                        name="description"
                        value={eventDetails.description}
                        onChange={handleChange}
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="eventNotes" className="form-label">Additional Notes</label>
                    <textarea
                        className="form-control"
                        id="eventNotes"
                        name="notes"
                        value={eventDetails.notes}
                        onChange={handleChange}
                        rows="2"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Publish Event</button>
            </form>
        </div>
    );
};

export default PublishEvent;
