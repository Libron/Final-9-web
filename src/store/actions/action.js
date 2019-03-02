import {API} from "../API";
import {
    ADD_CONTACT_FAILURE,
    ADD_CONTACT_REQUEST,
    ADD_CONTACT_SUCCESS,
    CLOSE_MODAL,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    FETCH_CONTACT_FAILURE,
    FETCH_CONTACT_REQUEST,
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SHOW_CONTACT,
    UPDATE_CONTACT_FAILURE,
    UPDATE_CONTACT_REQUEST,
    UPDATE_CONTACT_SUCCESS
} from "./actionTypes";

export const fetchContactsRequest = () => {
    return {type: FETCH_CONTACTS_REQUEST};
};
export const fetchContactsSuccess = contacts => {
    return {type: FETCH_CONTACTS_SUCCESS, contacts};
};
export const fetchContactsFailure = error => {
    return {type: FETCH_CONTACTS_FAILURE, error}
};

export const fetchContactRequest = () => {
    return {type: FETCH_CONTACT_REQUEST};
};
export const fetchContactSuccess = contact => {
    return {type: FETCH_CONTACT_SUCCESS, contact};
};
export const fetchContactFailure = error => {
    return {type: FETCH_CONTACT_FAILURE, error}
};

export const updateContactRequest = () => {
    return {type: UPDATE_CONTACT_REQUEST};
};
export const updateContactSuccess = () => {
    return {type: UPDATE_CONTACT_SUCCESS};
};
export const updateContactFailure = error => {
    return {type: UPDATE_CONTACT_FAILURE, error}
};

export const addContactRequest = () => {
    return {type: ADD_CONTACT_REQUEST}
};
export const addContactSuccess = () => {
    return {type: ADD_CONTACT_SUCCESS}
};
export const addContactFailure = error => {
    return {type: ADD_CONTACT_FAILURE, error}
};

export const deleteContactRequest = () => {
    return {type: DELETE_CONTACT_REQUEST}
};
export const deleteContactSuccess = (id) => {
    return {type: DELETE_CONTACT_SUCCESS, id}
};
export const deleteContactFailure = error => {
    return {type: DELETE_CONTACT_FAILURE, error}
};

export const addContact = (contactData, history) => {
    return (dispatch) => {
        dispatch(addContactRequest());
        API.addContact(contactData).then(() => {
            dispatch(addContactSuccess());
            alert('Вы успешно добавили контакт!');
            history.push('/');
        }, error => {
            dispatch(addContactFailure(error));
        });
    }
};

export const fetchContacts = () => {
    return (dispatch) => {
        dispatch(fetchContactsRequest());
        API.getContacts().then(response => {
            dispatch(fetchContactsSuccess(response.data));
        }, error => {
            dispatch(fetchContactsFailure(error));
        });
    }
};

export const fetchContact = (id) => {
    return (dispatch) => {
        dispatch(fetchContactRequest());
        API.getContact(id).then(response => {
            dispatch(fetchContactSuccess(response.data));
        }, error => {
            dispatch(fetchContactFailure(error));
        });
    }
};

export const updateContact = (id, contactData, history) => {
    return (dispatch) => {
        dispatch(updateContactRequest());
        API.updateContact(id, contactData).then(() => {
            dispatch(updateContactSuccess());
            history.push('/');
        }, error => {
            dispatch(updateContactFailure(error));
        });
    }
};

export const deleteContact = (id) => {
    return (dispatch) => {
        dispatch(deleteContactRequest());
        API.deleteContact(id).then(()=>{
            dispatch(deleteContactSuccess(id));
        }, error => {
            dispatch(deleteContactFailure(error));
        });
    }
};

export const showContact = (contactInfo) => {
    return {type: SHOW_CONTACT, contactInfo}
};

export const closeModal = () => {
    return {type: CLOSE_MODAL}
};