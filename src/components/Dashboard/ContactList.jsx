import React, { useContext } from 'react';
import ContactListItem from './ContactListItem';
import { ContactsContext } from '../../App';
import { Link } from 'react-router-dom';

function ContactList() {
    const { data } = useContext(ContactsContext);
    
    return (
        <div className='contact-list'>
            <h1>Contact List</h1>
            <Link to="/">
                <p id="return">Return to menu</p>
            </Link>

            <ul>
                {data.map((content, index) => (
                    <ContactListItem key={index} contact={content} />
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
