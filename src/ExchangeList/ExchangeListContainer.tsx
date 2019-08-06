import * as React from 'react';
import {connect} from 'react-redux';

import {stateApp} from '../redux/types';
import {companies} from '../redux/exchange/types';
import actionExchange from '../redux/exchange/actions';
import ExchangeItemComponent from '../ExchangeItem/ExchangeItemComponent';
import {CircularProgress} from '@material-ui/core';

import './ExchangeList.css';

interface Props {
  isLoading: boolean,
  companies: companies[],
  error: null | Error,
  actionExchange(url: string): typeof actionExchange
}


class ExchangeListContainer extends React.Component<Props, null> {
  componentDidMount() {
    const url: string = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo';
    this.props.actionExchange(url);
  }
  render() {
    const {companies, isLoading} = this.props;
    return(
      <div className='companies--container'>
        {
          isLoading
            ? <CircularProgress
                size={50}
                color='primary'
              />
            : companies.map(company =>
                <ExchangeItemComponent
                  key={company['1. symbol']}
                  company={company}
                />
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: stateApp) => ({
  isLoading: state.exchange.isLoading,
  companies: state.exchange.companies,
  error: state.exchange.error
});

const mapDispatchToProps = dispatch => ({
  actionExchange: (url: string) => dispatch(actionExchange(url))
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ExchangeListContainer);
