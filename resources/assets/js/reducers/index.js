import { combineReducers } from 'redux';
import { authentication } from './AuthenticationReducer';
import { registration } from './RegistrationReducer';
import { users } from './UsersReducer';
import { alert } from './AlertReducer';
import { cart } from './CartReducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  cart
});

export default rootReducer;