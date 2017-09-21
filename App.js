import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './store/rootReducer';
import PlanningPoker from './src/PlanningPoker';

const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    composeWithDevTools(middleware),
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PlanningPoker />
            </Provider>
        );
    }
};
