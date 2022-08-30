import {
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  LOAD_MORE_CONTACTS_FAILURE,
  LOAD_MORE_CONTACTS_REQUEST,
  LOAD_MORE_CONTACTS_SUCCESS,
} from './contactTypes';

const initialState = {
  contacts: [],
  onlyEven: false,
  currentPage: 1,
  loadingContacts: false,
  loadingMore: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loadingContacts: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loadingContacts: false,
        error: '',
        currentPage: 1,
        contacts: action.payload,
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loadingContacts: false,
        error: action.payload,
      };
    // LOAD MORE
    case LOAD_MORE_CONTACTS_REQUEST:
      return {
        ...state,
        loadingMore: true,
      };
    case LOAD_MORE_CONTACTS_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        error: '',
        contacts: [...state.contacts, action.payload],
        currentPage: state.currentPage + 1,
      };
    case LOAD_MORE_CONTACTS_FAILURE:
      return {
        ...state,
        loadingMore: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
