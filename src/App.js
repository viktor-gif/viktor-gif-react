import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/login";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" render={() => <LoginPage />} />
      </div>
    </div>
  );
};

export default App;
