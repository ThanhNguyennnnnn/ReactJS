import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import userReducer from "./userReducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import adminReducer from './adminReducer'
// Moi reducer se dai dien cho mot chuc nang 
// Vi du them sua xoa nguoi dung thanh cong thi lam trong file userReducer
// rootReducer gop tat ca cac reducer conn vao day
// De cho redux hieu dc tat ca reducer thi ta se dat vao 1 file chung
// la rootReducer

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};


const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};

const appPersistConfig = {
    ...persistCommonConfig,
    key: 'app',
    whitelist: ['language']
};


export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    app: persistReducer(appPersistConfig, appReducer),
    // dung de choc. den state cua redux thong qua key admin, user, app
    admin: adminReducer
})