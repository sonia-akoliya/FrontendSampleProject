// App.js

import React from 'react';
import { Provider } from 'react-redux';
import Login from './Login/login';
import createStore from './createStore';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
