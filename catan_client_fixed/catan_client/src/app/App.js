import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

import LoadingIndicator from '../common/LoadingIndicator';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';

import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import MainMenu from '../user/mainmenu/MainMenu';
import GameList from '../user/gamelist/GameList';
import Settings from '../user/settings/Settings';

import CreateGame from '../game/creategame/CreateGame';
import GameBoard from '../game/gameboard/GameBoard';

import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      duration: 2,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    console.log("logging out");
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Catan App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Polling App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

    render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <div>
        <Switch>    
        <Route exact path="/" 
          render={(props) => <MainMenu isAuthenticated={this.state.isAuthenticated} 
              currentUser={this.state.currentUser} onLogout={this.handleLogout} {...props} />}>
        </Route>                   
        <Route path="/login" 
            render={(props) => <Login onLogin={this.handleLogin} {...props} />}>
        </Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/users/:username" 
          render={(props) => <Profile 
            isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} {...props}  />}>
        </Route>
        <Route path="/gamelist/:userid"
          render={(props) => <GameList
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />}>
        </Route>
        <Route path="/gameboardtest"
          render={(props) => <GameBoard
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />}>
        </Route>
        <Route path="/game/:gameid"
          render={(props) => <GameBoard
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />}>
        </Route>
        <Route path="/newgame"
          render={(props) => <CreateGame 
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />}>
        </Route>
        <Route path="/settings"
          render={(props) => <Settings
            isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser} {...props} />}>
        </Route>
        <Route path="/playground">
          <GameBoard />
        </Route>
        <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
