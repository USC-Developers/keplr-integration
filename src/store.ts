import { configureStore } from "@reduxjs/toolkit";
import {Global, global} from './state'


export interface ReduxState {
    global: Global
}


export default configureStore({
  reducer: {
    global: global.reducer
  },

});