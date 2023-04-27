import {SET_COUNTER, SET_LIST_DATA} from './Action.js'
const initializeState={
    iteam:[],
    counter:0
}

const ToDoReducer=(state=initializeState,action)=>{

    switch(action.type){
        case SET_LIST_DATA: return{
            ...state,
            iteam:action.value
        }
        case SET_COUNTER:return{
            ...state,
            counter:action.value
        }
        default: return state;
    }
}
export default ToDoReducer