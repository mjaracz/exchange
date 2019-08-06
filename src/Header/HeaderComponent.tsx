import React, {Component} from 'react';
import './Header.css';

import {connect} from 'react-redux';
import {stateApp} from '../redux/types';

import {brand} from '../redux/brand/types';
import actionBrand from '../redux/brand/actions';

type Props = {
  isLoading: boolean,
  brands: brand[],
  error: Error,
  actionBrand(url: string): typeof actionBrand
}

class HeaderContainer extends Component<Props> {
  componentDidMount() {
    const url: string = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=Alphabet';
    this.props.actionBrand(url);
  }
  render() {
    const {brands} = this.props;
    console.log(brands);
    return(
      <div className='header'>
        <div className='header__logo'>
          {}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: stateApp) => ({
  isLoading: state.brand.isLoading,
  brands: state.brand.brands,
  error: state.brand.error
});

const mapDispatchToProps = dispatch => ({
  actionBrand: (url: string) => dispatch(actionBrand(url))
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
