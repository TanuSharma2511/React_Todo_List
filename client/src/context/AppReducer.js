export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        status: action.status
      }
      case 'VIEW_TODO':
        return {
          ...state,
          loading: false,
          todos: action.payload
        }
      case 'EDIT_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
          status:action.status
        }
      case 'TODO_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}