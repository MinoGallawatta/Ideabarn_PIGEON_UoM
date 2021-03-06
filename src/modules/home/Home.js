import React from 'react'
import CustomButton from '../../components/sharedComponents/CustomButton';
import "./Home.scss"
import { Avatar, Grid, Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "@fontsource/roboto"

const Home =  () => {
    return (
        
        <div className="d-flex justify-content-center mt-5"> 
          <Grid item container xs={12} justify="center">
                <Grid item xs ={4}>
                <Typography variant="h1" component="h1">
                    Send a Pigeon to anywhere! 
                </Typography>
                </Grid>
                
                <Grid item xs={5} >
                    <center><img class="fit" src ="/img.png"/></center>
                    <a href = "/login"> <CustomButton style={{height: 4.5+ 'em'}} label="Get Started" to="/login" variant="contained" fullWidth /></a>
                </Grid>
                <Grid item xs={3} sm = {3} className= "m-2" >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Have Virtual Customers?
                            </Typography>
                            
                            
                            <Typography variant="h5" component="h2">
                                Send an Email!
                            </Typography>
                        
                             
                        
                            <Typography variant="body2" component="p">
                                Send a bulk of emails to your customer base with one click <br/>
                            </Typography>
                        </CardContent>
                        
                        <CardActions>
                        <a href = "/login"> <Button to ="/login" size="small">Get Started</Button></a>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs ={3} sm={3} className= "m-2"> 
                <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Wanna text your employees?
                            </Typography>
                            
                            
                            <Typography variant="h5" component="h2">
                                Send a Message!
                            </Typography>
                        
                             
                        
                            <Typography variant="body2" component="p">
                                Send a bulk of messages to your employees with one click <br/>
                            </Typography>
                        </CardContent>
                        
                        <CardActions>
                        <a href = "/login"> <Button to ="/login" size="small">Get Started</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs ={3} sm={3} className= "m-2"> 
                <Card variant="outlined">
                        <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                                Wanna analyse your reach?
                            </Typography>
                            
                            
                            <Typography variant="h5" component="h2">
                                Use the analysis tool
                            </Typography>
                        
                
                            <Typography variant="body2" component="p">
                                Analise the reach of your emails in one place <br/>
                            </Typography>
                        </CardContent>
                        
                        <CardActions>
                        <a href = "/login"> <Button to ="/login" size="small">Get Started</Button></a>
                        </CardActions>
                    </Card>
                </Grid> 

            </Grid>
           
            
        </div>
    );
}
export default Home;
