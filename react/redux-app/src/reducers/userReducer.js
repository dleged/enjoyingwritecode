import { UPDATE_USER } from '../action/userAction'
export default function userReducer(state = '',{type,payload}){
  switch (type) {
    case UPDATE_USER:
      return payload
      break;
    default:
      return state;
  }
  return state;
}
