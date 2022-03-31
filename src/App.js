import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Sagas from "./redux/sagas";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux/reducers";

import MovieList from './pages/MovieList'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Sagas)

function App() {
  return (
      <Provider store={store}>
          <MovieList />
      </Provider>
  );
}

export default App;
