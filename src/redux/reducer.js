import {combineReducers} from 'redux';

const initialState = {
  name: 'Septian Wijaya',
};

const initialStateRegister = {
  title: 'Register Page',
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const initialStateLogin = {
  info: 'Email & Password must be entered',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type == 'SET_TITLE') {
    return {
      ...state,
      title: 'Register Ganti Title',
    };
  }
  if (action.type == 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
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
