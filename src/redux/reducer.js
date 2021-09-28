import {combineReducers} from 'redux';

const initialState = {
  name: 'Septian Wijaya',
};

const initialStateRegister = {
  title: 'Register Page',
  desc: 'Ini adalah decription untuk Register',
};

const initialStateLogin = {
  info: 'Email & Password must be entered',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

// const reducer = (state = initialState, action) => {
//   return state;
// };

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
