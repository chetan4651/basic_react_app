import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './UserListPage.css';
import AddUser from '../AddUser/AddUserPage';
import axios from 'axios';

class UserListPage extends Component {
   state = { 
     redirectFlag : false,
     url:"",
     users:[],
     searchResult: [],
     searchKey:"",
     emptyTable:"No Records Found"
  };

  addNewUser = () =>{
     this.setState({redirectFlag:true, url:"/addUser"});
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;       
        this.setState({ users:persons });
    });
  }

  search = (e) =>{  
    var k1 = e.target.value.trim();
    var arr = [];
    if(k1.length > 0){
      this.setState({searchKey:k1});
      this.state.users.map((obj, i)=> (
        (obj.name.includes(k1) == true) ?  arr.push(obj) : ""       
      ));

      this.setState({searchResult:arr})
    }
    else{
      this.setState({searchKey:k1});
    }
  }

  render() {

    if(this.state.redirectFlag){
      return <Redirect to={this.state.url}/>;
    }

    return (

         <div className = "flex-container">

        <div className = "flex-box flex--space-between">
        <div className="flex-item1">
          <input type = "text" className="search_input" onKeyUp={this.search} placeholder="Search" autoFocus/> 
          <input type="button" onClick={this.addNewUser} value="Add New Record"/><br/>
          {/* <Link to="/addUser">Add User</Link> */}
        </div>
        <div className="flex-item2">
              <table>
                <thead>
                  <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.searchKey.length === 0 ? (this.state.users.length == 0) ? (<EmptyTableRow msg={this.state.emptyTable}/> ) : (this.state.users.map((obj, i) => (<TableRow key={i} data={obj} />))) :( ( this.state.searchResult.length == 0) ? (<EmptyTableRow msg={this.state.emptyTable}/> ) : this.state.searchResult.map((obj, i) => (<TableRow key={i} data={obj} />))) }
                </tbody>
              </table>
          </div>
          </div>
        </div>
      
    );
  }
}

const TableRow = props => {
  return (
      <tr>
          <td>{props.data.id}</td>
          <td>{props.data.name}</td>
          <td>{props.data.email}</td> 
          <td>{props.data.phone}</td>
          <td>{props.data.address.suite}, {props.data.address.street}, {props.data.address.city}</td>
      </tr>
  )
}

const EmptyTableRow = props => {
  return (
      <tr>
          <td colSpan="5"><center>{props.msg}</center></td>
      </tr>
  )
}

export default UserListPage;
