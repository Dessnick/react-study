import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { setContactInfo } from '../redux/actions';

function ContactInfo() {
  const dispatch = useDispatch();
  const contactInfo = useSelector(({ contactInfo }) => contactInfo);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    dispatch(setContactInfo(name, value));
  };

  const { firstName, lastName, country, city, phone } = contactInfo;

  return (
    <div className="container">
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Contact info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              value={firstName}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              value={lastName}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              value={city}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              value={country}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Telephone"
              fullWidth
              value={phone}
              onChange={handleChangeInput}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default ContactInfo;
