import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AlarmIcon from '@material-ui/icons/Alarm';
import ReplayIcon from '@material-ui/icons/Replay';
import "./Campaign.css"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import EmailIcon from '@material-ui/icons/Email';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import CropOriginalRoundedIcon from '@material-ui/icons/CropOriginalRounded';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


  

function getSteps() {
  return ['SELECT', 'CONFIGURE', 'SETTINGS', 'MESSAGE', 'CREATE'];
}

function getStepContent(stepIndex) {


  switch (stepIndex) {
    case 0:
      return (
        <form>
          <Grid container justify="center">
            <Grid container justify="center" xs={12}>
              <TextField id="standard-basic" label="Type the Campaign Name" /></Grid>
            <div className="campaignType-button">
              <Box m={2} pt={3}>
                <Grid container justify="center" xs={12}>
                  <Grid container justify="center" xs={6}>
                    <Button
                      variant="contained"
                      color="secondary"
                      //className={classes.button}
                      startIcon={<AlarmIcon />}
                    >
                      Broadcast Campaing
      </Button></Grid>
                  <Grid container justify="center" xs={6}>
                    <Button
                      variant="contained"
                      color="secondary"
                      //className={classes.button}
                      startIcon={<ReplayIcon />}
                    >
                      Trigger Campaing
      </Button></Grid><br />

                </Grid></Box></div><br />
            <form>
              <Box m={2} pt={3}>
                <Grid container justify="center" xs={12}>
                  <TextField
                    id="datetime-local"
                    label="Campaign Time to Launch"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    // className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  /></Grid></Box></form>

            <InputLabel id="demo-simple-select-label">Select an event you want to trigger</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

            >
              <MenuItem value={10}>Christmas wish</MenuItem>
              <MenuItem value={20}>Promotions on tuesday</MenuItem>
              <MenuItem value={30}>Sales on New Year</MenuItem>
            </Select>
          </Grid>

        </form>
      );
    case 1:
      return (
        <Grid container justify="center" xs={12} >

          <FormControl component="fieldset">
            <FormLabel component="legend" >Select the customers</FormLabel>
            <RadioGroup aria-label="customers" name="customers" >
              <FormControlLabel value="all" control={<Radio />} label="All the customers" />
              <FormControlLabel value="filterring" control={<Radio />} label="Filter the customers" />
              <FormControlLabel value="importing" control={<Radio />} label="Import the customers through CSV file/Excel file" />
              <Box m={2} pt={2} pb={2}>
                <input accept="text/csv, application/csv, text/comma-separated-values, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,.xls,.xlsx" type="file" autocomplete="off" tabindex="-1" ></input>
              </Box>
            </RadioGroup>
          </FormControl>
        </Grid>
      );
    case 2:
      return (
        <form>

          <Grid container justify="center" xs={12} >
            <FormLabel>Select the Channel Type</FormLabel></Grid>
          <Box m={2} pt={3}>
            <Grid container justify="center" xs={12} spacing={2}>
              <Grid container justify="center" xs={6} >
                <Button
                  variant="contained"
                  color="primary"
                  //className={classes.button}
                  startIcon={<TextsmsOutlinedIcon />}
                >
                  SMS
                   
      </Button></Grid>
              <Grid container justify="center" xs={6} >
                <Button
                  variant="contained"
                  color="primary"
                  //className={classes.button}
                  startIcon={<EmailIcon />}
                >
                  Email
      </Button></Grid><br />
            </Grid>
          </Box>


          <Grid container justify="center" xs={12}  >
            <Box m={2} pt={3}>

              <InputLabel id="demo-simple-select-label">SenderID</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

              >
                <MenuItem value={10}>DialogBB</MenuItem>
                <MenuItem value={20}>DialogBills</MenuItem>
                <MenuItem value={30}>Dialog-Star-Points</MenuItem>
              </Select>
            </Box></Grid>

        </form>
      );

    case 3:
      return (
        <form>
          <Grid container justify="center" xs={12} >
            <Box m={2} pt={3} pb={3}>
              <TextareaAutosize id="time" type="text" placeholder="Start creating the message here..." /></Box>
            <Grid container xs={12} justify="center" >
              <Grid container xs={3} justify="center" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  //className={classes.button}
                  startIcon={<SentimentSatisfiedRoundedIcon />}
                >
                  Emoji
      </Button></Grid>
              <Grid container xs={3} justify="center" spacing={2}><Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<CropOriginalRoundedIcon />}
              >
                Template
      </Button></Grid>
              <Grid container xs={3} justify="center" spacing={2}><Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<BackspaceOutlinedIcon />}
              >
                CLEAR
      </Button></Grid>
              <Grid container xs={3} justify="center" spacing={2}><Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<PageviewOutlinedIcon />}
              >
                View Sample
      </Button></Grid>
            </Grid>

          </Grid>
        </form>
      );


    case 4:
      return (
        <form>
          <Grid container xs={12} justify="center">
            <Typography variant="h5" gutterBottom>
              Campaign Name
      </Typography>
            <Typography variant="h5" gutterBottom>
              Channel
      </Typography>
            <Typography variant="h5" gutterBottom>
              SenderID
      </Typography>
            <Typography variant="h5" gutterBottom>
              Selected customers
      </Typography>
            <Typography variant="h5" gutterBottom>
              Launch on
      </Typography>
          </Grid>

          <Grid container xs={12} justify="center" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendOutlinedIcon />}
            >
              Send
      </Button></Grid>
        </form>
      );
    default:
      return 'Unknown step';
  }

}
export default function HorizontalLabelPositionBelowStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className={classes.root}>
      <h4>Create Camapign</h4>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
