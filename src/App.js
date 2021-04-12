import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import ContactInfo from './steps/ContactInfo';
import DeliveryMethods from './steps/DeliveyMethods';
import PaymentMethods from './steps/PaymentMethods';
import SummaryInfo from './steps/SummaryInfo';

import { setNextStep, setBackStep, setSendData } from './redux/actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Contact info', 'Delivery method', 'Payment method', 'Summary info'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ContactInfo />;
    case 1:
      return <DeliveryMethods />;
    case 2:
      return <PaymentMethods />;
    case 3:
      return <SummaryInfo />;
    default:
      throw new Error('Unknown step');
  }
}

function App() {
  const dispatch = useDispatch();
  const { contactInfo, deliveryMethod, paymentMethod } = useSelector((state) => state);

  const classes = useStyles();

  const handleNext = () => {
    dispatch(setNextStep());
  };

  const handleBack = () => {
    dispatch(setBackStep());
  };

  const handleSendData = () => {
    dispatch(
      setSendData({
        firstName: contactInfo.firstName.trim(),
        lastName: contactInfo.lastName.trim(),
        country: contactInfo.country.trim(),
        city: contactInfo.city.trim(),
        phone: contactInfo.phone.trim(),
        deliveryMethod,
        paymentMethod,
      }),
    );
  };

  const activeStep = useSelector((state) => state.activeStep);
  console.log(activeStep);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? handleSendData : handleNext}
                    className={classes.button}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

export default App;
