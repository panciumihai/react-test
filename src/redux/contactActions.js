import {
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  LOAD_MORE_CONTACTS_FAILURE,
  LOAD_MORE_CONTACTS_REQUEST,
  LOAD_MORE_CONTACTS_SUCCESS,
  SET_ONLY_EVEN,
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

export const loadMoreContacts = (query) => {
  return (dispatch) => {
    dispatch(loadMoreContactsRequest());
    http
      .get(PATH, { params: { ...query } })
      .then((response) => {
        let contacts = [];
        for (const [key, value] of Object.entries(response.data.contacts)) {
          contacts.push(value);
        }
        dispatch(loadMoreContactsSuccess(contacts));
      })
      .catch((error) => {
        dispatch(loadMoreContactsFailure(error));
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

export const loadMoreContactsRequest = () => ({
  type: LOAD_MORE_CONTACTS_REQUEST,
});
export const loadMoreContactsSuccess = (contacts) => ({
  type: LOAD_MORE_CONTACTS_SUCCESS,
  payload: contacts,
});
export const loadMoreContactsFailure = (error) => ({
  type: LOAD_MORE_CONTACTS_FAILURE,
  payload: error,
});

export const setOnlyEven = (value) => ({
  type: SET_ONLY_EVEN,
  payload: value,
});
