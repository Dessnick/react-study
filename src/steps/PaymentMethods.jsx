import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaymentMethod } from '../redux/actions';

import RadioBlock from '../components/RadioBlock';

const payment = [
  { id: 'visa', name: 'Visa', img: 'https://js.checkout.com/framesv2/img/visa.svg' },
  {
    id: 'mastercard',
    name: 'Mastercard',
    img: 'https://js.checkout.com/framesv2/img/mastercard.svg',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/440px-PayPal_logo.svg.png',
  },
  { id: 'mir', name: 'МИР', img: 'https://ontehnik.ru/wp-content/uploads/Мир-логотип.png' },
];

const searchPayment = (arr, searchKey) => {
  return arr.find((obj) => obj.id === searchKey);
};

function PaymentMethods() {
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    const { value } = event.target;
    dispatch(setPaymentMethod(searchPayment(payment, value)));
  };

  const paymentMethod = useSelector(({ paymentMethod }) => paymentMethod);

  return (
    <div className="container">
      <label className="delivery-block">
        {payment.map((item) => (
          <div key={item.name} className="radio-block">
            <div className="radio-block__info">
              <span className="radio-block__label">
                <img src={item.img} alt={item.name} className="icon" />
                {item.name}
              </span>
            </div>
            <RadioBlock
              methodID={paymentMethod.id}
              handleChangeInput={handleChangeInput}
              itemId={item.id}
            />
          </div>
        ))}
      </label>
    </div>
  );
}

export default PaymentMethods;
