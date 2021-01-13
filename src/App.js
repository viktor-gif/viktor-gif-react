import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader/Preloader";
// import DialogsContainer from "./components/dialogs/DialogsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/login";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import WithSuspense from "./components/common/hoc/WithSuspense";
const DialogsContainer = React.lazy(() =>
  import("./components/dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={WithSuspense(DialogsContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const ViktorGifApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default ViktorGifApp;
//git-test
