import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';
import AppRouter from './config/router';

// import { PersistGate } from 'redux-persist/integration/react'
// import configStore from './store';


function App() {
  
  return (
    // <Provider store={store} >
    <AppRouter></AppRouter>
    // </Provider>
  //    <Provider store={store}>
  //    <PersistGate loading={null} persistor={persistor}>
  //    <AppRouter></AppRouter>
  //    </PersistGate>
  //  </Provider>
  );
}

export default App;
