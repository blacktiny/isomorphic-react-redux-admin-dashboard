import actions from './actions';

const initState = {
  isLoading: false,
  errorMessage: false,
  investors: {},
  modalActive: false,
  investor: {
    key: null,
    id: new Date().getTime(),
    name: '',
    company_name: '',
    job_title: '',
    investment_count: null,
    exists_count: null,
    location: '',
    deleted_at: null, // soft delete
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LOAD_FROM_FIRESTORE:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case actions.LOAD_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        investors: payload.data,
        errorMessage: false,
      };
    case actions.LOAD_FROM_FIRESTORE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'There is a loading problem',
      };
    case actions.TOGGLE_FIRESTORE_HANDLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
        investor: payload.data == null ? initState.investor : payload.data,
      };
    case actions.FIRESTORE_UPDATE:
      return {
        ...state,
        investor: payload.data,
      };
    case actions.RESET_FIRESTORE_DOCUMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'There is a loading problem',
      };
    default:
      return state;
  }
}
