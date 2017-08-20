import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoAppReducers from './reducers';
import AppComponent from './components/AppComponent';
import './index.css';

const store = createStore(todoAppReducers);

render(<Provider store={store}>
          <AppComponent />
       </Provider>,
       document.getElementById('root')
);