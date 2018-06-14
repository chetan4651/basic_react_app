import React, { Component } from 'react';
import './AddUserPage.css';
import { BrowserRouter as Router, Route,  Redirect } from "react-router-dom";
import InputBox from '../../components/InputBox/Inputbox';


class AddUserPage extends Component {
  
  state = {
    redirectHome : false,
    url : "",
    shouldAddFormSubmit:false
  }
  
  home=  ()=>{
    this.setState({redirectHome:true,url:"/"})
  }

  formValidation = () =>{
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var phone = document.getElementById("phone").value;
      var address = document.getElementById("address").value.trim();
      var nameFlag=false, emailFlag=false,addressFlag=false, phoneFlag=false;
      
      if(name.length > 0)
      {
        if(name.match(/[a-bA-Z_]+[0-9 ]*$/i)){
          document.getElementById("nameError").style.display = "none";
          nameFlag = true;
        }
        else{
          document.getElementById("nameError").style.display = "block";
        }
      }
      else{
        document.getElementById("nameError").style.display = "block";
      }
  
        if(email.length > 0)
        {
          if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            emailFlag=true;
            document.getElementById("emailError").style.display = "none";
          }
          else{
            document.getElementById("emailError").style.display = "block";
          }
        }
        else{
          document.getElementById("emailError").style.display = "block";
        }

        if(phone.length > 0){
          document.getElementById("phoneError").style.display = "none";
          phoneFlag = true;
        }
        else{
          document.getElementById("phoneError").style.display = "block";
        }

      if(address.length > 0){
        addressFlag = true;
        document.getElementById("addressError").style.display = "none";
      }
      else{
        document.getElementById("addressError").style.display = "block";
      }


      if(nameFlag && emailFlag && phoneFlag && addressFlag){
        return true;
      }
      else 
        return false;
  }

  onSubmitForm = (e) =>{
      var isSubmit = this.formValidation();

      if(isSubmit)
        this.setState({shouldAddFormSubmit:true, url:"/"}); 
      else
      {
        e.preventDefault();  
        this.setState({shouldAddFormSubmit:false});    
      }
  }

  render() {

    if(this.state.redirectHome){
      return <Redirect to={this.state.url}/>;
    }

    if(this.state.shouldAddFormSubmit){
      alert("User Added Successfully");
      return <Redirect to={this.state.url}/>;
    }

    return (
      <div className = "MainPage">
            <div className = "flex-container">
                <h3>Add New User</h3>
                   <div className="container">
                      <form type="POST" onSubmit={this.onSubmitForm}>
                        <div className="row">
                            <div className="col-25">
                                <label>Name</label>
                            </div>
                            <div className="col-75">
                              <InputBox type="text" value="" id="name" placeholderValue="Your name.." autofocus/>
                              <p className="error" id="nameError">Name is required</p>
                            </div>
                        </div>                    
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <InputBox type="text" value="" id="email" placeholderValue="Your email.."/>
                                <p className="error" id="emailError">Email is required</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label >Phone</label>
                            </div>
                            <div className="col-75">
                              <InputBox type="number" value="" id="phone" placeholderValue="Your phone.."/>
                              <p className="error" id="phoneError">Phone is required</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Address</label>
                            </div>
                            <div className="col-75">
                                <textarea id="address" cols="7" rows="5" placeholder="Enter address.."></textarea>
                                <p className="error" id="addressError">Address is required</p>
                            </div>
                        </div>
                        <div className="row">
                            <input type="button" className="btn_home" onClick={this.home} value="Close"/><br/>
                            <input type="submit" id="submit" value="submit" />                            
                        </div>
                    </form>
                  </div>
                
            </div>
      </div>
    );
  }
}

export default AddUserPage;
