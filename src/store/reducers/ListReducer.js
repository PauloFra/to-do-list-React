const INITIAL_STATE = {
    list:[],
    modal:false
}

function listReducer(state = INITIAL_STATE , action) {
   if(action.type === 'SET_LIST') {
       return{
           ...state,
           list:action.list
       }
    } 
    if(action.type === 'SET_MODAL') {
        return{
            ...state,
            modal:action.modal
        }
     } 
     
  return state
}

export default listReducer