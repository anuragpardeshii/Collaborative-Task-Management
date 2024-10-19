// client/src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/TaskReducer';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export default store;
