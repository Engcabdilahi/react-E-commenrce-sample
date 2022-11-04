import {configureStore} from '@reduxjs/toolkit'
import  counterSlice  from "./counterSlice";

const store = configureStore ({
    reducer:{
    data: counterSlice,
    },
    
});

export default store;