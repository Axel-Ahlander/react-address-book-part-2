import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ contact, url, setData }) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const response = await fetch(`${url}axel-ahlander/contact`,
          { method:'DELETE',
            headers: {'Content-Type': 'application/json',
            },
    })
    if (response.ok) {
      setData((prevData) => prevData.filter(item => item.id !== contact.id));
    }
  };

    
    return (
        <li className="contact-item">
            <div className="contact-card">
                <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
                <Link to={`/contact/${contact.id}`} className="view-link">
                    <p>View Details</p>
                </Link>
                <button className='delete-button' onClick={handleSubmit}>Delete contact</button>
            </div>
            <hr />
        </li>
    );
}

export default ContactListItem;
