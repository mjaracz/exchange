import React, {Component} from 'react';
import './App.css';

import ExchangeListContainer from './ExchangeList/ExchangeListContainer';
import HeaderComponent from './Header/HeaderComponent';
import TrackNewCompanyComponent from './TrackNewCompany/TrackNewCompanyComponent';

class App extends Component  {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <TrackNewCompanyComponent/>
        <ExchangeListContainer/>
      </div>
    );
  }
}

export default App;
