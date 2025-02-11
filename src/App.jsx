import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import ContactList from './components/Dashboard/ContactList';
import ContactInfo from './components/ContactInfo/ContactInfo';
import { json } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateContact from './components/ContactInfo/CreateContact';
export const ContactsContext = createContext();

function App() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("https://boolean-uk-api-server.fly.dev/");

    useEffect(() => {
        
        const fetchData = async () => {
            const userContacts = `axel-ahlander/contact`;
            const response = await fetch(`${url}${userContacts}`);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [url]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => prevData.map(contact => 
          contact.name === name ? { ...contact, value } : contact
        ));
      };

    return (
        <ContactsContext.Provider value = {{data, setData, handleChange, url}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element = {<ContactList/>} />
          <Route path="/contact/:id" element={<ContactInfo />} />
          <Route path="/create-contact" element={<CreateContact/>}/>
        </Routes>
      </ContactsContext.Provider>
    );
}

export default App;
