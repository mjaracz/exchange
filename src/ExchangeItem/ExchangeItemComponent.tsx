import * as React from 'react';
import {companies} from '../redux/exchange/types';
import './ExchangeItem.css';

interface Props {
  company: companies
}

const ExchangeItemComponent = (props: Props) => {
  const {company} = props;
  return(
    <div className='companies__item'>
      <div className='item item__image'>
        Image
      </div>
      <span className='item item__name'>{company['2. name']}</span>
      <span className='item item__symbol'>{company['1. symbol']}</span>
      <span className='item item__currency'>{company['8. currency']}</span>
      <span className='item item__matchScore'>{company['9. matchScore']}</span>
    </div>
  )
};

export default ExchangeItemComponent;
