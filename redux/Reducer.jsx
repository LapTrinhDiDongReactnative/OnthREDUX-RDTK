import * as Types from './Constants.jsx'

function pjReducer(state = { result: 0 }, action) {
  switch (action.type) {
    case Types.ACTION1:
      return { result: state.result + action.payload }
    case Types.ACTION2:
      return { result: state.result - action.payload }
    case Types.ACTION3:
      return { result: state.result * action.payload }
    case Types.ACTION4:
      return { result: state.result / action.payload }
    default:
      return state
  }
}

export default pjReducer
