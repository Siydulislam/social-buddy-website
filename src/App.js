import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Comments from './components/Comments/Comments';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Post></Post>
        </Route>
        <Route path="/posts/:postId">
            <Comments></Comments>
          </Route>
        <Route exact path="/">
          <Post></Post>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
