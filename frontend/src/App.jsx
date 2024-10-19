import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SocketProvider } from './context/SocketContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" component={Signup} />
            <Route path="/tasks" component={TaskBoard} />
          </Routes>
        </Router>
      </SocketProvider>
    </Provider>
  );
}

export default App;

{/* <Route path="/" exact component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/tasks" component={TaskBoard} /> */}