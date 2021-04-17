import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from './pages/ChatPage';
import Main from './pages/MainPage';

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/chat' component={Chat} />
        <Route path='/' exact component={Main} />
      </Router>
    </div>
  );
}

export default App;
