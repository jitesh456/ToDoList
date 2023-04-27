export const SET_LIST_DATA="set List Data";

export const SET_COUNTER="set counter";


export const setListData=(data)=>{
    return {
        type:SET_LIST_DATA,
        value:data
    }
}

export const setCounter=(data)=>{
    return{
        type:SET_COUNTER,
        value:data
    }
}