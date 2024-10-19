import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/TaskReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        users: userReducer,
    },
});

export default store;
