import React from 'react';
import { Link } from 'react-router-dom';

function CreditManagement() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-sm-6">
            <p style={{marginLeft: "125px "}} ><div className="p-3 mb-2 bg-light text-dark"><h2>Subscription Plans </h2></div>
                    
            <div className="row">
                    <div className="col-sm-6"><div className="p-3 mb-2 bg-light text-dark">
                             <h4><b>Starter</b> </h4> <br/>
                              $0/Forever<br/>
                              (Best for SMS and Email campaigns)<br/>
                              -SMS<br/>
                              -Email<br/>
                              -Unlimited Contacts<br/>
                              -Unlimited Customer Segments<br/>
                              -Unlimited Personalized Content<br/>
                              -Unlimited Short URLs<br/>
                              -Unlimited SMS & Email Templates
                              <button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button> </div></div><br/>
                            


                    <div className="col-sm-6"><div className="p-3 mb-2 bg-light text-dark"> <h4><b>Growth</b> </h4> <br/>
                                $29/Monthly<br/>
                                (Best for automated/ triggered SMS and Email campaigns)<br/>
                                -All Starter features<br/>
                                -API Integrations<br/>
                                -Automated/ Triggered SMS & Emails<br/>
                                -Multiple Sender IDs / Mobile Numbers<br/>
                                -360° Customer Profile View<br/>
                                -Pigeon Forms<br/>
                                <button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></div></div><br/>
                               
                           </div>    

            
            
            </p>

           
              {/* <p style= {{marginLeft:"550px"  } ,{marginTop:"100px"}, {backgroundColor:"#"}}><h2>Welcome John Doe</h2> </p> */}
        
        
        
        </div> 
        
        <div className="col-sm-6">
        <p><div className="p-3 mb-2 bg-light text-dark">
                <h2>Buy SMS Packages  </h2> 
                <div className="table-responsive">
                          <table className="table " cellPadding="3px" cellSpacing="5px" >
                            <tr><tc><td><b>Bronze</b>:1000 SMS Credits</td></tc><tc><td>
                                <div class="form-group">
                               
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                                                      
                              </td></tc><tc><td></td></tc><tc><td>Total x</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>

                            <tr><tc><td><b>Silver</b>:5000 SMS Credits</td></tc><tc><td>
                              
                            <div class="form-group">
                               
                               <select class="form-control" id="exampleFormControlSelect1">
                               <option>0</option>
                                <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                               </select>
                             </div></td></tc><tc><td>Total $50</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>

                            <tr><tc><td><b>Gold</b>:10000 SMS Credits</td></tc><tc><td>
                                  <div class="form-group">
                                    
                                    <select class="form-control" id="exampleFormControlSelect1">
                                      <option>0</option>
                                      <option>1</option>

                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                              </td></tc><tc><td>Total $100</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>


                            <tr><tc><td><b>Platinum</b>:50000 SMS Credits</td></tc><tc><td>
                            <div class="form-group">
                               
                               <select class="form-control" id="exampleFormControlSelect1">
                                 <option>0</option>
                                 <option>1</option>

                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                               </select>
                             </div>
                              
                              
                              </td></tc><tc><td>Total $500</td></tc><tc><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></tc></tr>
                            
                          </table>
                  </div>
         



          </div></p>
        </div>
      
    </div>

    <div className="row"> 
      <div className="col-sm-6">
      <div><p style={{marginLeft: "125px "}} ><div className="p-3 mb-2 bg-light text-dark">
               <h2>Invoices</h2> <br/>
                <h6>
                  <table class= "table table-bordered"> <th>Created On</th><th>ID</th><th>Amount</th> <th>Status</th> <th>Method</th></table>
                     <tr></tr>
                     <tr></tr>
                     <tr></tr>
                
                
                </h6>
                
                      
            </div></p>
            
            </div>

      </div>
      
      
      
      <div className="col=sm-6">
      <p style={{marginLeft: "12px "}}><div className="p-3 mb-2 bg-light text-dark">
        <h2>Buy Email Packages </h2>
        <div className="table-responsive">
                          <table className="table " cellPadding="3px" cellSpacing="5px" >
                            <tr><tc><td><b>Bronze</b>:1000 Email Credits</td></tc><tc><td>
                                <div class="form-group">
                               
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                                                      
                              </td></tc><tc><td></td></tc><tc><td>Total x</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>

                            <tr><tc><td><b>Silver</b>:5000 Email Credits</td></tc><tc><td>
                              
                            <div class="form-group">
                               
                               <select class="form-control" id="exampleFormControlSelect1">
                               <option>0</option>
                                <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                               </select>
                             </div></td></tc><tc><td>Total $50</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>

                            <tr><tc><td><b>Gold</b>:10000 Email Credits</td></tc><tc><td>
                                  <div class="form-group">
                                    
                                    <select class="form-control" id="exampleFormControlSelect1">
                                      <option>0</option>
                                      <option>1</option>

                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                              </td></tc><tc><td>Total $100</td></tc><tc><td><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></td></tc></tr>


                            <tr><tc><td><b>Platinum</b>:50000 Email Credits</td></tc><tc><td>
                            <div class="form-group">
                               
                               <select class="form-control" id="exampleFormControlSelect1">
                                 <option>0</option>
                                 <option>1</option>

                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                               </select>
                             </div>
                              
                              
                              </td></tc><tc><td>Total $500</td></tc><tc><button><Link to={"/billing"} className="btn btn-primary">SELECT </Link></button></tc></tr>
                            
                          </table>
                  </div>
         



        
        
        
        
        
        </div></p>



      </div>

    </div>

  </div>
  )
}

export default CreditManagement;


