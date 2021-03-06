import {
    CLOSE_MODAL,
    SHOW_CONTACT,
    FETCH_CONTACT_FAILURE,
    FETCH_CONTACT_REQUEST,
    FETCH_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
} from "./actions/actionTypes";

const initialState = {
    contacts: null,
    loading: false,
    isActiveModal: false,
    error: null,
    contact: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
        case FETCH_CONTACT_REQUEST:
        case DELETE_CONTACT_REQUEST:
            return {...state, loading: true};

        case FETCH_CONTACTS_FAILURE:
        case FETCH_CONTACT_FAILURE:
        case DELETE_CONTACT_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.contacts};
        case FETCH_CONTACT_SUCCESS:
            return {...state, loading: false, contact: action.contact};
        case DELETE_CONTACT_SUCCESS:
            const contacts = {...state.contacts};
            delete contacts[action.id];
            return {
                ...state,
                contacts,
                loading: false,
                isActiveModal: false,
                contact: null
            };
        case SHOW_CONTACT:
            const contact = {...action.contactInfo.contact, id: action.contactInfo.id};
            return {...state, contact, isActiveModal: true};
        case CLOSE_MODAL:
            return {...state, isActiveModal: false, contact: null};
        default:
            return state;
    }
};

export default reducer;