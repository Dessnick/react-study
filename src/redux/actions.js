import axios from 'axios';

export const setIsDataSend = (payload) => ({
  type: 'SET_IS_DATA_SEND',
  payload,
});

export const setNextStep = () => ({
  type: 'SET_NEXT_STEP',
});

export const setBackStep = () => ({
  type: 'SET_BACK_STEP',
});

export const setSendData = (orderData) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SEND_DATA',
    });

    axios.post(`https://5c3755177820ff0014d92711.mockapi.io/orders`, orderData).then(({ data }) => {
      console.log(data);
      dispatch(setIsDataSend(data));
    });
  };
};

export const setContactInfo = (name, value) => ({
  type: 'SET_CONTACT_INFO',
  payload: {
    name,
    value,
  },
});

export const setDeliveryMethod = (value) => ({
  type: 'SET_DELIVERY_METHOD',
  payload: {
    value,
  },
});

export const setPaymentMethod = (value) => ({
  type: 'SET_PAYMENT_METHOD',
  payload: {
    value,
  },
});
