import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header';
import UserList from '../UserList/UserListPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from '../AddUser/AddUserPage';

class MainPage extends Component {
  render() {
    return (
      <div className = "MainPage">
          <Header />
          <Router>
              <div className="routingDiv">
                <Route exact path="/" component={UserList} />
                <Route path="/addUser" component={AddUser} />
              </div>
          </Router>          
      </div>
    );
  }
}

export default MainPage;
