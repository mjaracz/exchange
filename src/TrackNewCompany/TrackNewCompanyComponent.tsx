import * as React from 'react';
import {TextField} from "@material-ui/core";

import './TrackNewCompany.css';

const TrackNewCompanyComponent = () => {
  return(
    <div className="form">
      <TextField
        className="form__textField"
        label="symbol of company"
        type="email"
        name="symbol"
        margin="normal"
        variant="outlined"
      />
    </div>
  )
};

export default TrackNewCompanyComponent;
