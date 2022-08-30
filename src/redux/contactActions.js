import {
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from './contactTypes';
import http from '../api/index';

const PATH = '/contacts.json?companyId=171';

export const fetchContacts = (query) => {
  return (dispatch) => {
    dispatch(fetchContactsRequest());
    http
      .get(PATH, { params: { ...query } })
      .then((response) => {
        let contacts = [];
        for (const [key, value] of Object.entries(response.data.contacts)) {
          contacts.push(value);
        }
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((error) => {
        dispatch(fetchContactsFailure(error));
      });
  };
};

export const fetchContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});
