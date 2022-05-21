import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./app/Components/Header/Header";
import styled from "styled-components";
import SideBar from "./app/Components/SideBar/SideBar";
import Chat from "./app/Components/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./app/Components/Login/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth)

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
        <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt=''/>
        <Spinner 
          name='folding-cube'
          color="purple"
          fadeIn="none"        
        />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
          <AppBody>
            <SideBar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  
  
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

> img {
    height: 100px;
    padding: 20px;
    margin-bottom: 30px;
}
`;
