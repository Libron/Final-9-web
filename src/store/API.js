import axios from "../axios-instance";

export const API = {
    getContacts: () => axios.get('contacts.json'),
    getContact: (id) => axios.get('contacts/' + id + '.json'),
    addContact: (contactData) => axios.post('contacts.json', contactData),
    updateContact: (id, contactData) => axios.put('contacts/' + id + '.json', contactData),
    deleteContact: (id) => axios.delete('contacts/' + id + '.json'),
};