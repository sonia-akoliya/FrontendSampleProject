// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/login';
import WelcomePage from './Login/welcome'; 
import createStore from './createStore';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
