import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContactsContext } from '../../App';

function ContactInfo() {
    const { data } = useContext(ContactsContext);
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const user = data.find(x => x.id == id);
        setCurrentUser(user);
    }, [id, data]);

    if (!currentUser) {
        return <p>Loading...</p>;
    }

    return (
        <div className="contact-info">
            <Link to="/contacts" className="return-link">
                <p id="return">Return to contact list</p>
            </Link>
            <div className="contact-details">
                <h1>{`${currentUser.firstName} ${currentUser.lastName}`}</h1>
                <p><strong>Street:</strong> {currentUser.street}</p>
                <p><strong>City:</strong> {currentUser.city}</p>
            </div>
        </div>
    );
}

export default ContactInfo;
