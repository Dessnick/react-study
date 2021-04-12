import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryMethod } from '../redux/actions';

import RadioBlock from '../components/RadioBlock';

const delivery = [
  {
    id: 'dhl',
    name: 'DHL',
    img: 'https://cdn.iconscout.com/icon/free/png-256/dhl-282165.png',
    terms: 'today',
  },
  {
    id: 'dpd',
    name: 'DPD',
    img: 'https://www.dpd.co.uk/content/about_dpd/press_centre/DPD_symbol_red_rgb.png',
    terms: '3 days',
  },
  {
    id: 'cdek',
    name: 'CDEK',
    img: 'https://static.tildacdn.com/tild3664-6633-4730-b231-623538313637/logo_1-p-1000.png',
    terms: '1-2 day',
  },
  {
    id: 'boxberry',
    name: 'Boxberry',
    img: 'https://zelenkarta.ru/wp-content/uploads/2020/04/boxberry.png',
    terms: 'today',
  },
];

const searchDelivery = (arr, searchKey) => {
  return arr.find((obj) => obj.id === searchKey);
};

function DeliveryMethods() {
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    const { value } = event.target;
    dispatch(setDeliveryMethod(searchDelivery(delivery, value)));
  };

  const deliveryMethod = useSelector(({ deliveryMethod }) => deliveryMethod);

  return (
    <div className="container">
      <label className="delivery-block">
        {delivery.map((item) => (
          <div key={item.name} className="radio-block">
            <div className="radio-block__info">
              <span className="radio-block__label">
                <img src={item.img} alt={item.name} className="icon" />
                {item.name}
              </span>
              <p className="radio-block__date">Shipment: {item.terms}</p>
            </div>
            <RadioBlock
              methodID={deliveryMethod.id}
              handleChangeInput={handleChangeInput}
              itemId={item.id}
            />
          </div>
        ))}
      </label>
    </div>
  );
}

export default DeliveryMethods;
