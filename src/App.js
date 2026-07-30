import React from "react";
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import News from "./components/Navar/News/News";
import Settings from "./components/Navar/Settings/Settings";
import Music from "./components/Navar/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import NavBar from "./components/Navar/NavBar";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./common/Preloader/Preloader";
import { useParams } from 'react-router-dom';
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/Suspense";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer") ) 
const DialogsContainer = React.lazy(() => import("./components/Navar/Dialogs/DialogsContainer") ) 


export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class App extends React.Component {
      componentDidMount() {
          this.props.initializeApp();
      }
      
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
   return(
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div class='app-wrapper-content'>
			<Routes>
				<Route path="/profile/:userId?" element ={
          withSuspense(ProfileContainer)}/>
				<Route path="/dialogs" element = {
          withSuspense(DialogsContainer)}/>
        <Route path="/users" element ={<UsersContainer/>}/>
        <Route path="/news" element = {<News />}/>
        <Route path="/music" element = {<Music />}/>
				<Route path="/settings" element = {<Settings />}/>
        <Route path="/login" element = {<LoginPage />}/>
			</Routes>
      </div>
    </div>
   );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
) (App);

const AppRoute = (props) =>{
  return(
      <BrowserRouter>
    <Provider store={store}>
    <AppContainer />
    </Provider>
    </BrowserRouter>
  )

}

export default AppRoute;
