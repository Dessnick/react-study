const initialState = {
  contactInfo: {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    phone: '',
  },
  activeStep: 0,
  deliveryMethod: {
    id: '',
    name: '',
    img: '',
    terms: '',
  },
  paymentMethod: '',
  isLoading: false,
  isDataSend: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEXT_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case 'SET_BACK_STEP':
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case 'SET_SEND_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_IS_DATA_SEND':
      console.log(state);
      return {
        ...state,
        isDataSend: true,
        isLoading: false,
        activeStep: 4,
      };
    case 'SET_CONTACT_INFO':
      return {
        ...state,
        contactInfo: {
          ...state.contactInfo,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SET_DELIVERY_METHOD':
      console.log(action);
      return {
        ...state,
        deliveryMethod: action.payload.value,
      };
    case 'SET_PAYMENT_METHOD':
      console.log(action);
      return {
        ...state,
        paymentMethod: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
